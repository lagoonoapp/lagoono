import React, { lazy, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Alert, Avatar, Breadcrumb, Button, Card, Checkbox, Col, Divider, Form, Input, List, Modal, notification, 
                PlusCircleFilled, Row, Select, Space, Tabs, 
                theme, Tooltip } from 'antd';

import { BugFilled, BulbFilled, ExclamationCircleFilled, LoadingOutlined, QuestionCircleFilled, TagFilled } from '@ant-design/icons';

import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';
import { commonFunctions } from '@src/utils/commonFunctions';

import { Container } from '@src/components/ui/Container';
import { InfoIcon } from '@src/components/ui/InfoIcon';
import { Loader } from '@src/components/ui/Loader';
import TinyMCEEditor from '@src/components/ui/TinyMCEEditor';
import { boardData } from './boardData';

var typesUpdated = false;

const Post = (props)=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postLoading, setPostLoading] = useState(true);
    const [post, setPost] = useState({});
    const [privatePost, setPrivatePost] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteInProgress, setDeleteInProgress] = useState(false);
    const [deletingPostAlert, setDeletingPostAlert] = useState(null);
    const [progressStatus, setProgressStatus] = useState('');
    const prevPost = useRef();
    const notify = useSelector((state) => state.notify);
    const {token: { colorPrimaryHover, colorTextLabel }} = theme.useToken();
    const params = useParams();
    const [form] = Form.useForm();
    const accountData = useSelector((state) => state.accountData || {}); 

    const breadcrumbData = [
        {title: <Link to={`/dashboard/feedback`} title="Project settings">Feedback board</Link>},
        {title: <Link to={`/dashboard/feedback/${post.status=='published' ? 'my' : 'drafts'}`} title="Project settings">
             {`My ${post.status=='published' ? 'published posts' : 'drafts'}`}</Link>}, //TODO: add the link
        {title: post.title || 'No name post'}
    ];

    useEffect(() => {
        if (params.postShortId){
            loadInitialData();
        }
    }, [params.postShortId]);


    useEffect(() => {
        if (post){
            if (!prevPost.current){
                prevPost.current = post;
            }
            form.resetFields();
            form.setFieldsValue(post);
        }
    }, [post]);

    const loadInitialData = async()=>{
        try {
            if (params.postShortId == 'new'){
                setPost({
                    title: '',
                    text: '',
                    status: 'draft'
                });
                setPostLoading(false);
                //form.setFieldsValue(post);
                return
            }
            let response = await axios.get(`/api/app/feedbackboard/post/edit/${params.postShortId}`);
            setPostLoading(false);
            if (response.data.result && response.data.item){
                setPost(response.data.item);
                setPrivatePost(response.data.item.private != null ? response.data.item.private: false);
                setProgressStatus(response.data.item.progress_status);
                //form.setFieldsValue(response.data.result.item);
            } else {
                notify.show('error', response.data.error || 'Some error occured during loading the post... please try again.');
            }
        } catch(err) {
            setPostLoading(false);
            console.log(err)
            notify.show('error', 'Some error occured during loading the post... please try again.');
        }
    }
    const saveProgressStatus = async()=>{
        try {
            let response = await axios.post(`/api/app/feedbackboard/post/progress`, {id: post.id, status: progressStatus});
            if (response.data.result){
                notify.show('success', 'Progress status has been saved!')
            } else {
                notify.show('error', response.data.error || 'Some error occured during saving the status... please try again.');
            }
        } catch(err) {
            setPostLoading(false);
            console.log(err)
            notify.show('error', 'Some error occured during saving the status... please try again.');
        }
    };
    const savePost = async(publishFlag)=>{
        const formData = form.getFieldsValue();
        const postData = {...post, ...formData};
        //setPost(postData);
        if (publishFlag){
            postData.status = 'publish';
        } else if (publishFlag == false){
            postData.status = 'unpublish';
        }
        try {
            let response = await axios.post(`/api/app/feedbackboard/post`, postData);
            setPostLoading(false);
            if (response.data.result){
                if (!post.short_id && response.data.short_id){
                    setPost({...post, id: response.data.id, short_id: response.data.short_id});
                    const newPostUrl = `/dashboard/feedback/post/edit/${response.data.short_id}`; // Redirect for editing
                    navigate(newPostUrl, {replace: true}); 
                } else {
                    if (publishFlag){
                        notify.show('success', 'Post was published successfully!');
                        const newPostUrl = `/dashboard/feedback/post/view/${response.data.short_id}/${post.slug}`; // Redirect for editing
                        navigate(newPostUrl, {replace: true}); 
                    } else if (publishFlag == false){
                        notify.show('success', 'Post was unpublished successfully!');
                    } else {
                        notify.show('success', 'Post was saved successfully!');
                    }
                }
                form.setFieldValue('status', response.data.status);
                form.setFieldValue('status_change_comment', response.data.status_change_comment);
                form.setFieldValue('private', response.data.private);
                setPost({...post, published_once: response.data.published_once, private: response.data.private});
                //form.setFieldsValue({...form.getFieldsValue(), status: response.data.status, status_change_comment: response.data.status_change_comment})
            } else {
                notify.show('error', response.data.error || 'Some error occured during saving the post... please try again.');
            }
        } catch(err) {
            setPostLoading(false);
            console.log(err)
            notify.show('error', 'Some error occured during saving the post... please try again.');
        }
    }
    const publishPost = async()=>{
        form.validateFields()
            .then((values) =>  {
                savePost(true);
            })
            .catch((errorInfo) => {
                notify.show('warning', 'Please fix the errors and try again.')
            });
    };
    const onFinish = (data) => {
        // Save post
        console.log(data)
    };
    const onFinishFailed = (data) => {
        //notify.show('warning', 'Please fix the errors and try again.')
    };
    const updatePostModel = (data)=>{
        //setPost(form.getFieldsValue());
        if (data[0].name[0] == 'private'){
            setPrivatePost(data[0].value);
        }
    };
    const deletePost = async ()=>{
        setDeletingPostAlert({
            type: 'info', 
            message: 'We are removig the post, please wait...', 
            icon: <LoadingOutlined spin/>});
        setDeleteInProgress(true);
        try {
            let response = await axios.delete(`/api/app/feedbackboard/post`, {data: {id: post.id}});
            if (response.data.result){
                //setSettingsData(response.data.item);
                setDeletingPostAlert({
                    type: 'success', 
                    message: 'The post was deleted successfully, you will be redirected to the feedback board.'});
                setTimeout(()=>{
                    // Update projectlist and redirect
                    navigate('/dashboard/feedback', {replace: true}); 
                    setDeleteInProgress(false);
                }, 2000);
            } else {
                setDeletingPostAlert({
                    type: 'error', 
                    message: response.data.error || 'Some error occured during deleting the post... please try again.'});
            }
            
        } catch(err) {
            console.log(err)
            setDeletingPostAlert({
                type: 'error', 
                message: 'Some error occured during deleting the post... please try again.'});
            setDeleteInProgress(false);
        }
    };
    var progressStatusOptions = [];
    if (accountData.isadmin){
        for (var key in boardData.progressStatus){
            progressStatusOptions.push({key: key, label: key, value: key});
        }
    }

    const postCategories = boardData.postCategories.map(postCategory=>{
        return {label: <><TagFilled className={`post-category-icon ${postCategory.value}`} />{postCategory.label}</>, value: postCategory.value}
    });
    if (accountData.isadmin && !typesUpdated){
        boardData.postTypes = boardData.postTypes.concat(boardData.postTypesAdmin);
        typesUpdated = true;
    }
    var postTypes = boardData.postTypes.map(postType=>{
        const PostIcon = postType.icon
        return {label: <>{postType.icon}{postType.label}</>, value: postType.value};
    });
    return (
            <Container p="md" h100> 
            <Row>
                <Col offset={2}>
                    <Breadcrumb items={breadcrumbData}/>
                    <h2 style={{color: colorTextLabel}}>{`${params.postShortId == 'new' ? 'Create a new': 'Edit'} post`}</h2>
                </Col>
            </Row>
            <Row>
                <Col offset={2} span={12}>
                    <Card bordered={false}>
                        <Loader show={postLoading} />
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            initialValues={post}
                            onFieldsChange={updatePostModel}
                            >
                                <Form.Item name="private" label="Post privacy" className="mb-0" valuePropName="checked">
                                    <Checkbox>{privatePost == true ? 
                                        'uncheck to make post public':'check to make post private' }</Checkbox>
                                </Form.Item>    
                                <Form.Item>
                                    {privatePost == true ?
                                    <Alert type="warning" 
                                        showIcon
                                        message="Your post is visible to admins only. Uncheck it to make visible to all registered users."/>:
                                    <Alert type="info" 
                                        showIcon
                                        message="Your post is visible to all registered users. Check to make it visible to admins only."/>}
                                </Form.Item>
                                <Row>
                                    <Col span={11}>
                                        <Form.Item name="type" label="Type" rules={[{required: true}]}>
                                            <Select options={postTypes}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={11} offset={2}>
                                        <Form.Item name="category" label="Category" rules={[{required: true}]}>
                                            <Select options={postCategories}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            
                            <Form.Item
                                name="title"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                    },
                                    {
                                        type: 'string',
                                        min: 6,
                                        max: 400
                                    },
                                ]}
                            >
                                <Input placeholder="Title your post" />
                            </Form.Item>
                            <Form.Item
                                name="text"
                                label={<><span>Content</span><InfoIcon placement="right" 
                                title="To insert an image, copy/paste it right in the editor, or use the toolbar button to insert a link or upload a file."/></>}
                                rules={[
                                    {
                                        required: true,
                                    },
                                    {
                                        type: 'string',
                                        min: 20,
                                    },
                                ]}
                            >
                                {/*<Input.TextArea rows={10} placeholder="Tell us about your concerns or ideas." />*/}
                                <TinyMCEEditor  />
                            </Form.Item>
                            <Form.Item>
                                <Space>
                                <Button type="primary" htmlType="submit" onClick={()=>savePost()}>
                                    {post.status == 'published' ? 'Unpublish and save as draft': 'Save the draft'}
                                </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col offset={1} span={4}>
                    {accountData.isadmin ? <div className="mb-10">
                        <Select options={progressStatusOptions} value={progressStatus} className="w-100" 
                            onChange={(value)=>setProgressStatus(value)}></Select>
                        <Button onClick={saveProgressStatus}>Save new status</Button>
                    </div>: null}
                    <div className="mb-10">
                        <b>Status: </b>{post.status}
                    </div>
                    {post.status_change_comment ? <div>
                        <Alert type='info' message={post.status_change_comment} showIcon/>
                    </div>: null}
                    <div>
                        <Button type="primary" onClick={publishPost}>Publish</Button>
                    </div>
                </Col>
            </Row>
            {post.id && post.id != 'new' ?<Row>
                <Col offset={2} span={16}>
                    <Divider className="danger-zone">Danger Zone</Divider>
                    <Container mb="lg">
                            <Alert message="Warning!" description={"Please be aware that once you delete your post, it will not be available even for you.\n The operation is not reversible."}
                                type="warning" showIcon/>
                        </Container>
                    <Container mb="lg">
                        <Button type="primary" danger onClick={()=>{setShowDeleteConfirm(true);}}>Delete post</Button>
                    </Container>
                </Col>
            </Row>: null}
            <Modal 
                    title={<div className="d-flex">
                        <ExclamationCircleFilled className="modal-icon-warning"/>
                        <span className="ant-modal-confirm-title">{`Delete this post?`}</span>
                        </div>}
                    okText="Yes"
                    okType="danger"
                    okButtonProps={
                        {disabled: deleteInProgress}
                    }
                    open={showDeleteConfirm} 
                    onOk={deletePost} 
                    onCancel={()=>{setShowDeleteConfirm(false);}}
                    cancelButtonProps={{
                        disabled: deleteInProgress
                    }}>
                        <Space direction="vertical" className="w-100 mt-10">
                            {deletingPostAlert ? 
                                <Alert 
                                    type={deletingPostAlert.type}
                                    message={deletingPostAlert.message}
                                    icon={deletingPostAlert.icon || null}
                                    showIcon
                                    />: 
                            null}
                        </Space>
                </Modal>
        </Container>);
};
export default Post;