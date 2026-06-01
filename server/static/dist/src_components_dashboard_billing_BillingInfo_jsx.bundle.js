"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_billing_BillingInfo_jsx"],{

/***/ "./src/components/dashboard/billing/BillingInfo.jsx"
/*!**********************************************************!*\
  !*** ./src/components/dashboard/billing/BillingInfo.jsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-QUQL4437.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tabs/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/components/ui/InfoIcon */ "./src/components/ui/InfoIcon.jsx");
/* harmony import */ var _src_components_dashboard_billing_PlanList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/components/dashboard/billing/PlanList */ "./src/components/dashboard/billing/PlanList.jsx");
/* harmony import */ var _src_components_dashboard_billing_PaymentHistory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/components/dashboard/billing/PaymentHistory */ "./src/components/dashboard/billing/PaymentHistory.jsx");
/* harmony import */ var _src_components_dashboard_billing_PaymentMethod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/components/dashboard/billing/PaymentMethod */ "./src/components/dashboard/billing/PaymentMethod.jsx");
/* harmony import */ var _src_components_dashboard_billing_InvoiceList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/components/dashboard/billing/InvoiceList */ "./src/components/dashboard/billing/InvoiceList.jsx");
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














var BillingInfo = function BillingInfo(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var accountData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.accountData || {};
  });
  var payment_summary = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.payment_summary || {};
  });
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    errorOnLoad = _useState2[0],
    setErrorOnLoad = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadInitialData();
  }, []);
  var loadInitialData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_6__["default"].get('/api/app/payment/summary');
          case 1:
            response = _context.v;
            if (response.data.result) {
              if (response.data.result) {
                dispatch({
                  type: 'payment_summary',
                  name: 'payment_summary',
                  value: response.data.payment_summary
                });
              } else {
                setErrorOnLoad(response.data.error || 'Some error occured during this request... please try again.');
              }
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.log(_t);
            setErrorOnLoad('Some error occured during this request... please try again.');
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function loadInitialData() {
      return _ref.apply(this, arguments);
    };
  }();
  var tabItems = [
  //{label: 'Summary', key: 'summary'},
  {
    label: 'Plans',
    key: 'summary',
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_dashboard_billing_PlanList__WEBPACK_IMPORTED_MODULE_11__.PlanList, null)
  },
  //{label: 'Payment info', key: 'info'},
  {
    label: 'Payment history',
    key: 'history',
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_dashboard_billing_PaymentHistory__WEBPACK_IMPORTED_MODULE_12__.PaymentHistory, null)
  }, {
    label: 'Payment method',
    key: 'method',
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_dashboard_billing_PaymentMethod__WEBPACK_IMPORTED_MODULE_13__.PaymentMethod, null)
  }, {
    label: 'Invoices',
    key: 'invoices',
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_dashboard_billing_InvoiceList__WEBPACK_IMPORTED_MODULE_14__.InvoiceList, null)
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-block scrollable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Billing info"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    offset: 2,
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_9__.Container, {
    pt: "md",
    mb: "xxl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "card",
    items: tabItems
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingInfo);

/***/ },

/***/ "./src/components/dashboard/billing/InvoiceList.jsx"
/*!**********************************************************!*\
  !*** ./src/components/dashboard/billing/InvoiceList.jsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceList: () => (/* binding */ InvoiceList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/WarningOutlined.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
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



var dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");


var InvoiceList = function InvoiceList(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var accountData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.accountData || {};
  });
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadInitialData();
  }, []);
  var loadInitialData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setStatus('info');
            setMessage('The list of your invoices is being loaded, please wait...');
            _context.p = 1;
            _context.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/app/payment/invoice/list');
          case 2:
            response = _context.v;
            if (response.data.result) {
              setStatus('');
              setItems(response.data.list);
              if (!(response.data.list && response.data.list.length)) {
                setStatus('info');
                setMessage('No invoices have been issued yet.');
              }
            } else {
              setStatus('error');
              setMessage(response.data.error || 'Some error occured during this request... please try again.');
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setStatus('error');
            setMessage('Some error occured during this request... please try again.');
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function loadInitialData() {
      return _ref.apply(this, arguments);
    };
  }();
  var invoiceItems = items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: item.dt
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, dayjs(item.date).format('MMMM D YYYY, h:mm a')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, item.paid ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "success"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "fail"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, item.currency, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, item.amount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: item.pdf,
      target: "blank"
    }, "Receipt/invoice page")));
  });
  var tableData = items && items.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped table-custom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, "Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, "Receipt"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, invoiceItems)) : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary"
  }, tableData, status != '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: message,
    type: status,
    showIcon: true
  }) : null));
};

/***/ },

/***/ "./src/components/dashboard/billing/PaymentHistory.jsx"
/*!*************************************************************!*\
  !*** ./src/components/dashboard/billing/PaymentHistory.jsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentHistory: () => (/* binding */ PaymentHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
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


var dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

var PaymentHistory = function PaymentHistory(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadInitialData();
  }, []);
  var loadInitialData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setStatus('info');
            setMessage('Billing plans and summary is being loaded, please wait...');
            _context.p = 1;
            _context.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/app/payment/history');
          case 2:
            response = _context.v;
            if (response.data.result) {
              setStatus('');
              setItems(response.data.items);
              if (!(response.data.items && response.data.items.length)) {
                setStatus('info');
                setMessage('No payment events exist.');
              }
            } else {
              setStatus('error');
              setMessage(response.data.error || 'Some error occured during this request... please try again.');
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setStatus('error');
            setMessage('Some error occured during this request... please try again.');
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function loadInitialData() {
      return _ref.apply(this, arguments);
    };
  }();
  var historyItems = items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: item.date
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, dayjs(item.date).format('MMMM D YYYY, h:mm a')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, item.event), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, item.comment));
  });
  var tableData = items && items.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped table-custom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, "Event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, "Comment"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, historyItems)) : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary"
  }, tableData, status != '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: message,
    type: status,
    showIcon: true
  }) : null));
};

/***/ },

/***/ "./src/components/dashboard/billing/PaymentMethod.jsx"
/*!************************************************************!*\
  !*** ./src/components/dashboard/billing/PaymentMethod.jsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentMethod: () => (/* binding */ PaymentMethod)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
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



var dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

var PaymentMethod = function PaymentMethod(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var accountData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.accountData || {};
  });
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    paymentInfo = _useState8[0],
    setPaymentInfo = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (accountData && accountData.plan_code != 'free') {
      loadInitialData();
    }
    var query = new URLSearchParams(window.location.search);
    if (query.get('method')) {
      if (query.get('success') == 'true') {
        // New subscription created, get data
        notify.show('success', 'You have changed your payment method information successfully!', 'methodChanged', 15);
      } else {
        notify.show('warning', 'You canceled method update or something went wrong so please try again...', 'methodChangedFail', 15);
      }
    }
  }, []);
  var loadInitialData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            notify.show('load', 'Obtaining your payment information...', 'methodGet');
            _context.p = 1;
            _context.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/app/payment/plan/method');
          case 2:
            response = _context.v;
            notify.close('methodGet');
            if (response.data.result) {
              if (response.data.item) {
                setPaymentInfo(response.data.item);
              } else {
                notify.show('warning', 'Could not obtain the payment method information.', 'getMethodEmpty', 15);
              }
            } else {
              notify.show('error', 'Could not obtain the payment method information.', 'getMethodEmpty', 15);
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            notify.close('methodGet');
            notify.show('error', 'Could not obtain the payment method information.', 'getMethodEmpty', 15);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function loadInitialData() {
      return _ref.apply(this, arguments);
    };
  }();
  var initiateChangePaymentMethod = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            // Create a stripe checkout session, redirect to the Stripe checkout page
            notify.close('changeMethodError');
            notify.show('load', 'Please wait, you will be redirected to the payment method page...', 'methodPage', 10);
            _context2.p = 1;
            _context2.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/api/app/payment/plan/method');
          case 2:
            response = _context2.v;
            if (response.data.result) {
              window.location.href = response.data.url;
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'changeMethodError', 10);
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.log(_t2);
            notify.show('error', 'Some error occured during this request... please try again.', 'changeMethodError', 10);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function initiateChangePaymentMethod() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-light"
  }, accountData && accountData.plan_code != 'free' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "info",
    message: "Here you can change your method for future payments",
    showIcon: true
  }), paymentInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-10 mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Payment method: "), paymentInfo) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "primary",
    onClick: initiateChangePaymentMethod
  }, "Update my payment method"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "info",
    message: "Here you will be able to change the payment method when you buy a subscription.",
    showIcon: true
  }));
};

/***/ },

/***/ "./src/components/dashboard/billing/PlanList.jsx"
/*!*******************************************************!*\
  !*** ./src/components/dashboard/billing/PlanList.jsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanList: () => (/* binding */ PlanList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-QUQL4437.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/notification/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/radio/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/CircleNotch.es.js");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");




//import { connect } from 'react-redux';
//import Icon from '@src/components/icon/Icon';
//import Moment from 'react-moment';
//import moment from 'moment';
//import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';

