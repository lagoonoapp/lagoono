import React, { useState } from 'react';
import { Image, Input, Progress, Space, Tabs, Upload } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import ImgCrop from 'antd-img-crop';
import axios from 'axios';

/* Allows entering an image URL or upload it. 
    - shape: 'cirle' or 'card'
*/

export const ImageLinkUpload = ({titleEnterUrl, customImageUrl, uploadImageUrl, placeholderImageUrl, 
                                    apiUploadUrl, onCustomUrlChange, onUploadUrlChange, shape})=>{
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

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
        console.log(customImageUrl)
        onCustomUrlChange(newUrl); 
        if (newUrl){
            onUploadUrlChange('');
        }
    };
    const tabs = [
        {
            key: 'url', label: titleEnterUrl || 'Enter an image URL',
            children: <div className="custom-image-url">
                <Space 
                    className="w-50"
                    direction="vertical"
                    size="middle">
                    <Input value={customImageUrl} onChange={(e)=>changeCustomUrl(e.target.value)} placeholder="Image URL"/>
                    <img className={shape || 'circle'} 
                                src={customImageUrl || placeholderImageUrl || '/static/images/image-placeholder.png'}/>
                </Space>
            </div>
        },
        {
            key: 'upload', label: 'Upload a file',
            children: <>
                <div className="mb-10">Click here, select a file, then you can crop, scale, and rotate before uploading it.</div>
                    <ImgCrop rotationSlider>
                        <Upload 
                            className="userpic-block"
                            maxCount={1}
                            listType={shape && shape == 'card' ? 'picture-card': 'picture-circle'}
                            onChange={onImageChange}
                            customRequest={uploadImage}
                            showUploadList= {{
                                showPreviewIcon: false,
                                showRemoveIcon: uploadImageUrl != null && uploadImageUrl != '',
                                removeIcon: <CloseCircleOutlined onClick={() => onUploadUrlChange('')} title="Remove image" />}
                            }
                            fileList={uploadImageUrl ? [{url: uploadImageUrl}]: []}
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
                    <div>
                    {uploading ? <div className="progress-bar-item">
                                    {progress > 0 ? <Progress percent={progress} /> : null}
                                </div>: null}
                    </div>
            </>
        }
    ];
    return (<>
        <Tabs items={tabs}/>
    </>);
}