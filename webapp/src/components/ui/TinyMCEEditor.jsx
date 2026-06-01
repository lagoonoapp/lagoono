import React, { lazy, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Avatar, Button, Card, Checkbox, Col, Divider, Form, Input, List, Modal, notification, Row, Space, Tabs, 
                theme, Tooltip } from 'antd';

import {  CaretDownOutlined, CaretUpOutlined, DislikeOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { AuthUIFunctions } from '@src/utils/AuthUIFunctions';
import { commonFunctions } from '@src/utils/commonFunctions';

import { Container } from '@src/components/ui/Container';
import { InfoIcon } from '@src/components/ui/InfoIcon';
import { Loader } from '@src/components/ui/Loader';

const TinyMCEEditor = (props)=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { onChange, menubar, options = {}} = props;
    //let initOptions = Object.assign({}, defaultOptions, options);
    const editorRef = useRef(null);
    const [value, setValue] = useState(props.value || '');
    const notify = useSelector((state) => state.notify);
    const [editorLoading, setEditorLoading] = useState(true);


    ////@@ This is for updating the initial value and then when it's changec

    useEffect(() => {
        if (editorRef.current && props.value !== value) {
            // Only update if the editor content is different from props.value
            const currentContent = editorRef.current.getContent();
            if (currentContent !== props.value) {
                editorRef.current.setContent(props.value || '');
                setValue(props.value || '');
            }
        } else {
            if (!editorRef.current && props.value !== value){
                editorRef.current = props.value;
                setValue(props.value || '');
            }
        }
    }, [props.value, value]);

    ////@@ End of the block

    const handleEditorChange = (val) =>{
        setValue(val);
        if (props.onChange){
            props.onChange(val);
        }
    }
    const uploadImage = (blobInfo, progress)=>{
        return new Promise((resolve, reject) => {
            //notify.show('load', 'Uploading...', 'uploadImage')
            try {    
                let formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
    
                const generateFlag = props.picIdGenerated != null ? props.picIdGenerated : 'generate', 
                    folder = props.picFolderName != null ? props.picFolderName : 'boardpics';
    
                const config = {
                    onUploadProgress: function(progressEvent) {
                        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        progress(percentCompleted)
                    }
                }

                axios.post(`/api/app/upload/${generateFlag}/${folder}`, formData, config)
                    .then(response=>{
                        //notify.close('uploadImage');
                        if (response.data.result){
                            if (props.finishedImageUpload){
                                props.finishedImageUpload();
                            }
                            resolve(response.data.file_urls[0]);
                        }
                    }, response=>{
                        reject(response.data.error || 'Some error during uploading the image...');
                    }); 
            } catch (e){
                //notify.close('uploadImage');
                reject('Some error during uploading the image...');
            }

/*
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', 'postAcceptor.php');
          
            xhr.upload.onprogress = (e) => {
              progress(e.loaded / e.total * 100);
            };
          
            xhr.onload = () => {
              if (xhr.status === 403) {
                reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
                return;
              }
          
              if (xhr.status < 200 || xhr.status >= 300) {
                reject('HTTP Error: ' + xhr.status);
                return;
              }
          
              const json = JSON.parse(xhr.responseText);
          
              if (!json || typeof json.location != 'string') {
                reject('Invalid JSON: ' + xhr.responseText);
                return;
              }
          
              resolve(json.location);
            };
          
            xhr.onerror = () => {
              reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
            };
          
            const formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
          
            xhr.send(formData);*/
          });
    };
    const plugins = props.short ? ['image', 'help', 'wordcount', 'link', 'autolink'] : [
                        'advlist', 'link', 'autolink', 'lists', 'image', 'charmap',  'preview', 'anchor',
                        'searchreplace', 'visualblocks', 'codesample ', 'fullscreen',
                        'insertdatetime', 'media', 'table',  'code', 'help', 'wordcount'
                    ]
    const toolbar = props.short ? 'undo redo | formatselect | bold italic backcolor | link | image | help':
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | preview link image codesample | ' +
                    'removeformat | help';
    return  <>
                <Loader show={editorLoading} />
                <Editor
                key={props.id || ''} ////@@ Maybe it affects
                apiKey=''
                tinymceScriptSrc='/static/js/tinymce/tinymce.min.js'
                onInit={(evt, editor) => {
                    editorRef.current = editor;
                    setEditorLoading(false);
                }}
                onBlur={props.onBlur || null}
                value={value}
                onEditorChange={ handleEditorChange }
                init={{
                    license_key: 'gpl',
                    height: props.short ? 200 : 500,
                    menubar: false,
                    plugins: plugins,
                    toolbar: toolbar,
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } img { max-width: 100%; height: auto; }',
                    image_title: true,
                    /* enable automatic uploads of images represented by blob or data URIs*/
                    automatic_uploads: true,
                    image_dimensions: false,
                    /*
                      URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                      images_upload_url: 'postAcceptor.php',
                      here we add custom filepicker only to Image dialog
                    */
                    //images_upload_url: `/api/app/upload/${generateFlag}/${folder}`,
                    images_upload_handler: uploadImage,
                    file_picker_types: 'image',
                    file_picker_callback: function (cb, value, meta) {
                        var input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');
                    
                        /*
                          Note: In modern browsers input[type="file"] is functional without
                          even adding it to the DOM, but that might not be the case in some older
                          or quirky browsers like IE, so you might want to add it to the DOM
                          just in case, and visually hide it. And do not forget do remove it
                          once you do not need it anymore.
                        */
                    
                        input.onchange = function () {
                            var file = this.files[0];
                        
                            var reader = new FileReader();
                            reader.onload = function () {
                                /*
                                Note: Now we need to register the blob in TinyMCEs image blob
                                registry. In the next release this part hopefully won't be
                                necessary, as we are looking to handle it internally.
                                */
                                var id = 'blobid' + (new Date()).getTime();
                                var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                                var base64 = reader.result.split(',')[1];
                                var blobInfo = blobCache.create(id, file, base64);
                                blobCache.add(blobInfo);
                        
                                /* call the callback and populate the Title field with the file name */
                                cb(blobInfo.blobUri(), { title: file.name });
                            };
                            /*reader.onload = function(e){
                                src.push(e.target.result);
                                files.push({index: src.length - 1, file: self.fileInput.current.files[index]});
                                filesNumber -= 1;
                                if (filesNumber == 0){
                                    // Clear up the file uploader input
                                    self.files = self.files.concat(files);
                                    self.fileInput.current.value = '';
                                    self.setState({src: src, filesChanged: true});
                                }
                            }*/
                            reader.readAsDataURL(file);
                        };
                    
                        input.click();
                    },
                    paste_data_images: true,
                    document_base_url: location.origin + '/',
                    relative_urls: false,
                    remove_script_host: true,
                    image_caption: true,
                    pagebreak_split_block: true,
                    default_link_target:'_blank'
                }}
            /></>;
};
export default TinyMCEEditor;