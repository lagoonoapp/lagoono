import { message } from 'antd';
import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';
import { commonFunctions } from '@src/utils/commonFunctions';

/**
* Function to validate and submit AntDesign form. It handles the request
* Input parameters: 
* @param url the POST url that should be sent
* @param schema the Yup schema used for the form validation
* @param messageObject an object with default messages {wait: string, error: string}
* @param callbackOk the function to be called on form send success
* @param callbackFail the function to be called on form send failure
*/
const formSubmit = (url, schema, messageObject, messageApi, callbackOk, callbackFail) => {

    const success = ({content, key, duration}) => {
      messageApi.open({
        key: key,
        type: 'success',
        content: content,
        duration: duration != null ? duration: 0
      });
    };
    const error = ({content, key, duration}) => {
      messageApi.open({
        key: key,
        type: 'error',
        content: content,
        duration: duration != null ? duration: 0
      });
    };
    const warning = ({content, key, duration}) => {
      messageApi.open({
        key: key,
        type: 'warning',
        content: content,
        duration: duration != null ? duration: 0
      });
    };
    const loading = ({content, key, duration}) => {
        messageApi.open({
            key: key,
            type: 'loading',
            content: content,
            duration: duration != null ? duration: 0
        });
    }

    const messageId = commonFunctions.generateShortId();

    const yupSyncFunction = {
        async validator({ field }, value) {
            await schema.validateSyncAt(field, { [field]: value });
        },
    };
    
    const submit = async (data)=>{
        //setState('progress');
        loading({
            content: messageObject && messageObject.wait ? messageObject.wait: 'Please wait...',
            key: 'loading',
            duration: 0
        });
        let response = null;
        const query = window.location.search.replace('?','');
        if (query){
            data.query = query;
        }
        try {
            response = await axios.post(url, data);
            messageApi.destroy('loading');
            const errorMessage = AuthUIFunctions.handleResponse(response);
            if (errorMessage){
                error({content: (messageObject.error || errorMessage)});
                /*message.error({
                    content: messageObject.error || errorMessage,
                    key: messageId, 
                    duration: 15
                });*/
            } else {
                if (messageObject.success){
                    success({
                        content: messageObject.success,
                        key: messageId, 
                        duration: 0
                    });
                }
                if (callbackOk){
                    callbackOk();
                }
            }
        } catch(ex) {
            console.log('Exception occured trying to send the register request');
            console.log(ex);
            const errorMessage = AuthUIFunctions.handleResponse(response);
            error({
                content: errorMessage || (messageObject && messageObject.error ? messageObject.error: 'Error'),
                key: messageId, 
                duration: 0
            });
            if (callbackFail){
                callbackFail();
            }
        }
    };

    return [submit, yupSyncFunction];
}

export default formSubmit;