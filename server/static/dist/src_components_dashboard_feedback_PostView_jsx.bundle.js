"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_feedback_PostView_jsx"],{

/***/ "./src/components/dashboard/feedback/CommentEditor.jsx"
/*!*************************************************************!*\
  !*** ./src/components/dashboard/feedback/CommentEditor.jsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/components/ui/InfoIcon */ "./src/components/ui/InfoIcon.jsx");
/* harmony import */ var _src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/components/ui/Loader */ "./src/components/ui/Loader.jsx");
/* harmony import */ var _src_components_ui_TinyMCEEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/components/ui/TinyMCEEditor */ "./src/components/ui/TinyMCEEditor.jsx");
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













////@@ For keeping the content in TinyMCE
var dirty = false;
var tempContent = '';
////@@
var CommentEditor = function CommentEditor(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_3__["default"].useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimaryHover = _theme$useToken$token.colorPrimaryHover,
    colorTextLabel = _theme$useToken$token.colorTextLabel;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1]; ////@@ Don't set it here based on props.text
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    commentSaving = _useState4[0],
    setCommentSaving = _useState4[1];
  var prevTextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.text);

  ////@@
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!dirty) {
      setText(props.text || '');
    } else {
      setText(tempContent);
    }
  }, [props.text]);
  ////@@

  var saveComment = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var commentData, response, commentDataUpdate, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            commentData = {
              id: props.id,
              post_id: props.postId,
              parent_comment_id: props.parentCommentId,
              text: text
            };
            setCommentSaving(true);
            _context.p = 1;
            _context.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("/api/app/feedbackboard/post/comment", commentData);
          case 2:
            response = _context.v;
            setCommentSaving(false);
            if (response.data.result) {
              commentDataUpdate = {
                id: response.data.id,
                parentCommentId: props.parentCommentId,
                text: text,
                can_edit: true
              };
              if (!props.id && response.data.id) {
                commentDataUpdate["new"] = true;
              }
              dirty = false; ////@@
              props.updateComment(commentDataUpdate, true);
              notify.show('success', 'The comment was saved successfully!', 'saveOk', 15);
            } else {
              notify.show('error', response.data.error || 'Some error occured during saving the comment... please try again.');
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setPostLoading(false);
            console.log(_t);
            notify.show('error', 'Some error occured during loading the comment... please try again.');
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function saveComment() {
      return _ref.apply(this, arguments);
    };
  }();
  var updateComment = function updateComment(commentText) {
    /*const commentData = {
        id: props.id,
        post_id: props.postId,
        parent_comment_id: props.parentCommentId,
        text: commentText
    };
    props.updateComment(commentData, false);*/
    //props.onChange(commentText);
    setText(commentText);
    tempContent = commentText; ////@@
    dirty = true; ////@@
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_TinyMCEEditor__WEBPACK_IMPORTED_MODULE_10__["default"], {
    "short": true,
    value: text,
    id: props.id,
    onChange: updateComment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 d-flex gap-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: saveComment,
    type: "primary"
  }, "Save comment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return props.cancelEdit();
    }
  }, "Cancel")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentEditor);

/***/ },

/***/ "./src/components/dashboard/feedback/PostView.jsx"
/*!********************************************************!*\
  !*** ./src/components/dashboard/feedback/PostView.jsx ***!
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
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-immer */ "./node_modules/use-immer/dist/use-immer.module.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/avatar/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/breadcrumb/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.es.mjs");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/EditOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/LockFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/MessageOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/UserOutlined.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @src/components/ui/InfoIcon */ "./src/components/ui/InfoIcon.jsx");
/* harmony import */ var _src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @src/components/ui/Loader */ "./src/components/ui/Loader.jsx");
/* harmony import */ var _src_components_dashboard_feedback_VoteWidget__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @src/components/dashboard/feedback/VoteWidget */ "./src/components/dashboard/feedback/VoteWidget.jsx");
/* harmony import */ var _src_components_dashboard_feedback_CommentEditor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @src/components/dashboard/feedback/CommentEditor */ "./src/components/dashboard/feedback/CommentEditor.jsx");
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
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
var utc = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
var timezone = __webpack_require__(/*! dayjs/plugin/timezone */ "./node_modules/dayjs/plugin/timezone.js");








