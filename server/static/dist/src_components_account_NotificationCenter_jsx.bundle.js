"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_account_NotificationCenter_jsx"],{

/***/ "./src/components/account/NotificationCenter.jsx"
/*!*******************************************************!*\
  !*** ./src/components/account/NotificationCenter.jsx ***!
  \*******************************************************/
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
var NotificationCenter = function NotificationCenter(props) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationCenter);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfYWNjb3VudF9Ob3RpZmljYXRpb25DZW50ZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNBLHVLQUFBQSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssV0FBQSw4QkFBQUMsRUFBQU4sQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBQyxDQUFBLEdBQUFMLENBQUEsSUFBQUEsQ0FBQSxDQUFBTSxTQUFBLFlBQUFDLFNBQUEsR0FBQVAsQ0FBQSxHQUFBTyxTQUFBLEVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsQ0FBQUMsU0FBQSxVQUFBSyxtQkFBQSxDQUFBSCxDQUFBLHVCQUFBVixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBSSxDQUFBLE1BQUFDLENBQUEsR0FBQVgsQ0FBQSxRQUFBWSxDQUFBLE9BQUFDLENBQUEsS0FBQUYsQ0FBQSxLQUFBYixDQUFBLEtBQUFnQixDQUFBLEVBQUFwQixDQUFBLEVBQUFxQixDQUFBLEVBQUFDLENBQUEsRUFBQU4sQ0FBQSxFQUFBTSxDQUFBLENBQUFDLElBQUEsQ0FBQXZCLENBQUEsTUFBQXNCLENBQUEsV0FBQUEsRUFBQXJCLENBQUEsRUFBQUMsQ0FBQSxXQUFBTSxDQUFBLEdBQUFQLENBQUEsRUFBQVEsQ0FBQSxNQUFBRyxDQUFBLEdBQUFaLENBQUEsRUFBQW1CLENBQUEsQ0FBQWYsQ0FBQSxHQUFBRixDQUFBLEVBQUFtQixDQUFBLGdCQUFBQyxFQUFBcEIsQ0FBQSxFQUFBRSxDQUFBLFNBQUFLLENBQUEsR0FBQVAsQ0FBQSxFQUFBVSxDQUFB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Ozs7Ozs7Ozs7OztBQ3ZHd0I7QUFDMUI7QUFFc0I7QUFFOUMsSUFBTU4sUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlPLEtBQUssRUFBSTtFQUM5QixvQkFBT25DLDBEQUFBLENBQUMrRiw0Q0FBTztJQUFDRSxTQUFTLEVBQUU5RCxLQUFLLENBQUM4RCxTQUFTLElBQUksT0FBUTtJQUNsREosT0FBTyxFQUFFMUQsS0FBSyxDQUFDMEQsT0FBUTtJQUN2QkssS0FBSyxFQUFFL0QsS0FBSyxDQUFDK0Q7RUFBTSxnQkFBQ2xHLDBEQUFBLENBQUNnRyx5REFBZ0I7SUFBQ1osU0FBUyxFQUFDO0VBQVcsQ0FBRSxDQUFVLENBQUM7QUFDaEYsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5QjtBQUMwQjtBQUU3QyxJQUFNdEQsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUlLLEtBQUssRUFBRztFQUMzQixJQUFNZ0UsZUFBZSxHQUFHaEUsS0FBSyxDQUFDaUUsV0FBVyxHQUFHLEVBQUUsR0FBR2pFLEtBQUssQ0FBQ2tFLEtBQUssR0FBRyx3QkFBd0IsR0FDbEZsRSxLQUFLLENBQUNtRSxNQUFNLEdBQUcseUJBQXlCLEdBQUUsa0JBQW9CO0VBQ25FLE9BQVFuRSxLQUFLLENBQUN3QixJQUFJLElBQUksSUFBSSxJQUFLeEIsS0FBSyxDQUFDd0IsSUFBSSxJQUFJLElBQUksSUFBSXhCLEtBQUssQ0FBQ3dCLElBQUssZ0JBQUczRCwwREFBQTtJQUFLb0YsU0FBUyxFQUFFZTtFQUFnQixnQkFDL0ZuRywwREFBQSxDQUFDcUIseURBQWU7SUFBQ2tGLElBQUk7RUFBQSxDQUFDLENBQ3JCLENBQUMsR0FBRSxJQUFJO0FBQ2hCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvYWNjb3VudC9Ob3RpZmljYXRpb25DZW50ZXIuanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvSW5mb0ljb24uanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvTG9hZGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgQ29sLCBDYXJkLCBGb3JtLCBJbnB1dCwgTW9kYWwsIFJvdywgdGhlbWUsIFN3aXRjaCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHsgQmFyQ2hhcnRPdXRsaW5lZCwgRmlsZU91dGxpbmVkLCBMb2FkaW5nT3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgUm9ib3RPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQXV0aFVJRnVuY3Rpb25zIH0gZnJvbSAnQHNyYy91dGlscy9BdXRoVUlGdW5jdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IEluZm9JY29uIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0luZm9JY29uJztcclxuaW1wb3J0IHsgY29tbW9uRnVuY3Rpb25zIH0gZnJvbSAnQHNyYy91dGlscy9jb21tb25GdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvTG9hZGVyJztcclxuXHJcbmNvbnN0IHNldHRpbmdzRGF0YSA9IFtcclxuICAgIHtjb2RlOiAncG9zdF9jb21tZW50JywgbGFiZWw6ICdOZXcgY29tbWVudHMgb24geW91ciBwb3N0J30sXHJcbiAgICB7Y29kZTogJ2NvbW1lbnRfcmVwbGllcycsIGxhYmVsOiAnTmV3IHJlcGxpZXMgb24geW91ciBjb21tZW50J30sXHJcbiAgICB7Y29kZTogJ25ld19wb3N0JywgbGFiZWw6ICdOZXcgcG9zdCAob25seSBwdWJsaWMgcG9zdHMpJ30sXHJcbiAgICAvL1Vwdm90ZXMgb24geW91ciBwb3N0cydcclxuICAgIF07XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25DZW50ZXIgPSAocHJvcHMpPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbZGF0YUxvYWRpbmcsIHNldERhdGFMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyTm90aWZpY2F0aW9ucywgc2V0VXNlck5vdGlmaWNhdGlvbnNdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3Qgbm90aWZ5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZnkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5vdGlmaWNhdGlvbnMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTm90aWZpY2F0aW9ucyA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgc2V0RGF0YUxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FwcC9zZXR0aW5ncy9ub3RpZmljYXRpb25zJyk7XHJcbiAgICAgICAgICAgIHNldERhdGFMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJOb3RpZmljYXRpb25zKHJlc3BvbnNlLmRhdGEuaXRlbSB8fCB7fSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdDb3VsZCBub3QgbG9hZCB5b3VyIG5vdGlmaWNhdGlvbiBzZXR0aW5ncyBmb3Igc29tZSByZWFzb24uLi4nLCAnbm90aWZFcnJvcicsIDE1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgJ0NvdWxkIG5vdCBsb2FkIHlvdXIgbm90aWZpY2F0aW9uIHNldHRpbmdzIGZvciBzb21lIHJlYXNvbi4uLicsICdub3RpZkVycm9yJywgMTUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzYXZlID0gYXN5bmMgKCk9PntcclxuICAgICAgICBub3RpZnkuc2hvdygnbG9hZCcsICdQbGVhc2Ugd2FpdCB1bnRpbCB3ZSBzYXZlIHlvdXIgc2V0dGluZ3MuLi4nLCAnc2F2ZScpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvc2V0dGluZ3Mvbm90aWZpY2F0aW9ucycsIHVzZXJOb3RpZmljYXRpb25zKTtcclxuICAgICAgICAgICAgbm90aWZ5LmNsb3NlKCdzYXZlJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnc3VjY2VzcycsIHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1lvdXIgc2V0dGluZ3MgaGFzIGJlZW4gc2F2ZWQuJywgJ25vdGlmU2F2ZWQnLCAxNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdDb3VsZCBub3Qgc2F2ZSB5b3VyIG5vdGlmaWNhdGlvbiBzZXR0aW5ncyBmb3Igc29tZSByZWFzb24uLi4nLCAnbm90aVNhdmVmRXJyb3InLCAxNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsICdDb3VsZCBub3Qgc2F2ZSB5b3VyIG5vdGlmaWNhdGlvbiBzZXR0aW5ncyBmb3Igc29tZSByZWFzb24uLi4nLCAnbm90aVNhdmVmRXJyb3InLCAxNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHt0b2tlbjogeyBjb2xvclByaW1hcnlIb3ZlciwgY29sb3JUZXh0TGFiZWwgfX0gPSB0aGVtZS51c2VUb2tlbigpO1xyXG4gICAgY29uc3QgY2hhbmdlU2V0dGluZyA9IChuYW1lLCB2YWx1ZSk9PntcclxuICAgICAgICBzZXRVc2VyTm90aWZpY2F0aW9ucyh7Li4udXNlck5vdGlmaWNhdGlvbnMsIFtuYW1lXTogdmFsdWV9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBub3RpZmljYXRpb25MaXN0ID0gc2V0dGluZ3NEYXRhLm1hcChkdD0+e1xyXG4gICAgICAgIHJldHVybiA8Um93IGtleT17ZHQuY29kZX0gY2xhc3NOYW1lPVwibWItMTAgbXQtMTBcIj5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2R0LmxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dXNlck5vdGlmaWNhdGlvbnNbZHQuY29kZV0gIT0gbnVsbCA/IHVzZXJOb3RpZmljYXRpb25zW2R0LmNvZGVdOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNoZWNrZWQpPT5jaGFuZ2VTZXR0aW5nKGR0LmNvZGUsIGNoZWNrZWQpfSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICg8ZGl2PiBcclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIG9mZnNldD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjogY29sb3JUZXh0TGFiZWx9fT5Ob3RpZmljYXRpb24gQ2VudGVyPC9oMj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAge2RhdGFMb2FkaW5nID8gPExvYWRlciAvPjpcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsyfSBzcGFuPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkZlZWRiYWNrIGJvYXJkIHNldHRpbmdzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3NhdmV9PlNhdmUgc2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj4pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25DZW50ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IGxhenksIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCB7IEluZm9DaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb0ljb24gPSAocHJvcHMpPT4ge1xyXG4gICAgcmV0dXJuIDxUb29sdGlwIHBsYWNlbWVudD17cHJvcHMucGxhY2VtZW50IHx8IFwicmlnaHRcIn0gXHJcbiAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9PjxJbmZvQ2lyY2xlRmlsbGVkIGNsYXNzTmFtZT1cImluZm8taWNvblwiIC8+PC9Ub29sdGlwPlxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlciA9IChwcm9wcyk9PntcclxuICAgIGNvbnN0IGxvYWRlckNsYXNzTmFtZSA9IHByb3BzLm5vY29udGFpbmVyID8gJyc6IChwcm9wcy5zbWFsbCA/ICdsb2FkZXItY29udGFpbmVyLXNtYWxsJzogXHJcbiAgICAgICAgKHByb3BzLmlubGluZSA/ICdsb2FkZXItY29udGFpbmVyLWlubGluZSc6ICdsb2FkZXItY29udGFpbmVyJykpO1xyXG4gICAgcmV0dXJuIChwcm9wcy5zaG93ID09IG51bGwgfHwgKHByb3BzLnNob3cgIT0gbnVsbCAmJiBwcm9wcy5zaG93KSA/IDxkaXYgY2xhc3NOYW1lPXtsb2FkZXJDbGFzc05hbWV9PlxyXG4gICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3Bpbi8+XHJcbiAgICA8L2Rpdj46IG51bGwpO1xyXG59Il0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiQWxlcnQiLCJCdXR0b24iLCJDb2wiLCJDYXJkIiwiRm9ybSIsIklucHV0IiwiTW9kYWwiLCJSb3ciLCJ0aGVtZSIsIlN3aXRjaCIsIkJhckNoYXJ0T3V0bGluZWQiLCJGaWxlT3V0bGluZWQiLCJMb2FkaW5nT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJSb2JvdE91dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiYXhpb3MiLCJBdXRoVUlGdW5jdGlvbnMiLCJDb250YWluZXIiLCJJbmZvSWNvbiIsImNvbW1vbkZ1bmN0aW9ucyIsIkxvYWRlciIsInNldHRpbmdzRGF0YSIsImNvZGUiLCJsYWJlbCIsIk5vdGlmaWNhdGlvbkNlbnRlciIsInByb3BzIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInBhcmFtcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJkYXRhTG9hZGluZyIsInNldERhdGFMb2FkaW5nIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ1c2VyTm90aWZpY2F0aW9ucyIsInNldFVzZXJOb3RpZmljYXRpb25zIiwibm90aWZ5Iiwic3RhdGUiLCJsb2FkTm90aWZpY2F0aW9ucyIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJfdCIsIl9jb250ZXh0IiwiZ2V0IiwiZGF0YSIsInJlc3VsdCIsIml0ZW0iLCJzaG93IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2F2ZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfdDIiLCJfY29udGV4dDIiLCJwb3N0IiwiY2xvc2UiLCJfdGhlbWUkdXNlVG9rZW4iLCJ1c2VUb2tlbiIsIl90aGVtZSR1c2VUb2tlbiR0b2tlbiIsInRva2VuIiwiY29sb3JQcmltYXJ5SG92ZXIiLCJjb2xvclRleHRMYWJlbCIsImNoYW5nZVNldHRpbmciLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5Iiwibm90aWZpY2F0aW9uTGlzdCIsIm1hcCIsImR0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsImNsYXNzTmFtZSIsInNwYW4iLCJjaGVja2VkIiwib25DaGFuZ2UiLCJvZmZzZXQiLCJzdHlsZSIsImNvbG9yIiwiRnJhZ21lbnQiLCJ0eXBlIiwib25DbGljayIsImxhenkiLCJUb29sdGlwIiwiSW5mb0NpcmNsZUZpbGxlZCIsInBsYWNlbWVudCIsInRpdGxlIiwibG9hZGVyQ2xhc3NOYW1lIiwibm9jb250YWluZXIiLCJzbWFsbCIsImlubGluZSIsInNwaW4iXSwic291cmNlUm9vdCI6IiJ9