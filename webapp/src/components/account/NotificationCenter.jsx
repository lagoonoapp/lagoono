import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Col, Card, Form, Input, Modal, Row, theme, Switch } from 'antd';

import { BarChartOutlined, FileOutlined, LoadingOutlined, MessageOutlined, RobotOutlined, SettingOutlined } from '@ant-design/icons';

import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';

import { Container } from '@src/components/ui/Container';
import { InfoIcon } from '@src/components/ui/InfoIcon';
import { commonFunctions } from '@src/utils/commonFunctions';
import { Loader } from '@src/components/ui/Loader';

const settingsData = [
    {code: 'post_comment', label: 'New comments on your post'},
    {code: 'comment_replies', label: 'New replies on your comment'},
    {code: 'new_post', label: 'New post (only public posts)'},
    //Upvotes on your posts'
    ];

const NotificationCenter = (props)=> {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const [dataLoading, setDataLoading] = useState(false);
    const [userNotifications, setUserNotifications] = useState({});
    const notify = useSelector((state) => state.notify);

    useEffect(() => {
        loadNotifications();
    }, []);

    const loadNotifications = async ()=>{
        setDataLoading(true);
        try {
            let response = await axios.get('/api/app/settings/notifications');
            setDataLoading(false);
            if (response.data.result){
                setUserNotifications(response.data.item || {});
            } else {
                notify.show('error', response.data.error || 'Could not load your notification settings for some reason...', 'notifError', 15);
            }
        } catch(err) {
            console.log(err)
            notify.show('error', 'Could not load your notification settings for some reason...', 'notifError', 15);
        }
    };
    const save = async ()=>{
        notify.show('load', 'Please wait until we save your settings...', 'save')
        try {
            let response = await axios.post('/api/app/settings/notifications', userNotifications);
            notify.close('save');
            if (response.data.result){
                notify.show('success', response.data.error || 'Your settings has been saved.', 'notifSaved', 15);
            } else {
                notify.show('error', response.data.error || 'Could not save your notification settings for some reason...', 'notiSavefError', 15);
            }
        } catch(err) {
            console.log(err)
            notify.show('error', 'Could not save your notification settings for some reason...', 'notiSavefError', 15);
        }
    };
    const {token: { colorPrimaryHover, colorTextLabel }} = theme.useToken();
    const changeSetting = (name, value)=>{
        setUserNotifications({...userNotifications, [name]: value});
    };
    const notificationList = settingsData.map(dt=>{
        return <Row key={dt.code} className="mb-10 mt-10">
            <Col span={8}>
                <div>{dt.label}</div>
            </Col>
            <Col span={8}>
                <Switch 
                    checked={userNotifications[dt.code] != null ? userNotifications[dt.code]: false}
                    onChange={(checked)=>changeSetting(dt.code, checked)} />
            </Col>
        </Row>
    });
    return (<div> 
        <Row>
            <Col offset={2}>
                <h2 style={{color: colorTextLabel}}>Notification Center</h2>
            </Col>
        </Row>
        {dataLoading ? <Loader />:
        <>
            
            <Row>
                <Col offset={2} span={16}>
                    <h3>Feedback board settings</h3>
                    {notificationList}
                </Col>
            </Row>
        </>}
        <Row>
            <Col offset={2}>
                <Button type="primary" onClick={save}>Save settings</Button>
            </Col>
        </Row>
    </div>);
};
export default NotificationCenter;