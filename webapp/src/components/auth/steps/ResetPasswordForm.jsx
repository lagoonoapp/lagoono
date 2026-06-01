import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Alert, Button, Form, Input, message } from 'antd';
import * as yup from 'yup';

import { Container } from '@src/components/ui/Container';
import formSubmit from '@src/utils/formSubmit';

function ResetPasswordForm() {
    const [messageApi, contextHolder] = message.useMessage();
    const params = useParams();
    const [state, setState] = useState('');
    
    const [form] = Form.useForm();

    let schema = yup.object().shape({
        password: yup.string().required('Please enter password'),
        confirmPassword: yup.string()
                    .required('Please re-enter password')
                    .test('passwords-match', 'Password and confirmation must match', function(value){
                        return form.getFieldValue('password') === value
                    })
    });

    const messages = {
        wait: 'Please wait, we are saving your new password..',
        error: <>Your token probably expired. Please <a href="/auth/forgot" className="underline">get a new one</a>.</>,
        success: 'Done!'
    };
    const [submit, yupSync] = formSubmit('/api/auth/resetpassword', schema, messages, messageApi, ()=>setState('done'));

    return (
        <>
            {contextHolder}
            <Container center><h4>Reset password</h4></Container>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={submit}
                    >
                    <Form.Item label="A new password" name="password" rules={[yupSync]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="Confirm your new password" name="confirmPassword" rules={[yupSync]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="userid" hidden initialValue={params.userid}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="token" hidden initialValue={params.token}>
                        <Input />
                    </Form.Item>
                    <Container center>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Container>
                </Form>
                <Container center>
                    <Link to="/auth/login">Sign in here</Link>
                </Container>
                {state == 'done'?<Alert
                    message="Success"
                    description={<>You reset your password successfully! You will be redirected to the login page in 3 seconds. 
                                    If not, please click <Link to="/auth/login" className="underline">the link</Link>.
                                </>}
                    type="success"
                    showIcon
                />: null}
        </>
    );
}
export default ResetPasswordForm;