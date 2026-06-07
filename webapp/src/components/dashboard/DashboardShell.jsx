import React, { lazy, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { Alert, Badge, Button, FloatButton, Layout, Menu, Modal, notification, Popover, Space, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import { ErrorHandler } from './ErrorHandler';

import { HeartIcon, CircleNotchIcon, RocketIcon, ShapesIcon  } from '@phosphor-icons/react';

import { BellOutlined, CheckCircleOutlined, CloseCircleOutlined, CloseOutlined, ColumnHeightOutlined, CoffeeOutlined,
    InfoCircleOutlined, LoadingOutlined, LockOutlined, LogoutOutlined, 
    OpenAIOutlined, PlusCircleOutlined, SettingOutlined, UserOutlined, WalletOutlined, WarningOutlined, 
    BellFilled} from '@ant-design/icons';

import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';
import Markdown from 'markdown-to-jsx';



const Settings = lazy(() => import('@src/components/dashboard/userSettings/Settings'));
const FeedbackBoard = lazy(() => import('@src/components/dashboard/feedback/Board'));
const PostEditForm = lazy(() => import('@src/components/dashboard/feedback/PostEdit'));
const PostViewPage = lazy(() => import('@src/components/dashboard/feedback/PostView'));
const Profile = lazy(() => import('@src/components/account/Profile'));
const NotificationCenter = lazy(() => import('@src/components/account/NotificationCenter'));
const StartPage = lazy(() => import('@src/components/dashboard/StartPage'));
const TypeList = lazy(() => import('@src/components/dashboard/types/TypeList'));


import { commonFunctions } from '@src/utils/commonFunctions';
import { Container } from '@src/components/ui/Container';
//import Board from './feedback/Board';

const userMenuItems = [
    {key: 'settings', label: <Link to={`/dashboard/settings`}>Settings</Link>, icon: <SettingOutlined />, 
        children: [
            {key: 'types', label: <Link to={`/dashboard/settings/types`}>Types</Link>, icon: <ShapesIcon />},
            {key: 'userprofile', label: <Link to={`/dashboard/settings/profile`}>User profile</Link>, icon: <UserOutlined />},
            {key: 'notifications', label: <Link to={`/dashboard/settings/notifications`}>Notification center</Link>, icon: <BellOutlined />},
]},
    {key: 'feedback', label: <Link to={`/dashboard/feedback`}>Feedback/Support</Link>, icon: <CoffeeOutlined />,
        children: [{key: 'feedback-all', label: <Link to={`/dashboard/feedback`}>All posts</Link>},
                    {key: 'feedback-my', label: <Link to={`/dashboard/feedback/my`}>My posts</Link>},
                    {key: 'feedback-my-drafts', label: <Link to={`/dashboard/feedback/drafts`}>My drafts</Link>}]},
    {key: 'logout', label: <a href="/auth/logout">Logout</a>, icon: <LogoutOutlined />}
];

// TODO: getting from the settings
const topMenuItems = [
    {key: 'start', label: <Link to={`/dashboard/start`}>Start here</Link>, icon: <RocketIcon/>},
]


export default function DashboardShell() {
    const [opened, setOpened] = useState(false);
    const dashboardStatus = useSelector((state) => state.dashboardStatus || {status: '', message: ''});
    const [routes, setRoutes] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [error, setError] = useState('');
    const prevProjectList = useRef();
    const projectList = useSelector((state) => state.projectList || []);
    const [menuItems, setMenuItems] = useState([]);
    const [api, contextHolder] = notification.useNotification();
    const currentMenuItems = useSelector((state) => state.currentMenuItems || []); // Menu items that are selected from pages themselves
    const [openMenuKeys, setOpenMenuKeys] = useState([]);
    const [selectedMenuKeys, setSelectedMenuKeys] = useState([]);


    //const [accountData, setAccountData] = useState({});
    const dispatch = useDispatch();
    const accountData = useSelector((state) => state.accountData);

    const notifyFunction = (type, message, messageKey, delayToClose) => {
        const icons = {
            error: <CloseCircleOutlined style={{color: colorError}} />,
            warning: <WarningOutlined style={{color: colorWarning}} />,
            info: <InfoCircleOutlined style={{color: colorInfo}} />,
            success: <CheckCircleOutlined style={{color: colorSuccess}} />,
            load: <LoadingOutlined />
        };
        const titles = {
            error: 'Error',
            warning: 'Warning',
            info: 'Information',
            success: 'Success!'
        };
        const messageObject = {
            message: titles[type],
            description: message,
            icon: icons[type],
            key: messageKey,
            placement: 'topRight',
            duration: delayToClose || 0
        }
        api.info(messageObject);
    };
    const destroyNotification = (messageId)=>{
        api.destroy(messageId);
    };

    const {
        token: { colorFillTertiary, colorPrimaryBg, colorError, colorInfo, colorSuccess, colorWarning },
    } = theme.useToken();
    
    useEffect(() => {
        dispatch({ type: 'notify', name: 'notify', value: {show: notifyFunction, close: destroyNotification}});
        loadInitialData();
    }, []);
/*
    useEffect(() => {
        if (prevProjectList.current && commonFunctions.areObjectArraysEqual(projectList, prevProjectList.current)){
            return;
        }
        prevProjectList.current = projectList;
        formMenu();
    }, [projectList]);*/

    useEffect(() => {
        if (currentMenuItems.length == 1){
            setOpenMenuKeys([...openMenuKeys, currentMenuItems[0]]);
            setSelectedMenuKeys([currentMenuItems[0]]);
        } else if (currentMenuItems.length >= 2){
            var newItems = [];
            const currentItems = currentMenuItems.slice(0, currentMenuItems.length-1);
            for (var i = 0; i < currentItems.length; i ++){
                const item = currentItems[i];
                if (openMenuKeys.indexOf(item) == -1){
                    newItems.push(item)
                }
            }
            setOpenMenuKeys([...openMenuKeys, ...newItems]); // First is parent, should be open
            setSelectedMenuKeys([currentMenuItems[currentMenuItems.length-1]]); // Second is the item that should be selected
        }
    }, [currentMenuItems]);

    const formMenu = ()=>{
        const menuItems = projectList.map(project=>{
            return {
                    key: project.id, 
                    label: <Link to={`/dashboard/project/${project.id}/datasources`}>{project.name || 'No name project'}</Link>,
                    children: [
                        {key: `settings_${project.id}`, label: <Link to={`/dashboard/project/${project.id}/settings`}>Settings, logs, stats</Link>}
                    ]
                }});
        const items = [
            {
                key: 'myprojects', 
                label: <Link to={`/dashboard`}>
                        <div className="icon-menu-item"><span>My projects</span><PlusCircleOutlined title="Add a new project" /></div>
                        </Link>, 
                children: menuItems
            }
        ];
        setMenuItems(items);
    };
    const loadInitialData = async()=>{
        try {
            let response = await axios.get('/api/app/profile');
            if (response.data.result){
                dispatch({ type: 'accountData', name: 'accountData', value: response.data.account_data });
                dispatch({ type: 'projectList', name: 'projectList', value: response.data.projects});
                setMenuItems(topMenuItems); // TODO: form menu based on settings
            } else {
                //notify('error', response.data.error || 'Some error occured during this request... please try again.');
                
                // Something went wrong, logout user
                try {
                    await axios.post('/api/auth/logout', {});
                    window.location.href = '/auth/login';
                } catch (ex) {
                    console.log(ex);
                    console.log('Error while trying logout user.'); // Console log for now
                }
            }
        } catch {
            //notify('error', 'Some error occured during this request... please try again.');
        }
    }
    const onMenuSelect = (menuItemChain)=>{
        console.log('menu selected', menuItemChain)
        if (menuItemChain.length == 0){
            // Root?
            if (openMenuKeys.indexOf('myprojects') > -1){
                setOpenMenuKeys(openMenuKeys.filter(item=>item.key == 'myprojects'))
            } else {
                setOpenMenuKeys([...openMenuKeys, 'myprojects']);
            }
        } else if (menuItemChain.length == 1){

        } else if (menuItemChain.length == 2){
            const parentKey = menuItemChain[0], selectedKey = menuItemChain[1];
            // First is parent, should be open or close
            if (openMenuKeys.indexOf(parentKey) > -1){
                setOpenMenuKeys(openMenuKeys.filter(item=>item.key == parentKey))
            } else {
                setOpenMenuKeys([...openMenuKeys, parentKey]);
            }
            // Second is the item that should be selected or deselected
            if (selectedMenuKeys.indexOf(selectedKey) > -1){
                setSelectedMenuKeys(selectedMenuKeys.filter(item=>item.key == selectedKey))
            } else {
                setSelectedMenuKeys([...selectedMenuKeys, selectedKey]);
            }
        }
    };

    return (<>{contextHolder}<Layout
        style={{
            height: '100vh',
        }}
    >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={250}>
            <div className="logo">
                <img src="/static/images/logo.png"/>
                <h4>{globalVars.companyName}</h4>
            </div>
            {error? null: 
                    <div className="dashboard-menu-container scrollable-dark">
                        <Menu 
                            theme="dark" 
                            mode="inline"
                            inlineIndent={12}
                            items={menuItems}
                            onOpenChange={(openKeys) => {
                                setOpenMenuKeys(openKeys);
                               }}
                            openKeys={openMenuKeys}
                            selectedKeys={selectedMenuKeys} />
                        <div>
                            <Menu
                                theme="dark" 
                                mode="inline"
                                inlineIndent={12}
                                items={userMenuItems}/>
                        </div>
                        {/*<Menu 
                            theme="dark" 
                            mode="vertical" 
                            defaultSelectedKeys={[]} 
            items={accountMenuItems} />*/}
                    </div>}
        </Sider>
        <Layout className="site-layout">
            <Content style={{width: '100%'}}>
                <Container h100 w100 scrollY>
                    {error? 
                        <Alert title={error} type="error" showIcon />: 
                        <React.Suspense fallback={<Container centerH><CircleNotchIcon size={24} className="spin" /></Container>}>
                            <Routes>
                                <Route path="/" element={<StartPage/>}  />
                                <Route path="/start" element={<StartPage/>}  />
                                <Route path="/settings/types" element={<TypeList/>}  />
                                <Route path="/settings/profile" element={<Profile/>}  />
                                <Route path="/settings/notifications" element={<NotificationCenter/>}  />
                                <Route path="/settings" element={<Settings/>}  />
                                <Route path="/feedback/post/view/:postShortId/:postSlug" element={<PostViewPage/>}  />
                                <Route path="/feedback/post/edit/:postShortId" element={<PostEditForm/>}  />
                                <Route path="/feedback/:scope" element={<FeedbackBoard/>}  />
                                <Route path="/feedback" element={<FeedbackBoard/>}  />*
                            </Routes>
                        </React.Suspense>
                    }
                </Container>
            </Content>
            
            {/*<Footer>
                {dashboardStatus && dashboardStatus.status ? <Container flex alignItems="center" gap="2px">
                {statusIcons[dashboardStatus.status] || null}
                    <span>{dashboardStatus.message || ''}</span>
                </Container>: null}
                </Footer>*/}
        </Layout>
    </Layout></>);
}