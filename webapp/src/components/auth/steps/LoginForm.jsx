import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Divider, Form, Input, message, theme } from 'antd';
import * as yup from 'yup';

import { Container } from '@src/components/ui/Container';
import formSubmit from '@src/utils/formSubmit';

function LoginForm() {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    let schema = yup.object().shape({
        email: yup.string().email('Please enter a valid email').required('Please enter email'),
        password: yup.string().required('Please enter password'),
    });
    const messages = {
        wait: 'Please wait, we are letting you in...',
        error: 'You entered a wrong email or password, or the user may not exist or not confirmed.'
    };
    const [submit, yupSync] = formSubmit('/api/auth/login', schema, messages, messageApi);
    const {
        token: { colorPrimaryTextActive },
    } = theme.useToken();
    const query = window.location.search;
    // Google Auth
    const handleGoogleSuccess = async (credentialResponse) => {
        const token = credentialResponse.credential;
        // Send token to backend for login
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ socialProvider: 'google', socialToken: token })
        });
        const data = await res.json();
        if (data.result) {
            window.location.href = data.redirect || '/';
        } else {
            messageApi.error(data.error || 'Google login failed');
        }
    };
    useEffect(() => {
        // Get Google client ID from global variable (set by Flask/Jinja)
        const clientId = window.googleClientId || (window.social_logins_data && window.social_logins_data.google && window.social_logins_data.google.client_id);
        if (!clientId) return;
        // Load Google script if not already loaded
        if (!window.google || !window.google.accounts || !window.google.accounts.id) {
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                renderGoogleButton();
            };
            document.body.appendChild(script);
        } else {
            renderGoogleButton();
        }
        function renderGoogleButton() {
            if (window.google && window.google.accounts && window.google.accounts.id && clientId) {
                window.google.accounts.id.initialize({
                    client_id: clientId,
                    callback: handleGoogleSuccess,
                });
                window.google.accounts.id.renderButton(
                    document.getElementById('google-signin-btn'),
                    { theme: 'outline', size: 'large' }
                );
            }
        }
    }, []);
    return <>
        {contextHolder}
        <Container center>
            <span className="form-title" style={{ color: colorPrimaryTextActive }}>Please sign in</span>
        </Container>
        {window.googleClientId || (window.social_logins_data && window.social_logins_data.google && window.social_logins_data.google.client_id) ? (
            <Container center mt="sm">
                <div  className="mb-20">
                    <div id="google-signin-btn"></div>
                </div>
                <div className="mt-20 mb-20">
                    or sign in with email
                </div>
            </Container>
        ) : null}
        <Form
            form={form}
            layout="vertical"
            onFinish={submit}
            size="large"
        >
            <Form.Item label="Email" name="email" rules={[yupSync]}>
                <Input placeholder="yourname@email.com" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[yupSync]}>
                <Input.Password />
            </Form.Item>
            <Container right pb={10}>
                <Link to="/auth/forgot">Forgot password?</Link>
            </Container>
            <Container center>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Container>
        </Form>
        <Container center>
            Don't have account yet?
        </Container>
        <Container center mt="sm">
            <Link className="bottom-link" to={`/auth/register${query}`}>Sign up here</Link>
        </Container>
        {/* Google button is rendered by useEffect if client ID is present */}
    </>;
}
export default LoginForm;