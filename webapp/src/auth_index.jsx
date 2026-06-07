import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AuthShell } from '@src/components/auth/AuthShell';

import '@src/style/common.scss';
import '@src/style/ant-design.scss';

const dashboardRoute = (
    <ConfigProvider theme={{
        token: {
            fontFamily: 'Inter',
            'fontSize': 13, 
            'colorError': '#a6121a', 'borderRadius': 2, 'colorPrimary': '#0f4596'},
    }}>
        
        <BrowserRouter>
            <Routes>
                <Route path="/auth*" element={<AuthShell/>} />
            </Routes>
        </BrowserRouter>  
    </ConfigProvider>
);

const root = createRoot(document.getElementById('auth_root'));
root.render(dashboardRoute);