var PostView = function PostView(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    postLoading = _useState2[0],
    setPostLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    commentsLoading = _useState4[0],
    setCommentsLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      user: {},
      progress_status: 'new'
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    post = _useState6[0],
    setPost = _useState6[1];
  var _useImmer = (0,use_immer__WEBPACK_IMPORTED_MODULE_3__.useImmer)([]),
    _useImmer2 = _slicedToArray(_useImmer, 2),
    comments = _useImmer2[0],
    setComments = _useImmer2[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showCommentEditor = _useState8[0],
    setShowCommentEditor = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    currentCommentEditorUnderId = _useState0[0],
    setCurrentCommentEditorUnderId = _useState0[1]; // Which comment the editor is show under.
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    currentCommentId = _useState10[0],
    setCurrentCommentId = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    currentParentCommentId = _useState12[0],
    setCurrentParentCommentId = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    currentCommentText = _useState14[0],
    setCurrentCommentText = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    canEdit = _useState16[0],
    setCanEdit = _useState16[1];
  var prevPost = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_12__["default"].useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorTextLabel = _theme$useToken$token.colorTextLabel;
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  var accountData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.accountData || {};
  });
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    currentImageSrc = _useState18[0],
    setCurrentImageSrc = _useState18[1];
  var _Modal$useModal = antd__WEBPACK_IMPORTED_MODULE_10__["default"].useModal(),
    _Modal$useModal2 = _slicedToArray(_Modal$useModal, 2),
    modal = _Modal$useModal2[0],
    contextHolder = _Modal$useModal2[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    showImageModal = _useState20[0],
    setShowImageModal = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    newCommentFlag = _useState22[0],
    setNewCommentFlag = _useState22[1];
  var breadcrumbData = [{
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/dashboard/feedback",
      title: "Project settings"
    }, "Feedback board")
  }, {
    title: post.title || 'No name post'
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadInitialData();
    loadComments();
  }, []);
  var addClickHandlersToImages = function addClickHandlersToImages() {
    var postContainer = document.getElementById('post-view-container');
    if (postContainer) {
      var images = postContainer.getElementsByTagName('img');
      var _iterator = _createForOfIteratorHelper(images),
        _step;
      try {
        var _loop = function _loop() {
          var image = _step.value;
          image.addEventListener('click', function () {
            console.log(image.src);
            setCurrentImageSrc(image.src);
            setShowImageModal(true);
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };
  var loadInitialData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_19__["default"].get("/api/app/feedbackboard/post/view/".concat(params.postShortId, "/").concat(params.postSlug));
          case 1:
            response = _context.v;
            setPostLoading(false);
            if (response.data.result && response.data.item) {
              setPost(response.data.item);
              setCanEdit(response.data.can_edit);
              //form.setFieldsValue(response.data.result.item);
            } else {
              navigate('/dashboard/feedback', {
                replace: true
              });
              notify.show('error', response.data.error || 'Some error occured during loading the post... please try again.');
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            setPostLoading(false);
            console.log(_t);
            notify.show('error', 'Some error occured during loading the post... please try again.');
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function loadInitialData() {
      return _ref.apply(this, arguments);
    };
  }();
  var loadComments = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_19__["default"].get("/api/app/feedbackboard/post/comments/".concat(params.postShortId));
          case 1:
            response = _context2.v;
            setCommentsLoading(false);
            if (response.data.result && response.data.list != null) {
              setComments(function (draft) {
                return draft = response.data.list;
              });
            } else {
              notify.show('error', response.data.error || 'Some error occured during loading the comments... please try again.');
            }
            //setTimeout(()=>{addClickHandlersToImages()}, 3000);
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            setPostLoading(false);
            console.log(_t2);
            notify.show('error', 'Some error occured during loading the post comments... please try again.');
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function loadComments() {
      return _ref2.apply(this, arguments);
    };
  }();
  var removeCommentFromDB = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(commentId) {
      var response, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_19__["default"]["delete"]("/api/app/feedbackboard/post/comment", {
              data: {
                id: commentId
              }
            });
          case 1:
            response = _context3.v;
            if (response.data.result) {
              notify.show('success', 'The comment was deleted successfully!', 'commentDelete', 15);
            } else {
              notify.show('error', response.data.error || 'Some error occured during loading the comments... please try again.');
            }
            //setTimeout(()=>{addClickHandlersToImages()}, 3000);
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            setPostLoading(false);
            console.log(_t3);
            notify.show('error', 'Some error occured during loading the post comments... please try again.');
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function removeCommentFromDB(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var showCommentEditorFlag = function showCommentEditorFlag(commentEditorId, commentId, parentCommentId, commentText) {
    setCurrentCommentEditorUnderId(commentEditorId);
    setCurrentCommentId(commentId);
    setCurrentParentCommentId(parentCommentId);
    setCurrentCommentText(commentText);
    setShowCommentEditor(true);
    if (!commentId) {
      setNewCommentFlag(true);
    }
  };
  ////@@ Critical for keeping the content
  var updateCurrentComment = function updateCurrentComment(text) {
    setCurrentCommentText(text);
  };
  ////@@
  var updateComment = function updateComment(commentData, closeCommentEditor) {
    setComments(function (draft) {
      if (commentData.parentCommentId) {
        var parentComment = _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_21__.commonFunctions.findInnerObjectInImmerArray(draft, 'id', commentData.parentCommentId, 'children_comments');
        if (parentComment) {
          if (commentData["new"]) {
            parentComment.children_comments = parentComment.children_comments || [];
            parentComment.children_comments.unshift({
              id: commentData.id,
              text: commentData.text,
              user: {
                username: accountData.username,
                userpic_url: accountData.userpic_url
              },
              created: 'Now',
              can_edit: true,
              parent_comment_id: commentData.parentCommentId
            });
          } else {
            var existingComment = _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_21__.commonFunctions.findInnerObjectInImmerArray(parentComment, 'id', commentData.id, 'children_comments');
            if (existingComment) {
              existingComment.text = commentData.text;
            }
          }
        }
      } else {
        var comment = draft.find(function (c) {
          return c.id == commentData.id;
        });
        if (comment) {
          comment.text = commentData.text;
        } else {
          // New root comment
          var enrichedComment = _objectSpread(_objectSpread({}, commentData), {
            user: {
              username: accountData.username,
              userpic_url: accountData.userpic_url
            },
            created: 'Now'
          });
          draft.unshift(enrichedComment);
        }
      }
    });
    if (closeCommentEditor) {
      setShowCommentEditor(false);
    }
  };
  var removeComment = function removeComment(commentId, parentCommentId) {
    setComments(function (draft) {
      var commentList = null;
      if (parentCommentId) {
        var parentComment = _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_21__.commonFunctions.findInnerObjectInImmerArray(draft, 'id', parentCommentId, 'children_comments');
        if (parentComment) {
          commentList = parentComment.children_comments;
        }
      } else {
        commentList = draft;
      }
      if (!commentList) {
        return; // No parent comment/list found ??
      }
      var index = commentList.findIndex(function (comment) {
        return comment.id === commentId;
      });
      if (index !== -1) {
        commentList.splice(index, 1);
        // Remove from the database
        removeCommentFromDB(commentId);
      }
    });
  };
  /*const nestedCommentRender = (comment)=>{
      return commentRender(comment)
  };*/
  var contentClicked = function contentClicked(e) {
    console.log(e);
    if (e.target.tagName.toLowerCase() == 'img') {
      setCurrentImageSrc(e.target.src);
      setShowImageModal(true);
    }
  };
  var cancelEditing = function cancelEditing() {
    setCurrentCommentId(0);
    setShowCommentEditor(false);
  };
  var _CommentComponent = function CommentComponent(_ref4) {
    var data = _ref4.data,
      level = _ref4.level;
    level = level || 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: level >= 5 ? {
        paddingLeft: "0px"
      } : {
        paddingLeft: "40px"
      }
    }, data.map(function (comment) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: comment.id,
        className: "comment"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "d-flex align-items-center",
        id: comment.short_id
      }, comment.user.userpic_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
        src: comment.user.userpic_url,
        className: "mr-10"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_18__["default"], null),
        className: "mr-10"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "username"
      }, comment.user.username), "\xA0\xA0\u2022\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "date"
      }, dayjs.utc(comment.created).local().format('MMMM D YYYY HH:mm'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "content"
      }, showCommentEditor && currentCommentEditorUnderId == comment.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, newCommentFlag ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        onClick: contentClicked,
        dangerouslySetInnerHTML: {
          __html: dompurify__WEBPACK_IMPORTED_MODULE_13__["default"].sanitize(comment.text)
        },
        style: {
          paddingLeft: (comment.level || 0) * 40
        }
      }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_dashboard_feedback_CommentEditor__WEBPACK_IMPORTED_MODULE_26__["default"], {
        postId: post.id,
        updateComment: updateComment,
        id: currentCommentId,
        parentCommentId: currentParentCommentId,
        text: currentCommentText,
        onChange: updateCurrentComment,
        cancelEdit: cancelEditing
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        onClick: contentClicked,
        dangerouslySetInnerHTML: {
          __html: dompurify__WEBPACK_IMPORTED_MODULE_13__["default"].sanitize(comment.text)
        },
        style: {
          paddingLeft: (comment.level || 0) * 40
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "d-flex justify-content-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "d-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "reply-block",
        onClick: function onClick() {
          showCommentEditorFlag(comment.id, null, comment.id, '');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__["default"], null), "Reply"), comment.can_edit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "reply-block",
        onClick: function onClick() {
          showCommentEditorFlag(comment.id, comment.id, comment.parent_comment_id, comment.text);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], null), "Edit") : null), comment.can_edit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "reply-block danger",
        onClick: function onClick() {
          removeComment(comment.id, comment.parent_comment_id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["default"], null), "Remove") : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, comment.children_comments && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentComponent, {
        data: comment.children_comments,
        level: level + 1
      })));
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_22__.Container, {
    p: "md",
    h100: true,
    id: "post-view-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], {
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    items: breadcrumbData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: colorTextLabel
    }
  }, post["private"] == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: "private-post-icon",
    title: "Private post"
  }) : null, post.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], {
    offset: 2,
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    bordered: false
  }, postLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_24__.Loader, null) : post.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "post-author"
  }, post.user.userpic_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: post.user.userpic_url,
    className: "mr-10"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_18__["default"], null),
    className: "mr-10"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "username"
  }, post.user.username), "\xA0\xA0\u2022\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "date"
  }, dayjs.utc(post.created).local().format('MMMM D YYYY HH:mm'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: contentClicked,
    className: "post-content",
    dangerouslySetInnerHTML: {
      __html: dompurify__WEBPACK_IMPORTED_MODULE_13__["default"].sanitize(post.text)
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "error",
    message: "Some error occured.",
    showIcon: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-center"
  }, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_24__.Loader, {
    show: commentsLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "default",
    onClick: function onClick() {
      showCommentEditorFlag(0);
    }
  }, "Add a comment"), showCommentEditor && currentCommentEditorUnderId == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_dashboard_feedback_CommentEditor__WEBPACK_IMPORTED_MODULE_26__["default"], {
    postId: post.id,
    updateComment: updateComment,
    cancelEdit: cancelEditing
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentComponent, {
    data: comments
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], {
    offset: 1,
    span: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "post-status-badge ".concat(post.progress_status.replaceAll(' ', ''))
  }, _boardData__WEBPACK_IMPORTED_MODULE_27__.boardData.progressStatus[post.progress_status].icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, post.progress_status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
    style: {
      color: colorPrimary
    }
  }, "Views: "), post.views), post.status_change_comment ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "info",
    message: post.status_change_comment,
    showIcon: true
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_dashboard_feedback_VoteWidget__WEBPACK_IMPORTED_MODULE_25__["default"], {
    postId: post.id,
    rating: post.rating
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "comments-number mt-10 mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, post.comment_number || 0))), canEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "link-button",
    to: "/dashboard/feedback/post/edit/".concat(params.postShortId)
  }, "Edit post") : null)), contextHolder, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "modal-80-percent",
    open: showImageModal,
    onOk: function onOk() {
      return setShowImageModal(false);
    },
    onCancel: function onCancel() {
      return setShowImageModal(false);
    },
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: currentImageSrc
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostView);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX2ZlZWRiYWNrX1Bvc3RWaWV3X2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDQSx1S0FBQUEsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBTCxDQUFBLElBQUFBLENBQUEsQ0FBQU0sU0FBQSxZQUFBQyxTQUFBLEdBQUFQLENBQUEsR0FBQU8sU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQVYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUksQ0FBQSxNQUFBQyxDQUFBLEdBQUFYLENBQUEsUUFBQVksQ0FBQSxPQUFBQyxDQUFBLEtBQUFGLENBQUEsS0FBQWIsQ0FBQSxLQUFBZ0IsQ0FBQSxFQUFBcEIsQ0FBQSxFQUFBcUIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFOLENBQUEsRUFBQU0sQ0FBQSxDQUFBQyxJQUFBLENBQUF2QixDQUFBLE1BQUFzQixDQUFBLFdBQUFBLEVBQUFyQixDQUFBLEVBQUFDLENBQUEsV0FBQU0sQ0FBQSxHQUFBUCxDQUFBLEVBQUFRLENBQUEsTUFBQUcsQ0FBQSxHQUFBWixDQUFBLEVBQUFtQixDQUFBLENBQUFmLENBQUEsR0FBQUYsQ0FBQSxFQUFBbUIsQ0FBQSxnQkFBQUMsRUFBQXBCLENBQUEsRUFBQUUsQ0FBQSxTQUFBSyxDQUFBLEdBQUFQLENBQUEsRUFBQVUsQ0FBQSxHQUFBUixD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QUFDO0lBQUEsQ0FBQztJQUNuQ29HLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFBO01BQUEsT0FBTXBHLGlCQUFpQixDQUFDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDdkNxRyxNQUFNLGVBQUV6USwwREFBQSxDQUFBQSx1REFBQSxNQUFJO0VBQUUsZ0JBQ2RBLDBEQUFBO0lBQUt5TCxHQUFHLEVBQUUvQjtFQUFnQixDQUFDLENBQ3hCLENBQ0EsQ0FBQztBQUN4QixDQUFDO0FBQ0QsaUVBQWU1QyxRQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9mZWVkYmFjay9Db21tZW50RWRpdG9yLmpzeCIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9mZWVkYmFjay9Qb3N0Vmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGxhenksIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rLCBwYXJzZVBhdGgsIHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgSW5wdXQsICB0aGVtZSwgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHsgIENhcmV0RG93bk91dGxpbmVkLCBDYXJldFVwT3V0bGluZWQsIERpc2xpa2VPdXRsaW5lZCwgTGlrZU91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEF1dGhVSUZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvQXV0aFVJRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY29tbW9uRnVuY3Rpb25zIH0gZnJvbSAnQHNyYy91dGlscy9jb21tb25GdW5jdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IEluZm9JY29uIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0luZm9JY29uJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0xvYWRlcic7XHJcbmltcG9ydCBUaW55TUNFRWRpdG9yIGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9UaW55TUNFRWRpdG9yJztcclxuXHJcbi8vLy9AQCBGb3Iga2VlcGluZyB0aGUgY29udGVudCBpbiBUaW55TUNFXHJcbmxldCBkaXJ0eSA9IGZhbHNlOyBcclxubGV0IHRlbXBDb250ZW50ID0gJyc7IFxyXG4vLy8vQEBcclxuY29uc3QgQ29tbWVudEVkaXRvciA9IChwcm9wcyk9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBub3RpZnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5vdGlmeSk7XHJcbiAgICBjb25zdCB7dG9rZW46IHsgY29sb3JQcmltYXJ5SG92ZXIsIGNvbG9yVGV4dExhYmVsIH19ID0gdGhlbWUudXNlVG9rZW4oKTtcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTsgLy8vL0BAIERvbid0IHNldCBpdCBoZXJlIGJhc2VkIG9uIHByb3BzLnRleHRcclxuICAgIGNvbnN0IFtjb21tZW50U2F2aW5nLCBzZXRDb21tZW50U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHByZXZUZXh0UmVmID0gdXNlUmVmKHByb3BzLnRleHQpO1xyXG5cclxuICAgIC8vLy9AQFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWRpcnR5KXtcclxuICAgICAgICAgICAgc2V0VGV4dChwcm9wcy50ZXh0IHx8ICcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUZXh0KHRlbXBDb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMudGV4dF0pO1xyXG4gICAgLy8vL0BAXHJcblxyXG4gICAgY29uc3Qgc2F2ZUNvbW1lbnQgPSBhc3luYygpPT57XHJcbiAgICAgICAgY29uc3QgY29tbWVudERhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICAgICAgcG9zdF9pZDogcHJvcHMucG9zdElkLFxyXG4gICAgICAgICAgICBwYXJlbnRfY29tbWVudF9pZDogcHJvcHMucGFyZW50Q29tbWVudElkLFxyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRDb21tZW50U2F2aW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvYXBwL2ZlZWRiYWNrYm9hcmQvcG9zdC9jb21tZW50YCwgY29tbWVudERhdGEpO1xyXG4gICAgICAgICAgICBzZXRDb21tZW50U2F2aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIHZhciBjb21tZW50RGF0YVVwZGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcmVzcG9uc2UuZGF0YS5pZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29tbWVudElkOiBwcm9wcy5wYXJlbnRDb21tZW50SWQsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuX2VkaXQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghcHJvcHMuaWQgJiYgcmVzcG9uc2UuZGF0YS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudERhdGFVcGRhdGUubmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpcnR5ID0gZmFsc2U7IC8vLy9AQFxyXG4gICAgICAgICAgICAgICAgcHJvcHMudXBkYXRlQ29tbWVudChjb21tZW50RGF0YVVwZGF0ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnc3VjY2VzcycsICdUaGUgY29tbWVudCB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5IScsICdzYXZlT2snLCAxNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHNhdmluZyB0aGUgY29tbWVudC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgc2V0UG9zdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIGxvYWRpbmcgdGhlIGNvbW1lbnQuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVDb21tZW50ID0gKGNvbW1lbnRUZXh0KT0+e1xyXG4gICAgICAgIC8qY29uc3QgY29tbWVudERhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICAgICAgcG9zdF9pZDogcHJvcHMucG9zdElkLFxyXG4gICAgICAgICAgICBwYXJlbnRfY29tbWVudF9pZDogcHJvcHMucGFyZW50Q29tbWVudElkLFxyXG4gICAgICAgICAgICB0ZXh0OiBjb21tZW50VGV4dFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcHJvcHMudXBkYXRlQ29tbWVudChjb21tZW50RGF0YSwgZmFsc2UpOyovXHJcbiAgICAgICAgLy9wcm9wcy5vbkNoYW5nZShjb21tZW50VGV4dCk7XHJcbiAgICAgICAgc2V0VGV4dChjb21tZW50VGV4dCk7XHJcbiAgICAgICAgdGVtcENvbnRlbnQgPSBjb21tZW50VGV4dDsgLy8vL0BAXHJcbiAgICAgICAgZGlydHkgPSB0cnVlOyAvLy8vQEBcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+ey8qY29tbWVudElkOiB7cHJvcHMuaWR9LCBwYXJlbnRDb21tZW50SWQ6IHtwcm9wcy5wYXJlbnRDb21tZW50SWR9Ki99XHJcbiAgICAgICAgICAgICAgICB7Lyo8SW5wdXQuVGV4dEFyZWEgcm93cz17NH0gdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXsoZSk9Pnt1cGRhdGVDb21tZW50KGUudGFyZ2V0LnZhbHVlKX19IC8+Ki99XHJcbiAgICAgICAgICAgICAgICA8VGlueU1DRUVkaXRvciBzaG9ydCB2YWx1ZT17dGV4dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVDb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGQtZmxleCBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2F2ZUNvbW1lbnR9IHR5cGU9XCJwcmltYXJ5XCI+U2F2ZSBjb21tZW50PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+cHJvcHMuY2FuY2VsRWRpdCgpfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50RWRpdG9yOyIsImltcG9ydCBSZWFjdCwgeyBsYXp5LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VJbW1lciB9IGZyb20gJ3VzZS1pbW1lcic7XHJcbmltcG9ydCB7IEFsZXJ0LCBBdmF0YXIsIEJyZWFkY3J1bWIsIEJ1dHRvbiwgQ2FyZCwgQ2hlY2tib3gsIENvbCwgRGl2aWRlciwgRm9ybSwgSW5wdXQsIExpc3QsIE1vZGFsLCBub3RpZmljYXRpb24sIFJvdywgU3BhY2UsIFRhYnMsIFxyXG4gICAgICAgICAgICAgICAgdGhlbWUsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IERPTVB1cmlmeSBmcm9tICdkb21wdXJpZnknO1xyXG5pbXBvcnQgeyAgQ2FyZXREb3duT3V0bGluZWQsIENhcmV0VXBPdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQsIERpc2xpa2VPdXRsaW5lZCwgRWRpdE91dGxpbmVkLCBMaWtlT3V0bGluZWQsIExvY2tGaWxsZWQsXHJcbiAgICAgICAgTWVzc2FnZU91dGxpbmVkLCBTdGFyT3V0bGluZWQsIFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGRheWpzID0gcmVxdWlyZSgnZGF5anMnKTtcclxudmFyIHV0YyA9IHJlcXVpcmUoJ2RheWpzL3BsdWdpbi91dGMnKTtcclxudmFyIHRpbWV6b25lID0gcmVxdWlyZSgnZGF5anMvcGx1Z2luL3RpbWV6b25lJyk7XHJcbmltcG9ydCB7IEF1dGhVSUZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvQXV0aFVJRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY29tbW9uRnVuY3Rpb25zIH0gZnJvbSAnQHNyYy91dGlscy9jb21tb25GdW5jdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IEluZm9JY29uIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0luZm9JY29uJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0xvYWRlcic7XHJcbmltcG9ydCBWb3RlV2lkZ2V0IGZyb20gJ0BzcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvZmVlZGJhY2svVm90ZVdpZGdldCc7XHJcbmltcG9ydCBDb21tZW50RWRpdG9yIGZyb20gJ0BzcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvZmVlZGJhY2svQ29tbWVudEVkaXRvcic7XHJcbmltcG9ydCB7IGJvYXJkRGF0YSB9IGZyb20gJy4vYm9hcmREYXRhJztcclxuXHJcbmNvbnN0IFBvc3RWaWV3ID0gKHByb3BzKT0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IFtwb3N0TG9hZGluZywgc2V0UG9zdExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY29tbWVudHNMb2FkaW5nLCBzZXRDb21tZW50c0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSh7dXNlcjoge30sIHByb2dyZXNzX3N0YXR1czogJ25ldyd9KTtcclxuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlSW1tZXIoW10pO1xyXG4gICAgY29uc3QgW3Nob3dDb21tZW50RWRpdG9yLCBzZXRTaG93Q29tbWVudEVkaXRvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudENvbW1lbnRFZGl0b3JVbmRlcklkLCBzZXRDdXJyZW50Q29tbWVudEVkaXRvclVuZGVySWRdID0gdXNlU3RhdGUoMCk7IC8vIFdoaWNoIGNvbW1lbnQgdGhlIGVkaXRvciBpcyBzaG93IHVuZGVyLlxyXG4gICAgY29uc3QgW2N1cnJlbnRDb21tZW50SWQsIHNldEN1cnJlbnRDb21tZW50SWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFBhcmVudENvbW1lbnRJZCwgc2V0Q3VycmVudFBhcmVudENvbW1lbnRJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50Q29tbWVudFRleHQsIHNldEN1cnJlbnRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY2FuRWRpdCwgc2V0Q2FuRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBwcmV2UG9zdCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3Qgbm90aWZ5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZnkpO1xyXG4gICAgY29uc3Qge3Rva2VuOiB7IGNvbG9yUHJpbWFyeSwgY29sb3JUZXh0TGFiZWwgfX0gPSB0aGVtZS51c2VUb2tlbigpO1xyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBhY2NvdW50RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudERhdGEgfHwge30pOyBcclxuICAgIGNvbnN0IFtjdXJyZW50SW1hZ2VTcmMsIHNldEN1cnJlbnRJbWFnZVNyY10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbW9kYWwsIGNvbnRleHRIb2xkZXJdID0gTW9kYWwudXNlTW9kYWwoKTtcclxuICAgIGNvbnN0IFtzaG93SW1hZ2VNb2RhbCwgc2V0U2hvd0ltYWdlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW25ld0NvbW1lbnRGbGFnLCBzZXROZXdDb21tZW50RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgYnJlYWRjcnVtYkRhdGEgPSBbXHJcbiAgICAgICAge3RpdGxlOiA8TGluayB0bz17YC9kYXNoYm9hcmQvZmVlZGJhY2tgfSB0aXRsZT1cIlByb2plY3Qgc2V0dGluZ3NcIj5GZWVkYmFjayBib2FyZDwvTGluaz59LFxyXG4gICAgICAgIHt0aXRsZTogcG9zdC50aXRsZSB8fCAnTm8gbmFtZSBwb3N0J31cclxuICAgIF07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkSW5pdGlhbERhdGEoKTtcclxuICAgICAgICBsb2FkQ29tbWVudHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBhZGRDbGlja0hhbmRsZXJzVG9JbWFnZXMgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHBvc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zdC12aWV3LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGlmIChwb3N0Q29udGFpbmVyKXtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VzID0gcG9zdENvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgaW1hZ2VzKXtcclxuICAgICAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEltYWdlU3JjKGltYWdlLnNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0ltYWdlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9hZEluaXRpYWxEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hcHAvZmVlZGJhY2tib2FyZC9wb3N0L3ZpZXcvJHtwYXJhbXMucG9zdFNob3J0SWR9LyR7cGFyYW1zLnBvc3RTbHVnfWApO1xyXG4gICAgICAgICAgICBzZXRQb3N0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCAmJiByZXNwb25zZS5kYXRhLml0ZW0pe1xyXG4gICAgICAgICAgICAgICAgc2V0UG9zdChyZXNwb25zZS5kYXRhLml0ZW0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FuRWRpdChyZXNwb25zZS5kYXRhLmNhbl9lZGl0KTtcclxuICAgICAgICAgICAgICAgIC8vZm9ybS5zZXRGaWVsZHNWYWx1ZShyZXNwb25zZS5kYXRhLnJlc3VsdC5pdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvZGFzaGJvYXJkL2ZlZWRiYWNrJywge3JlcGxhY2U6IHRydWV9KTsgXHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIGxvYWRpbmcgdGhlIHBvc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIHNldFBvc3RMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyBsb2FkaW5nIHRoZSBwb3N0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9hZENvbW1lbnRzID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hcHAvZmVlZGJhY2tib2FyZC9wb3N0L2NvbW1lbnRzLyR7cGFyYW1zLnBvc3RTaG9ydElkfWApO1xyXG4gICAgICAgICAgICBzZXRDb21tZW50c0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQgJiYgcmVzcG9uc2UuZGF0YS5saXN0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMoZHJhZnQ9PmRyYWZ0ID0gcmVzcG9uc2UuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgbG9hZGluZyB0aGUgY29tbWVudHMuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3NldFRpbWVvdXQoKCk9PnthZGRDbGlja0hhbmRsZXJzVG9JbWFnZXMoKX0sIDMwMDApO1xyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIHNldFBvc3RMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyBsb2FkaW5nIHRoZSBwb3N0IGNvbW1lbnRzLi4uIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlQ29tbWVudEZyb21EQiA9IGFzeW5jKGNvbW1lbnRJZCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYC9hcGkvYXBwL2ZlZWRiYWNrYm9hcmQvcG9zdC9jb21tZW50YCwge2RhdGE6IHtpZDogY29tbWVudElkfX0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ3N1Y2Nlc3MnLCAnVGhlIGNvbW1lbnQgd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScsICdjb21tZW50RGVsZXRlJywgMTUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgcmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyBsb2FkaW5nIHRoZSBjb21tZW50cy4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc2V0VGltZW91dCgoKT0+e2FkZENsaWNrSGFuZGxlcnNUb0ltYWdlcygpfSwgMzAwMCk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgc2V0UG9zdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIGxvYWRpbmcgdGhlIHBvc3QgY29tbWVudHMuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93Q29tbWVudEVkaXRvckZsYWcgPSAoY29tbWVudEVkaXRvcklkLCBjb21tZW50SWQsIHBhcmVudENvbW1lbnRJZCwgY29tbWVudFRleHQpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudENvbW1lbnRFZGl0b3JVbmRlcklkKGNvbW1lbnRFZGl0b3JJZCk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbW1lbnRJZChjb21tZW50SWQpO1xyXG4gICAgICAgIHNldEN1cnJlbnRQYXJlbnRDb21tZW50SWQocGFyZW50Q29tbWVudElkKTtcclxuICAgICAgICBzZXRDdXJyZW50Q29tbWVudFRleHQoY29tbWVudFRleHQpO1xyXG4gICAgICAgIHNldFNob3dDb21tZW50RWRpdG9yKHRydWUpO1xyXG4gICAgICAgIGlmICghY29tbWVudElkKXtcclxuICAgICAgICAgICAgc2V0TmV3Q29tbWVudEZsYWcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vLy9AQCBDcml0aWNhbCBmb3Iga2VlcGluZyB0aGUgY29udGVudFxyXG4gICAgY29uc3QgdXBkYXRlQ3VycmVudENvbW1lbnQgPSAodGV4dCk9PntcclxuICAgICAgICBzZXRDdXJyZW50Q29tbWVudFRleHQodGV4dCk7XHJcbiAgICB9O1xyXG4gICAgLy8vL0BAXHJcbiAgICBjb25zdCB1cGRhdGVDb21tZW50ID0gKGNvbW1lbnREYXRhLCBjbG9zZUNvbW1lbnRFZGl0b3IpPT57XHJcbiAgICAgICAgc2V0Q29tbWVudHMoZHJhZnQ9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50RGF0YS5wYXJlbnRDb21tZW50SWQpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Q29tbWVudCA9IGNvbW1vbkZ1bmN0aW9ucy5maW5kSW5uZXJPYmplY3RJbkltbWVyQXJyYXkoZHJhZnQsICdpZCcsIGNvbW1lbnREYXRhLnBhcmVudENvbW1lbnRJZCwgJ2NoaWxkcmVuX2NvbW1lbnRzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29tbWVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnREYXRhLm5ldyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvbW1lbnQuY2hpbGRyZW5fY29tbWVudHMgPSBwYXJlbnRDb21tZW50LmNoaWxkcmVuX2NvbW1lbnRzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb21tZW50LmNoaWxkcmVuX2NvbW1lbnRzLnVuc2hpZnQoe2lkOiBjb21tZW50RGF0YS5pZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb21tZW50RGF0YS50ZXh0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogYWNjb3VudERhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpY191cmw6IGFjY291bnREYXRhLnVzZXJwaWNfdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogJ05vdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5fZWRpdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF9jb21tZW50X2lkOiBjb21tZW50RGF0YS5wYXJlbnRDb21tZW50SWR9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0NvbW1lbnQgPSBjb21tb25GdW5jdGlvbnMuZmluZElubmVyT2JqZWN0SW5JbW1lckFycmF5KHBhcmVudENvbW1lbnQsICdpZCcsIGNvbW1lbnREYXRhLmlkLCAnY2hpbGRyZW5fY29tbWVudHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29tbWVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbW1lbnQudGV4dCA9IGNvbW1lbnREYXRhLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50ID0gZHJhZnQuZmluZChjPT5jLmlkID09IGNvbW1lbnREYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21tZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LnRleHQgPSBjb21tZW50RGF0YS50ZXh0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOZXcgcm9vdCBjb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5yaWNoZWRDb21tZW50ID0gey4uLmNvbW1lbnREYXRhLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ue3VzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBhY2NvdW50RGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWNfdXJsOiBhY2NvdW50RGF0YS51c2VycGljX3VybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjcmVhdGVkOiAnTm93J319O1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVuc2hpZnQoZW5yaWNoZWRDb21tZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChjbG9zZUNvbW1lbnRFZGl0b3Ipe1xyXG4gICAgICAgICAgICBzZXRTaG93Q29tbWVudEVkaXRvcihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZUNvbW1lbnQgPSAoY29tbWVudElkLCBwYXJlbnRDb21tZW50SWQpPT57XHJcbiAgICAgICAgc2V0Q29tbWVudHMoZHJhZnQ9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb21tZW50TGlzdCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRDb21tZW50SWQpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Q29tbWVudCA9IGNvbW1vbkZ1bmN0aW9ucy5maW5kSW5uZXJPYmplY3RJbkltbWVyQXJyYXkoZHJhZnQsICdpZCcsIHBhcmVudENvbW1lbnRJZCwgJ2NoaWxkcmVuX2NvbW1lbnRzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29tbWVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudExpc3QgPSBwYXJlbnRDb21tZW50LmNoaWxkcmVuX2NvbW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudExpc3QgPSBkcmFmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWNvbW1lbnRMaXN0KXtcclxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gTm8gcGFyZW50IGNvbW1lbnQvbGlzdCBmb3VuZCA/P1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY29tbWVudExpc3QuZmluZEluZGV4KGNvbW1lbnQgPT4gY29tbWVudC5pZCA9PT0gY29tbWVudElkKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudExpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29tbWVudEZyb21EQihjb21tZW50SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLypjb25zdCBuZXN0ZWRDb21tZW50UmVuZGVyID0gKGNvbW1lbnQpPT57XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRSZW5kZXIoY29tbWVudClcclxuICAgIH07Ki9cclxuICAgIGNvbnN0IGNvbnRlbnRDbGlja2VkID0gKGUpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdpbWcnKXtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEltYWdlU3JjKGUudGFyZ2V0LnNyYyk7XHJcbiAgICAgICAgICAgIHNldFNob3dJbWFnZU1vZGFsKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBjYW5jZWxFZGl0aW5nID0gKCk9PntcclxuICAgICAgICBzZXRDdXJyZW50Q29tbWVudElkKDApO1xyXG4gICAgICAgIHNldFNob3dDb21tZW50RWRpdG9yKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBDb21tZW50Q29tcG9uZW50ID0gKHsgZGF0YSwgbGV2ZWwgfSkgPT4ge1xyXG4gICAgICAgIGxldmVsID0gbGV2ZWwgfHwgMTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17bGV2ZWwgPj0gNSA/IHsgcGFkZGluZ0xlZnQ6IFwiMHB4XCIgfTogeyBwYWRkaW5nTGVmdDogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tbWVudC5pZH0gY2xhc3NOYW1lPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIGlkPXtjb21tZW50LnNob3J0X2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQudXNlci51c2VycGljX3VybCA/IDxBdmF0YXIgc3JjPXtjb21tZW50LnVzZXIudXNlcnBpY191cmx9IGNsYXNzTmFtZT1cIm1yLTEwXCIgLz46PEF2YXRhciBpY29uPXs8VXNlck91dGxpbmVkIC8+fSBjbGFzc05hbWU9XCJtci0xMFwiIC8+fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57Y29tbWVudC51c2VyLnVzZXJuYW1lfTwvc3Bhbj4mbmJzcDsmbmJzcDvigKImbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPntkYXlqcy51dGMoY29tbWVudC5jcmVhdGVkKS5sb2NhbCgpLmZvcm1hdCgnTU1NTSBEIFlZWVkgSEg6bW0nKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93Q29tbWVudEVkaXRvciAmJiBjdXJyZW50Q29tbWVudEVkaXRvclVuZGVySWQgPT0gY29tbWVudC5pZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdDb21tZW50RmxhZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NvbnRlbnRDbGlja2VkfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IERPTVB1cmlmeS5zYW5pdGl6ZShjb21tZW50LnRleHQpIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IChjb21tZW50LmxldmVsIHx8IDApKjQwfX0gLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEVkaXRvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnQ9e3VwZGF0ZUNvbW1lbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjdXJyZW50Q29tbWVudElkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb21tZW50SWQ9e2N1cnJlbnRQYXJlbnRDb21tZW50SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17Y3VycmVudENvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVDdXJyZW50Q29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxFZGl0PXtjYW5jZWxFZGl0aW5nfSAvPjwvPjogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtjb250ZW50Q2xpY2tlZH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBET01QdXJpZnkuc2FuaXRpemUoY29tbWVudC50ZXh0KSB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdMZWZ0OiAoY29tbWVudC5sZXZlbCB8fCAwKSo0MH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVwbHktYmxvY2tcIiAgb25DbGljaz17KCk9PntzaG93Q29tbWVudEVkaXRvckZsYWcoY29tbWVudC5pZCwgbnVsbCwgY29tbWVudC5pZCwgJycpfX0+PE1lc3NhZ2VPdXRsaW5lZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNhbl9lZGl0ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlcGx5LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57c2hvd0NvbW1lbnRFZGl0b3JGbGFnKGNvbW1lbnQuaWQsIGNvbW1lbnQuaWQsIGNvbW1lbnQucGFyZW50X2NvbW1lbnRfaWQsIGNvbW1lbnQudGV4dCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+OiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5jYW5fZWRpdCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlcGx5LWJsb2NrIGRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57cmVtb3ZlQ29tbWVudChjb21tZW50LmlkLCBjb21tZW50LnBhcmVudF9jb21tZW50X2lkKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+OiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5jaGlsZHJlbl9jb21tZW50cyAmJiA8Q29tbWVudENvbXBvbmVudCBkYXRhPXtjb21tZW50LmNoaWxkcmVuX2NvbW1lbnRzfSBsZXZlbD17bGV2ZWwrMX0gLz59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBwPVwibWRcIiBoMTAwIGlkPVwicG9zdC12aWV3LWNvbnRhaW5lclwiPiBcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYiBpdGVtcz17YnJlYWRjcnVtYkRhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Y29sb3I6IGNvbG9yVGV4dExhYmVsfX0+e3Bvc3QucHJpdmF0ZSA9PSB0cnVlPyA8TG9ja0ZpbGxlZCBjbGFzc05hbWU9XCJwcml2YXRlLXBvc3QtaWNvblwiIHRpdGxlPVwiUHJpdmF0ZSBwb3N0XCIgLz46bnVsbH17cG9zdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsyfSBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvcmRlcmVkPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdExvYWRpbmcgPyA8TG9hZGVyIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuaWQ/IDw+PGRpdiBjbGFzc05hbWU9XCJwb3N0LWF1dGhvclwiPntwb3N0LnVzZXIudXNlcnBpY191cmwgPyA8QXZhdGFyIHNyYz17cG9zdC51c2VyLnVzZXJwaWNfdXJsfSBjbGFzc05hbWU9XCJtci0xMFwiIC8+OjxBdmF0YXIgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gY2xhc3NOYW1lPVwibXItMTBcIiAvPn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57cG9zdC51c2VyLnVzZXJuYW1lfTwvc3Bhbj4mbmJzcDsmbmJzcDvigKImbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57ZGF5anMudXRjKHBvc3QuY3JlYXRlZCkubG9jYWwoKS5mb3JtYXQoJ01NTU0gRCBZWVlZIEhIOm1tJyl9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Y29udGVudENsaWNrZWR9IGNsYXNzTmFtZT1cInBvc3QtY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogRE9NUHVyaWZ5LnNhbml0aXplKHBvc3QudGV4dCkgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9XCJlcnJvclwiIG1lc3NhZ2U9XCJTb21lIGVycm9yIG9jY3VyZWQuXCIgc2hvd0ljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Db21tZW50czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIHNob3c9e2NvbW1lbnRzTG9hZGluZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgb25DbGljaz17KCk9PntzaG93Q29tbWVudEVkaXRvckZsYWcoMCl9fT5BZGQgYSBjb21tZW50PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dDb21tZW50RWRpdG9yICYmIGN1cnJlbnRDb21tZW50RWRpdG9yVW5kZXJJZCA9PSAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50RWRpdG9yIHBvc3RJZD17cG9zdC5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb21tZW50PXt1cGRhdGVDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsRWRpdD17Y2FuY2VsRWRpdGluZ30gLz46IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PENvbW1lbnRDb21wb25lbnQgZGF0YT17Y29tbWVudHN9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsxfSBzcGFuPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3N0LXN0YXR1cy1iYWRnZSAke3Bvc3QucHJvZ3Jlc3Nfc3RhdHVzLnJlcGxhY2VBbGwoJyAnLCAnJyl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkRGF0YS5wcm9ncmVzc1N0YXR1c1twb3N0LnByb2dyZXNzX3N0YXR1c10uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5wcm9ncmVzc19zdGF0dXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBzdHlsZT17e2NvbG9yOiBjb2xvclByaW1hcnl9fT5TdGF0dXM6IDwvYj57cG9zdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIHN0eWxlPXt7Y29sb3I6IGNvbG9yUHJpbWFyeX19PlZpZXdzOiA8L2I+e3Bvc3Qudmlld3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5zdGF0dXNfY2hhbmdlX2NvbW1lbnQgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9J2luZm8nIG1lc3NhZ2U9e3Bvc3Quc3RhdHVzX2NoYW5nZV9jb21tZW50fSBzaG93SWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWb3RlV2lkZ2V0IHBvc3RJZD17cG9zdC5pZH0gcmF0aW5nPXtwb3N0LnJhdGluZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtbnVtYmVyIG10LTEwIG1iLTEwXCI+PE1lc3NhZ2VPdXRsaW5lZC8+PHNwYW4+e3Bvc3QuY29tbWVudF9udW1iZXJ8fDB9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhbkVkaXQgPyA8TGluayBjbGFzc05hbWU9XCJsaW5rLWJ1dHRvblwiIHRvPXtgL2Rhc2hib2FyZC9mZWVkYmFjay9wb3N0L2VkaXQvJHtwYXJhbXMucG9zdFNob3J0SWR9YH0+RWRpdCBwb3N0PC9MaW5rPjogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtODAtcGVyY2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17c2hvd0ltYWdlTW9kYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uT2s9eygpPT5zZXRTaG93SW1hZ2VNb2RhbChmYWxzZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKT0+c2V0U2hvd0ltYWdlTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17PD48Lz59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50SW1hZ2VTcmN9Lz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPik7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RWaWV3OyJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJuZXh0IiwicHVzaCIsImlzQXJyYXkiLCJSZWFjdCIsImxhenkiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJMaW5rIiwicGFyc2VQYXRoIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJBbGVydCIsIkJ1dHRvbiIsIklucHV0IiwidGhlbWUiLCJUb29sdGlwIiwiQ2FyZXREb3duT3V0bGluZWQiLCJDYXJldFVwT3V0bGluZWQiLCJEaXNsaWtlT3V0bGluZWQiLCJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJTdGFyT3V0bGluZWQiLCJheGlvcyIsIkF1dGhVSUZ1bmN0aW9ucyIsImNvbW1vbkZ1bmN0aW9ucyIsIkNvbnRhaW5lciIsIkluZm9JY29uIiwiTG9hZGVyIiwiVGlueU1DRUVkaXRvciIsImRpcnR5IiwidGVtcENvbnRlbnQiLCJDb21tZW50RWRpdG9yIiwicHJvcHMiLCJkaXNwYXRjaCIsIm5vdGlmeSIsInN0YXRlIiwiX3RoZW1lJHVzZVRva2VuIiwidXNlVG9rZW4iLCJfdGhlbWUkdXNlVG9rZW4kdG9rZW4iLCJ0b2tlbiIsImNvbG9yUHJpbWFyeUhvdmVyIiwiY29sb3JUZXh0TGFiZWwiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwidGV4dCIsInNldFRleHQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImNvbW1lbnRTYXZpbmciLCJzZXRDb21tZW50U2F2aW5nIiwicHJldlRleHRSZWYiLCJzYXZlQ29tbWVudCIsIl9yZWYiLCJfY2FsbGVlIiwiY29tbWVudERhdGEiLCJyZXNwb25zZSIsImNvbW1lbnREYXRhVXBkYXRlIiwiX3QiLCJfY29udGV4dCIsImlkIiwicG9zdF9pZCIsInBvc3RJZCIsInBhcmVudF9jb21tZW50X2lkIiwicGFyZW50Q29tbWVudElkIiwicG9zdCIsImRhdGEiLCJyZXN1bHQiLCJjYW5fZWRpdCIsInVwZGF0ZUNvbW1lbnQiLCJzaG93IiwiZXJyb3IiLCJzZXRQb3N0TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50VGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJ0eXBlIiwiY2FuY2VsRWRpdCIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX24iLCJGIiwicyIsInVzZUltbWVyIiwiQXZhdGFyIiwiQnJlYWRjcnVtYiIsIkNhcmQiLCJDaGVja2JveCIsIkNvbCIsIkRpdmlkZXIiLCJGb3JtIiwiTGlzdCIsIk1vZGFsIiwibm90aWZpY2F0aW9uIiwiUm93IiwiU3BhY2UiLCJUYWJzIiwiRE9NUHVyaWZ5IiwiRGVsZXRlT3V0bGluZWQiLCJFZGl0T3V0bGluZWQiLCJMb2NrRmlsbGVkIiwiVXNlck91dGxpbmVkIiwiZGF5anMiLCJyZXF1aXJlIiwidXRjIiwidGltZXpvbmUiLCJWb3RlV2lkZ2V0IiwiYm9hcmREYXRhIiwiUG9zdFZpZXciLCJuYXZpZ2F0ZSIsInBvc3RMb2FkaW5nIiwiY29tbWVudHNMb2FkaW5nIiwic2V0Q29tbWVudHNMb2FkaW5nIiwiX3VzZVN0YXRlNSIsInVzZXIiLCJwcm9ncmVzc19zdGF0dXMiLCJfdXNlU3RhdGU2Iiwic2V0UG9zdCIsIl91c2VJbW1lciIsIl91c2VJbW1lcjIiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJzaG93Q29tbWVudEVkaXRvciIsInNldFNob3dDb21tZW50RWRpdG9yIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJjdXJyZW50Q29tbWVudEVkaXRvclVuZGVySWQiLCJzZXRDdXJyZW50Q29tbWVudEVkaXRvclVuZGVySWQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJjdXJyZW50Q29tbWVudElkIiwic2V0Q3VycmVudENvbW1lbnRJZCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJjdXJyZW50UGFyZW50Q29tbWVudElkIiwic2V0Q3VycmVudFBhcmVudENvbW1lbnRJZCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJjdXJyZW50Q29tbWVudFRleHQiLCJzZXRDdXJyZW50Q29tbWVudFRleHQiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiY2FuRWRpdCIsInNldENhbkVkaXQiLCJwcmV2UG9zdCIsImNvbG9yUHJpbWFyeSIsInBhcmFtcyIsImFjY291bnREYXRhIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImN1cnJlbnRJbWFnZVNyYyIsInNldEN1cnJlbnRJbWFnZVNyYyIsIl9Nb2RhbCR1c2VNb2RhbCIsInVzZU1vZGFsIiwiX01vZGFsJHVzZU1vZGFsMiIsIm1vZGFsIiwiY29udGV4dEhvbGRlciIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJzaG93SW1hZ2VNb2RhbCIsInNldFNob3dJbWFnZU1vZGFsIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsIm5ld0NvbW1lbnRGbGFnIiwic2V0TmV3Q29tbWVudEZsYWciLCJicmVhZGNydW1iRGF0YSIsInRpdGxlIiwidG8iLCJsb2FkSW5pdGlhbERhdGEiLCJsb2FkQ29tbWVudHMiLCJhZGRDbGlja0hhbmRsZXJzVG9JbWFnZXMiLCJwb3N0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImltYWdlcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJfbG9vcCIsImltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNyYyIsImVyciIsImdldCIsImNvbmNhdCIsInBvc3RTaG9ydElkIiwicG9zdFNsdWciLCJpdGVtIiwicmVwbGFjZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfdDIiLCJfY29udGV4dDIiLCJsaXN0IiwiZHJhZnQiLCJyZW1vdmVDb21tZW50RnJvbURCIiwiX3JlZjMiLCJfY2FsbGVlMyIsImNvbW1lbnRJZCIsIl90MyIsIl9jb250ZXh0MyIsIl94Iiwic2hvd0NvbW1lbnRFZGl0b3JGbGFnIiwiY29tbWVudEVkaXRvcklkIiwidXBkYXRlQ3VycmVudENvbW1lbnQiLCJjbG9zZUNvbW1lbnRFZGl0b3IiLCJwYXJlbnRDb21tZW50IiwiZmluZElubmVyT2JqZWN0SW5JbW1lckFycmF5IiwiY2hpbGRyZW5fY29tbWVudHMiLCJ1bnNoaWZ0IiwidXNlcm5hbWUiLCJ1c2VycGljX3VybCIsImNyZWF0ZWQiLCJleGlzdGluZ0NvbW1lbnQiLCJjb21tZW50IiwiZmluZCIsImVucmljaGVkQ29tbWVudCIsIl9vYmplY3RTcHJlYWQiLCJyZW1vdmVDb21tZW50IiwiY29tbWVudExpc3QiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImNvbnRlbnRDbGlja2VkIiwidGFyZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiY2FuY2VsRWRpdGluZyIsIkNvbW1lbnRDb21wb25lbnQiLCJfcmVmNCIsImxldmVsIiwic3R5bGUiLCJwYWRkaW5nTGVmdCIsIm1hcCIsImtleSIsInNob3J0X2lkIiwiaWNvbiIsImxvY2FsIiwiZm9ybWF0IiwiRnJhZ21lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInNhbml0aXplIiwiX0NvbW1lbnRDb21wb25lbnQiLCJoMTAwIiwib2Zmc2V0IiwiaXRlbXMiLCJjb2xvciIsInNwYW4iLCJib3JkZXJlZCIsIm1lc3NhZ2UiLCJzaG93SWNvbiIsInJlcGxhY2VBbGwiLCJwcm9ncmVzc1N0YXR1cyIsInZpZXdzIiwic3RhdHVzX2NoYW5nZV9jb21tZW50IiwicmF0aW5nIiwiY29tbWVudF9udW1iZXIiLCJvcGVuIiwib25PayIsIm9uQ2FuY2VsIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==