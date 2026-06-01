import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Col, Divider, Form, Input, message, Progress, Row, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { LoadingOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';

import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';
import { commonFunctions } from '@src/utils/commonFunctions';
import { Container } from '@src/components/ui/Container';

function ProfileForm(props) {
    const dispatch = useDispatch();
    const accountData = useSelector((state) => state.accountData);
    const prevProfile = useRef();
    const [profileData, setProfileData] = useState({username: ''});
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');
    const [state, setState] = useState('');
    const notify = useSelector((state) => state.notify);
    const [form] = Form.useForm();
    const [defaultFileList, setDefaultFileList] = useState([]);
    const [progress, setProgress] = useState(0);

    const [fileList, setFileList] = useState([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: '/static/images/userpic.png',
        },
      ]);
    useEffect(() => {
        loadInitialData();
    }, []);

    useEffect(() => {
        if (profileData){
            if (!prevProfile.current){
                prevProfile.current = profileData;
            }
            form.resetFields();
            form.setFieldsValue(profileData);
        }
    }, [profileData]);

    const loadInitialData = async ()=>{
        let response = null;
        setState('progress');
        
        /*setTimeout(()=>{ 
        setState(() => {
          throw new Error('Sommething wrong');
        })}, 1000);*/

        try {
            response = await axios.get('/api/app/userprofile');
            if (response.data.result){
                setProfileData(response.data.item);
            } else {
                notify.show('error', 'Could not obtain your profile for some reason...');
            }
        } catch(ex) {
            console.log('Exception occured trying to send the resetting password request');
            console.log(ex);
            notify.show('error', 'Could not obtain your profile for some reason...');
        }
    }
    const submitData = async (data)=>{
        let response = null;
        notify.show('load', 'Please wait while we are updating your profile...', 'saveProfile')
        try {
            response = await axios.post('/api/app/userprofile', data);
            notify.close('saveProfile');
            if (response.data.result){
                notify.show('success', 'Your profile has been saved.', 'saveProfileSuccess', 15);
            } else {
                notify.show('error', 'Could not save your profile for some reason...')
            }
        } catch(ex) {
            console.log('Exception occured trying to send the resetting password request');
            console.log(ex);
            notify.show('error', 'Some error occured while saving your profile...')
        }
    };
    const uploadImage = async(onSuccess, onError, file, onProgress )=>{
            try {    
                let formData = new FormData();
                formData.append('image', file); //blobInfo);// 'file', blobInfo.blob(), blobInfo.filename());
                const response = await axios.post(`/api/app/userprofile/uploaduserpic`, formData);
                if (response.data.result){
                    setProfileData({...profileData, userpic_url: response.data.url})
                } else {
                    // 
                }
            } catch (e){
                //notify.close('uploadImage');
                console.log(e)
                notify.show('error', 'Could not upload your picture for some reason...')
            }
    };
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
    };
    const uploadButton = (
        <button
          style={{
            border: 0,
            background: 'none',
          }}
          type="button"
        >
          {uploading ? <LoadingOutlined /> : <PlusOutlined />}
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </button>
      );
    const onUserpicChange = (info)=>{
        console.log(info.file.status);
        if (info.file.status === "uploading") {
          setUploading(true);
          return;
        }
        if (info.file.status === "done") {
            setUploading(false);
          // Get this url from response in real world.
            /*getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });*/
        }
    };
    const onUserpicPreview = ()=>{};
    const onCrop = (data)=>{

    };
    const uploadImage2 = async options => {
        const { onSuccess, onError, file, onProgress } = options;
    
        const fmData = new FormData();
        const config = {
          headers: { "content-type": "multipart/form-data" },
          onUploadProgress: event => {
            const percent = Math.floor((event.loaded / event.total) * 100);
            setProgress(percent);
            if (percent === 100) {
              setTimeout(() => setProgress(0), 1000);
            }
            onProgress({ percent: (event.loaded / event.total) * 100 });
          }
        };
        fmData.append("image", file);
        try {
          const response = await axios.post(
            "/api/app/userprofile/uploaduserpic",
            fmData,
            config
          );
          if (response.data.result){
            setProfileData({...profileData, userpic_url: `${response.data.url}?${Math.random().toString(36)}`})
        } else {
            // 
        }
    
          onSuccess("Ok");
          //console.log("server res: ", res);
        } catch (err) {
          console.log("Eroor: ", err);
          const error = new Error("Some error");
          onError({ err });
        }
      };
    return (
        <Container p="md" h100> 
            <Row>
                <Col span={16} offset={2}>
                    <h2>User profile</h2>
                    <h3>Your email</h3>
                    <div>{accountData ? accountData.email: 'Loading...'}</div>

                    <h3>Your profile</h3>
                    <Form 
                        form={form}
                        onFinish={submitData} 
                        initialValues={profileData} 
                        layout="vertical">
                        <Form.Item name="username" label="Username" rules={[
                                    {
                                        required: true,
                                    },
                                    {
                                        type: 'string',
                                        min: 2,
                                        max: 200
                                    },
                                ]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="userpic_url" 
                            label={<div>User picture<div className="form-item-note mb-10">click to upload a new picture, crop and scale are available</div></div>}>
                            <ImgCrop rotationSlider onModalOk={onCrop}>
                                <Upload 
                                    className="userpic-block"
                                    maxCount={1}
                                        showUploadList={false}
                                        listType="picture-circle"
                                        onChange={onUserpicChange}
                                        onPreview={onUserpicPreview}
                                        customRequest={uploadImage2}
                                    >
                                    {profileData.userpic_url ? (
                                        <img
                                            src={profileData.userpic_url}
                                            alt="avatar"
                                            style={{
                                            width: '100%',
                                            }}
                                        />
                                        ) : (
                                        <img src='/static/images/userpic.png'/>
                                        )}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                        {uploading ? <Form.Item className="progress-bar-item">
                            {progress > 0 ? <Progress percent={progress} /> : null}
                        </Form.Item>: null}
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Save profile</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default ProfileForm;