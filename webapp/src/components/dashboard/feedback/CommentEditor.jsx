import React, { lazy, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, parsePath, useNavigate, useParams } from 'react-router-dom';
import { Alert, Button, Input,  theme, Tooltip } from 'antd';

import {  CaretDownOutlined, CaretUpOutlined, DislikeOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';
import { commonFunctions } from '@src/utils/commonFunctions';

import { Container } from '@src/components/ui/Container';
import { InfoIcon } from '@src/components/ui/InfoIcon';
import { Loader } from '@src/components/ui/Loader';
import TinyMCEEditor from '@src/components/ui/TinyMCEEditor';

////@@ For keeping the content in TinyMCE
let dirty = false; 
let tempContent = ''; 
////@@
const CommentEditor = (props)=> {
    const dispatch = useDispatch();
    const notify = useSelector((state) => state.notify);
    const {token: { colorPrimaryHover, colorTextLabel }} = theme.useToken();
    const [text, setText] = useState(''); ////@@ Don't set it here based on props.text
    const [commentSaving, setCommentSaving] = useState(false);
    const prevTextRef = useRef(props.text);

    ////@@
    useEffect(() => {
        if (!dirty){
            setText(props.text || '');
        } else {
            setText(tempContent);
        }
    }, [props.text]);
    ////@@

    const saveComment = async()=>{
        const commentData = {
            id: props.id,
            post_id: props.postId,
            parent_comment_id: props.parentCommentId,
            text: text
        };
        setCommentSaving(true);
        try {
            let response = await axios.post(`/api/app/feedbackboard/post/comment`, commentData);
            setCommentSaving(false);
            if (response.data.result){
                var commentDataUpdate = {
                    id: response.data.id, 
                    parentCommentId: props.parentCommentId, 
                    text: text,
                    can_edit: true
                }
                if (!props.id && response.data.id){
                    commentDataUpdate.new = true;
                }
                dirty = false; ////@@
                props.updateComment(commentDataUpdate, true);
                notify.show('success', 'The comment was saved successfully!', 'saveOk', 15);
            } else {
                notify.show('error', response.data.error || 'Some error occured during saving the comment... please try again.');
            }
        } catch(err) {
            setPostLoading(false);
            console.log(err)
            notify.show('error', 'Some error occured during loading the comment... please try again.');
        }
    }
    const updateComment = (commentText)=>{
        /*const commentData = {
            id: props.id,
            post_id: props.postId,
            parent_comment_id: props.parentCommentId,
            text: commentText
        };
        props.updateComment(commentData, false);*/
        //props.onChange(commentText);
        setText(commentText);
        tempContent = commentText; ////@@
        dirty = true; ////@@
    };
    return (
            <div className="mb-10">{/*commentId: {props.id}, parentCommentId: {props.parentCommentId}*/}
                {/*<Input.TextArea rows={4} value={text} onChange={(e)=>{updateComment(e.target.value)}} />*/}
                <TinyMCEEditor short value={text} 
                    id={props.id}
                    onChange={updateComment} />
                <div className="mt-2 d-flex gap-5">
                    <Button onClick={saveComment} type="primary">Save comment</Button>
                    <Button onClick={()=>props.cancelEdit()}>Cancel</Button>
                </div>
            </div>);
};
export default CommentEditor;