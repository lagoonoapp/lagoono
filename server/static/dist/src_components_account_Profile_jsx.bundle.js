"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_account_Profile_jsx"],{

/***/ "./src/components/account/Profile.jsx"
/*!********************************************!*\
  !*** ./src/components/account/Profile.jsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/progress/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/upload/index.js");
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd-img-crop */ "./node_modules/antd-img-crop/dist/antd-img-crop.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/PlusOutlined.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }










function ProfileForm(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var accountData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.accountData;
  });
  var prevProfile = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      username: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    profileData = _useState2[0],
    setProfileData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    uploading = _useState4[0],
    setUploading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    state = _useState8[0],
    setState = _useState8[1];
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_4__["default"].useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    defaultFileList = _useState0[0],
    setDefaultFileList = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    progress = _useState10[0],
    setProgress = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: '/static/images/userpic.png'
    }]),
    _useState12 = _slicedToArray(_useState11, 2),
    fileList = _useState12[0],
    setFileList = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadInitialData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (profileData) {
      if (!prevProfile.current) {
        prevProfile.current = profileData;
      }
      form.resetFields();
      form.setFieldsValue(profileData);
    }
  }, [profileData]);
  var loadInitialData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            response = null;
            setState('progress');

            /*setTimeout(()=>{ 
            setState(() => {
              throw new Error('Sommething wrong');
            })}, 1000);*/
            _context.p = 1;
            _context.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_12__["default"].get('/api/app/userprofile');
          case 2:
            response = _context.v;
            if (response.data.result) {
              setProfileData(response.data.item);
            } else {
              notify.show('error', 'Could not obtain your profile for some reason...');
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.log('Exception occured trying to send the resetting password request');
            console.log(_t);
            notify.show('error', 'Could not obtain your profile for some reason...');
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function loadInitialData() {
      return _ref.apply(this, arguments);
    };
  }();
  var submitData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(data) {
      var response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            response = null;
            notify.show('load', 'Please wait while we are updating your profile...', 'saveProfile');
            _context2.p = 1;
            _context2.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_12__["default"].post('/api/app/userprofile', data);
          case 2:
            response = _context2.v;
            notify.close('saveProfile');
            if (response.data.result) {
              notify.show('success', 'Your profile has been saved.', 'saveProfileSuccess', 15);
            } else {
              notify.show('error', 'Could not save your profile for some reason...');
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.log('Exception occured trying to send the resetting password request');
            console.log(_t2);
            notify.show('error', 'Some error occured while saving your profile...');
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function submitData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var uploadImage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(onSuccess, onError, file, onProgress) {
      var formData, response, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            formData = new FormData();
            formData.append('image', file); //blobInfo);// 'file', blobInfo.blob(), blobInfo.filename());
            _context3.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_12__["default"].post("/api/app/userprofile/uploaduserpic", formData);
          case 1:
            response = _context3.v;
            if (response.data.result) {
              setProfileData(_objectSpread(_objectSpread({}, profileData), {}, {
                userpic_url: response.data.url
              }));
            } else {
              // 
            }
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            //notify.close('uploadImage');
            console.log(_t3);
            notify.show('error', 'Could not upload your picture for some reason...');
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function uploadImage(_x2, _x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  var normFile = function normFile(e) {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e === null || e === void 0 ? void 0 : e.fileList;
  };
  var uploadButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      border: 0,
      background: 'none'
    },
    type: "button"
  }, uploading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Upload"));
  var onUserpicChange = function onUserpicChange(info) {
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
  var onUserpicPreview = function onUserpicPreview() {};
  var onCrop = function onCrop(data) {};
  var uploadImage2 = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(options) {
      var onSuccess, onError, file, onProgress, fmData, config, response, _error, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            onSuccess = options.onSuccess, onError = options.onError, file = options.file, onProgress = options.onProgress;
            fmData = new FormData();
            config = {
              headers: {
                "content-type": "multipart/form-data"
              },
              onUploadProgress: function onUploadProgress(event) {
                var percent = Math.floor(event.loaded / event.total * 100);
                setProgress(percent);
                if (percent === 100) {
                  setTimeout(function () {
                    return setProgress(0);
                  }, 1000);
                }
                onProgress({
                  percent: event.loaded / event.total * 100
                });
              }
            };
            fmData.append("image", file);
            _context4.p = 1;
            _context4.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_12__["default"].post("/api/app/userprofile/uploaduserpic", fmData, config);
          case 2:
            response = _context4.v;
            if (response.data.result) {
              setProfileData(_objectSpread(_objectSpread({}, profileData), {}, {
                userpic_url: "".concat(response.data.url, "?").concat(Math.random().toString(36))
              }));
            } else {
              // 
            }
            onSuccess("Ok");
            //console.log("server res: ", res);
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            console.log("Eroor: ", _t4);
            _error = new Error("Some error");
            onError({
              err: _t4
            });
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return function uploadImage2(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_15__.Container, {
    p: "md",
    h100: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    span: 16,
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "User profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Your email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, accountData ? accountData.email : 'Loading...'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Your profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    form: form,
    onFinish: submitData,
    initialValues: profileData,
    layout: "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    name: "username",
    label: "Username",
    rules: [{
      required: true
    }, {
      type: 'string',
      min: 2,
      max: 200
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    name: "userpic_url",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "User picture", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-item-note mb-10"
    }, "click to upload a new picture, crop and scale are available"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd_img_crop__WEBPACK_IMPORTED_MODULE_9__["default"], {
    rotationSlider: true,
    onModalOk: onCrop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "userpic-block",
    maxCount: 1,
    showUploadList: false,
    listType: "picture-circle",
    onChange: onUserpicChange,
    onPreview: onUserpicPreview,
    customRequest: uploadImage2
  }, profileData.userpic_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: profileData.userpic_url,
    alt: "avatar",
    style: {
      width: '100%'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/userpic.png"
  })))), uploading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    className: "progress-bar-item"
  }, progress > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    percent: progress
  }) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "primary",
    htmlType: "submit"
  }, "Save profile"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileForm);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfYWNjb3VudF9Qcm9maWxlX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNBLHVLQUFBQSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssV0FBQSw4QkFBQUMsRUFBQU4sQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBQyxDQUFBLEdBQUFMLENBQUEsSUFBQUEsQ0FBQSxDQUFBTSxTQUFBLFlBQUFDLFNBQUEsR0FBQVAsQ0FBQSxHQUFBTyxTQUFBLEVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsQ0FBQUMsU0FBQSxVQUFBSyxtQkFBQSxDQUFBSCxDQUFBLHVCQUFBVixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBSSxDQUFBLE1BQUFDLENBQUEsR0FBQVgsQ0FBQSxRQUFBWSxDQUFBLE9BQUFDLENBQUEsS0FBQUYsQ0FBQSxLQUFBYixDQUFBLEtBQUFnQixDQUFBLEVBQUFwQixDQUFBLEVBQUFxQixDQUFBLEVBQUFDLENBQUEsRUFBQU4sQ0FBQSxFQUFBTSxDQUFBLENBQUFDLElBQUEsQ0FBQXZCLENBQUEsTUFBQXNCLENBQUEsV0FBQUEsRUFBQXJCLENBQUEsRUFBQUMsQ0FBQSxXQUFBTSxDQUFBLEdBQUFQLENBQUEsRUFBQVEsQ0FBQSxNQUFBRyxDQUFBLEdBQUFaLENBQUEsRUFBQW1CLENBQUEsQ0FBQWYsQ0FBQSxHQUFBRixDQUFBLEVBQUFtQixDQUFBLGdCQUFBQyxFQUFBcEIsQ0FBQSxFQUFBRSxDQUFBLFNBQUFLLENBQUEsR0FBQVAsQ0FBQSxFQUFBVSxDQUFBLEdBQUFSLENB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WGhJLFNBQVMsZ0JBQUd2QywwREFBQSxDQUFDWSw0Q0FBSSxDQUFDNEksSUFBSTtJQUFDTSxTQUFTLEVBQUM7RUFBbUIsR0FDaERuRyxRQUFRLEdBQUcsQ0FBQyxnQkFBRzNELDBEQUFBLENBQUNlLDRDQUFRO0lBQUN1SCxPQUFPLEVBQUUzRTtFQUFTLENBQUUsQ0FBQyxHQUFHLElBQzNDLENBQUMsR0FBRSxJQUFJLGVBQ2xCM0QsMERBQUEsQ0FBQ1ksNENBQUksQ0FBQzRJLElBQUkscUJBQ054SiwwREFBQSxDQUFDUyw0Q0FBTTtJQUFDMkcsSUFBSSxFQUFDLFNBQVM7SUFBQ3NELFFBQVEsRUFBQztFQUFRLEdBQUMsY0FBb0IsQ0FDdEQsQ0FDVCxDQUNMLENBQ0osQ0FDRSxDQUFDO0FBRXBCO0FBQ0EsaUVBQWVoSixXQUFXLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL2FjY291bnQvUHJvZmlsZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgQ29sLCBEaXZpZGVyLCBGb3JtLCBJbnB1dCwgbWVzc2FnZSwgUHJvZ3Jlc3MsIFJvdywgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBJbWdDcm9wIGZyb20gJ2FudGQtaW1nLWNyb3AnO1xyXG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQsIFBsdXNPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQXV0aFVJRnVuY3Rpb25zIH0gZnJvbSAnQHNyYy91dGlscy9BdXRoVUlGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjb21tb25GdW5jdGlvbnMgfSBmcm9tICdAc3JjL3V0aWxzL2NvbW1vbkZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9Db250YWluZXInO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZUZvcm0ocHJvcHMpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGFjY291bnREYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50RGF0YSk7XHJcbiAgICBjb25zdCBwcmV2UHJvZmlsZSA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW3Byb2ZpbGVEYXRhLCBzZXRQcm9maWxlRGF0YV0gPSB1c2VTdGF0ZSh7dXNlcm5hbWU6ICcnfSk7XHJcbiAgICBjb25zdCBbdXBsb2FkaW5nLCBzZXRVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG5vdGlmeSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZ5KTtcclxuICAgIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gICAgY29uc3QgW2RlZmF1bHRGaWxlTGlzdCwgc2V0RGVmYXVsdEZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdWlkOiAnLTEnLFxyXG4gICAgICAgICAgbmFtZTogJ2ltYWdlLnBuZycsXHJcbiAgICAgICAgICBzdGF0dXM6ICdkb25lJyxcclxuICAgICAgICAgIHVybDogJy9zdGF0aWMvaW1hZ2VzL3VzZXJwaWMucG5nJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9hZEluaXRpYWxEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvZmlsZURhdGEpe1xyXG4gICAgICAgICAgICBpZiAoIXByZXZQcm9maWxlLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgcHJldlByb2ZpbGUuY3VycmVudCA9IHByb2ZpbGVEYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZShwcm9maWxlRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb2ZpbGVEYXRhXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZEluaXRpYWxEYXRhID0gYXN5bmMgKCk9PntcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBudWxsO1xyXG4gICAgICAgIHNldFN0YXRlKCdwcm9ncmVzcycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qc2V0VGltZW91dCgoKT0+eyBcclxuICAgICAgICBzZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvbW1ldGhpbmcgd3JvbmcnKTtcclxuICAgICAgICB9KX0sIDEwMDApOyovXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FwcC91c2VycHJvZmlsZScpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZmlsZURhdGEocmVzcG9uc2UuZGF0YS5pdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsICdDb3VsZCBub3Qgb2J0YWluIHlvdXIgcHJvZmlsZSBmb3Igc29tZSByZWFzb24uLi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0V4Y2VwdGlvbiBvY2N1cmVkIHRyeWluZyB0byBzZW5kIHRoZSByZXNldHRpbmcgcGFzc3dvcmQgcmVxdWVzdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsICdDb3VsZCBub3Qgb2J0YWluIHlvdXIgcHJvZmlsZSBmb3Igc29tZSByZWFzb24uLi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgKGRhdGEpPT57XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gbnVsbDtcclxuICAgICAgICBub3RpZnkuc2hvdygnbG9hZCcsICdQbGVhc2Ugd2FpdCB3aGlsZSB3ZSBhcmUgdXBkYXRpbmcgeW91ciBwcm9maWxlLi4uJywgJ3NhdmVQcm9maWxlJylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvYXBwL3VzZXJwcm9maWxlJywgZGF0YSk7XHJcbiAgICAgICAgICAgIG5vdGlmeS5jbG9zZSgnc2F2ZVByb2ZpbGUnKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdzdWNjZXNzJywgJ1lvdXIgcHJvZmlsZSBoYXMgYmVlbiBzYXZlZC4nLCAnc2F2ZVByb2ZpbGVTdWNjZXNzJywgMTUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgJ0NvdWxkIG5vdCBzYXZlIHlvdXIgcHJvZmlsZSBmb3Igc29tZSByZWFzb24uLi4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChleCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXhjZXB0aW9uIG9jY3VyZWQgdHJ5aW5nIHRvIHNlbmQgdGhlIHJlc2V0dGluZyBwYXNzd29yZCByZXF1ZXN0Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgJ1NvbWUgZXJyb3Igb2NjdXJlZCB3aGlsZSBzYXZpbmcgeW91ciBwcm9maWxlLi4uJylcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyhvblN1Y2Nlc3MsIG9uRXJyb3IsIGZpbGUsIG9uUHJvZ3Jlc3MgKT0+e1xyXG4gICAgICAgICAgICB0cnkgeyAgICBcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpOyAvL2Jsb2JJbmZvKTsvLyAnZmlsZScsIGJsb2JJbmZvLmJsb2IoKSwgYmxvYkluZm8uZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvYXBwL3VzZXJwcm9maWxlL3VwbG9hZHVzZXJwaWNgLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2ZpbGVEYXRhKHsuLi5wcm9maWxlRGF0YSwgdXNlcnBpY191cmw6IHJlc3BvbnNlLmRhdGEudXJsfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgLy9ub3RpZnkuY2xvc2UoJ3VwbG9hZEltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgJ0NvdWxkIG5vdCB1cGxvYWQgeW91ciBwaWN0dXJlIGZvciBzb21lIHJlYXNvbi4uLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBub3JtRmlsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VwbG9hZCBldmVudDonLCBlKTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlPy5maWxlTGlzdDtcclxuICAgIH07XHJcbiAgICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3VwbG9hZGluZyA/IDxMb2FkaW5nT3V0bGluZWQgLz4gOiA8UGx1c091dGxpbmVkIC8+fVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIGNvbnN0IG9uVXNlcnBpY0NoYW5nZSA9IChpbmZvKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZS5zdGF0dXMpO1xyXG4gICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcInVwbG9hZGluZ1wiKSB7XHJcbiAgICAgICAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcImRvbmVcIikge1xyXG4gICAgICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgLy8gR2V0IHRoaXMgdXJsIGZyb20gcmVzcG9uc2UgaW4gcmVhbCB3b3JsZC5cclxuICAgICAgICAgICAgLypnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosICh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VVcmwodXJsKTtcclxuICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25Vc2VycGljUHJldmlldyA9ICgpPT57fTtcclxuICAgIGNvbnN0IG9uQ3JvcCA9IChkYXRhKT0+e1xyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCB1cGxvYWRJbWFnZTIgPSBhc3luYyBvcHRpb25zID0+IHtcclxuICAgICAgICBjb25zdCB7IG9uU3VjY2Vzcywgb25FcnJvciwgZmlsZSwgb25Qcm9ncmVzcyB9ID0gb3B0aW9ucztcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGZtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcclxuICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IoKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzKHBlcmNlbnQpO1xyXG4gICAgICAgICAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRQcm9ncmVzcygwKSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25Qcm9ncmVzcyh7IHBlcmNlbnQ6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmbURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgZmlsZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgXCIvYXBpL2FwcC91c2VycHJvZmlsZS91cGxvYWR1c2VycGljXCIsXHJcbiAgICAgICAgICAgIGZtRGF0YSxcclxuICAgICAgICAgICAgY29uZmlnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZURhdGEoey4uLnByb2ZpbGVEYXRhLCB1c2VycGljX3VybDogYCR7cmVzcG9uc2UuZGF0YS51cmx9PyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNil9YH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICBvblN1Y2Nlc3MoXCJPa1wiKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzZXJ2ZXIgcmVzOiBcIiwgcmVzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJvb3I6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJTb21lIGVycm9yXCIpO1xyXG4gICAgICAgICAgb25FcnJvcih7IGVyciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgcD1cIm1kXCIgaDEwMD4gXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE2fSBvZmZzZXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5Vc2VyIHByb2ZpbGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Zb3VyIGVtYWlsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnthY2NvdW50RGF0YSA/IGFjY291bnREYXRhLmVtYWlsOiAnTG9hZGluZy4uLid9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Zb3VyIHByb2ZpbGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaD17c3VibWl0RGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3Byb2ZpbGVEYXRhfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidXNlcm5hbWVcIiBsYWJlbD1cIlVzZXJuYW1lXCIgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAyMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJ1c2VycGljX3VybFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxkaXY+VXNlciBwaWN0dXJlPGRpdiBjbGFzc05hbWU9XCJmb3JtLWl0ZW0tbm90ZSBtYi0xMFwiPmNsaWNrIHRvIHVwbG9hZCBhIG5ldyBwaWN0dXJlLCBjcm9wIGFuZCBzY2FsZSBhcmUgYXZhaWxhYmxlPC9kaXY+PC9kaXY+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdDcm9wIHJvdGF0aW9uU2xpZGVyIG9uTW9kYWxPaz17b25Dcm9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VycGljLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVzZXJwaWNDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByZXZpZXc9e29uVXNlcnBpY1ByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21SZXF1ZXN0PXt1cGxvYWRJbWFnZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGVEYXRhLnVzZXJwaWNfdXJsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZmlsZURhdGEudXNlcnBpY191cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaW1hZ2VzL3VzZXJwaWMucG5nJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWdDcm9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VwbG9hZGluZyA/IDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9ncmVzcyA+IDAgPyA8UHJvZ3Jlc3MgcGVyY2VudD17cHJvZ3Jlc3N9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+OiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+U2F2ZSBwcm9maWxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07Il0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMaW5rIiwidXNlUGFyYW1zIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkFsZXJ0IiwiQnV0dG9uIiwiQ29sIiwiRGl2aWRlciIsIkZvcm0iLCJJbnB1dCIsIm1lc3NhZ2UiLCJQcm9ncmVzcyIsIlJvdyIsIlVwbG9hZCIsIkltZ0Nyb3AiLCJMb2FkaW5nT3V0bGluZWQiLCJQbHVzT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJheGlvcyIsIkF1dGhVSUZ1bmN0aW9ucyIsImNvbW1vbkZ1bmN0aW9ucyIsIkNvbnRhaW5lciIsIlByb2ZpbGVGb3JtIiwicHJvcHMiLCJkaXNwYXRjaCIsImFjY291bnREYXRhIiwic3RhdGUiLCJwcmV2UHJvZmlsZSIsIl91c2VTdGF0ZSIsInVzZXJuYW1lIiwiX3VzZVN0YXRlMiIsInByb2ZpbGVEYXRhIiwic2V0UHJvZmlsZURhdGEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInVwbG9hZGluZyIsInNldFVwbG9hZGluZyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZXJyb3IiLCJzZXRFcnJvciIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic2V0U3RhdGUiLCJub3RpZnkiLCJfRm9ybSR1c2VGb3JtIiwidXNlRm9ybSIsIl9Gb3JtJHVzZUZvcm0yIiwiZm9ybSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiZGVmYXVsdEZpbGVMaXN0Iiwic2V0RGVmYXVsdEZpbGVMaXN0IiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsIl91c2VTdGF0ZTExIiwidWlkIiwic3RhdHVzIiwidXJsIiwiX3VzZVN0YXRlMTIiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0IiwibG9hZEluaXRpYWxEYXRhIiwiY3VycmVudCIsInJlc2V0RmllbGRzIiwic2V0RmllbGRzVmFsdWUiLCJfcmVmIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiX3QiLCJfY29udGV4dCIsImdldCIsImRhdGEiLCJyZXN1bHQiLCJpdGVtIiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXREYXRhIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl90MiIsIl9jb250ZXh0MiIsInBvc3QiLCJjbG9zZSIsIl94IiwidXBsb2FkSW1hZ2UiLCJfcmVmMyIsIl9jYWxsZWUzIiwib25TdWNjZXNzIiwib25FcnJvciIsImZpbGUiLCJvblByb2dyZXNzIiwiZm9ybURhdGEiLCJfdDMiLCJfY29udGV4dDMiLCJGb3JtRGF0YSIsImFwcGVuZCIsIl9vYmplY3RTcHJlYWQiLCJ1c2VycGljX3VybCIsIl94MiIsIl94MyIsIl94NCIsIl94NSIsIm5vcm1GaWxlIiwidXBsb2FkQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInR5cGUiLCJtYXJnaW5Ub3AiLCJvblVzZXJwaWNDaGFuZ2UiLCJpbmZvIiwib25Vc2VycGljUHJldmlldyIsIm9uQ3JvcCIsInVwbG9hZEltYWdlMiIsIl9yZWY0IiwiX2NhbGxlZTQiLCJvcHRpb25zIiwiZm1EYXRhIiwiY29uZmlnIiwiX2Vycm9yIiwiX3Q0IiwiX2NvbnRleHQ0IiwiaGVhZGVycyIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJldmVudCIsInBlcmNlbnQiLCJNYXRoIiwiZmxvb3IiLCJsb2FkZWQiLCJ0b3RhbCIsInNldFRpbWVvdXQiLCJjb25jYXQiLCJyYW5kb20iLCJFcnJvciIsImVyciIsIl94NiIsImgxMDAiLCJzcGFuIiwib2Zmc2V0IiwiZW1haWwiLCJvbkZpbmlzaCIsImluaXRpYWxWYWx1ZXMiLCJsYXlvdXQiLCJJdGVtIiwibGFiZWwiLCJydWxlcyIsInJlcXVpcmVkIiwibWluIiwibWF4IiwiY2xhc3NOYW1lIiwicm90YXRpb25TbGlkZXIiLCJvbk1vZGFsT2siLCJtYXhDb3VudCIsInNob3dVcGxvYWRMaXN0IiwibGlzdFR5cGUiLCJvbkNoYW5nZSIsIm9uUHJldmlldyIsImN1c3RvbVJlcXVlc3QiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImh0bWxUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==