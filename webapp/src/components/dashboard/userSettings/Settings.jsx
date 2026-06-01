import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Badge, Button, Checkbox, Col, Divider, Form, Input, Modal, notification, Row, Select, Space, Statistic, 
                theme, Tooltip } from 'antd';


import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';

import { Loader } from '@src/components/ui/Loader';



const Settings = (props)=> {

    const accountData = useSelector((state) => state.accountData || {}); 

    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        if (accountData){
            setLoading(false);
        }
    }, [accountData]);
    const {token: { colorPrimaryHover, colorTextLabel }} = theme.useToken();

    return (loading || !accountData? <Loader/>: <div className="page-block scrollable"> 
            <Row>
                <Col offset={2}>
                    <h2 style={{color: colorTextLabel}}>Settings</h2>
                </Col>
            </Row>
            <Row>
                <Col offset={2}>
                    <h3>Your email</h3>
                    <div>{accountData.email}</div>
                </Col>
            </Row>
            <Row>
                <Col offset={2}>
                    <h3>Application version</h3>
                    <div>1.0</div>
                </Col>
            </Row>
        </div>);
};
export default Settings;