import React, { Component } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

// Import TinyMCE
import tinymce from 'tinymce/tinymce';

// Default icons are required for TinyMCE 5.3 or above
import 'tinymce/icons/default';

// A theme is also required
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
import 'tinymce/skins/ui/oxide/skin.min.css';

//import Prism from 'prismjs';

//import contentStyle from 'tinymce/skins/ui/oxide/content.min.css'
//from  'tinymce/skins/ui/oxide/content.min.css';
//import 'tinymce/skins/content/default/content.min.css';



// Any plugins you want to use has to be imported
/*advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ], */
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/table';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/help';
import 'tinymce/plugins/codesample';

import contentCss from '!!raw-loader!tinymce/skins/content/default/content.min.css';
import contentUiCss from '!!raw-loader!tinymce/skins/ui/oxide/content.min.css';
import tinyCustomCss from '!!raw-loader!./tinyMCEStyles.css';


//import './prism/prism.js';
//import prismCSS from '!!raw-loader!./prism/prism.css';


class TextEditor  extends Component {
    constructor(props) {
        super(props);
            
        this.state = {
            value: props.value || '' ,
            imageLoading: false
        };
        this.editorRef = React.createRef();
    }
    log = ()=>{
        if (this.editorRef.current) {
            console.log(this.editorRef.current.getContent());
        }
    };
    /*handleEditorChange = ()=>{
        const value = this.editorRef.current.getContent();
        if (this.props.onChange){
            this.props.onChange(value);
        }
    }*/
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.setState({ value: this.props.value || '' })
        }
        /*const prevValue = this.editorRef.current.getContent();
        if (this.props.value != null && this.props.value != prevValue){
            this.setState({ value: this.props.value || '' });
        }*/
    }
    handleEditorChange = (value, editor) =>{
        this.setState({ value });
        if (this.props.onChange){
            this.props.onChange(value);
        }
    }
    uploadImage = async(blobInfo, success, failure, progress)=>{
        const self = this;
        self.setState({ status: 'info', message: 'Uploading...' });
        try {

            let formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());

            const generateFlag = self.props.picIdGenerated, 
                folder = self.props.picFolderName;

            axios.post(`/dashboard/api/upload/${generateFlag}/${folder}`, formData)
                .then(response=>{
                    if (response.data.result){
                        success(response.data.file_urls[0]);
                    }
                }, response=>{
                    failure(response.data.error || 'Some error during uploading the image...');
                }); 
        } catch (e){
            failure('Some error during uploading the image...');
        }
    }
    render(){
        const self = this;
        const height = this.props.height || 500;
        return (
            <>
            <Editor
                onInit={(evt, editor) => this.editorRef.current = editor}
                
                value={this.state.value}
                onEditorChange={this.handleEditorChange}
                init={{
                    height: height,
                    default_link_target:"_blank",
                    menubar: true,
                    image_dimensions: true,
                    formats: {
                        noteFormat: { block: 'div', attributes: { title: 'Note'} , classes: 'note-block'}
                    },
                    style_formats: [
                        { title: 'Note', format: 'noteFormat' }
                    ],
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks fullscreen',
                        'insertdatetime media table paste code help codesample'
                    ],
                    skin: false,
                    codesample_global_prismjs: true,
                    //content_style: contentStyle,
                    codesample_languages: [
                        { text: 'HTML/XML', value: 'markup' },
                        { text: 'JavaScript', value: 'javascript' },
                        { text: 'CSS', value: 'css' },
                        { text: 'PHP', value: 'php' },
                        { text: 'Ruby', value: 'ruby' },
                        { text: 'Python', value: 'python' },
                        { text: 'Java', value: 'java' },
                        { text: 'C', value: 'c' },
                        { text: 'C#', value: 'csharp' },
                        { text: 'C++', value: 'cpp' }
                    ],
                    toolbar: 'undo redo | formatselect | codesample code | link image |' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_css: false,
                    content_style:  [contentCss, contentUiCss, tinyCustomCss, prismCSS].join('\n'),
                    image_title: true,
                    /* enable automatic uploads of images represented by blob or data URIs*/
                    automatic_uploads: true,
                    /*
                      URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                      images_upload_url: 'postAcceptor.php',
                      here we add custom filepicker only to Image dialog
                    */
                    //images_upload_url: uploadUrl,
                    images_upload_handler: self.uploadImage,
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
                    image_caption: true

                    //content_style: 'body {font-family: \'Open Sans\', sans-serif; font-size: 14px; line-height: 1.5; }'
                }}
            />
            </>
        );
    }
}
export default TextEditor;