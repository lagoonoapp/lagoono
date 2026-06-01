import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Alert } from 'antd';

import axios from 'axios';
import { Container } from '@src/components/ui/Container';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';


function FinishRegistration() {
    const params = useParams();
    const [error, setError] = useState('');
    const [state, setState] = useState('');
    const resendLink = <Link to="#" onClick={(e)=>resendConfirm(e)} className="underline">resend</Link>;
    const resendConfirm = async (e) => {
        e.stopPropagation();
        let response = null;
        if (!params || !params.userId){
            setError(['Please provide a valid confirmation link.']);
        }
        setState('progress');
        try {
            response = await axios.get(`/api/auth/resendconfirm/${params.userId}`);
            const error = AuthUIFunctions.handleResponse(response);
            if (error && error.length){
                setError(error);
            } else {
                setState('done');
            }
        } catch (ex) {
            console.log('Exception occured trying to send the user confirmation');
            console.log(ex);
            setState('error');
            setError([<>Some error occured during this request... please {resendLink} again.</>]);
        }
    }
    return (
        <>
            <Container center><h4>Please confirm your email</h4></Container>
            {state == 'progress'? 
                <Alert
                    message="Please wait"
                    description="The confirmation is in progress..."
                    type="info"
                    showIcon
                />: null}
            {state==''?
                <Alert
                    message="Email sent"
                    description={<><p>Thanks for the registration! We've sent you email to be confirmed.</p>
                    <p>If for some reason you didn't get a confirmation email please&nbsp;
                    {resendLink} it.</p></>}
                    type="success"
                    showIcon
                />:null}
            {state=='done'?
                <Alert
                    message="Email recent"
                    description={<><p>We've resent you email to be confirmed.</p>
                    <p>If for some reason you still didn't get a confirmation email please&nbsp;
                    {resendLink} it.</p></>}
                    type="success"
                    showIcon
                />:null}
        </>
    );
}
export default FinishRegistration;