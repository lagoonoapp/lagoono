import React, { lazy, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { Alert, Avatar, Breadcrumb, Button, Card, Checkbox, Col, Divider, Form, Input, List, Modal, notification, Row, Space, Tabs, 
                theme, Tooltip } from 'antd';
import DOMPurify from 'dompurify';
import {  CaretDownOutlined, CaretUpOutlined, DeleteOutlined, DislikeOutlined, EditOutlined, LikeOutlined, LockFilled,
        MessageOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';

import axios from 'axios';
const dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';
import { commonFunctions } from '@src/utils/commonFunctions';

import { Container } from '@src/components/ui/Container';
import { InfoIcon } from '@src/components/ui/InfoIcon';
import { Loader } from '@src/components/ui/Loader';
import VoteWidget from '@src/components/dashboard/feedback/VoteWidget';
import CommentEditor from '@src/components/dashboard/feedback/CommentEditor';
import { boardData } from './boardData';

const PostView = (props)=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postLoading, setPostLoading] = useState(true);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [post, setPost] = useState({user: {}, progress_status: 'new'});
    const [comments, setComments] = useImmer([]);
    const [showCommentEditor, setShowCommentEditor] = useState(false);
    const [currentCommentEditorUnderId, setCurrentCommentEditorUnderId] = useState(0); // Which comment the editor is show under.
    const [currentCommentId, setCurrentCommentId] = useState(0);
    const [currentParentCommentId, setCurrentParentCommentId] = useState(0);
    const [currentCommentText, setCurrentCommentText] = useState('');
    const [canEdit, setCanEdit] = useState(false);
    const prevPost = useRef();
    const notify = useSelector((state) => state.notify);
    const {token: { colorPrimary, colorTextLabel }} = theme.useToken();
    const params = useParams();
    const accountData = useSelector((state) => state.accountData || {}); 
    const [currentImageSrc, setCurrentImageSrc] = useState('');
    const [modal, contextHolder] = Modal.useModal();
    const [showImageModal, setShowImageModal] = useState(false);
    const [newCommentFlag, setNewCommentFlag] = useState(false);

    const breadcrumbData = [
        {title: <Link to={`/dashboard/feedback`} title="Project settings">Feedback board</Link>},
        {title: post.title || 'No name post'}
    ];

    useEffect(() => {
        loadInitialData();
        loadComments();
    }, []);

    const addClickHandlersToImages = ()=>{
        const postContainer = document.getElementById('post-view-container');
        if (postContainer){
            const images = postContainer.getElementsByTagName('img');
            for (const image of images){
                image.addEventListener('click', function(){
                    console.log(image.src)
                    setCurrentImageSrc(image.src);
                    setShowImageModal(true);
                });
            }
        }
    };

    const loadInitialData = async()=>{
        try {
            let response = await axios.get(`/api/app/feedbackboard/post/view/${params.postShortId}/${params.postSlug}`);
            setPostLoading(false);
            if (response.data.result && response.data.item){
                setPost(response.data.item);
                setCanEdit(response.data.can_edit);
                //form.setFieldsValue(response.data.result.item);
            } else {
                navigate('/dashboard/feedback', {replace: true}); 
                notify.show('error', response.data.error || 'Some error occured during loading the post... please try again.');
            }
        } catch(err) {
            setPostLoading(false);
            console.log(err)
            notify.show('error', 'Some error occured during loading the post... please try again.');
        }
    }
    const loadComments = async()=>{
        try {
            let response = await axios.get(`/api/app/feedbackboard/post/comments/${params.postShortId}`);
            setCommentsLoading(false);
            if (response.data.result && response.data.list != null){
                setComments(draft=>draft = response.data.list);
            } else {
                notify.show('error', response.data.error || 'Some error occured during loading the comments... please try again.');
            }
            //setTimeout(()=>{addClickHandlersToImages()}, 3000);
        } catch(err) {
            setPostLoading(false);
            console.log(err)
            notify.show('error', 'Some error occured during loading the post comments... please try again.');
        }
    }
    const removeCommentFromDB = async(commentId)=>{
        try {
            let response = await axios.delete(`/api/app/feedbackboard/post/comment`, {data: {id: commentId}});
            if (response.data.result){
                notify.show('success', 'The comment was deleted successfully!', 'commentDelete', 15);
            } else {
                notify.show('error', response.data.error || 'Some error occured during loading the comments... please try again.');
            }
            //setTimeout(()=>{addClickHandlersToImages()}, 3000);
        } catch(err) {
            setPostLoading(false);
            console.log(err)
            notify.show('error', 'Some error occured during loading the post comments... please try again.');
        }
    }
    const showCommentEditorFlag = (commentEditorId, commentId, parentCommentId, commentText)=>{
        setCurrentCommentEditorUnderId(commentEditorId);
        setCurrentCommentId(commentId);
        setCurrentParentCommentId(parentCommentId);
        setCurrentCommentText(commentText);
        setShowCommentEditor(true);
        if (!commentId){
            setNewCommentFlag(true);
        }
    };
    ////@@ Critical for keeping the content
    const updateCurrentComment = (text)=>{
        setCurrentCommentText(text);
    };
    ////@@
    const updateComment = (commentData, closeCommentEditor)=>{
        setComments(draft=> {
            if (commentData.parentCommentId){
                const parentComment = commonFunctions.findInnerObjectInImmerArray(draft, 'id', commentData.parentCommentId, 'children_comments');
                if (parentComment){
                    if (commentData.new){
                        parentComment.children_comments = parentComment.children_comments || [];
                        parentComment.children_comments.unshift({id: commentData.id, 
                                                                text: commentData.text, 
                                                                user: {
                                                                    username: accountData.username,
                                                                    userpic_url: accountData.userpic_url
                                                                },
                                                                created: 'Now',
                                                                can_edit: true,
                                                                parent_comment_id: commentData.parentCommentId});
                    } else {
                        const existingComment = commonFunctions.findInnerObjectInImmerArray(parentComment, 'id', commentData.id, 'children_comments');
                        if (existingComment){
                            existingComment.text = commentData.text;
                        }
                    }
                }
            } else {
                const comment = draft.find(c=>c.id == commentData.id);
                if (comment){
                    comment.text = commentData.text;
                } else {
                    // New root comment
                    const enrichedComment = {...commentData, 
                        ...{user: {
                            username: accountData.username,
                            userpic_url: accountData.userpic_url
                        }, created: 'Now'}};
                    draft.unshift(enrichedComment);
                }
            }
        });
        if (closeCommentEditor){
            setShowCommentEditor(false);
        }
    };
    const removeComment = (commentId, parentCommentId)=>{
        setComments(draft=> {
            let commentList = null;
            if (parentCommentId){
                const parentComment = commonFunctions.findInnerObjectInImmerArray(draft, 'id', parentCommentId, 'children_comments');
                if (parentComment){
                    commentList = parentComment.children_comments;
                }
            } else {
                commentList = draft;
            }
            if (!commentList){
                return; // No parent comment/list found ??
            }
            const index = commentList.findIndex(comment => comment.id === commentId);
            if (index !== -1) {
                commentList.splice(index, 1);
                // Remove from the database
                removeCommentFromDB(commentId);
            }
        });
    };
    /*const nestedCommentRender = (comment)=>{
        return commentRender(comment)
    };*/
    const contentClicked = (e)=>{
        console.log(e)
        if (e.target.tagName.toLowerCase() == 'img'){
            setCurrentImageSrc(e.target.src);
            setShowImageModal(true);
        }
    };
    const cancelEditing = ()=>{
        setCurrentCommentId(0);
        setShowCommentEditor(false);
    };
    const CommentComponent = ({ data, level }) => {
        level = level || 1;
        return (
          <div style={level >= 5 ? { paddingLeft: "0px" }: { paddingLeft: "40px" }}>
            {data.map((comment) => {
              return (
                <div key={comment.id} className="comment">
                    <div className="d-flex align-items-center" id={comment.short_id}>
                        {comment.user.userpic_url ? <Avatar src={comment.user.userpic_url} className="mr-10" />:<Avatar icon={<UserOutlined />} className="mr-10" />} 
                        <span className="username">{comment.user.username}</span>&nbsp;&nbsp;•&nbsp;&nbsp;
                        <span className="date">{dayjs.utc(comment.created).local().format('MMMM D YYYY HH:mm')}</span>
                    </div>
                    <div className="content">
                        {showCommentEditor && currentCommentEditorUnderId == comment.id ? 
                            <>
                            {newCommentFlag ?
                                        <div onClick={contentClicked} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.text) }} 
                                            style={{paddingLeft: (comment.level || 0)*40}} />:
                                    null}
                            <CommentEditor 
                                postId={post.id} 
                                updateComment={updateComment} 
                                id={currentCommentId} 
                                parentCommentId={currentParentCommentId}
                                text={currentCommentText}
                                onChange={updateCurrentComment}
                                cancelEdit={cancelEditing} /></>: 
                                <>
                                    <div onClick={contentClicked} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.text) }} 
                                            style={{paddingLeft: (comment.level || 0)*40}} />
                                    <div className="d-flex justify-content-between">
                                        <div className="d-inline">
                                            <a className="reply-block"  onClick={()=>{showCommentEditorFlag(comment.id, null, comment.id, '')}}><MessageOutlined/>
                                                Reply
                                            </a>
                                            {comment.can_edit ? 
                                                <a className="reply-block"
                                                    onClick={()=>{showCommentEditorFlag(comment.id, comment.id, comment.parent_comment_id, comment.text)}}>
                                                    <EditOutlined/>
                                                    Edit
                                                </a>: null
                                            }
                                        </div>
                                        {comment.can_edit ? 
                                            <a className="reply-block danger"
                                                onClick={()=>{removeComment(comment.id, comment.parent_comment_id)}}>
                                                <DeleteOutlined/>
                                                Remove
                                            </a>: null
                                        }
                                    </div>
                                </>}
                    </div>
                  <div>
                    {comment.children_comments && <CommentComponent data={comment.children_comments} level={level+1} />}
                  </div>
                </div>
              );
            })}
          </div>
        );
      };
    return (
            <Container p="md" h100 id="post-view-container"> 
                <Row>
                    <Col offset={2}>
                        <Breadcrumb items={breadcrumbData}/>
                        <h2 style={{color: colorTextLabel}}>{post.private == true? <LockFilled className="private-post-icon" title="Private post" />:null}{post.title}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col offset={2} span={12}>
                        <Card bordered={false}>
                            {postLoading ? <Loader />:
                                post.id? <><div className="post-author">{post.user.userpic_url ? <Avatar src={post.user.userpic_url} className="mr-10" />:<Avatar icon={<UserOutlined />} className="mr-10" />} 
                                <span className="username">{post.user.username}</span>&nbsp;&nbsp;•&nbsp;&nbsp;
                            <span className="date">{dayjs.utc(post.created).local().format('MMMM D YYYY HH:mm')}</span></div>
                                <div onClick={contentClicked} className="post-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.text) }} />
                                </>:
                                <Alert type="error" message="Some error occured." showIcon />}
                            <h3 className="text-center">Comments</h3>
                            <Loader show={commentsLoading} />
                            <div className="mb-20">
                                <Button type="default" onClick={()=>{showCommentEditorFlag(0)}}>Add a comment</Button>
                                {showCommentEditor && currentCommentEditorUnderId == 0 ? 
                                    <CommentEditor postId={post.id} 
                                        updateComment={updateComment}
                                        cancelEdit={cancelEditing} />: null}
                            </div>
                            <div><CommentComponent data={comments}/></div>
                        </Card>
                    </Col>
                    <Col offset={1} span={4}>
                        <div className="mb-10">
                            <div className={`post-status-badge ${post.progress_status.replaceAll(' ', '')}`}>
                                {boardData.progressStatus[post.progress_status].icon}
                                <span>{post.progress_status}</span>
                            </div>
                        </div>
                        {/*<div className="mb-10">
                            <b style={{color: colorPrimary}}>Status: </b>{post.status}
                                </div>*/}
                        <div className="mb-10">
                            <b style={{color: colorPrimary}}>Views: </b>{post.views}
                        </div>
                        {post.status_change_comment ? <div>
                            <Alert type='info' message={post.status_change_comment} showIcon/>
                        </div>: null}
                        <div>
                            <VoteWidget postId={post.id} rating={post.rating} />
                            <div className="comments-number mt-10 mb-10"><MessageOutlined/><span>{post.comment_number||0}</span></div>
                        </div>
                        {canEdit ? <Link className="link-button" to={`/dashboard/feedback/post/edit/${params.postShortId}`}>Edit post</Link>: null}
                    </Col>
                </Row>
                {contextHolder}
                <Modal 
                    className="modal-80-percent"
                    open={showImageModal} 
                    onOk={()=>setShowImageModal(false)} 
                    onCancel={()=>setShowImageModal(false)}
                    footer={<></>}>
                    <img src={currentImageSrc}/>
                </Modal>
            </Container>);
};
export default PostView;