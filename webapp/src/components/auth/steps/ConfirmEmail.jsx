import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';

import { Alert, theme } from 'antd';

import axios from 'axios';
import { Container } from '@src/components/ui/Container';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';

export default function ConfirmEmail(){
    const params = useParams();
    const [error, setError] = useState('');
    const [state, setState] = useState('progress');
    const resendLink = <Link to="#" onClick={(e)=>resendConfirm(e)} className="underline">resend</Link>;
    useEffect(() => {
        confirm();
    }, []);
    const {
        token: { colorPrimaryTextActive },
    } = theme.useToken();
    const confirm = async()=> {
        try {
            let response = null;
            if (!(params && params.userId && params.token)){
                setError(['Please provide a valid confirmation link.']);
            }
            response = await axios.get(`/api/auth/confirm/${params.token}/${params.userid}`);
            setState('');
            const error = AuthUIFunctions.handleResponse(response);
            let errorMessage = [];
            if (error && response.data.code){
                switch(response.data.code){
                    case 'expired':
                        errorMessage = [<React.Fragment key="expired"><p>It looks like your link is expired. We've resent you email to be confirmed.</p>
                                        </React.Fragment>];
                        break;
                    case 'nouser':
                        errorMessage = [<React.Fragment key="nouser"><p>We can't find such a user.</p>
                        <p>You probably didn't create your account yet. Please <a href="/auth/register" className="underline">sign up here</a>.</p></React.Fragment>];
                        break;
                }
            } else {
                errorMessage = [error];
            }
            if (error && error.length){
                setError(errorMessage);
            }
            if (response.data.result){
                setState('done');
                setTimeout(()=>window.location.href = '/auth/login', 5000);
            } else {
                setState('error');
            }
        } catch(ex) {
            console.log(ex)
            setError(['Some error occured during this request... please try again.']);
        }
    }
    //confirm();
    return (
        <>
            <Container center>
                <span className="form-title" style={{color: colorPrimaryTextActive}}>
                    {state != 'done'? 'Confirming your email': 'Confirmation finished!'}</span>
            </Container>
            {state == 'progress'? <Alert
                    message="Please wait"
                    description="Please wait... we are confirming your email..."
                    type="info"
                    showIcon
                />: null}
            {state=='done'?
                <Alert
                    message="Please wait"
                    description={<p>Done! You will be redirected to the Login page in 5 seconds or 
                    &nbsp;<a href="/auth/login" className="underline">click the link</a>.</p>}
                    type="success"
                    showIcon
                />:null}
            {state=='error'?<Alert
                    message="Please wait"
                    description={error}
                    type="error"
                    showIcon
                />:null}
        </>
    );
}