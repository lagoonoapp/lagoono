import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { message, theme } from 'antd';
import LoginForm from './steps/LoginForm';
import RegisterForm from './steps/RegisterForm';
import FinishRegistration from './steps/FinishRegistration';
import ConfirmEmail from './steps/ConfirmEmail';
import ForgotPasswordForm from './steps/ForgotPasswordForm';
import ResetPasswordForm from './steps/ResetPasswordForm';
import '@src/style/auth.scss';

import { Container } from '@src/components/ui/Container';

export const AuthShell = ()=> {
    const [messageApi, contextHolder] = message.useMessage();
    const {
        token: { colorPrimaryBg, colorPrimaryBgHover, colorPrimaryBorder },
    } = theme.useToken();
    const AuthRoute = (
        <Routes>
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/finishregister/:userId" element={<FinishRegistration/>} />
            <Route path="/confirm/:token/:userid/" element={<ConfirmEmail/>}/>
            <Route path="/forgot" element={<ForgotPasswordForm/>}/>
            <Route path="/resetpassword/:token/:userid" element={<ResetPasswordForm/>} />
            <Route path="/*" element={<LoginForm/>} />
        </Routes>
    );
    return  <Container center h100 flex>
                {contextHolder}
                <Container m="auto" maxW="400px" w100>
                    <div className="auth-box-title" >
                        <span className="title" style={{color: colorPrimaryBorder}}>{globalVars.companyName}</span>
                        <img src="/static/images/logo.png"/>
                    </div>
                    <div className="auth-form-container">
                        {AuthRoute}
                    </div>
                </Container>
            </Container>;
};