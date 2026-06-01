import React, { lazy, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Alert, Avatar, Badge, Button, Card, Checkbox, Col, Divider, Form, Input, List, Modal, notification, Pagination, Row, Space, Tabs, 
                theme, Tooltip } from 'antd';

import {  BugFilled, BulbFilled, EyeOutlined, FireTwoTone, FireFilled, LockFilled, MessageOutlined, 
    NotificationFilled, QuestionCircleFilled, TagFilled } from '@ant-design/icons';

import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';
import { commonFunctions } from '@src/utils/commonFunctions';

import { Container } from '@src/components/ui/Container';
import { InfoIcon } from '@src/components/ui/InfoIcon';
import { Loader } from '@src/components/ui/Loader';
import VoteWidget from './VoteWidget';
import {boardData} from './boardData';

const postTypes = {
    question: <><QuestionCircleFilled className="post-type-icon question" />Question/help</>,
    feature: <><BulbFilled className="post-type-icon feature-request" />Feature request</>,
    bug: <><BugFilled className="post-type-icon bug-report" />Bug report</>,
    announcement: <><NotificationFilled className="post-type-icon announcement" />Announcement</>
};

const postCategories = {
    ai: <><TagFilled className="post-category-icon ai" />AI</>,
    ui: <><TagFilled className="post-category-icon ui" />User Interface</>,
    data: <><TagFilled className="post-category-icon data" />Data/data sources</>,
    dashboard: <><TagFilled className="post-category-icon dashboard" />Dashboard</>,
    chatbox: <><TagFilled className="post-category-icon chatbox" />Chatbox</>
};

const scopeTitles = {
    'all': 'All posts',
    'my': 'My published posts',
    'drafts': 'My drafts'
};

/*const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );*/

const defaultPageSize = 20;

const Board = (props)=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [boardLoading, setBoardLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [totalPosts, setTotalPosts] = useState(0);
    const notify = useSelector((state) => state.notify);
    const {token: { colorPrimary, colorPrimaryHover, colorTextLabel }} = theme.useToken();
    const params = useParams();

    useEffect(() => {
        loadData();
        // TODO: when redirected, the current selection in the bottom menu is lost
        //dispatch({ type: 'currentMenuItems', name: 'currentMenuItems', value: ['feedback', null, `logs_${params.projectId}`]});
    }, [params.scope]);


    const loadData = async(pageNumber, pageSize)=>{
        pageNumber = pageNumber || 1;
        pageSize = pageSize || defaultPageSize;
        try {
            const scope = params.scope || 'all';
            let response = await axios.get(`/api/app/feedbackboard/${scope}?page=${pageNumber}&pagesize=${pageSize}`);
            setBoardLoading(false);
            if (response.data.result){
                if (response.data.result){
                    setData(response.data.list);
                    setTotalPosts(response.data.total);
                    setCurrentPage(pageNumber);
                    setPageSize(pageSize);
                } else {
                    notify.show('error', response.data.error || 'Some error occured during this request... please try again.');
                }
            }
        } catch(err) {
            setBoardLoading(false);
            console.log(err)
            notify.show('error', 'Some error occured during this request... please try again.');
        }
    }
    const changePage = (page, pageSize)=>{
        loadData(page, pageSize);
    };
    const scopeTitle = scopeTitles[params.scope || 'all'];
    return (
            <div> 
            <Row>
                <Col offset={2}>
                <h2 style={{color: colorTextLabel}}>Feedback / Support Board / {scopeTitle}</h2>
                </Col>
            </Row>
            <Row>
                <Col offset={2} span={12}>
                    <Card bordered={false}>
                        <Loader show={boardLoading} />
                        <List
                            rowKey="id"
                            pagination={false}
                            locale={{emptyText: 'No posts...'}}
                            itemLayout="vertical"
                            size="large"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item
                                    key={item.id}
                                    actions={[
                                    ,
                                    ]}
                                    extra={
                                    <div className="post-data">
                                        {/*<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />*/}
                                        <VoteWidget rating={item.rating} readonly={true}/>
                                        <div className="mb-10">
                                            <div className="comments-number"><MessageOutlined/><span>{item.comment_number||0}</span></div>
                                            <div className="comments-number"><EyeOutlined /><span>{item.views||0}</span></div>
                                        </div>
                                    </div>
                                    }
                                >
                                    <List.Item.Meta
                                    
                                    title={<div className="d-flex justify-content-between">
                                            <div>
                                                {item.private == true? <LockFilled className="private-post-icon" title="Private post" />: null}
                                                <Link to={`/dashboard/feedback/post/view/${item.short_id}/${item.slug}`}>{item.title}</Link>
                                            </div>
                                            <div className={`post-status-badge ${item.progress_status.replaceAll(' ', '')}`}>
                                                {boardData.progressStatus[item.progress_status].icon}
                                                <span>{item.progress_status}</span>
                                            </div>
                                        </div>}
                                    description={<div>
                                                {item.text_preview}
                                                <div className="mt-10">
                                                    <div>
                                                        {item.type ? <div className="post-tag">{postTypes[item.type]}</div>: null}
                                                        {item.category ? <div className="post-tag">{postCategories[item.category]}</div>: null}
                                                    </div>
                                                </div>
                                            </div>}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                        <Pagination
                            total={totalPosts}
                            showTotal={(total, range) => 
                                {
                                    return `${range[0]}-${range[1]} of ${total} posts`;
                                }}
                            defaultPageSize={defaultPageSize}
                            defaultCurrent={1}
                            pageSize={pageSize}
                            current={currentPage}
                            showQuickJumper
                            showSizeChanger
                            onChange={changePage}
                        />
                    </Card>
                </Col>
                <Col offset={1} span={4}>
                    <div>
                        <Button type="primary" onClick={()=>navigate('/dashboard/feedback/post/edit/new', {replace: true})}>Create a post</Button>
                    </div>
                </Col>
            </Row>
        </div>);
};
export default Board;