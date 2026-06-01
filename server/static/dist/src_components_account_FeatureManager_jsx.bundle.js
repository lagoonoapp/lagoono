"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_account_FeatureManager_jsx"],{

/***/ "./src/components/account/FeatureManager.jsx"
/*!***************************************************!*\
  !*** ./src/components/account/FeatureManager.jsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-QUQL4437.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/switch/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/components/ui/InfoIcon */ "./src/components/ui/InfoIcon.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");
/* harmony import */ var _src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/components/ui/Loader */ "./src/components/ui/Loader.jsx");
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











var settingsData = [{
  code: 'post_comment',
  label: 'New comments on your post'
}, {
  code: 'comment_replies',
  label: 'New replies on your comment'
}, {
  code: 'new_post',
  label: 'New post (only public posts)'
}
//Upvotes on your posts'
];
var FeatureManager = function FeatureManager(props) {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    dataLoading = _useState2[0],
    setDataLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    userNotifications = _useState4[0],
    setUserNotifications = _useState4[1];
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.notify;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadNotifications();
  }, []);
  var loadNotifications = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setDataLoading(true);
            _context.p = 1;
            _context.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_8__["default"].get('/api/app/settings/notifications');
          case 2:
            response = _context.v;
            setDataLoading(false);
            if (response.data.result) {
              setUserNotifications(response.data.item || {});
            } else {
              notify.show('error', response.data.error || 'Could not load your notification settings for some reason...', 'notifError', 15);
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.log(_t);
            notify.show('error', 'Could not load your notification settings for some reason...', 'notifError', 15);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function loadNotifications() {
      return _ref.apply(this, arguments);
    };
  }();
  var save = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            notify.show('load', 'Please wait until we save your settings...', 'save');
            _context2.p = 1;
            _context2.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_8__["default"].post('/api/app/settings/notifications', userNotifications);
          case 2:
            response = _context2.v;
            notify.close('save');
            if (response.data.result) {
              notify.show('success', response.data.error || 'Your settings has been saved.', 'notifSaved', 15);
            } else {
              notify.show('error', response.data.error || 'Could not save your notification settings for some reason...', 'notiSavefError', 15);
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.log(_t2);
            notify.show('error', 'Could not save your notification settings for some reason...', 'notiSavefError', 15);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function save() {
      return _ref2.apply(this, arguments);
    };
  }();
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_7__["default"].useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimaryHover = _theme$useToken$token.colorPrimaryHover,
    colorTextLabel = _theme$useToken$token.colorTextLabel;
  var changeSetting = function changeSetting(name, value) {
    setUserNotifications(_objectSpread(_objectSpread({}, userNotifications), {}, _defineProperty({}, name, value)));
  };
  var notificationList = settingsData.map(function (dt) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: dt.code,
      className: "mb-10 mt-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
      span: 8
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, dt.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
      span: 8
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
      checked: userNotifications[dt.code] != null ? userNotifications[dt.code] : false,
      onChange: function onChange(checked) {
        return changeSetting(dt.code, checked);
      }
    })));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: colorTextLabel
    }
  }, "Notification Center"))), dataLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_13__.Loader, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    offset: 2,
    span: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Feedback board settings"), notificationList))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "primary",
    onClick: save
  }, "Save settings"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureManager);

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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfYWNjb3VudF9GZWF0dXJlTWFuYWdlcl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEsR0FB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O0FDdkc0QjtBQUMxQjtBQUVzQjtBQUU5QyxJQUFNTixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSU8sS0FBSyxFQUFJO0VBQzlCLG9CQUFPbkMsMERBQUEsQ0FBQytGLDRDQUFPO0lBQUNFLFNBQVMsRUFBRTlELEtBQUssQ0FBQzhELFNBQVMsSUFBSSxPQUFRO0lBQ2xESixPQUFPLEVBQUUxRCxLQUFLLENBQUMwRCxPQUFRO0lBQ3ZCSyxLQUFLLEVBQUUvRCxLQUFLLENBQUMrRDtFQUFNLGdCQUFDbEcsMERBQUEsQ0FBQ2dHLHlEQUFnQjtJQUFDWixTQUFTLEVBQUM7RUFBVyxDQUFFLENBQVUsQ0FBQztBQUNoRixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHlCO0FBQzBCO0FBRTdDLElBQU10RCxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSUssS0FBSyxFQUFHO0VBQzNCLElBQU1nRSxlQUFlLEdBQUdoRSxLQUFLLENBQUNpRSxXQUFXLEdBQUcsRUFBRSxHQUFHakUsS0FBSyxDQUFDa0UsS0FBSyxHQUFHLHdCQUF3QixHQUNsRmxFLEtBQUssQ0FBQ21FLE1BQU0sR0FBRyx5QkFBeUIsR0FBRSxrQkFBb0I7RUFDbkUsT0FBUW5FLEtBQUssQ0FBQ3dCLElBQUksSUFBSSxJQUFJLElBQUt4QixLQUFLLENBQUN3QixJQUFJLElBQUksSUFBSSxJQUFJeEIsS0FBSyxDQUFDd0IsSUFBSyxnQkFBRzNELDBEQUFBO0lBQUtvRixTQUFTLEVBQUVlO0VBQWdCLGdCQUMvRm5HLDBEQUFBLENBQUNxQix5REFBZTtJQUFDa0YsSUFBSTtFQUFBLENBQUMsQ0FDckIsQ0FBQyxHQUFFLElBQUk7QUFDaEIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFnb29uby1hcHAvLi9zcmMvY29tcG9uZW50cy9hY2NvdW50L0ZlYXR1cmVNYW5hZ2VyLmpzeCIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL0luZm9JY29uLmpzeCIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL0xvYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIENvbCwgQ2FyZCwgRm9ybSwgSW5wdXQsIE1vZGFsLCBSb3csIHRoZW1lLCBTd2l0Y2ggfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCB7IEJhckNoYXJ0T3V0bGluZWQsIEZpbGVPdXRsaW5lZCwgTG9hZGluZ091dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFJvYm90T3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEF1dGhVSUZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvQXV0aFVJRnVuY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9Db250YWluZXInO1xyXG5pbXBvcnQgeyBJbmZvSWNvbiB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9JbmZvSWNvbic7XHJcbmltcG9ydCB7IGNvbW1vbkZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvY29tbW9uRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0xvYWRlcic7XHJcblxyXG5jb25zdCBzZXR0aW5nc0RhdGEgPSBbXHJcbiAgICB7Y29kZTogJ3Bvc3RfY29tbWVudCcsIGxhYmVsOiAnTmV3IGNvbW1lbnRzIG9uIHlvdXIgcG9zdCd9LFxyXG4gICAge2NvZGU6ICdjb21tZW50X3JlcGxpZXMnLCBsYWJlbDogJ05ldyByZXBsaWVzIG9uIHlvdXIgY29tbWVudCd9LFxyXG4gICAge2NvZGU6ICduZXdfcG9zdCcsIGxhYmVsOiAnTmV3IHBvc3QgKG9ubHkgcHVibGljIHBvc3RzKSd9LFxyXG4gICAgLy9VcHZvdGVzIG9uIHlvdXIgcG9zdHMnXHJcbiAgICBdO1xyXG5cclxuY29uc3QgRmVhdHVyZU1hbmFnZXIgPSAocHJvcHMpPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbZGF0YUxvYWRpbmcsIHNldERhdGFMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyTm90aWZpY2F0aW9ucywgc2V0VXNlck5vdGlmaWNhdGlvbnNdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3Qgbm90aWZ5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZnkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5vdGlmaWNhdGlvbnMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTm90aWZpY2F0aW9ucyA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgc2V0RGF0YUxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FwcC9zZXR0aW5ncy9ub3RpZmljYXRpb25zJyk7XHJcbiAgICAgICAgICAgIHNldERhdGFMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJOb3RpZmljYXRpb25zKHJlc3BvbnNlLmRhdGEuaXRlbSB8fCB7fSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdDb3VsZCBub3QgbG9hZCB5b3VyIG5vdGlmaWNhdGlvbiBzZXR0aW5ncyBmb3Igc29tZSByZWFzb24uLi4nLCAnbm90aWZFcnJvcicsIDE1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgJ0NvdWxkIG5vdCBsb2FkIHlvdXIgbm90aWZpY2F0aW9uIHNldHRpbmdzIGZvciBzb21lIHJlYXNvbi4uLicsICdub3RpZkVycm9yJywgMTUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzYXZlID0gYXN5bmMgKCk9PntcclxuICAgICAgICBub3RpZnkuc2hvdygnbG9hZCcsICdQbGVhc2Ugd2FpdCB1bnRpbCB3ZSBzYXZlIHlvdXIgc2V0dGluZ3MuLi4nLCAnc2F2ZScpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvc2V0dGluZ3Mvbm90aWZpY2F0aW9ucycsIHVzZXJOb3RpZmljYXRpb25zKTtcclxuICAgICAgICAgICAgbm90aWZ5LmNsb3NlKCdzYXZlJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnc3VjY2VzcycsIHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1lvdXIgc2V0dGluZ3MgaGFzIGJlZW4gc2F2ZWQuJywgJ25vdGlmU2F2ZWQnLCAxNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdDb3VsZCBub3Qgc2F2ZSB5b3VyIG5vdGlmaWNhdGlvbiBzZXR0aW5ncyBmb3Igc29tZSByZWFzb24uLi4nLCAnbm90aVNhdmVmRXJyb3InLCAxNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsICdDb3VsZCBub3Qgc2F2ZSB5b3VyIG5vdGlmaWNhdGlvbiBzZXR0aW5ncyBmb3Igc29tZSByZWFzb24uLi4nLCAnbm90aVNhdmVmRXJyb3InLCAxNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHt0b2tlbjogeyBjb2xvclByaW1hcnlIb3ZlciwgY29sb3JUZXh0TGFiZWwgfX0gPSB0aGVtZS51c2VUb2tlbigpO1xyXG4gICAgY29uc3QgY2hhbmdlU2V0dGluZyA9IChuYW1lLCB2YWx1ZSk9PntcclxuICAgICAgICBzZXRVc2VyTm90aWZpY2F0aW9ucyh7Li4udXNlck5vdGlmaWNhdGlvbnMsIFtuYW1lXTogdmFsdWV9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBub3RpZmljYXRpb25MaXN0ID0gc2V0dGluZ3NEYXRhLm1hcChkdD0+e1xyXG4gICAgICAgIHJldHVybiA8Um93IGtleT17ZHQuY29kZX0gY2xhc3NOYW1lPVwibWItMTAgbXQtMTBcIj5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2R0LmxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dXNlck5vdGlmaWNhdGlvbnNbZHQuY29kZV0gIT0gbnVsbCA/IHVzZXJOb3RpZmljYXRpb25zW2R0LmNvZGVdOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNoZWNrZWQpPT5jaGFuZ2VTZXR0aW5nKGR0LmNvZGUsIGNoZWNrZWQpfSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICg8ZGl2PiBcclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIG9mZnNldD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjogY29sb3JUZXh0TGFiZWx9fT5Ob3RpZmljYXRpb24gQ2VudGVyPC9oMj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAge2RhdGFMb2FkaW5nID8gPExvYWRlciAvPjpcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsyfSBzcGFuPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkZlZWRiYWNrIGJvYXJkIHNldHRpbmdzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3NhdmV9PlNhdmUgc2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj4pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlTWFuYWdlcjsiLCJpbXBvcnQgUmVhY3QsIHsgbGF6eSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHsgSW5mb0NpcmNsZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvSWNvbiA9IChwcm9wcyk9PiB7XHJcbiAgICByZXR1cm4gPFRvb2x0aXAgcGxhY2VtZW50PXtwcm9wcy5wbGFjZW1lbnQgfHwgXCJyaWdodFwifSBcclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX0+PEluZm9DaXJjbGVGaWxsZWQgY2xhc3NOYW1lPVwiaW5mby1pY29uXCIgLz48L1Rvb2x0aXA+XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKHByb3BzKT0+e1xyXG4gICAgY29uc3QgbG9hZGVyQ2xhc3NOYW1lID0gcHJvcHMubm9jb250YWluZXIgPyAnJzogKHByb3BzLnNtYWxsID8gJ2xvYWRlci1jb250YWluZXItc21hbGwnOiBcclxuICAgICAgICAocHJvcHMuaW5saW5lID8gJ2xvYWRlci1jb250YWluZXItaW5saW5lJzogJ2xvYWRlci1jb250YWluZXInKSk7XHJcbiAgICByZXR1cm4gKHByb3BzLnNob3cgPT0gbnVsbCB8fCAocHJvcHMuc2hvdyAhPSBudWxsICYmIHByb3BzLnNob3cpID8gPGRpdiBjbGFzc05hbWU9e2xvYWRlckNsYXNzTmFtZX0+XHJcbiAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluLz5cclxuICAgIDwvZGl2PjogbnVsbCk7XHJcbn0iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibmV4dCIsInB1c2giLCJpc0FycmF5IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJBbGVydCIsIkJ1dHRvbiIsIkNvbCIsIkNhcmQiLCJGb3JtIiwiSW5wdXQiLCJNb2RhbCIsIlJvdyIsInRoZW1lIiwiU3dpdGNoIiwiQmFyQ2hhcnRPdXRsaW5lZCIsIkZpbGVPdXRsaW5lZCIsIkxvYWRpbmdPdXRsaW5lZCIsIk1lc3NhZ2VPdXRsaW5lZCIsIlJvYm90T3V0bGluZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJheGlvcyIsIkF1dGhVSUZ1bmN0aW9ucyIsIkNvbnRhaW5lciIsIkluZm9JY29uIiwiY29tbW9uRnVuY3Rpb25zIiwiTG9hZGVyIiwic2V0dGluZ3NEYXRhIiwiY29kZSIsImxhYmVsIiwiRmVhdHVyZU1hbmFnZXIiLCJwcm9wcyIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJwYXJhbXMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiZGF0YUxvYWRpbmciLCJzZXREYXRhTG9hZGluZyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidXNlck5vdGlmaWNhdGlvbnMiLCJzZXRVc2VyTm90aWZpY2F0aW9ucyIsIm5vdGlmeSIsInN0YXRlIiwibG9hZE5vdGlmaWNhdGlvbnMiLCJfcmVmIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiX3QiLCJfY29udGV4dCIsImdldCIsImRhdGEiLCJyZXN1bHQiLCJpdGVtIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNhdmUiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX3QyIiwiX2NvbnRleHQyIiwicG9zdCIsImNsb3NlIiwiX3RoZW1lJHVzZVRva2VuIiwidXNlVG9rZW4iLCJfdGhlbWUkdXNlVG9rZW4kdG9rZW4iLCJ0b2tlbiIsImNvbG9yUHJpbWFyeUhvdmVyIiwiY29sb3JUZXh0TGFiZWwiLCJjaGFuZ2VTZXR0aW5nIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsIm5vdGlmaWNhdGlvbkxpc3QiLCJtYXAiLCJkdCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJjbGFzc05hbWUiLCJzcGFuIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwib2Zmc2V0Iiwic3R5bGUiLCJjb2xvciIsIkZyYWdtZW50IiwidHlwZSIsIm9uQ2xpY2siLCJsYXp5IiwiVG9vbHRpcCIsIkluZm9DaXJjbGVGaWxsZWQiLCJwbGFjZW1lbnQiLCJ0aXRsZSIsImxvYWRlckNsYXNzTmFtZSIsIm5vY29udGFpbmVyIiwic21hbGwiLCJpbmxpbmUiLCJzcGluIl0sInNvdXJjZVJvb3QiOiIifQ==