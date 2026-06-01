"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_feedback_boardData_js-src_components_ui_TinyMCEEditor_jsx"],{

/***/ "./src/components/dashboard/feedback/boardData.js"
/*!********************************************************!*\
  !*** ./src/components/dashboard/feedback/boardData.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardData: () => (/* binding */ boardData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/BugFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/BulbFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/NotificationFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/QuestionCircleFilled.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/CheckCircle.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/CheckFat.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/Eye.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/Hammer.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/Lightbulb.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/Prohibit.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/Question.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/XCircle.es.js");



var boardData = {
  progressStatus: {
    'new': {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_9__.LightbulbIcon, null)
    },
    'in review': {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_7__.EyeIcon, null)
    },
    'planned': {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__.CheckFatIcon, null)
    },
    'rejected': {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_10__.ProhibitIcon, null)
    },
    'in progress': {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__.HammerIcon, null)
    },
    'done': {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircleIcon, null)
    },
    'closed': {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_12__.XCircleIcon, null)
    },
    'wait for user response': {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_11__.QuestionIcon, null)
    }
  },
  postCategories: [{
    value: 'ai',
    label: 'AI'
  }, {
    value: 'ui',
    label: 'User Interface'
  }, {
    value: 'data',
    label: 'Data/data sources'
  }, {
    value: 'dashboard',
    label: 'Dashboard'
  }, {
    value: 'chatbox',
    label: 'Chatbox'
  }],
  postTypes: [{
    value: 'question',
    label: 'Question/help',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "post-type-icon question"
    })
  }, {
    value: 'feature',
    label: 'Feature request',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "post-type-icon feature-request"
    })
  }, {
    value: 'bug',
    label: 'Bug report',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "post-type-icon bug-report"
    })
  }],
  postTypesAdmin: [{
    value: 'announcement',
    label: 'Announcement',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "post-type-icon announcement"
    })
  }]
};

/***/ },

/***/ "./src/components/ui/InfoIcon.jsx"
/*!****************************************!*\
  !*** ./src/components/ui/InfoIcon.jsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoIcon: () => (/* binding */ InfoIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js");



var InfoIcon = function InfoIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__["default"], {
    placement: props.placement || "right",
    onClick: props.onClick,
    title: props.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "info-icon"
  }));
};

/***/ },

/***/ "./src/components/ui/Loader.jsx"
/*!**************************************!*\
  !*** ./src/components/ui/Loader.jsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");


var Loader = function Loader(props) {
  var loaderClassName = props.nocontainer ? '' : props.small ? 'loader-container-small' : props.inline ? 'loader-container-inline' : 'loader-container';
  return props.show == null || props.show != null && props.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: loaderClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    spin: true
  })) : null;
};

/***/ },

/***/ "./src/components/ui/TinyMCEEditor.jsx"
/*!*********************************************!*\
  !*** ./src/components/ui/TinyMCEEditor.jsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-QUQL4437.mjs");
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/components/ui/InfoIcon */ "./src/components/ui/InfoIcon.jsx");
/* harmony import */ var _src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/components/ui/Loader */ "./src/components/ui/Loader.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }












