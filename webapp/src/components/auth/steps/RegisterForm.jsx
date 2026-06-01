import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Checkbox, Divider, Form, Input, message, theme } from 'antd';
import * as yup from 'yup';

import { Container } from '@src/components/ui/Container';
import formSubmit from '@src/utils/formSubmit';


function RegisterForm() {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [agreed, setAgreed] = useState(false);

    let schema = yup.object().shape({
        username: yup.string().max(120, 'Your name is too big, a maximal length is 120 symbols').required('Please enter your name or a nickname'),
        email: yup.string().email('Please enter a valid email').required('Please enter email'),
        password: yup.string().required('Please enter password'),
        confirmPassword: yup.string()
                    .required('Please re-enter password')
                    .test('passwords-match', 'Password and confirmation must match', function(value){
                        return form.getFieldValue('password') === value
                    })
    });

    const messages = {
        wait: 'Please wait, we are creating a new account...',
        error: 'Something went wrong during this request. Maybe this account already exists, if so try to login instead.'
    };
    const [submit, yupSync] = formSubmit('/api/auth/register', schema, messages, messageApi);
    const {
        token: { colorPrimaryTextActive },
    } = theme.useToken();
    const agreeBox = <span>By clicking submit you agree with our <a href="https://www.lagoono.com/terms">
        Terms Of Use</a> and <a href="https://www.lagoono.com/privacy">
            Privacy Policy</a>.</span>
    const changeAgree = (value)=>{
        setAgreed(value);
    }
    const query = window.location.search;
    // Google Auth
    const handleGoogleSuccess = async (credentialResponse) => {
        const token = credentialResponse.credential;
        // Send token to backend for registration
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ socialProvider: 'google', socialToken: token })
        });
        const data = await res.json();
        if (data.result) {
            window.location.href = data.redirect || '/';
        } else if (data.code === 'exists') {
            messageApi.error('Account already exists. Please sign in.');
        } else {
            messageApi.error(data.error || 'Google sign up failed');
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
                    document.getElementById('google-signup-btn'),
                    { theme: 'outline', size: 'large', text: 'signup_with' }
                );
            }
        }
    }, []);
    return <>
        {contextHolder}
        <Container center>
            <span className="form-title" style={{ color: colorPrimaryTextActive }}>Please sign up</span>
        </Container>
        {window.googleClientId || (window.social_logins_data && window.social_logins_data.google && window.social_logins_data.google.client_id) ? (
            <Container center mt="sm">
                <div className="mb-20">
                    <div id="google-signup-btn"></div>
                </div>
                <div className="mt-20 mb-20">
                    or sign up with email
                </div>
            </Container>
        ) : null}
        <Form
            form={form}
            layout="vertical"
            onFinish={submit}
            size="large"
        >
            <Form.Item label="Username" name="username" rules={[yupSync]}>
                <Input placeholder="Your name or a nickname" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[yupSync]}>
                <Input placeholder="yourname@email.com" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[yupSync]}>
                <Input.Password />
            </Form.Item>
            <Form.Item label="Confirm your password" name="confirmPassword" rules={[yupSync]}>
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Checkbox onChange={(e) => changeAgree(e.target.checked)}>{agreeBox}</Checkbox>
            </Form.Item>
            <Container right pb={10}>
                <Link to="/auth/forgot">Forgot password?</Link>
            </Container>
            <Container center>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={!agreed}>Submit</Button>
                </Form.Item>
            </Container>
        </Form>
        <Container center>
            Already have an account?
        </Container>
        <Container center mt="sm">
            <Link to={`/auth/login${query}`} className="bottom-link">Sign in here</Link>
        </Container>
        {/* Google button is rendered by useEffect if client ID is present */}
    </>;
}
export default RegisterForm;