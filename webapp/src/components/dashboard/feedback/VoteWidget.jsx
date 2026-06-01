import React, { lazy, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Alert, Avatar, Breadcrumb, Button, Card, Checkbox, Col, Divider, Form, Input, List, Modal, notification, Row, Space, Tabs, 
                theme, Tooltip } from 'antd';

import {  CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';
import { commonFunctions } from '@src/utils/commonFunctions';
import { Loader } from '@src/components/ui/Loader';


const VoteWidget = (props)=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postLoading, setPostLoading] = useState(true);
    const [rating, setRating] = useState(props.rating);
    const prevPost = useRef();
    const notify = useSelector((state) => state.notify);
    const {token: { colorPrimary, colorPrimaryHover, colorTextLabel }} = theme.useToken();
    const params = useParams();

    useEffect(() => {
        if (props.postId != null){
            setRating(props.rating);
        }
    }, [props.postId]);

    const loadInitialData = async()=>{
        try {
            let response = await axios.get(`/api/app/feedbackboard/post/view/${params.postShortId}`);
            setPostLoading(false);
            if (response.data.result && response.data.item){
                setPost(response.data.item);
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
    const upDownVote = async(val)=>{
        try {
            const data = {
                value: val,
                post_id: props.postId
            }
            let response = await axios.post(`/api/app/feedbackboard/post/vote`, data);           
            if (response.data.result && response.data.rating != null){
                setRating(response.data.rating);
                notify.show('success', 'Your vote has been saved!')
            } else {
                notify.show('warning', response.data.error || 'Some error occured during voting the post... please try again.');
            }
        } catch(err) {
            setPostLoading(false);
            console.log(err)
            notify.show('error', 'Some error occured during voting the post... please try again.');
        }
    };
    return (
        <div className="d-flex m-auto" key="postVoteWidget">
            <div className="post-data">
                {/*<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />*/}
                {props.readonly ? 
                    <>
                        <CaretUpOutlined style={{color: colorPrimary}}/>{rating}<CaretDownOutlined style={{color: colorPrimary}}/>
                    </>:
                    <><Button icon={<CaretUpOutlined style={{color: colorPrimary}}/>} onClick={()=>upDownVote(1)}/>
                    {rating != null ? <div className="text">{rating}</div>: <Loader show={true} nocontainer/>}
                    <Button icon={<CaretDownOutlined style={{color: colorPrimary}}/>} onClick={()=>upDownVote(-1)}/></>}
            </div>
        </div>);
};
export default VoteWidget;