var TinyMCEEditor = function TinyMCEEditor(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var onChange = props.onChange,
    menubar = props.menubar,
    _props$options = props.options,
    options = _props$options === void 0 ? {} : _props$options;
  //let initOptions = Object.assign({}, defaultOptions, options);
  var editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value || ''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    editorLoading = _useState4[0],
    setEditorLoading = _useState4[1];

  ////@@ This is for updating the initial value and then when it's changec

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (editorRef.current && props.value !== value) {
      // Only update if the editor content is different from props.value
      var currentContent = editorRef.current.getContent();
      if (currentContent !== props.value) {
        editorRef.current.setContent(props.value || '');
        setValue(props.value || '');
      }
    } else {
      if (!editorRef.current && props.value !== value) {
        editorRef.current = props.value;
        setValue(props.value || '');
      }
    }
  }, [props.value, value]);

  ////@@ End of the block

  var handleEditorChange = function handleEditorChange(val) {
    setValue(val);
    if (props.onChange) {
      props.onChange(val);
    }
  };
  var uploadImage = function uploadImage(blobInfo, progress) {
    return new Promise(function (resolve, reject) {
      //notify.show('load', 'Uploading...', 'uploadImage')
      try {
        var formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        var generateFlag = props.picIdGenerated != null ? props.picIdGenerated : 'generate',
          folder = props.picFolderName != null ? props.picFolderName : 'boardpics';
        var config = {
          onUploadProgress: function onUploadProgress(progressEvent) {
            var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            progress(percentCompleted);
          }
        };
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("/api/app/upload/".concat(generateFlag, "/").concat(folder), formData, config).then(function (response) {
          //notify.close('uploadImage');
          if (response.data.result) {
            if (props.finishedImageUpload) {
              props.finishedImageUpload();
            }
            resolve(response.data.file_urls[0]);
          }
        }, function (response) {
          reject(response.data.error || 'Some error during uploading the image...');
        });
      } catch (e) {
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
  var plugins = props["short"] ? ['image', 'help', 'wordcount', 'link', 'autolink'] : ['advlist', 'link', 'autolink', 'lists', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'codesample ', 'fullscreen', 'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'];
  var toolbar = props["short"] ? 'undo redo | formatselect | bold italic backcolor | link | image | help' : 'undo redo | formatselect | ' + 'bold italic backcolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | preview link image codesample | ' + 'removeformat | help';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_9__.Loader, {
    show: editorLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {
    key: props.id || '' ////@@ Maybe it affects
    ,
    apiKey: "",
    tinymceScriptSrc: "/static/js/tinymce/tinymce.min.js",
    onInit: function onInit(evt, editor) {
      editorRef.current = editor;
      setEditorLoading(false);
    },
    onBlur: props.onBlur || null,
    value: value,
    onEditorChange: handleEditorChange,
    init: {
      license_key: 'gpl',
      height: props["short"] ? 200 : 500,
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
      file_picker_callback: function file_picker_callback(cb, value, meta) {
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
            var id = 'blobid' + new Date().getTime();
            var blobCache = tinymce.activeEditor.editorUpload.blobCache;
            var base64 = reader.result.split(',')[1];
            var blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);

            /* call the callback and populate the Title field with the file name */
            cb(blobInfo.blobUri(), {
              title: file.name
            });
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
      default_link_target: '_blank'
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TinyMCEEditor);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX2ZlZWRiYWNrX2JvYXJkRGF0YV9qcy1zcmNfY29tcG9uZW50c191aV9UaW55TUNFRWRpdG9yX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRXVHO0FBR3BEO0FBRXRFLElBQU1lLFNBQVMsR0FBRztFQUNyQkMsY0FBYyxFQUFFO0lBQ1osS0FBSyxFQUFFO01BQUNDLElBQUksZUFBRWpCLDBEQUFBLENBQUNRLGdFQUFhLE1BQUM7SUFBQyxDQUFDO0lBQy9CLFdBQVcsRUFBRTtNQUFDUyxJQUFJLGVBQUVqQiwwREFBQSxDQUFDVywwREFBTyxNQUFDO0lBQUMsQ0FBQztJQUMvQixTQUFTLEVBQUU7TUFBQ00sSUFBSSxlQUFFakIsMERBQUEsQ0FBQ1MsK0RBQVksTUFBQztJQUFDLENBQUM7SUFDbEMsVUFBVSxFQUFFO01BQUNRLElBQUksZUFBRWpCLDBEQUFBLENBQUNPLGdFQUFZLE1BQUU7SUFBQyxDQUFDO0lBQ3BDLGFBQWEsRUFBRTtNQUFDVSxJQUFJLGVBQUVqQiwwREFBQSxDQUFDWSw2REFBVSxNQUFDO0lBQUMsQ0FBQztJQUNwQyxNQUFNLEVBQUU7TUFBQ0ssSUFBSSxlQUFFakIsMERBQUEsQ0FBQ1Usa0VBQWUsTUFBQztJQUFDLENBQUM7SUFDbEMsUUFBUSxFQUFFO01BQUNPLElBQUksZUFBRWpCLDBEQUFBLENBQUNjLCtEQUFXLE1BQUM7SUFBQyxDQUFDO0lBQ2hDLHdCQUF3QixFQUFFO01BQUNHLElBQUksZUFBRWpCLDBEQUFBLENBQUNhLGdFQUFZLE1BQUM7SUFBQztFQUNwRCxDQUFDO0VBQ0RNLGNBQWMsRUFBRSxDQUNaO0lBQUNDLEtBQUssRUFBRSxJQUFJO0lBQUVDLEtBQUssRUFBRTtFQUFJLENBQUMsRUFDMUI7SUFBQ0QsS0FBSyxFQUFFLElBQUk7SUFBRUMsS0FBSyxFQUFFO0VBQWdCLENBQUMsRUFDdEM7SUFBQ0QsS0FBSyxFQUFFLE1B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LE1BQU0sQ0FBQztZQUNqREosU0FBUyxDQUFDTyxHQUFHLENBQUMxRSxRQUFRLENBQUM7O1lBRXZCO1lBQ0FzRCxFQUFFLENBQUN0RCxRQUFRLENBQUMyRSxPQUFPLENBQUMsQ0FBQyxFQUFFO2NBQUU1SSxLQUFLLEVBQUU2SCxJQUFJLENBQUNnQjtZQUFLLENBQUMsQ0FBQztVQUNoRCxDQUFDO1VBQ0Q7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7VUFDNEJkLE1BQU0sQ0FBQ2UsYUFBYSxDQUFDakIsSUFBSSxDQUFDO1FBQzlCLENBQUM7UUFFREosS0FBSyxDQUFDc0IsS0FBSyxDQUFDLENBQUM7TUFDakIsQ0FBQztNQUNEQyxpQkFBaUIsRUFBRSxJQUFJO01BQ3ZCQyxpQkFBaUIsRUFBRUMsUUFBUSxDQUFDQyxNQUFNLEdBQUcsR0FBRztNQUN4Q0MsYUFBYSxFQUFFLEtBQUs7TUFDcEJDLGtCQUFrQixFQUFFLElBQUk7TUFDeEJDLGFBQWEsRUFBRSxJQUFJO01BQ25CQyxxQkFBcUIsRUFBRSxJQUFJO01BQzNCQyxtQkFBbUIsRUFBQztJQUN4QjtFQUFFLENBQ0wsQ0FBRyxDQUFDO0FBQ2pCLENBQUM7QUFDRCxpRUFBZWhILGFBQWEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2ZlZWRiYWNrL2JvYXJkRGF0YS5qcyIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL0luZm9JY29uLmpzeCIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL0xvYWRlci5qc3giLCJ3ZWJwYWNrOi8vbGFnb29uby1hcHAvLi9zcmMvY29tcG9uZW50cy91aS9UaW55TUNFRWRpdG9yLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgIEJ1Z0ZpbGxlZCwgQnVsYkZpbGxlZCwgTm90aWZpY2F0aW9uRmlsbGVkLCBNZXNzYWdlT3V0bGluZWQsIFF1ZXN0aW9uQ2lyY2xlRmlsbGVkLCBUYWdGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgeyBQcm9oaWJpdEljb24sIExpZ2h0YnVsYkljb24sIENoZWNrRmF0SWNvbiwgQ2hlY2tDaXJjbGVJY29uLCBFeWVJY29uLCBcclxuICAgICAgICBIYW1tZXJJY29uLCBRdWVzdGlvbkljb24sIFhDaXJjbGVJY29uIH0gZnJvbSAnQHBob3NwaG9yLWljb25zL3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBib2FyZERhdGEgPSB7XHJcbiAgICBwcm9ncmVzc1N0YXR1czoge1xyXG4gICAgICAgICduZXcnOiB7aWNvbjogPExpZ2h0YnVsYkljb24vPn0sXHJcbiAgICAgICAgJ2luIHJldmlldyc6IHtpY29uOiA8RXllSWNvbi8+fSxcclxuICAgICAgICAncGxhbm5lZCc6IHtpY29uOiA8Q2hlY2tGYXRJY29uLz59LFxyXG4gICAgICAgICdyZWplY3RlZCc6IHtpY29uOiA8UHJvaGliaXRJY29uIC8+fSxcclxuICAgICAgICAnaW4gcHJvZ3Jlc3MnOiB7aWNvbjogPEhhbW1lckljb24vPn0sXHJcbiAgICAgICAgJ2RvbmUnOiB7aWNvbjogPENoZWNrQ2lyY2xlSWNvbi8+fSxcclxuICAgICAgICAnY2xvc2VkJzoge2ljb246IDxYQ2lyY2xlSWNvbi8+fSxcclxuICAgICAgICAnd2FpdCBmb3IgdXNlciByZXNwb25zZSc6IHtpY29uOiA8UXVlc3Rpb25JY29uLz59XHJcbiAgICB9LFxyXG4gICAgcG9zdENhdGVnb3JpZXM6IFtcclxuICAgICAgICB7dmFsdWU6ICdhaScsIGxhYmVsOiAnQUknfSxcclxuICAgICAgICB7dmFsdWU6ICd1aScsIGxhYmVsOiAnVXNlciBJbnRlcmZhY2UnfSxcclxuICAgICAgICB7dmFsdWU6ICdkYXRhJywgbGFiZWw6ICdEYXRhL2RhdGEgc291cmNlcyd9LFxyXG4gICAgICAgIHt2YWx1ZTogJ2Rhc2hib2FyZCcsIGxhYmVsOiAnRGFzaGJvYXJkJ30sXHJcbiAgICAgICAge3ZhbHVlOiAnY2hhdGJveCcsIGxhYmVsOiAnQ2hhdGJveCd9XHJcbiAgICBdLFxyXG4gICAgcG9zdFR5cGVzOiBbXHJcbiAgICAgICAge3ZhbHVlOiAncXVlc3Rpb24nLCBsYWJlbDogJ1F1ZXN0aW9uL2hlbHAnLCBpY29uOiA8UXVlc3Rpb25DaXJjbGVGaWxsZWQgY2xhc3NOYW1lPVwicG9zdC10eXBlLWljb24gcXVlc3Rpb25cIiAvPn0sXHJcbiAgICAgICAge3ZhbHVlOiAnZmVhdHVyZScsIGxhYmVsOiAnRmVhdHVyZSByZXF1ZXN0JywgaWNvbjogPEJ1bGJGaWxsZWQgY2xhc3NOYW1lPVwicG9zdC10eXBlLWljb24gZmVhdHVyZS1yZXF1ZXN0XCIgLz59LFxyXG4gICAgICAgIHt2YWx1ZTogJ2J1ZycsIGxhYmVsOiAnQnVnIHJlcG9ydCcsIGljb246IDxCdWdGaWxsZWQgY2xhc3NOYW1lPVwicG9zdC10eXBlLWljb24gYnVnLXJlcG9ydFwiIC8+fVxyXG4gICAgXSxcclxuICAgIHBvc3RUeXBlc0FkbWluOiBbXHJcbiAgICAgICAge3ZhbHVlOiAnYW5ub3VuY2VtZW50JywgbGFiZWw6ICdBbm5vdW5jZW1lbnQnLCBpY29uOiA8Tm90aWZpY2F0aW9uRmlsbGVkIGNsYXNzTmFtZT1cInBvc3QtdHlwZS1pY29uIGFubm91bmNlbWVudFwiIC8+fVxyXG4gICAgXVxyXG59OyIsImltcG9ydCBSZWFjdCwgeyBsYXp5LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgeyBJbmZvQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9JY29uID0gKHByb3BzKT0+IHtcclxuICAgIHJldHVybiA8VG9vbHRpcCBwbGFjZW1lbnQ9e3Byb3BzLnBsYWNlbWVudCB8fCBcInJpZ2h0XCJ9IFxyXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfT48SW5mb0NpcmNsZUZpbGxlZCBjbGFzc05hbWU9XCJpbmZvLWljb25cIiAvPjwvVG9vbHRpcD5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAocHJvcHMpPT57XHJcbiAgICBjb25zdCBsb2FkZXJDbGFzc05hbWUgPSBwcm9wcy5ub2NvbnRhaW5lciA/ICcnOiAocHJvcHMuc21hbGwgPyAnbG9hZGVyLWNvbnRhaW5lci1zbWFsbCc6IFxyXG4gICAgICAgIChwcm9wcy5pbmxpbmUgPyAnbG9hZGVyLWNvbnRhaW5lci1pbmxpbmUnOiAnbG9hZGVyLWNvbnRhaW5lcicpKTtcclxuICAgIHJldHVybiAocHJvcHMuc2hvdyA9PSBudWxsIHx8IChwcm9wcy5zaG93ICE9IG51bGwgJiYgcHJvcHMuc2hvdykgPyA8ZGl2IGNsYXNzTmFtZT17bG9hZGVyQ2xhc3NOYW1lfT5cclxuICAgICAgICA8TG9hZGluZ091dGxpbmVkIHNwaW4vPlxyXG4gICAgPC9kaXY+OiBudWxsKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyBsYXp5LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBBbGVydCwgQXZhdGFyLCBCdXR0b24sIENhcmQsIENoZWNrYm94LCBDb2wsIERpdmlkZXIsIEZvcm0sIElucHV0LCBMaXN0LCBNb2RhbCwgbm90aWZpY2F0aW9uLCBSb3csIFNwYWNlLCBUYWJzLCBcclxuICAgICAgICAgICAgICAgIHRoZW1lLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgeyAgQ2FyZXREb3duT3V0bGluZWQsIENhcmV0VXBPdXRsaW5lZCwgRGlzbGlrZU91dGxpbmVkLCBMaWtlT3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdAdGlueW1jZS90aW55bWNlLXJlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQXV0aFVJRnVuY3Rpb25zIH0gZnJvbSAnQHNyYy91dGlscy9BdXRoVUlGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjb21tb25GdW5jdGlvbnMgfSBmcm9tICdAc3JjL3V0aWxzL2NvbW1vbkZ1bmN0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvQ29udGFpbmVyJztcclxuaW1wb3J0IHsgSW5mb0ljb24gfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvSW5mb0ljb24nO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvTG9hZGVyJztcclxuXHJcbmNvbnN0IFRpbnlNQ0VFZGl0b3IgPSAocHJvcHMpPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgbWVudWJhciwgb3B0aW9ucyA9IHt9fSA9IHByb3BzO1xyXG4gICAgLy9sZXQgaW5pdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHByb3BzLnZhbHVlIHx8ICcnKTtcclxuICAgIGNvbnN0IG5vdGlmeSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZ5KTtcclxuICAgIGNvbnN0IFtlZGl0b3JMb2FkaW5nLCBzZXRFZGl0b3JMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHJcbiAgICAvLy8vQEAgVGhpcyBpcyBmb3IgdXBkYXRpbmcgdGhlIGluaXRpYWwgdmFsdWUgYW5kIHRoZW4gd2hlbiBpdCdzIGNoYW5nZWNcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChlZGl0b3JSZWYuY3VycmVudCAmJiBwcm9wcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgaWYgdGhlIGVkaXRvciBjb250ZW50IGlzIGRpZmZlcmVudCBmcm9tIHByb3BzLnZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZW50ID0gZWRpdG9yUmVmLmN1cnJlbnQuZ2V0Q29udGVudCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbnRlbnQgIT09IHByb3BzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3JSZWYuY3VycmVudC5zZXRDb250ZW50KHByb3BzLnZhbHVlIHx8ICcnKTtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHByb3BzLnZhbHVlIHx8ICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZWRpdG9yUmVmLmN1cnJlbnQgJiYgcHJvcHMudmFsdWUgIT09IHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGVkaXRvclJlZi5jdXJyZW50ID0gcHJvcHMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShwcm9wcy52YWx1ZSB8fCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMudmFsdWUsIHZhbHVlXSk7XHJcblxyXG4gICAgLy8vL0BAIEVuZCBvZiB0aGUgYmxvY2tcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFZGl0b3JDaGFuZ2UgPSAodmFsKSA9PntcclxuICAgICAgICBzZXRWYWx1ZSh2YWwpO1xyXG4gICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSl7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBsb2FkSW1hZ2UgPSAoYmxvYkluZm8sIHByb2dyZXNzKT0+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vbm90aWZ5LnNob3coJ2xvYWQnLCAnVXBsb2FkaW5nLi4uJywgJ3VwbG9hZEltYWdlJylcclxuICAgICAgICAgICAgdHJ5IHsgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2JJbmZvLmJsb2IoKSwgYmxvYkluZm8uZmlsZW5hbWUoKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRlRmxhZyA9IHByb3BzLnBpY0lkR2VuZXJhdGVkICE9IG51bGwgPyBwcm9wcy5waWNJZEdlbmVyYXRlZCA6ICdnZW5lcmF0ZScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbGRlciA9IHByb3BzLnBpY0ZvbGRlck5hbWUgIT0gbnVsbCA/IHByb3BzLnBpY0ZvbGRlck5hbWUgOiAnYm9hcmRwaWNzJztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uKHByb2dyZXNzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRDb21wbGV0ZWQgPSBNYXRoLnJvdW5kKChwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyhwZXJjZW50Q29tcGxldGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL2FwcC91cGxvYWQvJHtnZW5lcmF0ZUZsYWd9LyR7Zm9sZGVyfWAsIGZvcm1EYXRhLCBjb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ub3RpZnkuY2xvc2UoJ3VwbG9hZEltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMuZmluaXNoZWRJbWFnZVVwbG9hZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZmluaXNoZWRJbWFnZVVwbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhLmZpbGVfdXJsc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBkdXJpbmcgdXBsb2FkaW5nIHRoZSBpbWFnZS4uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL25vdGlmeS5jbG9zZSgndXBsb2FkSW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgnU29tZSBlcnJvciBkdXJpbmcgdXBsb2FkaW5nIHRoZSBpbWFnZS4uLicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4vKlxyXG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICdwb3N0QWNjZXB0b3IucGhwJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICBwcm9ncmVzcyhlLmxvYWRlZCAvIGUudG90YWwgKiAxMDApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHsgbWVzc2FnZTogJ0hUVFAgRXJyb3I6ICcgKyB4aHIuc3RhdHVzLCByZW1vdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgnSFRUUCBFcnJvcjogJyArIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKCFqc29uIHx8IHR5cGVvZiBqc29uLmxvY2F0aW9uICE9ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoJ0ludmFsaWQgSlNPTjogJyArIHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHJlc29sdmUoanNvbi5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KCdJbWFnZSB1cGxvYWQgZmFpbGVkIGR1ZSB0byBhIFhIUiBUcmFuc3BvcnQgZXJyb3IuIENvZGU6ICcgKyB4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iSW5mby5ibG9iKCksIGJsb2JJbmZvLmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTsqL1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGx1Z2lucyA9IHByb3BzLnNob3J0ID8gWydpbWFnZScsICdoZWxwJywgJ3dvcmRjb3VudCcsICdsaW5rJywgJ2F1dG9saW5rJ10gOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhZHZsaXN0JywgJ2xpbmsnLCAnYXV0b2xpbmsnLCAnbGlzdHMnLCAnaW1hZ2UnLCAnY2hhcm1hcCcsICAncHJldmlldycsICdhbmNob3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZScsICd2aXN1YWxibG9ja3MnLCAnY29kZXNhbXBsZSAnLCAnZnVsbHNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbnNlcnRkYXRldGltZScsICdtZWRpYScsICd0YWJsZScsICAnY29kZScsICdoZWxwJywgJ3dvcmRjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICBjb25zdCB0b29sYmFyID0gcHJvcHMuc2hvcnQgPyAndW5kbyByZWRvIHwgZm9ybWF0c2VsZWN0IHwgYm9sZCBpdGFsaWMgYmFja2NvbG9yIHwgbGluayB8IGltYWdlIHwgaGVscCc6XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VuZG8gcmVkbyB8IGZvcm1hdHNlbGVjdCB8ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICdib2xkIGl0YWxpYyBiYWNrY29sb3IgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgcHJldmlldyBsaW5rIGltYWdlIGNvZGVzYW1wbGUgfCAnICtcclxuICAgICAgICAgICAgICAgICAgICAncmVtb3ZlZm9ybWF0IHwgaGVscCc7XHJcbiAgICByZXR1cm4gIDw+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGVyIHNob3c9e2VkaXRvckxvYWRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Byb3BzLmlkIHx8ICcnfSAvLy8vQEAgTWF5YmUgaXQgYWZmZWN0c1xyXG4gICAgICAgICAgICAgICAgYXBpS2V5PScnXHJcbiAgICAgICAgICAgICAgICB0aW55bWNlU2NyaXB0U3JjPScvc3RhdGljL2pzL3RpbnltY2UvdGlueW1jZS5taW4uanMnXHJcbiAgICAgICAgICAgICAgICBvbkluaXQ9eyhldnQsIGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvclJlZi5jdXJyZW50ID0gZWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVkaXRvckxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17cHJvcHMub25CbHVyIHx8IG51bGx9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkVkaXRvckNoYW5nZT17IGhhbmRsZUVkaXRvckNoYW5nZSB9XHJcbiAgICAgICAgICAgICAgICBpbml0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGljZW5zZV9rZXk6ICdncGwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcHJvcHMuc2hvcnQgPyAyMDAgOiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB0b29sYmFyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRfc3R5bGU6ICdib2R5IHsgZm9udC1mYW1pbHk6SGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxNHB4IH0gaW1nIHsgbWF4LXdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IH0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX3RpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGVuYWJsZSBhdXRvbWF0aWMgdXBsb2FkcyBvZiBpbWFnZXMgcmVwcmVzZW50ZWQgYnkgYmxvYiBvciBkYXRhIFVSSXMqL1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY191cGxvYWRzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX2RpbWVuc2lvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICBVUkwgb2Ygb3VyIHVwbG9hZCBoYW5kbGVyIChmb3IgbW9yZSBkZXRhaWxzIGNoZWNrOiBodHRwczovL3d3dy50aW55LmNsb3VkL2RvY3MvY29uZmlndXJlL2ZpbGUtaW1hZ2UtdXBsb2FkLyNpbWFnZXNfdXBsb2FkX3VybClcclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlc191cGxvYWRfdXJsOiAncG9zdEFjY2VwdG9yLnBocCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZXJlIHdlIGFkZCBjdXN0b20gZmlsZXBpY2tlciBvbmx5IHRvIEltYWdlIGRpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbWFnZXNfdXBsb2FkX3VybDogYC9hcGkvYXBwL3VwbG9hZC8ke2dlbmVyYXRlRmxhZ30vJHtmb2xkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXNfdXBsb2FkX2hhbmRsZXI6IHVwbG9hZEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVfcGlja2VyX3R5cGVzOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVfcGlja2VyX2NhbGxiYWNrOiBmdW5jdGlvbiAoY2IsIHZhbHVlLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJ2ltYWdlLyonKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RlOiBJbiBtb2Rlcm4gYnJvd3NlcnMgaW5wdXRbdHlwZT1cImZpbGVcIl0gaXMgZnVuY3Rpb25hbCB3aXRob3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbiBhZGRpbmcgaXQgdG8gdGhlIERPTSwgYnV0IHRoYXQgbWlnaHQgbm90IGJlIHRoZSBjYXNlIGluIHNvbWUgb2xkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvciBxdWlya3kgYnJvd3NlcnMgbGlrZSBJRSwgc28geW91IG1pZ2h0IHdhbnQgdG8gYWRkIGl0IHRvIHRoZSBET01cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0IGluIGNhc2UsIGFuZCB2aXN1YWxseSBoaWRlIGl0LiBBbmQgZG8gbm90IGZvcmdldCBkbyByZW1vdmUgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNlIHlvdSBkbyBub3QgbmVlZCBpdCBhbnltb3JlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RlOiBOb3cgd2UgbmVlZCB0byByZWdpc3RlciB0aGUgYmxvYiBpbiBUaW55TUNFcyBpbWFnZSBibG9iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0cnkuIEluIHRoZSBuZXh0IHJlbGVhc2UgdGhpcyBwYXJ0IGhvcGVmdWxseSB3b24ndCBiZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lY2Vzc2FyeSwgYXMgd2UgYXJlIGxvb2tpbmcgdG8gaGFuZGxlIGl0IGludGVybmFsbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSAnYmxvYmlkJyArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2JDYWNoZSA9ICB0aW55bWNlLmFjdGl2ZUVkaXRvci5lZGl0b3JVcGxvYWQuYmxvYkNhY2hlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXNlNjQgPSByZWFkZXIucmVzdWx0LnNwbGl0KCcsJylbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2JJbmZvID0gYmxvYkNhY2hlLmNyZWF0ZShpZCwgZmlsZSwgYmFzZTY0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9iQ2FjaGUuYWRkKGJsb2JJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogY2FsbCB0aGUgY2FsbGJhY2sgYW5kIHBvcHVsYXRlIHRoZSBUaXRsZSBmaWVsZCB3aXRoIHRoZSBmaWxlIG5hbWUgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYihibG9iSW5mby5ibG9iVXJpKCksIHsgdGl0bGU6IGZpbGUubmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMucHVzaChlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goe2luZGV4OiBzcmMubGVuZ3RoIC0gMSwgZmlsZTogc2VsZi5maWxlSW5wdXQuY3VycmVudC5maWxlc1tpbmRleF19KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlc051bWJlciAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlc051bWJlciA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgdXAgdGhlIGZpbGUgdXBsb2FkZXIgaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5maWxlcyA9IHNlbGYuZmlsZXMuY29uY2F0KGZpbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5maWxlSW5wdXQuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzcmM6IHNyYywgZmlsZXNDaGFuZ2VkOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3RlX2RhdGFfaW1hZ2VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2Jhc2VfdXJsOiBsb2NhdGlvbi5vcmlnaW4gKyAnLycsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVfdXJsczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlX3NjcmlwdF9ob3N0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX2NhcHRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZWJyZWFrX3NwbGl0X2Jsb2NrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRfbGlua190YXJnZXQ6J19ibGFuaydcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+PC8+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUaW55TUNFRWRpdG9yOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1Z0ZpbGxlZCIsIkJ1bGJGaWxsZWQiLCJOb3RpZmljYXRpb25GaWxsZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJRdWVzdGlvbkNpcmNsZUZpbGxlZCIsIlRhZ0ZpbGxlZCIsIlByb2hpYml0SWNvbiIsIkxpZ2h0YnVsYkljb24iLCJDaGVja0ZhdEljb24iLCJDaGVja0NpcmNsZUljb24iLCJFeWVJY29uIiwiSGFtbWVySWNvbiIsIlF1ZXN0aW9uSWNvbiIsIlhDaXJjbGVJY29uIiwiYm9hcmREYXRhIiwicHJvZ3Jlc3NTdGF0dXMiLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsInBvc3RDYXRlZ29yaWVzIiwidmFsdWUiLCJsYWJlbCIsInBvc3RUeXBlcyIsImNsYXNzTmFtZSIsInBvc3RUeXBlc0FkbWluIiwibGF6eSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVG9vbHRpcCIsIkluZm9DaXJjbGVGaWxsZWQiLCJJbmZvSWNvbiIsInByb3BzIiwicGxhY2VtZW50Iiwib25DbGljayIsInRpdGxlIiwiTG9hZGluZ091dGxpbmVkIiwiTG9hZGVyIiwibG9hZGVyQ2xhc3NOYW1lIiwibm9jb250YWluZXIiLCJzbWFsbCIsImlubGluZSIsInNob3ciLCJzcGluIiwidXNlUmVmIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiQWxlcnQiLCJBdmF0YXIiLCJCdXR0b24iLCJDYXJkIiwiQ2hlY2tib3giLCJDb2wiLCJEaXZpZGVyIiwiRm9ybSIsIklucHV0IiwiTGlzdCIsIk1vZGFsIiwibm90aWZpY2F0aW9uIiwiUm93IiwiU3BhY2UiLCJUYWJzIiwidGhlbWUiLCJDYXJldERvd25PdXRsaW5lZCIsIkNhcmV0VXBPdXRsaW5lZCIsIkRpc2xpa2VPdXRsaW5lZCIsIkxpa2VPdXRsaW5lZCIsIlN0YXJPdXRsaW5lZCIsIkVkaXRvciIsImF4aW9zIiwiQXV0aFVJRnVuY3Rpb25zIiwiY29tbW9uRnVuY3Rpb25zIiwiQ29udGFpbmVyIiwiVGlueU1DRUVkaXRvciIsImRpc3BhdGNoIiwibmF2aWdhdGUiLCJvbkNoYW5nZSIsIm1lbnViYXIiLCJfcHJvcHMkb3B0aW9ucyIsIm9wdGlvbnMiLCJlZGl0b3JSZWYiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRWYWx1ZSIsIm5vdGlmeSIsInN0YXRlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlZGl0b3JMb2FkaW5nIiwic2V0RWRpdG9yTG9hZGluZyIsImN1cnJlbnQiLCJjdXJyZW50Q29udGVudCIsImdldENvbnRlbnQiLCJzZXRDb250ZW50IiwiaGFuZGxlRWRpdG9yQ2hhbmdlIiwidmFsIiwidXBsb2FkSW1hZ2UiLCJibG9iSW5mbyIsInByb2dyZXNzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYmxvYiIsImZpbGVuYW1lIiwiZ2VuZXJhdGVGbGFnIiwicGljSWRHZW5lcmF0ZWQiLCJmb2xkZXIiLCJwaWNGb2xkZXJOYW1lIiwiY29uZmlnIiwib25VcGxvYWRQcm9ncmVzcyIsInByb2dyZXNzRXZlbnQiLCJwZXJjZW50Q29tcGxldGVkIiwiTWF0aCIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJwb3N0IiwiY29uY2F0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdCIsImZpbmlzaGVkSW1hZ2VVcGxvYWQiLCJmaWxlX3VybHMiLCJlcnJvciIsImUiLCJwbHVnaW5zIiwidG9vbGJhciIsIkZyYWdtZW50Iiwia2V5IiwiaWQiLCJhcGlLZXkiLCJ0aW55bWNlU2NyaXB0U3JjIiwib25Jbml0IiwiZXZ0IiwiZWRpdG9yIiwib25CbHVyIiwib25FZGl0b3JDaGFuZ2UiLCJpbml0IiwibGljZW5zZV9rZXkiLCJoZWlnaHQiLCJjb250ZW50X3N0eWxlIiwiaW1hZ2VfdGl0bGUiLCJhdXRvbWF0aWNfdXBsb2FkcyIsImltYWdlX2RpbWVuc2lvbnMiLCJpbWFnZXNfdXBsb2FkX2hhbmRsZXIiLCJmaWxlX3BpY2tlcl90eXBlcyIsImZpbGVfcGlja2VyX2NhbGxiYWNrIiwiY2IiLCJtZXRhIiwiaW5wdXQiLCJkb2N1bWVudCIsInNldEF0dHJpYnV0ZSIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsIkRhdGUiLCJnZXRUaW1lIiwiYmxvYkNhY2hlIiwidGlueW1jZSIsImFjdGl2ZUVkaXRvciIsImVkaXRvclVwbG9hZCIsImJhc2U2NCIsInNwbGl0IiwiY3JlYXRlIiwiYWRkIiwiYmxvYlVyaSIsIm5hbWUiLCJyZWFkQXNEYXRhVVJMIiwiY2xpY2siLCJwYXN0ZV9kYXRhX2ltYWdlcyIsImRvY3VtZW50X2Jhc2VfdXJsIiwibG9jYXRpb24iLCJvcmlnaW4iLCJyZWxhdGl2ZV91cmxzIiwicmVtb3ZlX3NjcmlwdF9ob3N0IiwiaW1hZ2VfY2FwdGlvbiIsInBhZ2VicmVha19zcGxpdF9ibG9jayIsImRlZmF1bHRfbGlua190YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9