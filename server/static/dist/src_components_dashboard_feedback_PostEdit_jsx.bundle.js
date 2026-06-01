"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_feedback_PostEdit_jsx"],{

/***/ "./src/components/dashboard/feedback/PostEdit.jsx"
/*!********************************************************!*\
  !*** ./src/components/dashboard/feedback/PostEdit.jsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-QUQL4437.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/breadcrumb/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/checkbox/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/divider/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/TagFilled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @src/components/ui/InfoIcon */ "./src/components/ui/InfoIcon.jsx");
/* harmony import */ var _src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @src/components/ui/Loader */ "./src/components/ui/Loader.jsx");
/* harmony import */ var _src_components_ui_TinyMCEEditor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @src/components/ui/TinyMCEEditor */ "./src/components/ui/TinyMCEEditor.jsx");
/* harmony import */ var _boardData__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./boardData */ "./src/components/dashboard/feedback/boardData.js");
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













var typesUpdated = false;
var Post = function Post(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    postLoading = _useState2[0],
    setPostLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    post = _useState4[0],
    setPost = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    privatePost = _useState6[0],
    setPrivatePost = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showDeleteConfirm = _useState8[0],
    setShowDeleteConfirm = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    deleteInProgress = _useState0[0],
    setDeleteInProgress = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    deletingPostAlert = _useState10[0],
    setDeletingPostAlert = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    progressStatus = _useState12[0],
    setProgressStatus = _useState12[1];
  var prevPost = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_16__["default"].useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimaryHover = _theme$useToken$token.colorPrimaryHover,
    colorTextLabel = _theme$useToken$token.colorTextLabel;
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_10__["default"].useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var accountData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.accountData || {};
  });
  var breadcrumbData = [{
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/dashboard/feedback",
      title: "Project settings"
    }, "Feedback board")
  }, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/dashboard/feedback/".concat(post.status == 'published' ? 'my' : 'drafts'),
      title: "Project settings"
    }, "My ".concat(post.status == 'published' ? 'published posts' : 'drafts'))
  },
  //TODO: add the link
  {
    title: post.title || 'No name post'
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (params.postShortId) {
      loadInitialData();
    }
  }, [params.postShortId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (post) {
      if (!prevPost.current) {
        prevPost.current = post;
      }
      form.resetFields();
      form.setFieldsValue(post);
    }
  }, [post]);
  var loadInitialData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            if (!(params.postShortId == 'new')) {
              _context.n = 1;
              break;
            }
            setPost({
              title: '',
              text: '',
              status: 'draft'
            });
            setPostLoading(false);
            //form.setFieldsValue(post);
            return _context.a(2);
          case 1:
            _context.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_20__["default"].get("/api/app/feedbackboard/post/edit/".concat(params.postShortId));
          case 2:
            response = _context.v;
            setPostLoading(false);
            if (response.data.result && response.data.item) {
              setPost(response.data.item);
              setPrivatePost(response.data.item["private"] != null ? response.data.item["private"] : false);
              setProgressStatus(response.data.item.progress_status);
              //form.setFieldsValue(response.data.result.item);
            } else {
              notify.show('error', response.data.error || 'Some error occured during loading the post... please try again.');
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setPostLoading(false);
            console.log(_t);
            notify.show('error', 'Some error occured during loading the post... please try again.');
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function loadInitialData() {
      return _ref.apply(this, arguments);
    };
  }();
  var saveProgressStatus = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_20__["default"].post("/api/app/feedbackboard/post/progress", {
              id: post.id,
              status: progressStatus
            });
          case 1:
            response = _context2.v;
            if (response.data.result) {
              notify.show('success', 'Progress status has been saved!');
            } else {
              notify.show('error', response.data.error || 'Some error occured during saving the status... please try again.');
            }
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            setPostLoading(false);
            console.log(_t2);
            notify.show('error', 'Some error occured during saving the status... please try again.');
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function saveProgressStatus() {
      return _ref2.apply(this, arguments);
    };
  }();
  var savePost = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(publishFlag) {
      var formData, postData, response, newPostUrl, _newPostUrl, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            formData = form.getFieldsValue();
            postData = _objectSpread(_objectSpread({}, post), formData); //setPost(postData);
            if (publishFlag) {
              postData.status = 'publish';
            } else if (publishFlag == false) {
              postData.status = 'unpublish';
            }
            _context3.p = 1;
            _context3.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_20__["default"].post("/api/app/feedbackboard/post", postData);
          case 2:
            response = _context3.v;
            setPostLoading(false);
            if (response.data.result) {
              if (!post.short_id && response.data.short_id) {
                setPost(_objectSpread(_objectSpread({}, post), {}, {
                  id: response.data.id,
                  short_id: response.data.short_id
                }));
                newPostUrl = "/dashboard/feedback/post/edit/".concat(response.data.short_id); // Redirect for editing
                navigate(newPostUrl, {
                  replace: true
                });
              } else {
                if (publishFlag) {
                  notify.show('success', 'Post was published successfully!');
                  _newPostUrl = "/dashboard/feedback/post/view/".concat(response.data.short_id, "/").concat(post.slug); // Redirect for editing
                  navigate(_newPostUrl, {
                    replace: true
                  });
                } else if (publishFlag == false) {
                  notify.show('success', 'Post was unpublished successfully!');
                } else {
                  notify.show('success', 'Post was saved successfully!');
                }
              }
              form.setFieldValue('status', response.data.status);
              form.setFieldValue('status_change_comment', response.data.status_change_comment);
              form.setFieldValue('private', response.data["private"]);
              setPost(_objectSpread(_objectSpread({}, post), {}, {
                published_once: response.data.published_once,
                "private": response.data["private"]
              }));
              //form.setFieldsValue({...form.getFieldsValue(), status: response.data.status, status_change_comment: response.data.status_change_comment})
            } else {
              notify.show('error', response.data.error || 'Some error occured during saving the post... please try again.');
            }
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setPostLoading(false);
            console.log(_t3);
            notify.show('error', 'Some error occured during saving the post... please try again.');
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function savePost(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var publishPost = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            form.validateFields().then(function (values) {
              savePost(true);
            })["catch"](function (errorInfo) {
              notify.show('warning', 'Please fix the errors and try again.');
            });
          case 1:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function publishPost() {
      return _ref4.apply(this, arguments);
    };
  }();
  var onFinish = function onFinish(data) {
    // Save post
    console.log(data);
  };
  var onFinishFailed = function onFinishFailed(data) {
    //notify.show('warning', 'Please fix the errors and try again.')
  };
  var updatePostModel = function updatePostModel(data) {
    //setPost(form.getFieldsValue());
    if (data[0].name[0] == 'private') {
      setPrivatePost(data[0].value);
    }
  };
  var deletePost = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var response, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            setDeletingPostAlert({
              type: 'info',
              message: 'We are removig the post, please wait...',
              icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_18__["default"], {
                spin: true
              })
            });
            setDeleteInProgress(true);
            _context5.p = 1;
            _context5.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_20__["default"]["delete"]("/api/app/feedbackboard/post", {
              data: {
                id: post.id
              }
            });
          case 2:
            response = _context5.v;
            if (response.data.result) {
              //setSettingsData(response.data.item);
              setDeletingPostAlert({
                type: 'success',
                message: 'The post was deleted successfully, you will be redirected to the feedback board.'
              });
              setTimeout(function () {
                // Update projectlist and redirect
                navigate('/dashboard/feedback', {
                  replace: true
                });
                setDeleteInProgress(false);
              }, 2000);
            } else {
              setDeletingPostAlert({
                type: 'error',
                message: response.data.error || 'Some error occured during deleting the post... please try again.'
              });
            }
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t4 = _context5.v;
            console.log(_t4);
            setDeletingPostAlert({
              type: 'error',
              message: 'Some error occured during deleting the post... please try again.'
            });
            setDeleteInProgress(false);
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return function deletePost() {
      return _ref5.apply(this, arguments);
    };
  }();
  var progressStatusOptions = [];
  if (accountData.isadmin) {
    for (var key in _boardData__WEBPACK_IMPORTED_MODULE_27__.boardData.progressStatus) {
      progressStatusOptions.push({
        key: key,
        label: key,
        value: key
      });
    }
  }
  var postCategories = _boardData__WEBPACK_IMPORTED_MODULE_27__.boardData.postCategories.map(function (postCategory) {
    return {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_19__["default"], {
        className: "post-category-icon ".concat(postCategory.value)
      }), postCategory.label),
      value: postCategory.value
    };
  });
  if (accountData.isadmin && !typesUpdated) {
    _boardData__WEBPACK_IMPORTED_MODULE_27__.boardData.postTypes = _boardData__WEBPACK_IMPORTED_MODULE_27__.boardData.postTypes.concat(_boardData__WEBPACK_IMPORTED_MODULE_27__.boardData.postTypesAdmin);
    typesUpdated = true;
  }
  var postTypes = _boardData__WEBPACK_IMPORTED_MODULE_27__.boardData.postTypes.map(function (postType) {
    var PostIcon = postType.icon;
    return {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, postType.icon, postType.label),
      value: postType.value
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_23__.Container, {
    p: "md",
    h100: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: breadcrumbData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: colorTextLabel
    }
  }, "".concat(params.postShortId == 'new' ? 'Create a new' : 'Edit', " post")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    offset: 2,
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bordered: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_25__.Loader, {
    show: postLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    form: form,
    layout: "vertical",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    autoComplete: "off",
    initialValues: post,
    onFieldsChange: updatePostModel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
    name: "private",
    label: "Post privacy",
    className: "mb-0",
    valuePropName: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], null, privatePost == true ? 'uncheck to make post public' : 'check to make post private')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"].Item, null, privatePost == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "warning",
    showIcon: true,
    message: "Your post is visible to admins only. Uncheck it to make visible to all registered users."
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "info",
    showIcon: true,
    message: "Your post is visible to all registered users. Check to make it visible to admins only."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
    name: "type",
    label: "Type",
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], {
    options: postTypes
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    span: 11,
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
    name: "category",
    label: "Category",
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], {
    options: postCategories
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
    name: "title",
    label: "Title",
    rules: [{
      required: true
    }, {
      type: 'string',
      min: 6,
      max: 400
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
    placeholder: "Title your post"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
    name: "text",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_24__.InfoIcon, {
      placement: "right",
      title: "To insert an image, copy/paste it right in the editor, or use the toolbar button to insert a link or upload a file."
    })),
    rules: [{
      required: true
    }, {
      type: 'string',
      min: 20
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_TinyMCEEditor__WEBPACK_IMPORTED_MODULE_26__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "primary",
    htmlType: "submit",
    onClick: function onClick() {
      return savePost();
    }
  }, post.status == 'published' ? 'Unpublish and save as draft' : 'Save the draft')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    offset: 1,
    span: 4
  }, accountData.isadmin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], {
    options: progressStatusOptions,
    value: progressStatus,
    className: "w-100",
    onChange: function onChange(value) {
      return setProgressStatus(value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: saveProgressStatus
  }, "Save new status")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Status: "), post.status), post.status_change_comment ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "info",
    message: post.status_change_comment,
    showIcon: true
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "primary",
    onClick: publishPost
  }, "Publish")))), post.id && post.id != 'new' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    offset: 2,
    span: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "danger-zone"
  }, "Danger Zone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_23__.Container, {
    mb: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    message: "Warning!",
    description: "Please be aware that once you delete your post, it will not be available even for you.\n The operation is not reversible.",
    type: "warning",
    showIcon: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_23__.Container, {
    mb: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "primary",
    danger: true,
    onClick: function onClick() {
      setShowDeleteConfirm(true);
    }
  }, "Delete post")))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: "modal-icon-warning"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ant-modal-confirm-title"
    }, "Delete this post?")),
    okText: "Yes",
    okType: "danger",
    okButtonProps: {
      disabled: deleteInProgress
    },
    open: showDeleteConfirm,
    onOk: deletePost,
    onCancel: function onCancel() {
      setShowDeleteConfirm(false);
    },
    cancelButtonProps: {
      disabled: deleteInProgress
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_15__["default"], {
    direction: "vertical",
    className: "w-100 mt-10"
  }, deletingPostAlert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: deletingPostAlert.type,
    message: deletingPostAlert.message,
    icon: deletingPostAlert.icon || null,
    showIcon: true
  }) : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX2ZlZWRiYWNrX1Bvc3RFZGl0X2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNBLHVLQUFBQSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssV0FBQSw4QkFBQUMsRUFBQU4sQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBQyxDQUFBLEdBQUFMLENBQUEsSUFBQUEsQ0FBQSxDQUFBTSxTQUFBLFlBQUFDLFNBQUEsR0FBQVAsQ0FBQSxHQUFBTyxTQUFBLEVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsQ0FBQUMsU0FBQSxVQUFBSyxtQkFBQSxDQUFBSCxDQUFBLHVCQUFBVixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBSSxDQUFBLE1BQUFDLENBQUEsR0FBQVgsQ0FBQSxRQUFBWSxDQUFBLE9BQUFDLENBQUEsS0FBQUYsQ0FBQSxLQUFBYixDQUFBLEtBQUFnQixDQUFBLEVBQUFwQixDQUFBLEVBQUFxQixDQUFBLEVBQUFDLENBQUEsRUFBQU4sQ0FBQSxFQUFBTSxDQUFBLENBQUFDLElBQUEsQ0FBQXZCLENBQUEsTUFBQXNCLENBQUEsV0FBQUEsRUFBQXJCLENBQUEsRUFBQUMsQ0FBQSxXQUFBTSxDQUFBLEdBQUFQLENBQUEsRUFBQVEsQ0FBQSxNQUFBRyxDQUFBLEdBQUFaLENBQUEsRUFBQW1CLENBQUEsQ0FBQWYsQ0FBQSxHQUFBRixDQUFBLEVBQUFtQixDQUFBLGdCQUFBQyxFQUFBcEIsQ0FBQSxFQUFBRSxDQUFBLFNBQUFLLENBQUEsR0FBQVAs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SztJQUNyQzZCLFFBQVE7RUFBQSxDQUNQLENBQUMsR0FDVixJQUNHLENBQ1IsQ0FDSixDQUFDO0FBQ3BCLENBQUM7QUFDRCxpRUFBZWhKLElBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2ZlZWRiYWNrL1Bvc3RFZGl0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbGF6eSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQWxlcnQsIEF2YXRhciwgQnJlYWRjcnVtYiwgQnV0dG9uLCBDYXJkLCBDaGVja2JveCwgQ29sLCBEaXZpZGVyLCBGb3JtLCBJbnB1dCwgTGlzdCwgTW9kYWwsIG5vdGlmaWNhdGlvbiwgXHJcbiAgICAgICAgICAgICAgICBQbHVzQ2lyY2xlRmlsbGVkLCBSb3csIFNlbGVjdCwgU3BhY2UsIFRhYnMsIFxyXG4gICAgICAgICAgICAgICAgdGhlbWUsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCB7IEJ1Z0ZpbGxlZCwgQnVsYkZpbGxlZCwgRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQsIExvYWRpbmdPdXRsaW5lZCwgUXVlc3Rpb25DaXJjbGVGaWxsZWQsIFRhZ0ZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEF1dGhVSUZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvQXV0aFVJRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY29tbW9uRnVuY3Rpb25zIH0gZnJvbSAnQHNyYy91dGlscy9jb21tb25GdW5jdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IEluZm9JY29uIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0luZm9JY29uJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0xvYWRlcic7XHJcbmltcG9ydCBUaW55TUNFRWRpdG9yIGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9UaW55TUNFRWRpdG9yJztcclxuaW1wb3J0IHsgYm9hcmREYXRhIH0gZnJvbSAnLi9ib2FyZERhdGEnO1xyXG5cclxudmFyIHR5cGVzVXBkYXRlZCA9IGZhbHNlO1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcyk9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbcG9zdExvYWRpbmcsIHNldFBvc3RMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3ByaXZhdGVQb3N0LCBzZXRQcml2YXRlUG9zdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZUNvbmZpcm0sIHNldFNob3dEZWxldGVDb25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkZWxldGVJblByb2dyZXNzLCBzZXREZWxldGVJblByb2dyZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkZWxldGluZ1Bvc3RBbGVydCwgc2V0RGVsZXRpbmdQb3N0QWxlcnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3NTdGF0dXMsIHNldFByb2dyZXNzU3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHByZXZQb3N0ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBub3RpZnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5vdGlmeSk7XHJcbiAgICBjb25zdCB7dG9rZW46IHsgY29sb3JQcmltYXJ5SG92ZXIsIGNvbG9yVGV4dExhYmVsIH19ID0gdGhlbWUudXNlVG9rZW4oKTtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgICBjb25zdCBhY2NvdW50RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudERhdGEgfHwge30pOyBcclxuXHJcbiAgICBjb25zdCBicmVhZGNydW1iRGF0YSA9IFtcclxuICAgICAgICB7dGl0bGU6IDxMaW5rIHRvPXtgL2Rhc2hib2FyZC9mZWVkYmFja2B9IHRpdGxlPVwiUHJvamVjdCBzZXR0aW5nc1wiPkZlZWRiYWNrIGJvYXJkPC9MaW5rPn0sXHJcbiAgICAgICAge3RpdGxlOiA8TGluayB0bz17YC9kYXNoYm9hcmQvZmVlZGJhY2svJHtwb3N0LnN0YXR1cz09J3B1Ymxpc2hlZCcgPyAnbXknIDogJ2RyYWZ0cyd9YH0gdGl0bGU9XCJQcm9qZWN0IHNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICB7YE15ICR7cG9zdC5zdGF0dXM9PSdwdWJsaXNoZWQnID8gJ3B1Ymxpc2hlZCBwb3N0cycgOiAnZHJhZnRzJ31gfTwvTGluaz59LCAvL1RPRE86IGFkZCB0aGUgbGlua1xyXG4gICAgICAgIHt0aXRsZTogcG9zdC50aXRsZSB8fCAnTm8gbmFtZSBwb3N0J31cclxuICAgIF07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocGFyYW1zLnBvc3RTaG9ydElkKXtcclxuICAgICAgICAgICAgbG9hZEluaXRpYWxEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BhcmFtcy5wb3N0U2hvcnRJZF0pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwb3N0KXtcclxuICAgICAgICAgICAgaWYgKCFwcmV2UG9zdC5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgIHByZXZQb3N0LmN1cnJlbnQgPSBwb3N0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZShwb3N0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcG9zdF0pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJbml0aWFsRGF0YSA9IGFzeW5jKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnBvc3RTaG9ydElkID09ICduZXcnKXtcclxuICAgICAgICAgICAgICAgIHNldFBvc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdkcmFmdCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0UG9zdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy9mb3JtLnNldEZpZWxkc1ZhbHVlKHBvc3QpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2FwcC9mZWVkYmFja2JvYXJkL3Bvc3QvZWRpdC8ke3BhcmFtcy5wb3N0U2hvcnRJZH1gKTtcclxuICAgICAgICAgICAgc2V0UG9zdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQgJiYgcmVzcG9uc2UuZGF0YS5pdGVtKXtcclxuICAgICAgICAgICAgICAgIHNldFBvc3QocmVzcG9uc2UuZGF0YS5pdGVtKTtcclxuICAgICAgICAgICAgICAgIHNldFByaXZhdGVQb3N0KHJlc3BvbnNlLmRhdGEuaXRlbS5wcml2YXRlICE9IG51bGwgPyByZXNwb25zZS5kYXRhLml0ZW0ucHJpdmF0ZTogZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3NTdGF0dXMocmVzcG9uc2UuZGF0YS5pdGVtLnByb2dyZXNzX3N0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAvL2Zvcm0uc2V0RmllbGRzVmFsdWUocmVzcG9uc2UuZGF0YS5yZXN1bHQuaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIGxvYWRpbmcgdGhlIHBvc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIHNldFBvc3RMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyBsb2FkaW5nIHRoZSBwb3N0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2F2ZVByb2dyZXNzU3RhdHVzID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvYXBwL2ZlZWRiYWNrYm9hcmQvcG9zdC9wcm9ncmVzc2AsIHtpZDogcG9zdC5pZCwgc3RhdHVzOiBwcm9ncmVzc1N0YXR1c30pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ3N1Y2Nlc3MnLCAnUHJvZ3Jlc3Mgc3RhdHVzIGhhcyBiZWVuIHNhdmVkIScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHNhdmluZyB0aGUgc3RhdHVzLi4uIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBzZXRQb3N0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgc2F2aW5nIHRoZSBzdGF0dXMuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2F2ZVBvc3QgPSBhc3luYyhwdWJsaXNoRmxhZyk9PntcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGZvcm0uZ2V0RmllbGRzVmFsdWUoKTtcclxuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IHsuLi5wb3N0LCAuLi5mb3JtRGF0YX07XHJcbiAgICAgICAgLy9zZXRQb3N0KHBvc3REYXRhKTtcclxuICAgICAgICBpZiAocHVibGlzaEZsYWcpe1xyXG4gICAgICAgICAgICBwb3N0RGF0YS5zdGF0dXMgPSAncHVibGlzaCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwdWJsaXNoRmxhZyA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHBvc3REYXRhLnN0YXR1cyA9ICd1bnB1Ymxpc2gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2FwcC9mZWVkYmFja2JvYXJkL3Bvc3RgLCBwb3N0RGF0YSk7XHJcbiAgICAgICAgICAgIHNldFBvc3RMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIGlmICghcG9zdC5zaG9ydF9pZCAmJiByZXNwb25zZS5kYXRhLnNob3J0X2lkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0KHsuLi5wb3N0LCBpZDogcmVzcG9uc2UuZGF0YS5pZCwgc2hvcnRfaWQ6IHJlc3BvbnNlLmRhdGEuc2hvcnRfaWR9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3N0VXJsID0gYC9kYXNoYm9hcmQvZmVlZGJhY2svcG9zdC9lZGl0LyR7cmVzcG9uc2UuZGF0YS5zaG9ydF9pZH1gOyAvLyBSZWRpcmVjdCBmb3IgZWRpdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKG5ld1Bvc3RVcmwsIHtyZXBsYWNlOiB0cnVlfSk7IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHVibGlzaEZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnc3VjY2VzcycsICdQb3N0IHdhcyBwdWJsaXNoZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3N0VXJsID0gYC9kYXNoYm9hcmQvZmVlZGJhY2svcG9zdC92aWV3LyR7cmVzcG9uc2UuZGF0YS5zaG9ydF9pZH0vJHtwb3N0LnNsdWd9YDsgLy8gUmVkaXJlY3QgZm9yIGVkaXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUobmV3UG9zdFVybCwge3JlcGxhY2U6IHRydWV9KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwdWJsaXNoRmxhZyA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdzdWNjZXNzJywgJ1Bvc3Qgd2FzIHVucHVibGlzaGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnc3VjY2VzcycsICdQb3N0IHdhcyBzYXZlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9ybS5zZXRGaWVsZFZhbHVlKCdzdGF0dXMnLCByZXNwb25zZS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ3N0YXR1c19jaGFuZ2VfY29tbWVudCcsIHJlc3BvbnNlLmRhdGEuc3RhdHVzX2NoYW5nZV9jb21tZW50KTtcclxuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgncHJpdmF0ZScsIHJlc3BvbnNlLmRhdGEucHJpdmF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0KHsuLi5wb3N0LCBwdWJsaXNoZWRfb25jZTogcmVzcG9uc2UuZGF0YS5wdWJsaXNoZWRfb25jZSwgcHJpdmF0ZTogcmVzcG9uc2UuZGF0YS5wcml2YXRlfSk7XHJcbiAgICAgICAgICAgICAgICAvL2Zvcm0uc2V0RmllbGRzVmFsdWUoey4uLmZvcm0uZ2V0RmllbGRzVmFsdWUoKSwgc3RhdHVzOiByZXNwb25zZS5kYXRhLnN0YXR1cywgc3RhdHVzX2NoYW5nZV9jb21tZW50OiByZXNwb25zZS5kYXRhLnN0YXR1c19jaGFuZ2VfY29tbWVudH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHNhdmluZyB0aGUgcG9zdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgc2V0UG9zdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHNhdmluZyB0aGUgcG9zdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHB1Ymxpc2hQb3N0ID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWVzKSA9PiAge1xyXG4gICAgICAgICAgICAgICAgc2F2ZVBvc3QodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnd2FybmluZycsICdQbGVhc2UgZml4IHRoZSBlcnJvcnMgYW5kIHRyeSBhZ2Fpbi4nKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkZpbmlzaCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gU2F2ZSBwb3N0XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy9ub3RpZnkuc2hvdygnd2FybmluZycsICdQbGVhc2UgZml4IHRoZSBlcnJvcnMgYW5kIHRyeSBhZ2Fpbi4nKVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZVBvc3RNb2RlbCA9IChkYXRhKT0+e1xyXG4gICAgICAgIC8vc2V0UG9zdChmb3JtLmdldEZpZWxkc1ZhbHVlKCkpO1xyXG4gICAgICAgIGlmIChkYXRhWzBdLm5hbWVbMF0gPT0gJ3ByaXZhdGUnKXtcclxuICAgICAgICAgICAgc2V0UHJpdmF0ZVBvc3QoZGF0YVswXS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRlbGV0ZVBvc3QgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgIHNldERlbGV0aW5nUG9zdEFsZXJ0KHtcclxuICAgICAgICAgICAgdHlwZTogJ2luZm8nLCBcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1dlIGFyZSByZW1vdmlnIHRoZSBwb3N0LCBwbGVhc2Ugd2FpdC4uLicsIFxyXG4gICAgICAgICAgICBpY29uOiA8TG9hZGluZ091dGxpbmVkIHNwaW4vPn0pO1xyXG4gICAgICAgIHNldERlbGV0ZUluUHJvZ3Jlc3ModHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAvYXBpL2FwcC9mZWVkYmFja2JvYXJkL3Bvc3RgLCB7ZGF0YToge2lkOiBwb3N0LmlkfX0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgLy9zZXRTZXR0aW5nc0RhdGEocmVzcG9uc2UuZGF0YS5pdGVtKTtcclxuICAgICAgICAgICAgICAgIHNldERlbGV0aW5nUG9zdEFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgcG9zdCB3YXMgZGVsZXRlZCBzdWNjZXNzZnVsbHksIHlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIGZlZWRiYWNrIGJvYXJkLid9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJvamVjdGxpc3QgYW5kIHJlZGlyZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoJy9kYXNoYm9hcmQvZmVlZGJhY2snLCB7cmVwbGFjZTogdHJ1ZX0pOyBcclxuICAgICAgICAgICAgICAgICAgICBzZXREZWxldGVJblByb2dyZXNzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RGVsZXRpbmdQb3N0QWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgZGVsZXRpbmcgdGhlIHBvc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBzZXREZWxldGluZ1Bvc3RBbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIGRlbGV0aW5nIHRoZSBwb3N0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJ30pO1xyXG4gICAgICAgICAgICBzZXREZWxldGVJblByb2dyZXNzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIHByb2dyZXNzU3RhdHVzT3B0aW9ucyA9IFtdO1xyXG4gICAgaWYgKGFjY291bnREYXRhLmlzYWRtaW4pe1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBib2FyZERhdGEucHJvZ3Jlc3NTdGF0dXMpe1xyXG4gICAgICAgICAgICBwcm9ncmVzc1N0YXR1c09wdGlvbnMucHVzaCh7a2V5OiBrZXksIGxhYmVsOiBrZXksIHZhbHVlOiBrZXl9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9zdENhdGVnb3JpZXMgPSBib2FyZERhdGEucG9zdENhdGVnb3JpZXMubWFwKHBvc3RDYXRlZ29yeT0+e1xyXG4gICAgICAgIHJldHVybiB7bGFiZWw6IDw+PFRhZ0ZpbGxlZCBjbGFzc05hbWU9e2Bwb3N0LWNhdGVnb3J5LWljb24gJHtwb3N0Q2F0ZWdvcnkudmFsdWV9YH0gLz57cG9zdENhdGVnb3J5LmxhYmVsfTwvPiwgdmFsdWU6IHBvc3RDYXRlZ29yeS52YWx1ZX1cclxuICAgIH0pO1xyXG4gICAgaWYgKGFjY291bnREYXRhLmlzYWRtaW4gJiYgIXR5cGVzVXBkYXRlZCl7XHJcbiAgICAgICAgYm9hcmREYXRhLnBvc3RUeXBlcyA9IGJvYXJkRGF0YS5wb3N0VHlwZXMuY29uY2F0KGJvYXJkRGF0YS5wb3N0VHlwZXNBZG1pbik7XHJcbiAgICAgICAgdHlwZXNVcGRhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHZhciBwb3N0VHlwZXMgPSBib2FyZERhdGEucG9zdFR5cGVzLm1hcChwb3N0VHlwZT0+e1xyXG4gICAgICAgIGNvbnN0IFBvc3RJY29uID0gcG9zdFR5cGUuaWNvblxyXG4gICAgICAgIHJldHVybiB7bGFiZWw6IDw+e3Bvc3RUeXBlLmljb259e3Bvc3RUeXBlLmxhYmVsfTwvPiwgdmFsdWU6IHBvc3RUeXBlLnZhbHVlfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBwPVwibWRcIiBoMTAwPiBcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYiBpdGVtcz17YnJlYWRjcnVtYkRhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjogY29sb3JUZXh0TGFiZWx9fT57YCR7cGFyYW1zLnBvc3RTaG9ydElkID09ICduZXcnID8gJ0NyZWF0ZSBhIG5ldyc6ICdFZGl0J30gcG9zdGB9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsyfSBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciBzaG93PXtwb3N0TG9hZGluZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17cG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmllbGRzQ2hhbmdlPXt1cGRhdGVQb3N0TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicHJpdmF0ZVwiIGxhYmVsPVwiUG9zdCBwcml2YWN5XCIgY2xhc3NOYW1lPVwibWItMFwiIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveD57cHJpdmF0ZVBvc3QgPT0gdHJ1ZSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VuY2hlY2sgdG8gbWFrZSBwb3N0IHB1YmxpYyc6J2NoZWNrIHRvIG1ha2UgcG9zdCBwcml2YXRlJyB9PC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaXZhdGVQb3N0ID09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdHlwZT1cIndhcm5pbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPVwiWW91ciBwb3N0IGlzIHZpc2libGUgdG8gYWRtaW5zIG9ubHkuIFVuY2hlY2sgaXQgdG8gbWFrZSB2aXNpYmxlIHRvIGFsbCByZWdpc3RlcmVkIHVzZXJzLlwiLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCB0eXBlPVwiaW5mb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9XCJZb3VyIHBvc3QgaXMgdmlzaWJsZSB0byBhbGwgcmVnaXN0ZXJlZCB1c2Vycy4gQ2hlY2sgdG8gbWFrZSBpdCB2aXNpYmxlIHRvIGFkbWlucyBvbmx5LlwiLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJ0eXBlXCIgbGFiZWw9XCJUeXBlXCIgcnVsZXM9e1t7cmVxdWlyZWQ6IHRydWV9XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtwb3N0VHlwZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMX0gb2Zmc2V0PXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImNhdGVnb3J5XCIgbGFiZWw9XCJDYXRlZ29yeVwiIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlfV19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17cG9zdENhdGVnb3JpZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiA0MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlRpdGxlIHlvdXIgcG9zdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezw+PHNwYW4+Q29udGVudDwvc3Bhbj48SW5mb0ljb24gcGxhY2VtZW50PVwicmlnaHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRvIGluc2VydCBhbiBpbWFnZSwgY29weS9wYXN0ZSBpdCByaWdodCBpbiB0aGUgZWRpdG9yLCBvciB1c2UgdGhlIHRvb2xiYXIgYnV0dG9uIHRvIGluc2VydCBhIGxpbmsgb3IgdXBsb2FkIGEgZmlsZS5cIi8+PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8SW5wdXQuVGV4dEFyZWEgcm93cz17MTB9IHBsYWNlaG9sZGVyPVwiVGVsbCB1cyBhYm91dCB5b3VyIGNvbmNlcm5zIG9yIGlkZWFzLlwiIC8+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbnlNQ0VFZGl0b3IgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpPT5zYXZlUG9zdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3Quc3RhdHVzID09ICdwdWJsaXNoZWQnID8gJ1VucHVibGlzaCBhbmQgc2F2ZSBhcyBkcmFmdCc6ICdTYXZlIHRoZSBkcmFmdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG9mZnNldD17MX0gc3Bhbj17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjY291bnREYXRhLmlzYWRtaW4gPyA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17cHJvZ3Jlc3NTdGF0dXNPcHRpb25zfSB2YWx1ZT17cHJvZ3Jlc3NTdGF0dXN9IGNsYXNzTmFtZT1cInctMTAwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKT0+c2V0UHJvZ3Jlc3NTdGF0dXModmFsdWUpfT48L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzYXZlUHJvZ3Jlc3NTdGF0dXN9PlNhdmUgbmV3IHN0YXR1czwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlN0YXR1czogPC9iPntwb3N0LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5zdGF0dXNfY2hhbmdlX2NvbW1lbnQgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdHlwZT0naW5mbycgbWVzc2FnZT17cG9zdC5zdGF0dXNfY2hhbmdlX2NvbW1lbnR9IHNob3dJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj46IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3B1Ymxpc2hQb3N0fT5QdWJsaXNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIHtwb3N0LmlkICYmIHBvc3QuaWQgIT0gJ25ldycgPzxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG9mZnNldD17Mn0gc3Bhbj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cImRhbmdlci16b25lXCI+RGFuZ2VyIFpvbmU8L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYj1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgbWVzc2FnZT1cIldhcm5pbmchXCIgZGVzY3JpcHRpb249e1wiUGxlYXNlIGJlIGF3YXJlIHRoYXQgb25jZSB5b3UgZGVsZXRlIHlvdXIgcG9zdCwgaXQgd2lsbCBub3QgYmUgYXZhaWxhYmxlIGV2ZW4gZm9yIHlvdS5cXG4gVGhlIG9wZXJhdGlvbiBpcyBub3QgcmV2ZXJzaWJsZS5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiIHNob3dJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYj1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBkYW5nZXIgb25DbGljaz17KCk9PntzZXRTaG93RGVsZXRlQ29uZmlybSh0cnVlKTt9fT5EZWxldGUgcG9zdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PjogbnVsbH1cclxuICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgY2xhc3NOYW1lPVwibW9kYWwtaWNvbi13YXJuaW5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtY29uZmlybS10aXRsZVwiPntgRGVsZXRlIHRoaXMgcG9zdD9gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb2tUeXBlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblByb3BzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAge2Rpc2FibGVkOiBkZWxldGVJblByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtzaG93RGVsZXRlQ29uZmlybX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17ZGVsZXRlUG9zdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpPT57c2V0U2hvd0RlbGV0ZUNvbmZpcm0oZmFsc2UpO319XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRlbGV0ZUluUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgY2xhc3NOYW1lPVwidy0xMDAgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZWxldGluZ1Bvc3RBbGVydCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17ZGVsZXRpbmdQb3N0QWxlcnQudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17ZGVsZXRpbmdQb3N0QWxlcnQubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZGVsZXRpbmdQb3N0QWxlcnQuaWNvbiB8fCBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj4pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJuZXh0IiwicHVzaCIsImlzQXJyYXkiLCJSZWFjdCIsImxhenkiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJBbGVydCIsIkF2YXRhciIsIkJyZWFkY3J1bWIiLCJCdXR0b24iLCJDYXJkIiwiQ2hlY2tib3giLCJDb2wiLCJEaXZpZGVyIiwiRm9ybSIsIklucHV0IiwiTGlzdCIsIk1vZGFsIiwibm90aWZpY2F0aW9uIiwiUGx1c0NpcmNsZUZpbGxlZCIsIlJvdyIsIlNlbGVjdCIsIlNwYWNlIiwiVGFicyIsInRoZW1lIiwiVG9vbHRpcCIsIkJ1Z0ZpbGxlZCIsIkJ1bGJGaWxsZWQiLCJFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCIsIkxvYWRpbmdPdXRsaW5lZCIsIlF1ZXN0aW9uQ2lyY2xlRmlsbGVkIiwiVGFnRmlsbGVkIiwiYXhpb3MiLCJBdXRoVUlGdW5jdGlvbnMiLCJjb21tb25GdW5jdGlvbnMiLCJDb250YWluZXIiLCJJbmZvSWNvbiIsIkxvYWRlciIsIlRpbnlNQ0VFZGl0b3IiLCJib2FyZERhdGEiLCJ0eXBlc1VwZGF0ZWQiLCJQb3N0IiwicHJvcHMiLCJkaXNwYXRjaCIsIm5hdmlnYXRlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInBvc3RMb2FkaW5nIiwic2V0UG9zdExvYWRpbmciLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBvc3QiLCJzZXRQb3N0IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJwcml2YXRlUG9zdCIsInNldFByaXZhdGVQb3N0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJzaG93RGVsZXRlQ29uZmlybSIsInNldFNob3dEZWxldGVDb25maXJtIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJkZWxldGVJblByb2dyZXNzIiwic2V0RGVsZXRlSW5Qcm9ncmVzcyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImRlbGV0aW5nUG9zdEFsZXJ0Iiwic2V0RGVsZXRpbmdQb3N0QWxlcnQiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwicHJvZ3Jlc3NTdGF0dXMiLCJzZXRQcm9ncmVzc1N0YXR1cyIsInByZXZQb3N0Iiwibm90aWZ5Iiwic3RhdGUiLCJfdGhlbWUkdXNlVG9rZW4iLCJ1c2VUb2tlbiIsIl90aGVtZSR1c2VUb2tlbiR0b2tlbiIsInRva2VuIiwiY29sb3JQcmltYXJ5SG92ZXIiLCJjb2xvclRleHRMYWJlbCIsInBhcmFtcyIsIl9Gb3JtJHVzZUZvcm0iLCJ1c2VGb3JtIiwiX0Zvcm0kdXNlRm9ybTIiLCJmb3JtIiwiYWNjb3VudERhdGEiLCJicmVhZGNydW1iRGF0YSIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInRvIiwiY29uY2F0Iiwic3RhdHVzIiwicG9zdFNob3J0SWQiLCJsb2FkSW5pdGlhbERhdGEiLCJjdXJyZW50IiwicmVzZXRGaWVsZHMiLCJzZXRGaWVsZHNWYWx1ZSIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJfdCIsIl9jb250ZXh0IiwidGV4dCIsImdldCIsImRhdGEiLCJyZXN1bHQiLCJpdGVtIiwicHJvZ3Jlc3Nfc3RhdHVzIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNhdmVQcm9ncmVzc1N0YXR1cyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfdDIiLCJfY29udGV4dDIiLCJpZCIsInNhdmVQb3N0IiwiX3JlZjMiLCJfY2FsbGVlMyIsInB1Ymxpc2hGbGFnIiwiZm9ybURhdGEiLCJwb3N0RGF0YSIsIm5ld1Bvc3RVcmwiLCJfbmV3UG9zdFVybCIsIl90MyIsIl9jb250ZXh0MyIsImdldEZpZWxkc1ZhbHVlIiwiX29iamVjdFNwcmVhZCIsInNob3J0X2lkIiwicmVwbGFjZSIsInNsdWciLCJzZXRGaWVsZFZhbHVlIiwic3RhdHVzX2NoYW5nZV9jb21tZW50IiwicHVibGlzaGVkX29uY2UiLCJfeCIsInB1Ymxpc2hQb3N0IiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9jb250ZXh0NCIsInZhbGlkYXRlRmllbGRzIiwidmFsdWVzIiwiZXJyb3JJbmZvIiwib25GaW5pc2giLCJvbkZpbmlzaEZhaWxlZCIsInVwZGF0ZVBvc3RNb2RlbCIsImRlbGV0ZVBvc3QiLCJfcmVmNSIsIl9jYWxsZWU1IiwiX3Q0IiwiX2NvbnRleHQ1IiwidHlwZSIsIm1lc3NhZ2UiLCJpY29uIiwic3BpbiIsInNldFRpbWVvdXQiLCJwcm9ncmVzc1N0YXR1c09wdGlvbnMiLCJpc2FkbWluIiwia2V5IiwibGFiZWwiLCJwb3N0Q2F0ZWdvcmllcyIsIm1hcCIsInBvc3RDYXRlZ29yeSIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwicG9zdFR5cGVzIiwicG9zdFR5cGVzQWRtaW4iLCJwb3N0VHlwZSIsIlBvc3RJY29uIiwiaDEwMCIsIm9mZnNldCIsIml0ZW1zIiwic3R5bGUiLCJjb2xvciIsInNwYW4iLCJib3JkZXJlZCIsImxheW91dCIsImF1dG9Db21wbGV0ZSIsImluaXRpYWxWYWx1ZXMiLCJvbkZpZWxkc0NoYW5nZSIsIkl0ZW0iLCJ2YWx1ZVByb3BOYW1lIiwic2hvd0ljb24iLCJydWxlcyIsInJlcXVpcmVkIiwib3B0aW9ucyIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50IiwiaHRtbFR5cGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJtYiIsImRlc2NyaXB0aW9uIiwiZGFuZ2VyIiwib2tUZXh0Iiwib2tUeXBlIiwib2tCdXR0b25Qcm9wcyIsImRpc2FibGVkIiwib3BlbiIsIm9uT2siLCJvbkNhbmNlbCIsImNhbmNlbEJ1dHRvblByb3BzIiwiZGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==