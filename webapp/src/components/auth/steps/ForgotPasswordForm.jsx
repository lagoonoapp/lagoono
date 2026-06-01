import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Divider, Form, Input, message } from 'antd';
import * as yup from 'yup';

import { Container } from '@src/components/ui/Container';
import formSubmit from '@src/utils/formSubmit';

function ForgotPasswordForm() {
    const [messageApi, contextHolder] = message.useMessage();
    const [state, setState] = useState('');
    
    const [form] = Form.useForm();

    let schema = yup.object().shape({
        email: yup.string().email('Please enter a valid email').required('Please enter email')
    });

    const messages = {
        wait: 'Please wait, we are sending you the link to reset your password...',
        success: 'If your accout exists, we\'ll sent your the link to reset your password.'
    };
    const [submit, yupSync] = formSubmit('/api/auth/forgot', schema, messages, messageApi, ()=>setState('done'));
    return (
        <>
            {contextHolder}
            <Container center><h4>Forgot my password</h4></Container>
            <Form
                form={form}
                layout="vertical"
                onFinish={submit}
                >
                <Form.Item label="Email" name="email" rules={[yupSync]}>
                    <Input placeholder="yourname@email.com" />
                </Form.Item>
                <Container center>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Container>
            </Form>
            {state == 'done'?<Alert
                    message="Request sent"
                    description={<>Your request has been sent. If such email exists in our system, you will get 
                        an email with the link for changing password. If you don't have an account yet 
                        please <Link to="/auth/register" className="underline">sign up here</Link>.</>}
                    type="success"
                    showIcon
                />: null}
        </>
    );
}
export default ForgotPasswordForm;