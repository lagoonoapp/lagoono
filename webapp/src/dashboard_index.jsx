import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { JWTFunctions } from '@src/utils/JWTFunctions';
import { ConfigProvider } from 'antd';

import '@src/style/common.scss';
import '@src/style/ant-design.scss';

import store from '@src/utils/store/root-store';
import DashboardShell from '@src/components/dashboard/DashboardShell';


const appRoute = (
    <ConfigProvider theme={{
        token: {
            fontFamily: 'Noto Sans', //'Nanum Gothic',
            'fontSize': 13, 'colorError': '#a6121a', 'borderRadius': 2, 'colorPrimary': '#704ec7'},
    }}>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard/*" element={<DashboardShell/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </ConfigProvider>
);

const root = createRoot(document.getElementById('dashboard_root'));
root.render(appRoute);