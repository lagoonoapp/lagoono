import React, { lazy, useCallback, useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Col, Card, Form, Input, Modal, Row, Select, theme, Upload } from 'antd';
const { Option } = Select;
const { confirm } = Modal;

import { CheckCircleOutlined, DatabaseOutlined, DeleteOutlined, EditOutlined, ExclamationCircleFilled, ExclamationCircleOutlined, InboxOutlined,
            /*FilePdfOutlined, FileTextOutlined, GlobalOutlined,*/
    IssuesCloseOutlined, LoadingOutlined, RadarChartOutlined, ReloadOutlined, SettingOutlined } from '@ant-design/icons';



import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';

import { Container } from '@src/components/ui/Container';
import { InfoIcon } from '@src/components/ui/InfoIcon';
import { commonFunctions } from '@src/utils/commonFunctions';




const points = [

];

const resourceCards = [
    {
        title: ''
    }
];

const otherPoints = [

];

const StartPage = (props)=> {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const notify = useSelector((state) => state.notify);
    const {token: { colorPrimaryHover, colorTextLabel }} = theme.useToken();

    const cards = points.map(point=>{
        const cardTitle = (<Link className="d-flex justify-content-between datasource-title" 
                                to={`/dashboard/project/`}>
                                <div className="project-item-name">
                                    
                                    <span>{point.title}</span> 
                                </div>
                                {point.icon}
                            </Link>);
        return <Container position="relative" key={point.title} className="project-list-card">
                    
                        <Card title={cardTitle}
                             bordered={true} hoverable>
                                <div className="text-preview">
                                    {point.description}
                                </div>
                        </Card>
                    
                   
                </Container>
    });

    const otherCards = otherPoints.map(point=>{
        const cardTitle = (<a className="d-flex justify-content-between datasource-title" 
                                href={point.link} target="blank">
                                <div className="project-item-name">
                                    
                                    <span>{point.title}</span> 
                                </div>
                                {point.icon}
                            </a>);
        return <Container position="relative" key={point.title} className="project-list-card">
                    
                        <Card title={cardTitle}
                             bordered={true} hoverable>
                                <div className="text-preview">
                                    {point.description}
                                </div>
                        </Card>
                    
                   
                </Container>
    });

    return (<Container p="md" h100> 
                <Row>
                    <Col offset={2} span={22}>
                        <h2 style={{color: colorTextLabel}}>Where to start</h2>
                        <h3>New </h3>
                        <Alert className="d-inline-flex" type="info" message="Create a project" showIcon/>
                        <div className="cards-container scrollable">{cards}</div>

                        <h3 className="mt-20">A new project</h3>
                        <Alert className="d-inline-flex" type="info" message="Create" showIcon/>
                        <div className="cards-container scrollable">{otherCards}</div>
                    </Col>
                </Row>
                
            </Container>);
};
export default StartPage;