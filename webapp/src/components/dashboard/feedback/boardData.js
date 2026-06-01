import React from 'react';

import {  BugFilled, BulbFilled, NotificationFilled, MessageOutlined, QuestionCircleFilled, TagFilled } from '@ant-design/icons';

import { ProhibitIcon, LightbulbIcon, CheckFatIcon, CheckCircleIcon, EyeIcon, 
        HammerIcon, QuestionIcon, XCircleIcon } from '@phosphor-icons/react';

export const boardData = {
    progressStatus: {
        'new': {icon: <LightbulbIcon/>},
        'in review': {icon: <EyeIcon/>},
        'planned': {icon: <CheckFatIcon/>},
        'rejected': {icon: <ProhibitIcon />},
        'in progress': {icon: <HammerIcon/>},
        'done': {icon: <CheckCircleIcon/>},
        'closed': {icon: <XCircleIcon/>},
        'wait for user response': {icon: <QuestionIcon/>}
    },
    postCategories: [
        {value: 'ai', label: 'AI'},
        {value: 'ui', label: 'User Interface'},
        {value: 'data', label: 'Data/data sources'},
        {value: 'dashboard', label: 'Dashboard'},
        {value: 'chatbox', label: 'Chatbox'}
    ],
    postTypes: [
        {value: 'question', label: 'Question/help', icon: <QuestionCircleFilled className="post-type-icon question" />},
        {value: 'feature', label: 'Feature request', icon: <BulbFilled className="post-type-icon feature-request" />},
        {value: 'bug', label: 'Bug report', icon: <BugFilled className="post-type-icon bug-report" />}
    ],
    postTypesAdmin: [
        {value: 'announcement', label: 'Announcement', icon: <NotificationFilled className="post-type-icon announcement" />}
    ]
};