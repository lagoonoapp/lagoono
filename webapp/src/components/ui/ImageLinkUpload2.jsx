import React, { useState } from 'react';
import { Button, Col, Image, Input, Progress, Radio, Row, Space, Upload } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import ImgCrop from 'antd-img-crop';
import axios from 'axios';

/* Allows entering an image URL or upload it. 
    - shape: 'cirle' or 'card'
*/

export const ImageLinkUpload2 = ({titleEnterUrl, imageSourceFlag, customImageUrl, uploadImageUrl, placeholderImageUrl, 
                                    apiUploadUrl, onImageSourceFlagChange, onCustomUrlChange, onUploadUrlChange, shape})=>{
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    //imageSourceFlag = imageSourceFlag || 'url';

    const onImageChange = (info)=>{
        console.log(info.file.status);
        if (info.file.status === "uploading") {
          setUploading(true);
          return;
        }
        if (info.file.status === "done") {
            setUploading(false);
        }
    };
    const uploadImage = async options => {
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
                apiUploadUrl, //"/api/app/userprofile/uploaduserpic",
                fmData,
                config
            );
            if (response.data.result){
                onUploadUrlChange(`${response.data.url}?${Math.random().toString(36)}`);
                /*setTimeout(() => {
                    onCustomUrlChange('');
                }, 500); */
                //setProfileData({...profileData, userpic_url: `${response.data.url}?${Math.random().toString(36)}`})
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
    const handlePreview = ()=>{};
    const uploadButton = (
        <button
            className="upload-button"
            type="button"
        >
          <img src={placeholderImageUrl || '/static/images/image-placeholder.png'}/>
          <div
          >
            Select image
          </div>
        </button>
      );
    const changeCustomUrl = (newUrl)=>{
        onCustomUrlChange(newUrl); 
    };

    const placeholderUrl = (placeholderImageUrl || '/static/images/image-placeholder.png')
    const imageSourceUrl = imageSourceFlag ? (imageSourceFlag == 'url' ? 
                                                (customImageUrl || placeholderUrl): 
                                                (uploadImageUrl || placeholderUrl)) 
                            : placeholderUrl;
    return (<>
            <Row>
                <Col span={10}>
                    <Radio.Group onChange={(e)=>onImageSourceFlagChange(e.target.value)} value={imageSourceFlag}>
                        <Space direction="vertical" size="large">
                            <div>
                                <Radio value="url">{titleEnterUrl || 'Enter an image URL'}</Radio>
                                {imageSourceFlag == 'url' ?
                                    <div>
                                        <Input value={customImageUrl} onChange={(e)=>changeCustomUrl(e.target.value)} placeholder="Image URL"/>
                                    </div>: 
                                null}
                            </div>
                            <Radio value="upload">Click here to upload a file, then you can crop, scale, and rotate before uploading it.</Radio>
                            
                            {/* <Radio value="base64"></Radio> */}
                        </Space>
                    </Radio.Group>
                </Col>
                <Col span={10} offset={4}>
                    {!imageSourceFlag || imageSourceFlag == 'url' || (imageSourceFlag && imageSourceFlag != 'upload') ?
                        <img className={`custom-image-url ${shape || 'circle'}`} src={imageSourceUrl}/>:
                        <div>
                                <ImgCrop rotationSlider fillColor="transparent">
                                    <Upload 
                                        className="userpic-block"
                                        maxCount={1}
                                        listType={shape && shape == 'card' ? 'picture-card': 'picture-circle'}
                                        onChange={onImageChange}
                                        customRequest={uploadImage}
                                        showUploadList={false}
                                        >
                                            {uploadImageUrl ? null: uploadButton}
                                        {/*<img className="max-w-100" 
                                            src={uploadImageUrl || customImageUrl || placeholderImageUrl || '/static/images/image-placeholder.png'}/>*/}
                                        {/*uploadImageUrl ? (
                                            <img className="max-w-100"
                                                src={uploadImageUrl}
                                            />
                                            ) : (
                                            <img className="max-w-100" src={placeholderImageUrl || '/static/images/image-placeholder.png'}/>
                                            )*/}
                                    </Upload>
                                </ImgCrop>
                                {uploadImageUrl ? <div className="image-block">
                                                <img src={uploadImageUrl}/>
                                                <div>
                                                    <Button type="default" 
                                                        onClick={() => onUploadUrlChange('')} title="Clear image">Clear image</Button>
                                                </div>
                                            </div>: null}
                            </div>
                    }
                </Col>
            </Row>
    </>);
}