//import Alert from '@src/components/alert/Alert';
//import StripeForm from '@src/modules/payment/StripeForm';
var defaultVendor = window.default_payment_vendor;
var paymentClientId = window.payment_client_id;
var intervalCancel = null;
var PlanList = function PlanList(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var _Modal$useModal = antd__WEBPACK_IMPORTED_MODULE_8__["default"].useModal(),
    _Modal$useModal2 = _slicedToArray(_Modal$useModal, 2),
    modal = _Modal$useModal2[0],
    contextHolder = _Modal$useModal2[1];
  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_9__["default"].useNotification(),
    _notification$useNoti2 = _slicedToArray(_notification$useNoti, 1),
    api = _notification$useNoti2[0];
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var accountData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.accountData || {};
  });
  var payment_summary = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.payment_summary || {};
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPaymentForm = _useState2[0],
    setShowPaymentForm = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dataLoaded = _useState4[0],
    setDataLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('na'),
    _useState6 = _slicedToArray(_useState5, 2),
    allowCancel = _useState6[0],
    setAllowCancel = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    allowCancelError = _useState8[0],
    setAllowCancelError = _useState8[1];
  //const [status, setStatus] = useState('');
  //const [message, setMessage] = useState('');
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showCancelPlanModal = _useState0[0],
    setShowCancelPlanModal = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    paypal = _useState10[0],
    setPaypal = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    planList = _useState12[0],
    setPlanList = _useState12[1];
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["default"].useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    formCancelReason = _Form$useForm2[0];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      reason: null,
      details: ''
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    cancelReason = _useState14[0],
    setCancelReason = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    cancelPlanTitle = _useState16[0],
    setCancelPlanTitle = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    planIdToStart = _useState18[0],
    setPlanIdToStart = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    cancellingInProgress = _useState20[0],
    setCancellingInProgress = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    referralPromoCode = _useState22[0],
    setReferralPromoCode = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    promoCodeValid = _useState24[0],
    setPromoCodeValid = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    selectedPlanId = _useState26[0],
    setSelectedPlanId = _useState26[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadInitialData();
    //getSubscription(); // Get subscription info anyway
    var query = new URLSearchParams(window.location.search);
    if (query.get('method')) {
      if (query.get('success')) {
        // New subscription created, get data
        reloadAccountData();
        setDefaultMethod();
      } else {
        notify.show('error', 'Could not create a subscription for some reason, please try again...', 'subscribtionFailed', 10);
      }
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (planList.length) {
      setInterval(function () {
        return setDataLoaded(true);
      }, 500);
    }
  }, [planList]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (paypal) {
      //initPaymentButtons();
    }
  }, [paypal]);
  var getSubscription = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            notify.show('load', 'Please wait until we get the information on your subscription...', 'subscriptionInfo', 10);
            _context.p = 1;
            _context.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/app/payment/plan/getsubscription');
          case 2:
            response = _context.v;
            notify.close('subscriptionInfo');
            if (response.data.result) {
              dispatch({
                type: 'payment_summary',
                name: 'payment_summary',
                value: _objectSpread(_objectSpread({}, payment_summary), {}, {
                  subscription_data: response.data.subscription
                })
              });
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'loadPlansError', 10);
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.log(_t);
            notify.show('error', 'Some error occured during this request... please try again.', 'loadPlansError', 10);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function getSubscription() {
      return _ref.apply(this, arguments);
    };
  }();
  var loadInitialData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, newPlanList, noKeyPlan, keyPlan, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/app/payment/plan/list');
          case 1:
            response = _context2.v;
            if (response.data.result) {
              newPlanList = [];
              noKeyPlan = response.data.list.filter(function (plan) {
                return plan.plan_code.indexOf('key') == -1;
              }).sort(function (plan) {
                return plan.amount;
              });
              keyPlan = response.data.list.filter(function (plan) {
                return plan.plan_code.indexOf('key') > -1;
              }).sort(function (plan) {
                return plan.amount;
              });
              newPlanList.push({
                plan_code: 'title-without',
                title: 'Plans without OpenAI key'
              });
              newPlanList = [].concat(_toConsumableArray(newPlanList), _toConsumableArray(noKeyPlan));
              newPlanList.push({
                plan_code: 'title-with',
                title: 'Plans with OpenAI key'
              });
              newPlanList = [].concat(_toConsumableArray(newPlanList), _toConsumableArray(keyPlan));
              setPlanList(newPlanList);
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'loadPlansError', 10);
            }
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            console.log(_t2);
            notify.show('error', 'Some error occured during this request... please try again.', 'loadPlansError', 10);
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function loadInitialData() {
      return _ref2.apply(this, arguments);
    };
  }();
  var selectPlan = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(planId, subscriptionId) {
      var response, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            //setStatus('info');
            notify.show('load', 'Please wait until we set up your plan...', 'selectPlanLoad');
            _context3.p = 1;
            _context3.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/app/payment/plan/select', {
              plan_id: planId,
              subscription_id: subscriptionId
            });
          case 2:
            response = _context3.v;
            notify.close('selectPlanLoad');
            if (response.data.result) {
              setPlanIdToStart(null);
              // Update summary
              dispatch({
                type: 'payment_summary',
                name: 'payment_summary',
                value: _objectSpread(_objectSpread({}, payment_summary), {}, {
                  subscription_data: response.data.subscription_data
                })
              });
              dispatch({
                type: 'accountData',
                name: 'accountData',
                value: _objectSpread(_objectSpread({}, accountData), {}, {
                  plan_code: response.data.subscription_data.plan_id
                })
              });
              notify.show('success', response.data.message || 'The plan has been selected and paid successfully.', 'selectPlan', 10);
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'selectPlanError', 10);
            }
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            console.log(_t3);
            notify.show('error', 'Some error occured during this request... please try again.', 'selectPlanError', 10);
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function selectPlan(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  /*const showModalForReferralPromoCode = (planId)=>{
      modal.confirm({
          title: 'Apply a referral code',
          okText:'Proceed',
          onOk: ()=>selectNewPlan(planId),
          cancelText: 'Cancel',
          content: <>
              <div>If you have a referral code, you can enter it now. If your referral code is valid, you and your referral will get a 10% bonus on your limits.</div>
              <Input value={referralPromoCode} onChange={(e)=>setReferralPromoCode(e.target.value)} />
              {promoCodeValid != null ?(
                  promoCodeValid == true ?
                  <Alert type="success" message="This promo code is valid." showIcon />:
                  <Alert type="error" message="This promo code is not valid." showIcon />
              ): null}
              <div className="mt-10 mb-10">
                  <Button type="default" onClick={checkPromoCode} disabled={!referralPromoCode}>Check this promo code</Button>
              </div>
          </>
      });
  };*/
  var checkPromoCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var response, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            setPromoCodeValid(null);
            notify.show('load', 'Please wait, checking the promo code...', 'checkPromoCode');
            _context4.p = 1;
            _context4.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/app/settings/partnership/checkpromocode', {
              code: referralPromoCode
            });
          case 2:
            response = _context4.v;
            notify.close('checkPromoCode');
            if (response.data.result) {
              setPromoCodeValid(response.data.item);
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'selectPlanError', 10);
            }
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            console.log(_t4);
            notify.show('error', 'Some error occured during this request... please try again.', 'selectPlanError', 10);
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return function checkPromoCode() {
      return _ref4.apply(this, arguments);
    };
  }();
  var selectNewPlan = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var response, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            // Create a stripe checkout session, redirect to the Stripe checkout page
            notify.close('selectPlanError');
            notify.show('load', 'Please wait, you will be redirected to the checkout page...', 'checkout', 10);
            _context5.p = 1;
            _context5.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/app/payment/plan/checkout', {
              plan_id: selectedPlanId,
              referral_promo_code: referralPromoCode
            });
          case 2:
            response = _context5.v;
            if (response.data.result) {
              window.location.href = response.data.url;
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'selectPlanError', 10);
            }
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t5 = _context5.v;
            console.log(_t5);
            notify.show('error', 'Some error occured during this request... please try again.', 'selectPlanError', 10);
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return function selectNewPlan() {
      return _ref5.apply(this, arguments);
    };
  }();
  var setDefaultMethod = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var response, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/app/payment/paymentmethod/set_default');
          case 1:
            response = _context6.v;
            if (response.data.result) {
              if (response.data.result) {
                notify.show('success', 'Your new method is default now.');
                setTimeout(function () {
                  navigate("/dashboard/billing", {
                    replace: true
                  });
                });
              } else {
                notify.show('error', 'For some reason, could not set your new payment method default, please ask support for assistance.');
              }
            }
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t6 = _context6.v;
            console.log(_t6);
            setErrorOnLoad('Some error occured during this request... please try again.');
          case 3:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 2]]);
    }));
    return function setDefaultMethod() {
      return _ref6.apply(this, arguments);
    };
  }();
  var reloadSummary = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var response, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            _context7.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/app/payment/summary');
          case 1:
            response = _context7.v;
            if (response.data.result) {
              if (response.data.result) {
                dispatch({
                  type: 'payment_summary',
                  name: 'payment_summary',
                  value: response.data.payment_summary
                });
              } else {
                setErrorOnLoad(response.data.error || 'Some error occured during this request... please try again.');
              }
            }
            _context7.n = 3;
            break;
          case 2:
            _context7.p = 2;
            _t7 = _context7.v;
            console.log(_t7);
            setErrorOnLoad('Some error occured during this request... please try again.');
          case 3:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 2]]);
    }));
    return function reloadSummary() {
      return _ref7.apply(this, arguments);
    };
  }();
  var moveToNewPlan = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(planId) {
      var confirmedMove, response, _t8;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.n = 1;
            return modal.confirm({
              title: 'Warning',
              content: 'Are you sure you are ready to move to another plan? If you select OK, this current plan will be stopped immediatelly and you will be charged for a new plan.',
              icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["default"], null)
            });
          case 1:
            confirmedMove = _context8.v;
            if (confirmedMove) {
              _context8.n = 2;
              break;
            }
            return _context8.a(2);
          case 2:
            // Create a stripe checkout session, redirect to the Stripe checkout page
            notify.close('selectPlanError');
            notify.show('load', 'Please wait, we are updating your subscription...', 'updaveMove', 10);
            _context8.p = 3;
            _context8.n = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/app/payment/plan/move', {
              plan_id: planId
            });
          case 4:
            response = _context8.v;
            if (response.data.result) {
              reloadSummary(); // Update subscription data
              notify.close('updaveMove');
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'selectPlanError', 10);
            }
            _context8.n = 6;
            break;
          case 5:
            _context8.p = 5;
            _t8 = _context8.v;
            console.log(_t8);
            notify.show('error', 'Some error occured during this request... please try again.', 'selectPlanError', 10);
          case 6:
            return _context8.a(2);
        }
      }, _callee8, null, [[3, 5]]);
    }));
    return function moveToNewPlan(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();
  var closeCancelPlanModal = function closeCancelPlanModal(cancelResult) {
    setShowCancelPlanModal(false);
    if (cancelResult) {
      // Cancel the current plan
      cancelCurrentPlan();
    }
  };
  var reloadAccountData = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var responseSummary, response, _t9;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            _context9.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/app/payment/summary');
          case 1:
            responseSummary = _context9.v;
            if (!responseSummary.data.result) {
              _context9.n = 3;
              break;
            }
            _context9.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/app/profile');
          case 2:
            response = _context9.v;
            if (response.data.result) {
              dispatch({
                type: 'accountData',
                name: 'accountData',
                value: response.data.account_data
              });
            } else {
              notify('error', response.data.error || 'Some error occured during this request... please try again.');
            }
            _context9.n = 4;
            break;
          case 3:
            notify('error', responseSummary.data.error || 'Some error occured during this request... please try again.');
          case 4:
            _context9.n = 6;
            break;
          case 5:
            _context9.p = 5;
            _t9 = _context9.v;
            notify('error', 'Some error occured during this request... please try again.');
          case 6:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 5]]);
    }));
    return function reloadAccountData() {
      return _ref9.apply(this, arguments);
    };
  }();
  var checkSubscription = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var response, _t0;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            _context0.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/app/payment/summary');
          case 1:
            response = _context0.v;
            if (response.data.result) {
              dispatch({
                type: 'payment_summary',
                name: 'payment_summary',
                value: response.data.payment_summary
              });
              if (response.data.payment_summary.subscription_data && response.data.payment_summary.subscription_data.plan_id == 'free') {
                // Cancel finished
                notify.show('success', 'Your subscription was cancelled successfully!', 'cancelDone', 10);
                clearInterval(intervalCancel);
                setCancellingInProgress(false);
                setShowCancelPlanModal(false);
                reloadAccountData();
              }
            } else {
              setErrorOnLoad(response.data.error || 'Some error occured during this request... please try again.');
            }
            _context0.n = 3;
            break;
          case 2:
            _context0.p = 2;
            _t0 = _context0.v;
            console.log(_t0);
            notify.show('error', 'Some error occured during this request... please try again.', 'cancelPlanError', 10);
          case 3:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 2]]);
    }));
    return function checkSubscription() {
      return _ref0.apply(this, arguments);
    };
  }();
  var initiatePlanCancel = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(planName) {
      var confirmedCancel;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            _context1.n = 1;
            return modal.confirm({
              title: 'Warning',
              content: 'Are you sure you are ready to cancel your current plan? If you select OK, your current plan will be stopped immediatelly and your limits will be lowered.',
              icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["default"], null)
            });
          case 1:
            confirmedCancel = _context1.v;
            if (confirmedCancel) {
              _context1.n = 2;
              break;
            }
            return _context1.a(2);
          case 2:
            setCancelPlanTitle(planName);
            setShowCancelPlanModal(true);
            checkAllowCancel();
          case 3:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return function initiatePlanCancel(_x4) {
      return _ref1.apply(this, arguments);
    };
  }();
  var checkAllowCancel = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var responseAllow, _t1;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            setAllowCancel('na');
            setAllowCancelError('');
            _context10.p = 1;
            _context10.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/app/payment/plan/checkallowcancel');
          case 2:
            responseAllow = _context10.v;
            if (!responseAllow.data.result) {
              setAllowCancel('no');
              setAllowCancelError(responseAllow.data.error);
            } else {
              setAllowCancel('yes');
            }
            _context10.n = 4;
            break;
          case 3:
            _context10.p = 3;
            _t1 = _context10.v;
            setCancellingInProgress(false);
            console.log(_t1);
            notify.show('error', 'Some error occured during this request... please try again.', 'cancelPlanError', 10);
          case 4:
            return _context10.a(2);
        }
      }, _callee10, null, [[1, 3]]);
    }));
    return function checkAllowCancel() {
      return _ref10.apply(this, arguments);
    };
  }();
  var cancelCurrentPlan = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            formCancelReason.validateFields().then(/*#__PURE__*/function () {
              var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(values) {
                var response, _t10;
                return _regenerator().w(function (_context11) {
                  while (1) switch (_context11.p = _context11.n) {
                    case 0:
                      setCancellingInProgress(true);
                      _context11.p = 1;
                      _context11.n = 2;
                      return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/app/payment/plan/cancel', values);
                    case 2:
                      response = _context11.v;
                      if (response.data.result) {
                        intervalCancel = setInterval(checkSubscription, 5000);
                      } else {
                        setCancellingInProgress(false);
                        notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'cancelPlanError', 10);
                      }
                      _context11.n = 4;
                      break;
                    case 3:
                      _context11.p = 3;
                      _t10 = _context11.v;
                      setCancellingInProgress(false);
                      console.log(_t10);
                      notify.show('error', 'Some error occured during this request... please try again.', 'cancelPlanError', 10);
                    case 4:
                      return _context11.a(2);
                  }
                }, _callee11, null, [[1, 3]]);
              }));
              return function (_x5) {
                return _ref12.apply(this, arguments);
              };
            }())["catch"](function (errorInfo) {
              console.log(errorInfo);
            });
          case 1:
            return _context12.a(2);
        }
      }, _callee12);
    }));
    return function cancelCurrentPlan() {
      return _ref11.apply(this, arguments);
    };
  }();
  var closePaymentForm = function closePaymentForm() {
    setShowPaymentForm(false);
  };
  var updatePaymentDetailsRedirect = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var response, _t11;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            notify.show('load', 'Please wait, you will be redirected to the checkout page...', 'checkout', 10);
            _context13.p = 1;
            _context13.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/app/payment/plan/updatepayment', {
              plan_id: planId
            });
          case 2:
            response = _context13.v;
            if (response.data.result) {
              window.location.href = response.data.url;
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'selectPlanError', 10);
            }
            _context13.n = 4;
            break;
          case 3:
            _context13.p = 3;
            _t11 = _context13.v;
            console.log(_t11);
            notify.show('error', 'Some error occured during this request... please try again.', 'selectPlanError', 10);
          case 4:
            return _context13.a(2);
        }
      }, _callee13, null, [[1, 3]]);
    }));
    return function updatePaymentDetailsRedirect() {
      return _ref13.apply(this, arguments);
    };
  }();
  var subscriptionInfo = '';
  var subscriptionExists = payment_summary.subscription_data && payment_summary.subscription_data.plan_id != 'free' && payment_summary.subscription_data.status.toLowerCase() == 'active';
  if (subscriptionExists && payment_summary.subscription_data.last_payment) {
    var dtFormat = 'MMMM DD, YYYY HH:mm:ss';
    var lastPaymentDT = subscriptionExists ? dayjs(payment_summary.subscription_data.last_payment.time).format(dtFormat) : '';
    subscriptionInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-10"
    }, "Last payment: ", payment_summary.subscription_data.last_payment.amount.value, payment_summary.subscription_data.last_payment.amount.currency_code, " on ", lastPaymentDT);
  }
  var plans = planList.map(function (plan) {
    var _payment_summary$subs, _plan$interval, _plan$interval2;
    //Show section for free plan but it can't be canceled (if current) and no payment buttons for it.
    //Show section for current not free plan but no payment buttons for them (although they are generated, just not displayed).

    var displayPaymentButtonStyle = subscriptionExists || payment_summary.subscription_data && plan.plan_id == payment_summary.subscription_data.plan_id ? {
      display: 'none'
    } : {};
    var plan_action = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !plan.amount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, !payment_summary.subscription_data || payment_summary.subscription_data.status == 'checkout' || plan.plan_id == payment_summary.subscription_data.plan_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "plan-note mt-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: "success mr-10",
      title: "Your plan"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "This is your current plan")), subscriptionInfo) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "plan-note"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "primary",
      onClick: function onClick() {
        return initiatePlanCancel(plan.plan_name);
      }
    }, "Move to free plan"))) : payment_summary.subscription_data && plan.plan_id == payment_summary.subscription_data.plan_id && payment_summary.subscription_data.status.toLowerCase() == 'active' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex mt-10 justify-content-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "primary",
      danger: true,
      onClick: function onClick() {
        return initiatePlanCancel(plan.plan_name);
      }
    }, "Cancel this plan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "plan-note mt-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: "success mr-10",
      title: "Your plan"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "This is your current plan")), subscriptionInfo) : payment_summary.subscription_data && ((_payment_summary$subs = payment_summary.subscription_data) === null || _payment_summary$subs === void 0 ? void 0 : _payment_summary$subs.plan_id) != 'free' && payment_summary.subscription_data.status != 'checkout' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "plan-note"
    }, payment_summary.usage_type == plan.usage_type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "primary",
      onClick: function onClick() {
        return moveToNewPlan(plan.plan_id);
      }
    }, "Select this plan") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "To move to this plan please cancel your current plan.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "primary",
      onClick: function onClick() {
        return setSelectedPlanId(plan.plan_id);
      }
    }, "Select this plan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: displayPaymentButtonStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "paypalButton_".concat(plan.plan_id)
    })));
    return plan.title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      key: plan.plan_code
    }, plan.title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "panel-light d-flex justify-content-between mb-10",
      key: plan.plan_code
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "m-0"
    }, plan.plan_name), plan.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-10 mb-10"
    }, plan.description) : '', plan.scheme == 'tiered' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, plan.currency, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, plan.amount), " per page of data /", (_plan$interval = plan.interval) === null || _plan$interval === void 0 ? void 0 : _plan$interval.toLowerCase()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, plan.currency, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, plan.amount), " /", (_plan$interval2 = plan.interval) === null || _plan$interval2 === void 0 ? void 0 : _plan$interval2.toLowerCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, plan_action));
  });
  var changeCancelReason = function changeCancelReason(field, value) {
    setCancelReason(_objectSpread(_objectSpread({}, cancelReason), {}, _defineProperty({}, field, value)));
  };
  var cancelCancelPlan = function cancelCancelPlan() {
    setShowCancelPlanModal(false);
    setAllowCancel('na');
    setAllowCancelError('');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, contextHolder, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Apply a referral code",
    open: selectedPlanId != null,
    okText: "Proceed",
    onOk: function onOk() {
      return selectNewPlan();
    },
    cancelText: "Cancel",
    onCancel: function onCancel() {
      setSelectedPlanId(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "If you have a referral code, you can enter it now. If your referral code is valid, you and your referral will get a 20% bonus on your limits."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: referralPromoCode,
    onChange: function onChange(e) {
      return setReferralPromoCode(e.target.value);
    }
  }), promoCodeValid != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-10 mb-10"
  }, promoCodeValid == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "success",
    message: "This referral code is valid.",
    showIcon: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "error",
    message: "This referral code is not valid.",
    showIcon: true
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-10 mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "default",
    onClick: checkPromoCode,
    disabled: !referralPromoCode
  }, "Check this referral code")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Cancelling a plan",
    open: showCancelPlanModal,
    okText: allowCancel == 'yes' ? 'Proceed' : 'Ok',
    okButtonProps: {
      disabled: cancellingInProgress,
      style: {
        display: allowCancel == 'na' ? 'none' : 'inline-block'
      }
    },
    okType: allowCancel == 'yes' ? 'danger' : 'primary',
    onOk: allowCancel == 'yes' ? cancelCurrentPlan : cancelCancelPlan,
    cancelText: allowCancel == 'yes' ? 'Not now' : 'Cancel',
    cancelButtonProps: {
      disabled: cancellingInProgress,
      style: {
        display: allowCancel == 'no' ? 'none' : 'inline-block'
      }
    },
    onCancel: cancelCancelPlan
  }, allowCancel == 'na' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: "Please wait, we are checking your account...",
    type: "info",
    showIcon: true
  }) : allowCancel == 'no' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: allowCancelError,
    type: "error",
    showIcon: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Can you please share with us why you want to cancel your current plan \"".concat(cancelPlanTitle, "\"?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    form: formCancelReason,
    className: "mt-10",
    validateMessages: {
      required: "'${name}' is required."
    },
    initialValues: cancelReason,
    layout: "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    name: "reason",
    required: true,
    rules: [{
      required: true,
      message: 'Please select a reason for cancelling this plan.'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
    direction: "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "price"
  }, "Too pricey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "functions"
  }, "Not enough functions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "bugs"
  }, "Too many bugs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "other"
  }, "Other")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    label: "Add more details",
    name: "details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"].TextArea, {
    rows: 4
  }))), cancellingInProgress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "info",
    message: "Please wait until we finish cancelling this plan..."
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary top-buffer-20"
  }, dataLoaded ? plans : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_15__.Container, {
    centerH: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_14__.CircleNotchIcon, {
    size: 24,
    className: "spin"
  })))));
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX2JpbGxpbmdfQmlsbGluZ0luZm9fanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDQSx1S0FBQUEsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBTCxDQUFBLElBQUFBLENBQUEsQ0FBQU0sU0FBQSxZQUFBQyxTQUFBLEdBQUFQLENBQUEsR0FBQU8sU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQVYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUksQ0FBQSxNQUFBQyxDQUFBLEdBQUFYLENBQUEsUUFBQVksQ0FBQSxPQUFBQyxDQUFBLEtBQUFGLENBQUEsS0FBQWIsQ0FBQSxLQUFBZ0IsQ0FBQSxFQUFBcEIsQ0FBQSxFQUFBcUIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFOLENBQUEsRUFBQU0sQ0FBQSxDQUFBQyxJQUFBLENBQUF2QixDQUFBLE1BQUFzQixDQUFBLFdBQUFBLEVBQUFyQixDQUFBLEVBQUFDLENBQUEsV0FBQU0sQ0FBQSxHQUFBUCxDQUFBLEVBQUFRLENBQUEsTUFBQUcsQ0FBQSxHQUFBWixDQUFBLEVBQUFtQixDQUFBLENBQUFmLENBQUEsR0FBQUYsQ0FBQSxFQUFBbUIsQ0FBQSxnQkFBQUMsRUFBQXBCLENBQUEsRUFBQUUsQ0FBQSxTQUFBSyxDQUFBLEdBQUFQLENBQUEsRUFBQVUsQ0FBQSxH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Ozs7Ozs7Ozs7Ozs7QUNsbUJ3RDtBQUMxQjtBQUVzQjtBQUU5QyxJQUFNcEMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlNLEtBQUssRUFBSTtFQUM5QixvQkFBT3pDLDBEQUFBLENBQUNxQiw0Q0FBTztJQUFDNlYsU0FBUyxFQUFFelUsS0FBSyxDQUFDeVUsU0FBUyxJQUFJLE9BQVE7SUFDbERuUCxPQUFPLEVBQUV0RixLQUFLLENBQUNzRixPQUFRO0lBQ3ZCc0csS0FBSyxFQUFFNUwsS0FBSyxDQUFDNEw7RUFBTSxnQkFBQ3JPLDBEQUFBLENBQUMyQix5REFBZ0I7SUFBQzRDLFNBQVMsRUFBQztFQUFXLENBQUUsQ0FBVSxDQUFDO0FBQ2hGLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2JpbGxpbmcvQmlsbGluZ0luZm8uanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2JpbGxpbmcvSW52b2ljZUxpc3QuanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2JpbGxpbmcvUGF5bWVudEhpc3RvcnkuanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2JpbGxpbmcvUGF5bWVudE1ldGhvZC5qc3giLCJ3ZWJwYWNrOi8vbGFnb29uby1hcHAvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvYmlsbGluZy9QbGFuTGlzdC5qc3giLCJ3ZWJwYWNrOi8vbGFnb29uby1hcHAvLi9zcmMvY29tcG9uZW50cy91aS9JbmZvSWNvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGxhenksIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIENoZWNrYm94LCBDb2wsIERpdmlkZXIsIEZvcm0sIElucHV0LCBNb2RhbCwgbm90aWZpY2F0aW9uLCBSb3csIFRhYnMsIFxyXG4gICAgICAgICAgICAgICAgdGhlbWUsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCB7IENoZWNrQ2lyY2xlT3V0bGluZWQsIENvcHlPdXRsaW5lZCwgRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQsIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQsIEdsb2JhbE91dGxpbmVkLCBJbmZvQ2lyY2xlRmlsbGVkLFxyXG4gICAgTG9hZGluZ091dGxpbmVkLCBTeW5jT3V0bGluZWQsIFdhcm5pbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEF1dGhVSUZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvQXV0aFVJRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY29tbW9uRnVuY3Rpb25zIH0gZnJvbSAnQHNyYy91dGlscy9jb21tb25GdW5jdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IEluZm9JY29uIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0luZm9JY29uJztcclxuXHJcbmltcG9ydCB7IFBsYW5MaXN0IH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9iaWxsaW5nL1BsYW5MaXN0JztcclxuaW1wb3J0IHsgUGF5bWVudEhpc3RvcnkgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2JpbGxpbmcvUGF5bWVudEhpc3RvcnknO1xyXG5pbXBvcnQgeyBQYXltZW50TWV0aG9kIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9iaWxsaW5nL1BheW1lbnRNZXRob2QnO1xyXG5pbXBvcnQgeyBJbnZvaWNlTGlzdCB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvYmlsbGluZy9JbnZvaWNlTGlzdCc7XHJcblxyXG5cclxuY29uc3QgQmlsbGluZ0luZm8gPSAocHJvcHMpPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgYWNjb3VudERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY291bnREYXRhIHx8IHt9KTsgXHJcbiAgICBjb25zdCBwYXltZW50X3N1bW1hcnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBheW1lbnRfc3VtbWFyeSB8fCB7fSk7IFxyXG4gICAgY29uc3Qgbm90aWZ5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZnkpO1xyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbZXJyb3JPbkxvYWQsIHNldEVycm9yT25Mb2FkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRJbml0aWFsRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJbml0aWFsRGF0YSA9IGFzeW5jKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYXBwL3BheW1lbnQvc3VtbWFyeScpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdwYXltZW50X3N1bW1hcnknLCBuYW1lOiAncGF5bWVudF9zdW1tYXJ5JywgdmFsdWU6IHJlc3BvbnNlLmRhdGEucGF5bWVudF9zdW1tYXJ5fSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yT25Mb2FkKHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIHNldEVycm9yT25Mb2FkKCdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHRhYkl0ZW1zID0gW1xyXG4gICAgICAgIC8ve2xhYmVsOiAnU3VtbWFyeScsIGtleTogJ3N1bW1hcnknfSxcclxuICAgICAgICB7bGFiZWw6ICdQbGFucycsIGtleTogJ3N1bW1hcnknLCBjaGlsZHJlbjogPFBsYW5MaXN0Lz59LFxyXG4gICAgICAgIC8ve2xhYmVsOiAnUGF5bWVudCBpbmZvJywga2V5OiAnaW5mbyd9LFxyXG4gICAgICAgIHtsYWJlbDogJ1BheW1lbnQgaGlzdG9yeScsIGtleTogJ2hpc3RvcnknLCBjaGlsZHJlbjogPFBheW1lbnRIaXN0b3J5Lz59LFxyXG4gICAgICAgIHtsYWJlbDogJ1BheW1lbnQgbWV0aG9kJywga2V5OiAnbWV0aG9kJywgY2hpbGRyZW46IDxQYXltZW50TWV0aG9kLz59LFxyXG4gICAgICAgIHtsYWJlbDogJ0ludm9pY2VzJywga2V5OiAnaW52b2ljZXMnLCBjaGlsZHJlbjogPEludm9pY2VMaXN0Lz59XHJcbiAgICBdO1xyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYmxvY2sgc2Nyb2xsYWJsZVwiPiBcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+QmlsbGluZyBpbmZvPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsyfSBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBwdD1cIm1kXCIgbWI9XCJ4eGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMgdHlwZT1cImNhcmRcIiBpdGVtcz17dGFiSXRlbXN9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2Pik7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJpbGxpbmdJbmZvOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGRheWpzID0gcmVxdWlyZSgnZGF5anMnKTtcclxuXHJcbmltcG9ydCB7IENoZWNrQ2lyY2xlT3V0bGluZWQsIFdhcm5pbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSW52b2ljZUxpc3QgPSAocHJvcHMpPT57XHJcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBhY2NvdW50RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudERhdGEgfHwge30pOyBcclxuICAgIGNvbnN0IG5vdGlmeSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZ5KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsb2FkSW5pdGlhbERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkSW5pdGlhbERhdGEgPSBhc3luYygpPT57XHJcbiAgICAgICAgc2V0U3RhdHVzKCdpbmZvJyk7XHJcbiAgICAgICAgc2V0TWVzc2FnZSgnVGhlIGxpc3Qgb2YgeW91ciBpbnZvaWNlcyBpcyBiZWluZyBsb2FkZWQsIHBsZWFzZSB3YWl0Li4uJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FwcC9wYXltZW50L2ludm9pY2UvbGlzdCcpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1zKHJlc3BvbnNlLmRhdGEubGlzdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVzcG9uc2UuZGF0YS5saXN0ICYmIHJlc3BvbnNlLmRhdGEubGlzdC5sZW5ndGgpKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoJ2luZm8nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCdObyBpbnZvaWNlcyBoYXZlIGJlZW4gaXNzdWVkIHlldC4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXR1cygnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UocmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnZvaWNlSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGtleT17aXRlbS5kdH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2RheWpzKGl0ZW0uZGF0ZSkuZm9ybWF0KCdNTU1NIEQgWVlZWSwgaDptbSBhJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5wYWlkPyA8Q2hlY2tDaXJjbGVPdXRsaW5lZCBjbGFzc05hbWU9XCJzdWNjZXNzXCIvPjo8V2FybmluZ091dGxpbmVkIGNsYXNzTmFtZT1cImZhaWxcIi8+fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uY3VycmVuY3l9PGI+e2l0ZW0uYW1vdW50fTwvYj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9e2l0ZW0ucGRmfSB0YXJnZXQ9XCJibGFua1wiPlJlY2VpcHQvaW52b2ljZSBwYWdlPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdGFibGVEYXRhID0gaXRlbXMgJiYgaXRlbXMubGVuZ3RoID9cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1jdXN0b21cIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UmVjZWlwdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7aW52b2ljZUl0ZW1zfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOiAnJztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJsZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXR1cyAhPSAnJyA/IDxBbGVydCBtZXNzYWdlPXttZXNzYWdlfSB0eXBlPXtzdGF0dXN9IHNob3dJY29uIC8+OiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGRheWpzID0gcmVxdWlyZSgnZGF5anMnKTtcclxuXHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5leHBvcnQgY29uc3QgUGF5bWVudEhpc3RvcnkgPSAocHJvcHMpPT57XHJcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbG9hZEluaXRpYWxEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZEluaXRpYWxEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHNldFN0YXR1cygnaW5mbycpO1xyXG4gICAgICAgIHNldE1lc3NhZ2UoJ0JpbGxpbmcgcGxhbnMgYW5kIHN1bW1hcnkgaXMgYmVpbmcgbG9hZGVkLCBwbGVhc2Ugd2FpdC4uLicpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hcHAvcGF5bWVudC9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXMoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXRlbXMocmVzcG9uc2UuZGF0YS5pdGVtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVzcG9uc2UuZGF0YS5pdGVtcyAmJiByZXNwb25zZS5kYXRhLml0ZW1zLmxlbmd0aCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cygnaW5mbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ05vIHBheW1lbnQgZXZlbnRzIGV4aXN0LicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZShyZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cygnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpc3RvcnlJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSk9PntcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtpdGVtLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntkYXlqcyhpdGVtLmRhdGUpLmZvcm1hdCgnTU1NTSBEIFlZWVksIGg6bW0gYScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZXZlbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jb21tZW50fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdGFibGVEYXRhID0gaXRlbXMgJiYgaXRlbXMubGVuZ3RoID9cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1jdXN0b21cIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkV2ZW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db21tZW50PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtoaXN0b3J5SXRlbXN9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA6ICcnO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYmxlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7c3RhdHVzICE9ICcnID8gPEFsZXJ0IG1lc3NhZ2U9e21lc3NhZ2V9IHR5cGU9e3N0YXR1c30gc2hvd0ljb24gLz46IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBkYXlqcyA9IHJlcXVpcmUoJ2RheWpzJyk7XHJcblxyXG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5leHBvcnQgY29uc3QgUGF5bWVudE1ldGhvZCA9IChwcm9wcyk9PntcclxuICAgIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG5vdGlmeSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZ5KTtcclxuICAgIGNvbnN0IGFjY291bnREYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50RGF0YSB8fCB7fSk7IFxyXG4gICAgY29uc3QgW3BheW1lbnRJbmZvLCBzZXRQYXltZW50SW5mb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGFjY291bnREYXRhICYmIGFjY291bnREYXRhLnBsYW5fY29kZSAhPSAnZnJlZScpe1xyXG4gICAgICAgICAgICBsb2FkSW5pdGlhbERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGlmIChxdWVyeS5nZXQoJ21ldGhvZCcpKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChxdWVyeS5nZXQoJ3N1Y2Nlc3MnKSA9PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICAgICAgLy8gTmV3IHN1YnNjcmlwdGlvbiBjcmVhdGVkLCBnZXQgZGF0YVxyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ3N1Y2Nlc3MnLCBcclxuICAgICAgICAgICAgICAgICAgICAnWW91IGhhdmUgY2hhbmdlZCB5b3VyIHBheW1lbnQgbWV0aG9kIGluZm9ybWF0aW9uIHN1Y2Nlc3NmdWxseSEnLCBcclxuICAgICAgICAgICAgICAgICAgICAnbWV0aG9kQ2hhbmdlZCcsIDE1KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ3dhcm5pbmcnLCBcclxuICAgICAgICAgICAgICAgICAgICAnWW91IGNhbmNlbGVkIG1ldGhvZCB1cGRhdGUgb3Igc29tZXRoaW5nIHdlbnQgd3Jvbmcgc28gcGxlYXNlIHRyeSBhZ2Fpbi4uLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdtZXRob2RDaGFuZ2VkRmFpbCcsIDE1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkSW5pdGlhbERhdGEgPSBhc3luYygpPT57XHJcbiAgICAgICAgbm90aWZ5LnNob3coJ2xvYWQnLCAnT2J0YWluaW5nIHlvdXIgcGF5bWVudCBpbmZvcm1hdGlvbi4uLicsICdtZXRob2RHZXQnKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hcHAvcGF5bWVudC9wbGFuL21ldGhvZCcpO1xyXG4gICAgICAgICAgICBub3RpZnkuY2xvc2UoJ21ldGhvZEdldCcpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuaXRlbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGF5bWVudEluZm8ocmVzcG9uc2UuZGF0YS5pdGVtKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ3dhcm5pbmcnLCAnQ291bGQgbm90IG9idGFpbiB0aGUgcGF5bWVudCBtZXRob2QgaW5mb3JtYXRpb24uJywgJ2dldE1ldGhvZEVtcHR5JywgMTUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgJ0NvdWxkIG5vdCBvYnRhaW4gdGhlIHBheW1lbnQgbWV0aG9kIGluZm9ybWF0aW9uLicsICdnZXRNZXRob2RFbXB0eScsIDE1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICBub3RpZnkuY2xvc2UoJ21ldGhvZEdldCcpO1xyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCAnQ291bGQgbm90IG9idGFpbiB0aGUgcGF5bWVudCBtZXRob2QgaW5mb3JtYXRpb24uJywgJ2dldE1ldGhvZEVtcHR5JywgMTUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGluaXRpYXRlQ2hhbmdlUGF5bWVudE1ldGhvZCA9IGFzeW5jKCk9PntcclxuICAgICAgICAvLyBDcmVhdGUgYSBzdHJpcGUgY2hlY2tvdXQgc2Vzc2lvbiwgcmVkaXJlY3QgdG8gdGhlIFN0cmlwZSBjaGVja291dCBwYWdlXHJcbiAgICAgICAgbm90aWZ5LmNsb3NlKCdjaGFuZ2VNZXRob2RFcnJvcicpO1xyXG4gICAgICAgIG5vdGlmeS5zaG93KCdsb2FkJywgXHJcbiAgICAgICAgICAgICdQbGVhc2Ugd2FpdCwgeW91IHdpbGwgYmUgcmVkaXJlY3RlZCB0byB0aGUgcGF5bWVudCBtZXRob2QgcGFnZS4uLicsIFxyXG4gICAgICAgICAgICAnbWV0aG9kUGFnZScsIDEwKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBSZXR1cm5zIHN1bW1hcnlcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvcGF5bWVudC9wbGFuL21ldGhvZCcpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5kYXRhLnVybDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZU1ldGhvZEVycm9yJywgMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChleCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZU1ldGhvZEVycm9yJywgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtbGlnaHRcIj4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2FjY291bnREYXRhICYmIGFjY291bnREYXRhLnBsYW5fY29kZSAhPSAnZnJlZScgPyA8PlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9XCJpbmZvXCIgbWVzc2FnZT1cIkhlcmUgeW91IGNhbiBjaGFuZ2UgeW91ciBtZXRob2QgZm9yIGZ1dHVyZSBwYXltZW50c1wiIHNob3dJY29uLz5cclxuICAgICAgICAgICAgICAgIHtwYXltZW50SW5mbyA/IDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgbWItMTBcIj48Yj5QYXltZW50IG1ldGhvZDogPC9iPntwYXltZW50SW5mb308L2Rpdj46IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2luaXRpYXRlQ2hhbmdlUGF5bWVudE1ldGhvZH0+VXBkYXRlIG15IHBheW1lbnQgbWV0aG9kPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+OiBcclxuICAgICAgICAgICAgICAgIDxBbGVydCB0eXBlPVwiaW5mb1wiIG1lc3NhZ2U9XCJIZXJlIHlvdSB3aWxsIGJlIGFibGUgdG8gY2hhbmdlIHRoZSBwYXltZW50IG1ldGhvZCB3aGVuIHlvdSBidXkgYSBzdWJzY3JpcHRpb24uXCIgc2hvd0ljb24vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBkYXlqcyA9IHJlcXVpcmUoJ2RheWpzJyk7XHJcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIENoZWNrYm94LCBDb2wsIERpdmlkZXIsIEZvcm0sIElucHV0LCBNb2RhbCwgbm90aWZpY2F0aW9uLCBSYWRpbywgUm93LCBTcGFjZSwgVGFicyxcclxuICAgIHRoZW1lLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IENoZWNrQ2lyY2xlT3V0bGluZWQsIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBDaXJjbGVOb3RjaEljb24gIH0gZnJvbSAnQHBob3NwaG9yLWljb25zL3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0NvbnRhaW5lcic7XHJcbi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLy9pbXBvcnQgSWNvbiBmcm9tICdAc3JjL2NvbXBvbmVudHMvaWNvbi9JY29uJztcclxuLy9pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XHJcbi8vaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG4vL2ltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG4vL2ltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG4vL2ltcG9ydCBBbGVydCBmcm9tICdAc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQnO1xyXG4vL2ltcG9ydCBTdHJpcGVGb3JtIGZyb20gJ0BzcmMvbW9kdWxlcy9wYXltZW50L1N0cmlwZUZvcm0nO1xyXG5jb25zdCBkZWZhdWx0VmVuZG9yID0gd2luZG93LmRlZmF1bHRfcGF5bWVudF92ZW5kb3I7XHJcbmNvbnN0IHBheW1lbnRDbGllbnRJZCA9IHdpbmRvdy5wYXltZW50X2NsaWVudF9pZDtcclxudmFyIGludGVydmFsQ2FuY2VsID0gbnVsbDtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGFuTGlzdCA9IChwcm9wcyk9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbbW9kYWwsIGNvbnRleHRIb2xkZXJdID0gTW9kYWwudXNlTW9kYWwoKTtcclxuICAgIGNvbnN0IFthcGldID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgY29uc3Qgbm90aWZ5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZnkpO1xyXG4gICAgY29uc3QgYWNjb3VudERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY291bnREYXRhIHx8IHt9KTsgXHJcbiAgICBjb25zdCBwYXltZW50X3N1bW1hcnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBheW1lbnRfc3VtbWFyeSB8fCB7fSk7IFxyXG4gICAgY29uc3QgW3Nob3dQYXltZW50Rm9ybSwgc2V0U2hvd1BheW1lbnRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkYXRhTG9hZGVkLCBzZXREYXRhTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthbGxvd0NhbmNlbCwgc2V0QWxsb3dDYW5jZWxdID0gdXNlU3RhdGUoJ25hJyk7XHJcbiAgICBjb25zdCBbYWxsb3dDYW5jZWxFcnJvciwgc2V0QWxsb3dDYW5jZWxFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvL2NvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvL2NvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzaG93Q2FuY2VsUGxhbk1vZGFsLCBzZXRTaG93Q2FuY2VsUGxhbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXlwYWwsIHNldFBheXBhbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwbGFuTGlzdCwgc2V0UGxhbkxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Zvcm1DYW5jZWxSZWFzb25dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgICBjb25zdCBbY2FuY2VsUmVhc29uLCBzZXRDYW5jZWxSZWFzb25dID0gdXNlU3RhdGUoe3JlYXNvbjogbnVsbCwgZGV0YWlsczogJyd9KTtcclxuICAgIFxyXG4gICAgY29uc3QgW2NhbmNlbFBsYW5UaXRsZSwgc2V0Q2FuY2VsUGxhblRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwbGFuSWRUb1N0YXJ0LCBzZXRQbGFuSWRUb1N0YXJ0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2NhbmNlbGxpbmdJblByb2dyZXNzLCBzZXRDYW5jZWxsaW5nSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3JlZmVycmFsUHJvbW9Db2RlLCBzZXRSZWZlcnJhbFByb21vQ29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcHJvbW9Db2RlVmFsaWQsIHNldFByb21vQ29kZVZhbGlkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUGxhbklkLCBzZXRTZWxlY3RlZFBsYW5JZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbG9hZEluaXRpYWxEYXRhKCk7XHJcbiAgICAgICAgLy9nZXRTdWJzY3JpcHRpb24oKTsgLy8gR2V0IHN1YnNjcmlwdGlvbiBpbmZvIGFueXdheVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBpZiAocXVlcnkuZ2V0KCdtZXRob2QnKSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocXVlcnkuZ2V0KCdzdWNjZXNzJykpe1xyXG4gICAgICAgICAgICAgICAgLy8gTmV3IHN1YnNjcmlwdGlvbiBjcmVhdGVkLCBnZXQgZGF0YVxyXG4gICAgICAgICAgICAgICAgcmVsb2FkQWNjb3VudERhdGEoKTtcclxuICAgICAgICAgICAgICAgIHNldERlZmF1bHRNZXRob2QoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3VsZCBub3QgY3JlYXRlIGEgc3Vic2NyaXB0aW9uIGZvciBzb21lIHJlYXNvbiwgcGxlYXNlIHRyeSBhZ2Fpbi4uLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdzdWJzY3JpYnRpb25GYWlsZWQnLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKHBsYW5MaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpPT5zZXREYXRhTG9hZGVkKHRydWUpLCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwbGFuTGlzdF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChwYXlwYWwpe1xyXG4gICAgICAgICAgICAvL2luaXRQYXltZW50QnV0dG9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwYXlwYWxdKVxyXG5cclxuICAgIGNvbnN0IGdldFN1YnNjcmlwdGlvbiA9IGFzeW5jKCk9PntcclxuICAgICAgICBub3RpZnkuc2hvdygnbG9hZCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICdQbGVhc2Ugd2FpdCB1bnRpbCB3ZSBnZXQgdGhlIGluZm9ybWF0aW9uIG9uIHlvdXIgc3Vic2NyaXB0aW9uLi4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N1YnNjcmlwdGlvbkluZm8nLCAxMCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvcGF5bWVudC9wbGFuL2dldHN1YnNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICBub3RpZnkuY2xvc2UoJ3N1YnNjcmlwdGlvbkluZm8nKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGF5bWVudF9zdW1tYXJ5JywgbmFtZTogJ3BheW1lbnRfc3VtbWFyeScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogey4uLnBheW1lbnRfc3VtbWFyeSwgc3Vic2NyaXB0aW9uX2RhdGE6IHJlc3BvbnNlLmRhdGEuc3Vic2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdsb2FkUGxhbnNFcnJvcicsIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdsb2FkUGxhbnNFcnJvcicsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZEluaXRpYWxEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hcHAvcGF5bWVudC9wbGFuL2xpc3QnKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdQbGFuTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vS2V5UGxhbiA9IHJlc3BvbnNlLmRhdGEubGlzdC5maWx0ZXIocGxhbj0+cGxhbi5wbGFuX2NvZGUuaW5kZXhPZigna2V5JykgPT0gLTEpLnNvcnQocGxhbj0+cGxhbi5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleVBsYW4gPSByZXNwb25zZS5kYXRhLmxpc3QuZmlsdGVyKHBsYW49PnBsYW4ucGxhbl9jb2RlLmluZGV4T2YoJ2tleScpID4gLTEpLnNvcnQocGxhbj0+cGxhbi5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgbmV3UGxhbkxpc3QucHVzaCh7cGxhbl9jb2RlOiAndGl0bGUtd2l0aG91dCcsIHRpdGxlOiAnUGxhbnMgd2l0aG91dCBPcGVuQUkga2V5J30pO1xyXG4gICAgICAgICAgICAgICAgbmV3UGxhbkxpc3QgPSBbLi4ubmV3UGxhbkxpc3QsIC4uLm5vS2V5UGxhbl07XHJcbiAgICAgICAgICAgICAgICBuZXdQbGFuTGlzdC5wdXNoKHtwbGFuX2NvZGU6ICd0aXRsZS13aXRoJywgdGl0bGU6ICdQbGFucyB3aXRoIE9wZW5BSSBrZXknfSk7XHJcbiAgICAgICAgICAgICAgICBuZXdQbGFuTGlzdCA9IFsuLi5uZXdQbGFuTGlzdCwgLi4ua2V5UGxhbl07XHJcbiAgICAgICAgICAgICAgICBzZXRQbGFuTGlzdChuZXdQbGFuTGlzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdsb2FkUGxhbnNFcnJvcicsIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdsb2FkUGxhbnNFcnJvcicsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3RQbGFuID0gYXN5bmMocGxhbklkLCBzdWJzY3JpcHRpb25JZCk9PntcclxuICAgICAgICAvL3NldFN0YXR1cygnaW5mbycpO1xyXG4gICAgICAgIG5vdGlmeS5zaG93KCdsb2FkJywgJ1BsZWFzZSB3YWl0IHVudGlsIHdlIHNldCB1cCB5b3VyIHBsYW4uLi4nLCAnc2VsZWN0UGxhbkxvYWQnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBSZXR1cm5zIHN1bW1hcnlcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvcGF5bWVudC9wbGFuL3NlbGVjdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbl9pZDogcGxhbklkLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uX2lkOiBzdWJzY3JpcHRpb25JZH0pO1xyXG4gICAgICAgICAgICBub3RpZnkuY2xvc2UoJ3NlbGVjdFBsYW5Mb2FkJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBzZXRQbGFuSWRUb1N0YXJ0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHN1bW1hcnlcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGF5bWVudF9zdW1tYXJ5JywgbmFtZTogJ3BheW1lbnRfc3VtbWFyeScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogey4uLnBheW1lbnRfc3VtbWFyeSwgc3Vic2NyaXB0aW9uX2RhdGE6IHJlc3BvbnNlLmRhdGEuc3Vic2NyaXB0aW9uX2RhdGF9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWNjb3VudERhdGEnLCBuYW1lOiAnYWNjb3VudERhdGEnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsuLi5hY2NvdW50RGF0YSwgcGxhbl9jb2RlOiByZXNwb25zZS5kYXRhLnN1YnNjcmlwdGlvbl9kYXRhLnBsYW5faWR9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdzdWNjZXNzJywgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5tZXNzYWdlIHx8ICdUaGUgcGxhbiBoYXMgYmVlbiBzZWxlY3RlZCBhbmQgcGFpZCBzdWNjZXNzZnVsbHkuJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdFBsYW4nLCAxMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWxlY3RQbGFuRXJyb3InLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAnc2VsZWN0UGxhbkVycm9yJywgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qY29uc3Qgc2hvd01vZGFsRm9yUmVmZXJyYWxQcm9tb0NvZGUgPSAocGxhbklkKT0+e1xyXG4gICAgICAgIG1vZGFsLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0FwcGx5IGEgcmVmZXJyYWwgY29kZScsXHJcbiAgICAgICAgICAgIG9rVGV4dDonUHJvY2VlZCcsXHJcbiAgICAgICAgICAgIG9uT2s6ICgpPT5zZWxlY3ROZXdQbGFuKHBsYW5JZCksXHJcbiAgICAgICAgICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICBjb250ZW50OiA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5JZiB5b3UgaGF2ZSBhIHJlZmVycmFsIGNvZGUsIHlvdSBjYW4gZW50ZXIgaXQgbm93LiBJZiB5b3VyIHJlZmVycmFsIGNvZGUgaXMgdmFsaWQsIHlvdSBhbmQgeW91ciByZWZlcnJhbCB3aWxsIGdldCBhIDEwJSBib251cyBvbiB5b3VyIGxpbWl0cy48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17cmVmZXJyYWxQcm9tb0NvZGV9IG9uQ2hhbmdlPXsoZSk9PnNldFJlZmVycmFsUHJvbW9Db2RlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIHtwcm9tb0NvZGVWYWxpZCAhPSBudWxsID8oXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbW9Db2RlVmFsaWQgPT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9XCJzdWNjZXNzXCIgbWVzc2FnZT1cIlRoaXMgcHJvbW8gY29kZSBpcyB2YWxpZC5cIiBzaG93SWNvbiAvPjpcclxuICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdHlwZT1cImVycm9yXCIgbWVzc2FnZT1cIlRoaXMgcHJvbW8gY29kZSBpcyBub3QgdmFsaWQuXCIgc2hvd0ljb24gLz5cclxuICAgICAgICAgICAgICAgICk6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIG1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIG9uQ2xpY2s9e2NoZWNrUHJvbW9Db2RlfSBkaXNhYmxlZD17IXJlZmVycmFsUHJvbW9Db2RlfT5DaGVjayB0aGlzIHByb21vIGNvZGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICB9KTtcclxuICAgIH07Ki9cclxuICAgIGNvbnN0IGNoZWNrUHJvbW9Db2RlID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHNldFByb21vQ29kZVZhbGlkKG51bGwpO1xyXG4gICAgICAgIG5vdGlmeS5zaG93KCdsb2FkJywgXHJcbiAgICAgICAgICAgICdQbGVhc2Ugd2FpdCwgY2hlY2tpbmcgdGhlIHByb21vIGNvZGUuLi4nLCBcclxuICAgICAgICAgICAgJ2NoZWNrUHJvbW9Db2RlJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gUmV0dXJucyBzdW1tYXJ5XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvYXBwL3NldHRpbmdzL3BhcnRuZXJzaGlwL2NoZWNrcHJvbW9jb2RlJywgXHJcbiAgICAgICAgICAgICAgICB7Y29kZTogcmVmZXJyYWxQcm9tb0NvZGV9KTtcclxuICAgICAgICAgICAgbm90aWZ5LmNsb3NlKCdjaGVja1Byb21vQ29kZScpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvbW9Db2RlVmFsaWQocmVzcG9uc2UuZGF0YS5pdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdFBsYW5FcnJvcicsIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWxlY3RQbGFuRXJyb3InLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNlbGVjdE5ld1BsYW4gPSBhc3luYygpPT57XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgc3RyaXBlIGNoZWNrb3V0IHNlc3Npb24sIHJlZGlyZWN0IHRvIHRoZSBTdHJpcGUgY2hlY2tvdXQgcGFnZVxyXG4gICAgICAgIG5vdGlmeS5jbG9zZSgnc2VsZWN0UGxhbkVycm9yJyk7XHJcbiAgICAgICAgbm90aWZ5LnNob3coJ2xvYWQnLCBcclxuICAgICAgICAgICAgJ1BsZWFzZSB3YWl0LCB5b3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSBjaGVja291dCBwYWdlLi4uJywgXHJcbiAgICAgICAgICAgICdjaGVja291dCcsIDEwKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBSZXR1cm5zIHN1bW1hcnlcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvcGF5bWVudC9wbGFuL2NoZWNrb3V0Jywge3BsYW5faWQ6IHNlbGVjdGVkUGxhbklkLCByZWZlcnJhbF9wcm9tb19jb2RlOiByZWZlcnJhbFByb21vQ29kZX0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5kYXRhLnVybDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdFBsYW5FcnJvcicsIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWxlY3RQbGFuRXJyb3InLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldERlZmF1bHRNZXRob2QgPSBhc3luYygpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvcGF5bWVudC9wYXltZW50bWV0aG9kL3NldF9kZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdzdWNjZXNzJywgJ1lvdXIgbmV3IG1ldGhvZCBpcyBkZWZhdWx0IG5vdy4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAvZGFzaGJvYXJkL2JpbGxpbmdgLCB7cmVwbGFjZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsICdGb3Igc29tZSByZWFzb24sIGNvdWxkIG5vdCBzZXQgeW91ciBuZXcgcGF5bWVudCBtZXRob2QgZGVmYXVsdCwgcGxlYXNlIGFzayBzdXBwb3J0IGZvciBhc3Npc3RhbmNlLicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBzZXRFcnJvck9uTG9hZCgnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWxvYWRTdW1tYXJ5ID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hcHAvcGF5bWVudC9zdW1tYXJ5Jyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3BheW1lbnRfc3VtbWFyeScsIG5hbWU6ICdwYXltZW50X3N1bW1hcnknLCB2YWx1ZTogcmVzcG9uc2UuZGF0YS5wYXltZW50X3N1bW1hcnl9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JPbkxvYWQocmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgc2V0RXJyb3JPbkxvYWQoJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbW92ZVRvTmV3UGxhbiA9IGFzeW5jKHBsYW5JZCk9PntcclxuICAgICAgICBjb25zdCBjb25maXJtZWRNb3ZlID0gYXdhaXQgbW9kYWwuY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnV2FybmluZycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBcmUgeW91IHN1cmUgeW91IGFyZSByZWFkeSB0byBtb3ZlIHRvIGFub3RoZXIgcGxhbj8gSWYgeW91IHNlbGVjdCBPSywgdGhpcyBjdXJyZW50IHBsYW4gd2lsbCBiZSBzdG9wcGVkIGltbWVkaWF0ZWxseSBhbmQgeW91IHdpbGwgYmUgY2hhcmdlZCBmb3IgYSBuZXcgcGxhbi4nLFxyXG4gICAgICAgICAgICBpY29uOiA8RXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgLz5cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWNvbmZpcm1lZE1vdmUpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENyZWF0ZSBhIHN0cmlwZSBjaGVja291dCBzZXNzaW9uLCByZWRpcmVjdCB0byB0aGUgU3RyaXBlIGNoZWNrb3V0IHBhZ2VcclxuICAgICAgICBub3RpZnkuY2xvc2UoJ3NlbGVjdFBsYW5FcnJvcicpO1xyXG4gICAgICAgIG5vdGlmeS5zaG93KCdsb2FkJywgXHJcbiAgICAgICAgICAgICdQbGVhc2Ugd2FpdCwgd2UgYXJlIHVwZGF0aW5nIHlvdXIgc3Vic2NyaXB0aW9uLi4uJywgXHJcbiAgICAgICAgICAgICd1cGRhdmVNb3ZlJywgMTApO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFJldHVybnMgc3VtbWFyeVxyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2FwcC9wYXltZW50L3BsYW4vbW92ZScsIHtwbGFuX2lkOiBwbGFuSWR9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIHJlbG9hZFN1bW1hcnkoKTsgLy8gVXBkYXRlIHN1YnNjcmlwdGlvbiBkYXRhXHJcbiAgICAgICAgICAgICAgICBub3RpZnkuY2xvc2UoJ3VwZGF2ZU1vdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdFBsYW5FcnJvcicsIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWxlY3RQbGFuRXJyb3InLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsb3NlQ2FuY2VsUGxhbk1vZGFsID0gKGNhbmNlbFJlc3VsdCk9PntcclxuICAgICAgICBzZXRTaG93Q2FuY2VsUGxhbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICBpZiAoY2FuY2VsUmVzdWx0KXtcclxuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBjdXJyZW50IHBsYW5cclxuICAgICAgICAgICAgY2FuY2VsQ3VycmVudFBsYW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWxvYWRBY2NvdW50RGF0YSA9IGFzeW5jKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VTdW1tYXJ5ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FwcC9wYXltZW50L3N1bW1hcnknKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlU3VtbWFyeS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYXBwL3Byb2ZpbGUnKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnYWNjb3VudERhdGEnLCBuYW1lOiAnYWNjb3VudERhdGEnLCB2YWx1ZTogcmVzcG9uc2UuZGF0YS5hY2NvdW50X2RhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnkoJ2Vycm9yJywgcmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5KCdlcnJvcicsIHJlc3BvbnNlU3VtbWFyeS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgbm90aWZ5KCdlcnJvcicsICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrU3Vic2NyaXB0aW9uID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFJldHVybnMgc3VtbWFyeVxyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYXBwL3BheW1lbnQvc3VtbWFyeScpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncGF5bWVudF9zdW1tYXJ5JywgbmFtZTogJ3BheW1lbnRfc3VtbWFyeScsIHZhbHVlOiByZXNwb25zZS5kYXRhLnBheW1lbnRfc3VtbWFyeX0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucGF5bWVudF9zdW1tYXJ5LnN1YnNjcmlwdGlvbl9kYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5wYXltZW50X3N1bW1hcnkuc3Vic2NyaXB0aW9uX2RhdGEucGxhbl9pZCA9PSAnZnJlZScpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCBmaW5pc2hlZFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdzdWNjZXNzJywgJ1lvdXIgc3Vic2NyaXB0aW9uIHdhcyBjYW5jZWxsZWQgc3VjY2Vzc2Z1bGx5IScsICdjYW5jZWxEb25lJywgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxDYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbmNlbGxpbmdJblByb2dyZXNzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93Q2FuY2VsUGxhbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWxvYWRBY2NvdW50RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JPbkxvYWQocmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGV4KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdjYW5jZWxQbGFuRXJyb3InLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGluaXRpYXRlUGxhbkNhbmNlbD0gYXN5bmMocGxhbk5hbWUpPT57XHJcbiAgICAgICAgY29uc3QgY29uZmlybWVkQ2FuY2VsID0gYXdhaXQgbW9kYWwuY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnV2FybmluZycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBcmUgeW91IHN1cmUgeW91IGFyZSByZWFkeSB0byBjYW5jZWwgeW91ciBjdXJyZW50IHBsYW4/IElmIHlvdSBzZWxlY3QgT0ssIHlvdXIgY3VycmVudCBwbGFuIHdpbGwgYmUgc3RvcHBlZCBpbW1lZGlhdGVsbHkgYW5kIHlvdXIgbGltaXRzIHdpbGwgYmUgbG93ZXJlZC4nLFxyXG4gICAgICAgICAgICBpY29uOiA8RXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgLz5cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWNvbmZpcm1lZENhbmNlbCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2FuY2VsUGxhblRpdGxlKHBsYW5OYW1lKTtcclxuICAgICAgICBzZXRTaG93Q2FuY2VsUGxhbk1vZGFsKHRydWUpO1xyXG4gICAgICAgIGNoZWNrQWxsb3dDYW5jZWwoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjaGVja0FsbG93Q2FuY2VsID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHNldEFsbG93Q2FuY2VsKCduYScpO1xyXG4gICAgICAgIHNldEFsbG93Q2FuY2VsRXJyb3IoJycpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZUFsbG93ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvcGF5bWVudC9wbGFuL2NoZWNrYWxsb3djYW5jZWwnKTtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZUFsbG93LmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIHNldEFsbG93Q2FuY2VsKCdubycpO1xyXG4gICAgICAgICAgICAgICAgc2V0QWxsb3dDYW5jZWxFcnJvcihyZXNwb25zZUFsbG93LmRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0QWxsb3dDYW5jZWwoJ3llcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpe1xyXG4gICAgICAgICAgICBzZXRDYW5jZWxsaW5nSW5Qcm9ncmVzcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAnY2FuY2VsUGxhbkVycm9yJywgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBjYW5jZWxDdXJyZW50UGxhbiA9IGFzeW5jKCk9PnsgXHJcbiAgICAgICAgZm9ybUNhbmNlbFJlYXNvbi52YWxpZGF0ZUZpZWxkcygpXHJcbiAgICAgICAgICAgIC50aGVuKGFzeW5jKHZhbHVlcykgPT4gIHtcclxuICAgICAgICAgICAgICAgIHNldENhbmNlbGxpbmdJblByb2dyZXNzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm5zIHN1bW1hcnlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2FwcC9wYXltZW50L3BsYW4vY2FuY2VsJywgdmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbENhbmNlbCA9IHNldEludGVydmFsKGNoZWNrU3Vic2NyaXB0aW9uLCA1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW5jZWxsaW5nSW5Qcm9ncmVzcyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYW5jZWxQbGFuRXJyb3InLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbmNlbGxpbmdJblByb2dyZXNzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhbmNlbFBsYW5FcnJvcicsIDEwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ySW5mbyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xvc2VQYXltZW50Rm9ybSA9ICgpPT57XHJcbiAgICAgICAgc2V0U2hvd1BheW1lbnRGb3JtKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVBheW1lbnREZXRhaWxzUmVkaXJlY3QgPSBhc3luYygpPT57XHJcbiAgICAgICAgbm90aWZ5LnNob3coJ2xvYWQnLCBcclxuICAgICAgICAgICAgJ1BsZWFzZSB3YWl0LCB5b3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSBjaGVja291dCBwYWdlLi4uJywgXHJcbiAgICAgICAgICAgICdjaGVja291dCcsIDEwKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBSZXR1cm5zIHN1bW1hcnlcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvcGF5bWVudC9wbGFuL3VwZGF0ZXBheW1lbnQnLCB7cGxhbl9pZDogcGxhbklkfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLmRhdGEudXJsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAnc2VsZWN0UGxhbkVycm9yJywgMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChleCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdFBsYW5FcnJvcicsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzdWJzY3JpcHRpb25JbmZvID0gJyc7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb25FeGlzdHMgPSBwYXltZW50X3N1bW1hcnkuc3Vic2NyaXB0aW9uX2RhdGEgJiYgcGF5bWVudF9zdW1tYXJ5LnN1YnNjcmlwdGlvbl9kYXRhLnBsYW5faWQgIT0gJ2ZyZWUnICYmIFxyXG4gICAgICAgIHBheW1lbnRfc3VtbWFyeS5zdWJzY3JpcHRpb25fZGF0YS5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PSAnYWN0aXZlJztcclxuICAgIGlmIChzdWJzY3JpcHRpb25FeGlzdHMgJiYgcGF5bWVudF9zdW1tYXJ5LnN1YnNjcmlwdGlvbl9kYXRhLmxhc3RfcGF5bWVudCl7XHJcbiAgICAgICAgY29uc3QgZHRGb3JtYXQgPSAnTU1NTSBERCwgWVlZWSBISDptbTpzcyc7XHJcbiAgICAgICAgY29uc3QgbGFzdFBheW1lbnREVCA9IChzdWJzY3JpcHRpb25FeGlzdHM/IGRheWpzKHBheW1lbnRfc3VtbWFyeS5zdWJzY3JpcHRpb25fZGF0YS5sYXN0X3BheW1lbnQudGltZSkuZm9ybWF0KGR0Rm9ybWF0KTogJycpO1xyXG4gICAgICAgIHN1YnNjcmlwdGlvbkluZm8gPSAoPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgTGFzdCBwYXltZW50OiB7cGF5bWVudF9zdW1tYXJ5LnN1YnNjcmlwdGlvbl9kYXRhLmxhc3RfcGF5bWVudC5hbW91bnQudmFsdWV9e3BheW1lbnRfc3VtbWFyeS5zdWJzY3JpcHRpb25fZGF0YS5sYXN0X3BheW1lbnQuYW1vdW50LmN1cnJlbmN5X2NvZGV9IG9uIHtsYXN0UGF5bWVudERUfVxyXG4gICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGxhbnMgPSBwbGFuTGlzdC5tYXAoKHBsYW4pPT57XHJcblxyXG4gICAgICAgIC8vU2hvdyBzZWN0aW9uIGZvciBmcmVlIHBsYW4gYnV0IGl0IGNhbid0IGJlIGNhbmNlbGVkIChpZiBjdXJyZW50KSBhbmQgbm8gcGF5bWVudCBidXR0b25zIGZvciBpdC5cclxuICAgICAgICAvL1Nob3cgc2VjdGlvbiBmb3IgY3VycmVudCBub3QgZnJlZSBwbGFuIGJ1dCBubyBwYXltZW50IGJ1dHRvbnMgZm9yIHRoZW0gKGFsdGhvdWdoIHRoZXkgYXJlIGdlbmVyYXRlZCwganVzdCBub3QgZGlzcGxheWVkKS5cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5UGF5bWVudEJ1dHRvblN0eWxlID0gc3Vic2NyaXB0aW9uRXhpc3RzIHx8IChwYXltZW50X3N1bW1hcnkuc3Vic2NyaXB0aW9uX2RhdGEgJiYgcGxhbi5wbGFuX2lkID09IHBheW1lbnRfc3VtbWFyeS5zdWJzY3JpcHRpb25fZGF0YS5wbGFuX2lkKSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5OiAnbm9uZSd9OiB7fTtcclxuICAgIGNvbnN0IHBsYW5fYWN0aW9uID0gKDw+XHJcbiAgICAgICAgICAgICAgICB7IXBsYW4uYW1vdW50PyAoPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KCAoIXBheW1lbnRfc3VtbWFyeS5zdWJzY3JpcHRpb25fZGF0YSkgfHwgKHBheW1lbnRfc3VtbWFyeS5zdWJzY3JpcHRpb25fZGF0YS5zdGF0dXMgPT0gJ2NoZWNrb3V0JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW4ucGxhbl9pZCA9PSBwYXltZW50X3N1bW1hcnkuc3Vic2NyaXB0aW9uX2RhdGEucGxhbl9pZCkgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhbi1ub3RlIG10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGVPdXRsaW5lZCBjbGFzc05hbWU9XCJzdWNjZXNzIG1yLTEwXCIgdGl0bGU9XCJZb3VyIHBsYW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGhpcyBpcyB5b3VyIGN1cnJlbnQgcGxhbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJzY3JpcHRpb25JbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjogPGRpdiBjbGFzc05hbWU9XCJwbGFuLW5vdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5tb3ZlVG9OZXdQbGFuKHBsYW4ucGxhbl9pZCl9PlNlbGVjdCB0aGlzIHBsYW48L0J1dHRvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmluaXRpYXRlUGxhbkNhbmNlbChwbGFuLnBsYW5fbmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3ZlIHRvIGZyZWUgcGxhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pOlxyXG4gICAgICAgICAgICAgICAgICAgIChwYXltZW50X3N1bW1hcnkuc3Vic2NyaXB0aW9uX2RhdGEgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW4ucGxhbl9pZCA9PSBwYXltZW50X3N1bW1hcnkuc3Vic2NyaXB0aW9uX2RhdGEucGxhbl9pZCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9zdW1tYXJ5LnN1YnNjcmlwdGlvbl9kYXRhLnN0YXR1cy50b0xvd2VyQ2FzZSgpID09ICdhY3RpdmUnID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG10LTEwIGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBkYW5nZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aW5pdGlhdGVQbGFuQ2FuY2VsKHBsYW4ucGxhbl9uYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWwgdGhpcyBwbGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhbi1ub3RlIG10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGVPdXRsaW5lZCBjbGFzc05hbWU9XCJzdWNjZXNzIG1yLTEwXCIgdGl0bGU9XCJZb3VyIHBsYW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGhpcyBpcyB5b3VyIGN1cnJlbnQgcGxhbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIG9uQ2xpY2s9e3VwZGF0ZVBheW1lbnREZXRhaWxzUmVkaXJlY3R9PlVwZGF0ZSBwYXltZW50IGRldGFpbHM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3Vic2NyaXB0aW9uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj46IFxyXG4gICAgICAgICAgICAgICAgICAgICgoICBwYXltZW50X3N1bW1hcnkuc3Vic2NyaXB0aW9uX2RhdGEgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfc3VtbWFyeS5zdWJzY3JpcHRpb25fZGF0YT8ucGxhbl9pZCAhPSAnZnJlZScgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfc3VtbWFyeS5zdWJzY3JpcHRpb25fZGF0YS5zdGF0dXMgIT0gJ2NoZWNrb3V0Jyk/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW4tbm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BheW1lbnRfc3VtbWFyeS51c2FnZV90eXBlID09IHBsYW4udXNhZ2VfdHlwZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5tb3ZlVG9OZXdQbGFuKHBsYW4ucGxhbl9pZCl9PlNlbGVjdCB0aGlzIHBsYW48L0J1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VG8gbW92ZSB0byB0aGlzIHBsYW4gcGxlYXNlIGNhbmNlbCB5b3VyIGN1cnJlbnQgcGxhbi48L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuPlRvIG1vdmUgdG8gdGhpcyBwbGFuIHBsZWFzZSBjYW5jZWwgeW91ciBjdXJyZW50IHBsYW4uPC9zcGFuPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnNldFNlbGVjdGVkUGxhbklkKHBsYW4ucGxhbl9pZCl9PlNlbGVjdCB0aGlzIHBsYW48L0J1dHRvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Rpc3BsYXlQYXltZW50QnV0dG9uU3R5bGV9PjxkaXYgaWQ9e2BwYXlwYWxCdXR0b25fJHtwbGFuLnBsYW5faWR9YH0+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvPik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKHBsYW4udGl0bGUgP1xyXG4gICAgICAgICAgICAgICAgPGgzIGtleT17cGxhbi5wbGFuX2NvZGV9PntwbGFuLnRpdGxlfTwvaDM+OlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1saWdodCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMTBcIiBrZXk9e3BsYW4ucGxhbl9jb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wXCI+e3BsYW4ucGxhbl9uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGxhbi5kZXNjcmlwdGlvbj8gPGRpdiBjbGFzc05hbWU9XCJtYi0xMCBtYi0xMFwiPntwbGFuLmRlc2NyaXB0aW9ufTwvZGl2PjogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwbGFuLnNjaGVtZSA9PSAndGllcmVkJyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57cGxhbi5jdXJyZW5jeX08c3Ryb25nPntwbGFuLmFtb3VudH08L3N0cm9uZz4gcGVyIHBhZ2Ugb2YgZGF0YSAve3BsYW4uaW50ZXJ2YWw/LnRvTG93ZXJDYXNlKCl9PC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57cGxhbi5jdXJyZW5jeX08c3Ryb25nPntwbGFuLmFtb3VudH08L3N0cm9uZz4gL3twbGFuLmludGVydmFsPy50b0xvd2VyQ2FzZSgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57cGxhbl9hY3Rpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2hhbmdlQ2FuY2VsUmVhc29uID0gKGZpZWxkLCB2YWx1ZSk9PntcclxuICAgICAgICBzZXRDYW5jZWxSZWFzb24oey4uLmNhbmNlbFJlYXNvbiwgW2ZpZWxkXTogdmFsdWV9KVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNhbmNlbENhbmNlbFBsYW4gPSAoKT0+e1xyXG4gICAgICAgIHNldFNob3dDYW5jZWxQbGFuTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIHNldEFsbG93Q2FuY2VsKCduYScpO1xyXG4gICAgICAgIHNldEFsbG93Q2FuY2VsRXJyb3IoJycpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0FwcGx5IGEgcmVmZXJyYWwgY29kZSdcclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtzZWxlY3RlZFBsYW5JZCAhPSBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9rVGV4dD0nUHJvY2VlZCdcclxuICAgICAgICAgICAgICAgICAgICBvbk9rPXsoKT0+c2VsZWN0TmV3UGxhbigpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9J0NhbmNlbCdcclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCk9PntzZXRTZWxlY3RlZFBsYW5JZChudWxsKX19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5JZiB5b3UgaGF2ZSBhIHJlZmVycmFsIGNvZGUsIHlvdSBjYW4gZW50ZXIgaXQgbm93LiBJZiB5b3VyIHJlZmVycmFsIGNvZGUgaXMgdmFsaWQsIHlvdSBhbmQgeW91ciByZWZlcnJhbCB3aWxsIGdldCBhIDIwJSBib251cyBvbiB5b3VyIGxpbWl0cy48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXtyZWZlcnJhbFByb21vQ29kZX0gb25DaGFuZ2U9eyhlKT0+c2V0UmVmZXJyYWxQcm9tb0NvZGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvbW9Db2RlVmFsaWQgIT0gbnVsbCA/PGRpdiBjbGFzc05hbWU9XCJtdC0xMCBtYi0xMFwiPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21vQ29kZVZhbGlkID09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9XCJzdWNjZXNzXCIgbWVzc2FnZT1cIlRoaXMgcmVmZXJyYWwgY29kZSBpcyB2YWxpZC5cIiBzaG93SWNvbiAvPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCB0eXBlPVwiZXJyb3JcIiBtZXNzYWdlPVwiVGhpcyByZWZlcnJhbCBjb2RlIGlzIG5vdCB2YWxpZC5cIiBzaG93SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9kaXY+OiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIG1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgb25DbGljaz17Y2hlY2tQcm9tb0NvZGV9IGRpc2FibGVkPXshcmVmZXJyYWxQcm9tb0NvZGV9PkNoZWNrIHRoaXMgcmVmZXJyYWwgY29kZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYW5jZWxsaW5nIGEgcGxhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17c2hvd0NhbmNlbFBsYW5Nb2RhbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb2tUZXh0PXthbGxvd0NhbmNlbCA9PSAneWVzJyA/ICdQcm9jZWVkJzogJ09rJ31cclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjYW5jZWxsaW5nSW5Qcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtkaXNwbGF5OiAoYWxsb3dDYW5jZWwgPT0gJ25hJyA/ICdub25lJzogJ2lubGluZS1ibG9jaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb2tUeXBlPXthbGxvd0NhbmNlbCA9PSAneWVzJyA/ICdkYW5nZXInOiAncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17YWxsb3dDYW5jZWwgPT0gJ3llcycgPyBjYW5jZWxDdXJyZW50UGxhbjogY2FuY2VsQ2FuY2VsUGxhbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD17YWxsb3dDYW5jZWwgPT0gJ3llcyc/ICdOb3Qgbm93JzogJ0NhbmNlbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGNhbmNlbGxpbmdJblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge2Rpc3BsYXk6IChhbGxvd0NhbmNlbCA9PSAnbm8nID8gJ25vbmUnOiAnaW5saW5lLWJsb2NrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17Y2FuY2VsQ2FuY2VsUGxhbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2FsbG93Q2FuY2VsID09ICduYScgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9XCJQbGVhc2Ugd2FpdCwgd2UgYXJlIGNoZWNraW5nIHlvdXIgYWNjb3VudC4uLlwiIHR5cGU9XCJpbmZvXCIgc2hvd0ljb24vPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGFsbG93Q2FuY2VsID09ICdubycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgbWVzc2FnZT17YWxsb3dDYW5jZWxFcnJvcn0gdHlwZT1cImVycm9yXCIgc2hvd0ljb24vPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgQ2FuIHlvdSBwbGVhc2Ugc2hhcmUgd2l0aCB1cyB3aHkgeW91IHdhbnQgdG8gY2FuY2VsIHlvdXIgY3VycmVudCBwbGFuIFwiJHtjYW5jZWxQbGFuVGl0bGV9XCI/YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBmb3JtPXtmb3JtQ2FuY2VsUmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZU1lc3NhZ2VzPXt7cmVxdWlyZWQ6IFwiJyR7bmFtZX0nIGlzIHJlcXVpcmVkLlwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y2FuY2VsUmVhc29ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyZWFzb25cIiByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGEgcmVhc29uIGZvciBjYW5jZWxsaW5nIHRoaXMgcGxhbi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cInByaWNlXCI+VG9vIHByaWNleTwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiZnVuY3Rpb25zXCI+Tm90IGVub3VnaCBmdW5jdGlvbnM8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImJ1Z3NcIj5Ub28gbWFueSBidWdzPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJvdGhlclwiPk90aGVyPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkFkZCBtb3JlIGRldGFpbHNcIiBuYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxsaW5nSW5Qcm9ncmVzcz8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9XCJpbmZvXCIgbWVzc2FnZT1cIlBsZWFzZSB3YWl0IHVudGlsIHdlIGZpbmlzaCBjYW5jZWxsaW5nIHRoaXMgcGxhbi4uLlwiLz46IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5IHRvcC1idWZmZXItMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YUxvYWRlZCA/IHBsYW5zOiA8Q29udGFpbmVyIGNlbnRlckg+PENpcmNsZU5vdGNoSWNvbiBzaXplPXsyNH0gY2xhc3NOYW1lPVwic3BpblwiIC8+PC9Db250YWluZXI+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LypzdGF0dXMgIT0gJycgPyA8QWxlcnQgbWVzc2FnZT17bWVzc2FnZX0gdHlwZT17c3RhdHVzfSBzaG93SWNvbiAvPjogbnVsbCovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz47XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgbGF6eSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHsgSW5mb0NpcmNsZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvSWNvbiA9IChwcm9wcyk9PiB7XHJcbiAgICByZXR1cm4gPFRvb2x0aXAgcGxhY2VtZW50PXtwcm9wcy5wbGFjZW1lbnQgfHwgXCJyaWdodFwifSBcclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX0+PEluZm9DaXJjbGVGaWxsZWQgY2xhc3NOYW1lPVwiaW5mby1pY29uXCIgLz48L1Rvb2x0aXA+XHJcbn0iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibmV4dCIsInB1c2giLCJpc0FycmF5IiwiUmVhY3QiLCJsYXp5IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJBbGVydCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiQ29sIiwiRGl2aWRlciIsIkZvcm0iLCJJbnB1dCIsIk1vZGFsIiwibm90aWZpY2F0aW9uIiwiUm93IiwiVGFicyIsInRoZW1lIiwiVG9vbHRpcCIsIkNoZWNrQ2lyY2xlT3V0bGluZWQiLCJDb3B5T3V0bGluZWQiLCJFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCIsIkV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQiLCJHbG9iYWxPdXRsaW5lZCIsIkluZm9DaXJjbGVGaWxsZWQiLCJMb2FkaW5nT3V0bGluZWQiLCJTeW5jT3V0bGluZWQiLCJXYXJuaW5nT3V0bGluZWQiLCJheGlvcyIsIkF1dGhVSUZ1bmN0aW9ucyIsImNvbW1vbkZ1bmN0aW9ucyIsIkNvbnRhaW5lciIsIkluZm9JY29uIiwiUGxhbkxpc3QiLCJQYXltZW50SGlzdG9yeSIsIlBheW1lbnRNZXRob2QiLCJJbnZvaWNlTGlzdCIsIkJpbGxpbmdJbmZvIiwicHJvcHMiLCJkaXNwYXRjaCIsIm5hdmlnYXRlIiwiYWNjb3VudERhdGEiLCJzdGF0ZSIsInBheW1lbnRfc3VtbWFyeSIsIm5vdGlmeSIsInBhcmFtcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJlcnJvck9uTG9hZCIsInNldEVycm9yT25Mb2FkIiwibG9hZEluaXRpYWxEYXRhIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl90IiwiX2NvbnRleHQiLCJnZXQiLCJkYXRhIiwicmVzdWx0IiwidHlwZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRhYkl0ZW1zIiwibGFiZWwiLCJrZXkiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvZmZzZXQiLCJzcGFuIiwicHQiLCJtYiIsIml0ZW1zIiwiZGF5anMiLCJyZXF1aXJlIiwic2V0SXRlbXMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInN0YXR1cyIsInNldFN0YXR1cyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJsaXN0IiwiaW52b2ljZUl0ZW1zIiwibWFwIiwiaXRlbSIsImR0IiwiZGF0ZSIsImZvcm1hdCIsInBhaWQiLCJjdXJyZW5jeSIsImFtb3VudCIsImhyZWYiLCJwZGYiLCJ0YXJnZXQiLCJ0YWJsZURhdGEiLCJzY29wZSIsInNob3dJY29uIiwiaGlzdG9yeUl0ZW1zIiwiZXZlbnQiLCJjb21tZW50IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwYXltZW50SW5mbyIsInNldFBheW1lbnRJbmZvIiwicGxhbl9jb2RlIiwicXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInNob3ciLCJjbG9zZSIsImluaXRpYXRlQ2hhbmdlUGF5bWVudE1ldGhvZCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfdDIiLCJfY29udGV4dDIiLCJwb3N0IiwidXJsIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJDb21wb25lbnQiLCJMaW5rIiwiUmFkaW8iLCJTcGFjZSIsIkNpcmNsZU5vdGNoSWNvbiIsImRlZmF1bHRWZW5kb3IiLCJkZWZhdWx0X3BheW1lbnRfdmVuZG9yIiwicGF5bWVudENsaWVudElkIiwicGF5bWVudF9jbGllbnRfaWQiLCJpbnRlcnZhbENhbmNlbCIsIl9Nb2RhbCR1c2VNb2RhbCIsInVzZU1vZGFsIiwiX01vZGFsJHVzZU1vZGFsMiIsIm1vZGFsIiwiY29udGV4dEhvbGRlciIsIl9ub3RpZmljYXRpb24kdXNlTm90aSIsInVzZU5vdGlmaWNhdGlvbiIsIl9ub3RpZmljYXRpb24kdXNlTm90aTIiLCJhcGkiLCJzaG93UGF5bWVudEZvcm0iLCJzZXRTaG93UGF5bWVudEZvcm0iLCJkYXRhTG9hZGVkIiwic2V0RGF0YUxvYWRlZCIsImFsbG93Q2FuY2VsIiwic2V0QWxsb3dDYW5jZWwiLCJhbGxvd0NhbmNlbEVycm9yIiwic2V0QWxsb3dDYW5jZWxFcnJvciIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwic2hvd0NhbmNlbFBsYW5Nb2RhbCIsInNldFNob3dDYW5jZWxQbGFuTW9kYWwiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJwYXlwYWwiLCJzZXRQYXlwYWwiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwicGxhbkxpc3QiLCJzZXRQbGFuTGlzdCIsIl9Gb3JtJHVzZUZvcm0iLCJ1c2VGb3JtIiwiX0Zvcm0kdXNlRm9ybTIiLCJmb3JtQ2FuY2VsUmVhc29uIiwiX3VzZVN0YXRlMTMiLCJyZWFzb24iLCJkZXRhaWxzIiwiX3VzZVN0YXRlMTQiLCJjYW5jZWxSZWFzb24iLCJzZXRDYW5jZWxSZWFzb24iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiY2FuY2VsUGxhblRpdGxlIiwic2V0Q2FuY2VsUGxhblRpdGxlIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInBsYW5JZFRvU3RhcnQiLCJzZXRQbGFuSWRUb1N0YXJ0IiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImNhbmNlbGxpbmdJblByb2dyZXNzIiwic2V0Q2FuY2VsbGluZ0luUHJvZ3Jlc3MiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwicmVmZXJyYWxQcm9tb0NvZGUiLCJzZXRSZWZlcnJhbFByb21vQ29kZSIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJwcm9tb0NvZGVWYWxpZCIsInNldFByb21vQ29kZVZhbGlkIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsInNlbGVjdGVkUGxhbklkIiwic2V0U2VsZWN0ZWRQbGFuSWQiLCJyZWxvYWRBY2NvdW50RGF0YSIsInNldERlZmF1bHRNZXRob2QiLCJzZXRJbnRlcnZhbCIsImdldFN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbl9kYXRhIiwic3Vic2NyaXB0aW9uIiwibmV3UGxhbkxpc3QiLCJub0tleVBsYW4iLCJrZXlQbGFuIiwicGxhbiIsImluZGV4T2YiLCJzb3J0IiwidGl0bGUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzZWxlY3RQbGFuIiwiX3JlZjMiLCJfY2FsbGVlMyIsInBsYW5JZCIsInN1YnNjcmlwdGlvbklkIiwiX3QzIiwiX2NvbnRleHQzIiwicGxhbl9pZCIsInN1YnNjcmlwdGlvbl9pZCIsIl94IiwiX3gyIiwiY2hlY2tQcm9tb0NvZGUiLCJfcmVmNCIsIl9jYWxsZWU0IiwiX3Q0IiwiX2NvbnRleHQ0IiwiY29kZSIsInNlbGVjdE5ld1BsYW4iLCJfcmVmNSIsIl9jYWxsZWU1IiwiX3Q1IiwiX2NvbnRleHQ1IiwicmVmZXJyYWxfcHJvbW9fY29kZSIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfdDYiLCJfY29udGV4dDYiLCJzZXRUaW1lb3V0IiwicmVwbGFjZSIsInJlbG9hZFN1bW1hcnkiLCJfcmVmNyIsIl9jYWxsZWU3IiwiX3Q3IiwiX2NvbnRleHQ3IiwibW92ZVRvTmV3UGxhbiIsIl9yZWY4IiwiX2NhbGxlZTgiLCJjb25maXJtZWRNb3ZlIiwiX3Q4IiwiX2NvbnRleHQ4IiwiY29uZmlybSIsImNvbnRlbnQiLCJpY29uIiwiX3gzIiwiY2xvc2VDYW5jZWxQbGFuTW9kYWwiLCJjYW5jZWxSZXN1bHQiLCJjYW5jZWxDdXJyZW50UGxhbiIsIl9yZWY5IiwiX2NhbGxlZTkiLCJyZXNwb25zZVN1bW1hcnkiLCJfdDkiLCJfY29udGV4dDkiLCJhY2NvdW50X2RhdGEiLCJjaGVja1N1YnNjcmlwdGlvbiIsIl9yZWYwIiwiX2NhbGxlZTAiLCJfdDAiLCJfY29udGV4dDAiLCJjbGVhckludGVydmFsIiwiaW5pdGlhdGVQbGFuQ2FuY2VsIiwiX3JlZjEiLCJfY2FsbGVlMSIsInBsYW5OYW1lIiwiY29uZmlybWVkQ2FuY2VsIiwiX2NvbnRleHQxIiwiY2hlY2tBbGxvd0NhbmNlbCIsIl94NCIsIl9yZWYxMCIsIl9jYWxsZWUxMCIsInJlc3BvbnNlQWxsb3ciLCJfdDEiLCJfY29udGV4dDEwIiwiX3JlZjExIiwiX2NhbGxlZTEyIiwiX2NvbnRleHQxMiIsInZhbGlkYXRlRmllbGRzIiwiX3JlZjEyIiwiX2NhbGxlZTExIiwidmFsdWVzIiwiX3QxMCIsIl9jb250ZXh0MTEiLCJfeDUiLCJlcnJvckluZm8iLCJjbG9zZVBheW1lbnRGb3JtIiwidXBkYXRlUGF5bWVudERldGFpbHNSZWRpcmVjdCIsIl9yZWYxMyIsIl9jYWxsZWUxMyIsIl90MTEiLCJfY29udGV4dDEzIiwic3Vic2NyaXB0aW9uSW5mbyIsInN1YnNjcmlwdGlvbkV4aXN0cyIsInRvTG93ZXJDYXNlIiwibGFzdF9wYXltZW50IiwiZHRGb3JtYXQiLCJsYXN0UGF5bWVudERUIiwidGltZSIsImN1cnJlbmN5X2NvZGUiLCJwbGFucyIsIl9wYXltZW50X3N1bW1hcnkkc3VicyIsIl9wbGFuJGludGVydmFsIiwiX3BsYW4kaW50ZXJ2YWwyIiwiZGlzcGxheVBheW1lbnRCdXR0b25TdHlsZSIsImRpc3BsYXkiLCJwbGFuX2FjdGlvbiIsInBsYW5fbmFtZSIsImRhbmdlciIsInVzYWdlX3R5cGUiLCJzdHlsZSIsImlkIiwiZGVzY3JpcHRpb24iLCJzY2hlbWUiLCJpbnRlcnZhbCIsImNoYW5nZUNhbmNlbFJlYXNvbiIsImZpZWxkIiwiY2FuY2VsQ2FuY2VsUGxhbiIsIm9wZW4iLCJva1RleHQiLCJvbk9rIiwiY2FuY2VsVGV4dCIsIm9uQ2FuY2VsIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsIm9rQnV0dG9uUHJvcHMiLCJva1R5cGUiLCJjYW5jZWxCdXR0b25Qcm9wcyIsImZvcm0iLCJ2YWxpZGF0ZU1lc3NhZ2VzIiwicmVxdWlyZWQiLCJpbml0aWFsVmFsdWVzIiwibGF5b3V0IiwiSXRlbSIsInJ1bGVzIiwiR3JvdXAiLCJkaXJlY3Rpb24iLCJUZXh0QXJlYSIsInJvd3MiLCJjZW50ZXJIIiwic2l6ZSIsInBsYWNlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=