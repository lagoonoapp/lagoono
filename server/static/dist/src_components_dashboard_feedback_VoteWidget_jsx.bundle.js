"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_feedback_VoteWidget_jsx"],{

/***/ "./src/components/dashboard/feedback/VoteWidget.jsx"
/*!**********************************************************!*\
  !*** ./src/components/dashboard/feedback/VoteWidget.jsx ***!
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CaretUpOutlined.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");
/* harmony import */ var _src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/components/ui/Loader */ "./src/components/ui/Loader.jsx");
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









var VoteWidget = function VoteWidget(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    postLoading = _useState2[0],
    setPostLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.rating),
    _useState4 = _slicedToArray(_useState3, 2),
    rating = _useState4[0],
    setRating = _useState4[1];
  var prevPost = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_4__["default"].useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorPrimaryHover = _theme$useToken$token.colorPrimaryHover,
    colorTextLabel = _theme$useToken$token.colorTextLabel;
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (props.postId != null) {
      setRating(props.rating);
    }
  }, [props.postId]);
  var loadInitialData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_7__["default"].get("/api/app/feedbackboard/post/view/".concat(params.postShortId));
          case 1:
            response = _context.v;
            setPostLoading(false);
            if (response.data.result && response.data.item) {
              setPost(response.data.item);
              //form.setFieldsValue(response.data.result.item);
            } else {
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
  var upDownVote = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(val) {
      var data, response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            data = {
              value: val,
              post_id: props.postId
            };
            _context2.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_7__["default"].post("/api/app/feedbackboard/post/vote", data);
          case 1:
            response = _context2.v;
            if (response.data.result && response.data.rating != null) {
              setRating(response.data.rating);
              notify.show('success', 'Your vote has been saved!');
            } else {
              notify.show('warning', response.data.error || 'Some error occured during voting the post... please try again.');
            }
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            setPostLoading(false);
            console.log(_t2);
            notify.show('error', 'Some error occured during voting the post... please try again.');
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function upDownVote(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex m-auto",
    key: "postVoteWidget"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "post-data"
  }, props.readonly ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: colorPrimary
    }
  }), rating, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      color: colorPrimary
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        color: colorPrimary
      }
    }),
    onClick: function onClick() {
      return upDownVote(1);
    }
  }), rating != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text"
  }, rating) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_10__.Loader, {
    show: true,
    nocontainer: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: colorPrimary
      }
    }),
    onClick: function onClick() {
      return upDownVote(-1);
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoteWidget);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX2ZlZWRiYWNrX1ZvdGVXaWRnZXRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNBLHVLQUFBQSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssV0FBQSw4QkFBQUMsRUFBQU4sQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBQyxDQUFBLEdBQUFMLENBQUEsSUFBQUEsQ0FBQSxDQUFBTSxTQUFBLFlBQUFDLFNBQUEsR0FBQVAsQ0FBQSxHQUFBTyxTQUFBLEVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsQ0FBQUMsU0FBQSxVQUFBSyxtQkFBQSxDQUFBSCxDQUFBLHVCQUFBVixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBSSxDQUFBLE1BQUFDLENBQUEsR0FBQVgsQ0FBQSxRQUFBWSxDQUFBLE9BQUFDLENBQUEsS0FBQUYsQ0FBQSxLQUFBYixDQUFBLEtBQUFnQixDQUFBLEVBQUFwQixDQUFBLEVBQUFxQixDQUFBLEVBQUFDLENBQUEsRUFBQU4sQ0FBQSxFQUFBTSxDQUFBLENBQUFDLElBQUEsQ0FBQXZCLENBQUEsTUFBQXNCLENBQUEsV0FBQUEsRUFBQXJCLENBQUEsRUFBQUMsQ0FBQSxXQUFBTSxDQUFBLEdBQUFQLENBQUEsRUFBQVEsQ0FBQSxNQUFBRyxDQUFBLEdBQUFaLENBQUEsRUFBQW1CLENBQUEsQ0FBQWYsQ0FBQSxHQUFBRixDQUFBLEVBQUFtQixDQUFBLGdCQUFBQyxFQUFBcEIsQ0FBQSxFQUFBRSxDQUFBLFNBQUFLLENBQUEsR0FBQVAsQ0FBQSxFQUFBVSxDQUFBLEdBQUFS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QU9BLENBQUE7TUFBQSxPQUFNakIsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFDLEVBQzlGaEMsTUFBTSxJQUFJLElBQUksZ0JBQUczQywwREFBQTtJQUFLcUYsU0FBUyxFQUFDO0VBQU0sR0FBRTFDLE1BQVksQ0FBQyxnQkFBRTNDLDBEQUFBLENBQUNpQyw4REFBTTtJQUFDc0MsSUFBSSxFQUFFLElBQUs7SUFBQ3NCLFdBQVc7RUFBQSxDQUFDLENBQUMsZUFDekY3RiwwREFBQSxDQUFDYSw0Q0FBTTtJQUFDOEUsSUFBSSxlQUFFM0YsMERBQUEsQ0FBQzRCLHlEQUFpQjtNQUFDNkQsS0FBSyxFQUFFO1FBQUNDLEtBQUssRUFBRXJDO01BQVk7SUFBRSxDQUFDLENBQUU7SUFBQ3VDLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBTWpCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFHLENBQ3JHLENBQ0osQ0FBQztBQUNkLENBQUM7QUFDRCxpRUFBZXpDLFVBQVUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2ZlZWRiYWNrL1ZvdGVXaWRnZXQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBsYXp5LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBBbGVydCwgQXZhdGFyLCBCcmVhZGNydW1iLCBCdXR0b24sIENhcmQsIENoZWNrYm94LCBDb2wsIERpdmlkZXIsIEZvcm0sIElucHV0LCBMaXN0LCBNb2RhbCwgbm90aWZpY2F0aW9uLCBSb3csIFNwYWNlLCBUYWJzLCBcclxuICAgICAgICAgICAgICAgIHRoZW1lLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgeyAgQ2FyZXREb3duT3V0bGluZWQsIENhcmV0VXBPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEF1dGhVSUZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvQXV0aFVJRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY29tbW9uRnVuY3Rpb25zIH0gZnJvbSAnQHNyYy91dGlscy9jb21tb25GdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvTG9hZGVyJztcclxuXHJcblxyXG5jb25zdCBWb3RlV2lkZ2V0ID0gKHByb3BzKT0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IFtwb3N0TG9hZGluZywgc2V0UG9zdExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUocHJvcHMucmF0aW5nKTtcclxuICAgIGNvbnN0IHByZXZQb3N0ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBub3RpZnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5vdGlmeSk7XHJcbiAgICBjb25zdCB7dG9rZW46IHsgY29sb3JQcmltYXJ5LCBjb2xvclByaW1hcnlIb3ZlciwgY29sb3JUZXh0TGFiZWwgfX0gPSB0aGVtZS51c2VUb2tlbigpO1xyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMucG9zdElkICE9IG51bGwpe1xyXG4gICAgICAgICAgICBzZXRSYXRpbmcocHJvcHMucmF0aW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMucG9zdElkXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZEluaXRpYWxEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hcHAvZmVlZGJhY2tib2FyZC9wb3N0L3ZpZXcvJHtwYXJhbXMucG9zdFNob3J0SWR9YCk7XHJcbiAgICAgICAgICAgIHNldFBvc3RMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0ICYmIHJlc3BvbnNlLmRhdGEuaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0KHJlc3BvbnNlLmRhdGEuaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAvL2Zvcm0uc2V0RmllbGRzVmFsdWUocmVzcG9uc2UuZGF0YS5yZXN1bHQuaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIGxvYWRpbmcgdGhlIHBvc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIHNldFBvc3RMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyBsb2FkaW5nIHRoZSBwb3N0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBEb3duVm90ZSA9IGFzeW5jKHZhbCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcclxuICAgICAgICAgICAgICAgIHBvc3RfaWQ6IHByb3BzLnBvc3RJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvYXBwL2ZlZWRiYWNrYm9hcmQvcG9zdC92b3RlYCwgZGF0YSk7ICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0ICYmIHJlc3BvbnNlLmRhdGEucmF0aW5nICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgc2V0UmF0aW5nKHJlc3BvbnNlLmRhdGEucmF0aW5nKTtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdzdWNjZXNzJywgJ1lvdXIgdm90ZSBoYXMgYmVlbiBzYXZlZCEnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ3dhcm5pbmcnLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHZvdGluZyB0aGUgcG9zdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgc2V0UG9zdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHZvdGluZyB0aGUgcG9zdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG0tYXV0b1wiIGtleT1cInBvc3RWb3RlV2lkZ2V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyo8SWNvblRleHQgaWNvbj17U3Rhck91dGxpbmVkfSB0ZXh0PVwiMTU2XCIga2V5PVwibGlzdC12ZXJ0aWNhbC1zdGFyLW9cIiAvPiovfVxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnJlYWRvbmx5ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmV0VXBPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBjb2xvclByaW1hcnl9fS8+e3JhdGluZ308Q2FyZXREb3duT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogY29sb3JQcmltYXJ5fX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPjpcclxuICAgICAgICAgICAgICAgICAgICA8PjxCdXR0b24gaWNvbj17PENhcmV0VXBPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBjb2xvclByaW1hcnl9fS8+fSBvbkNsaWNrPXsoKT0+dXBEb3duVm90ZSgxKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyYXRpbmcgIT0gbnVsbCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPntyYXRpbmd9PC9kaXY+OiA8TG9hZGVyIHNob3c9e3RydWV9IG5vY29udGFpbmVyLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8Q2FyZXREb3duT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogY29sb3JQcmltYXJ5fX0vPn0gb25DbGljaz17KCk9PnVwRG93blZvdGUoLTEpfS8+PC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBWb3RlV2lkZ2V0OyJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJuZXh0IiwicHVzaCIsImlzQXJyYXkiLCJSZWFjdCIsImxhenkiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJBbGVydCIsIkF2YXRhciIsIkJyZWFkY3J1bWIiLCJCdXR0b24iLCJDYXJkIiwiQ2hlY2tib3giLCJDb2wiLCJEaXZpZGVyIiwiRm9ybSIsIklucHV0IiwiTGlzdCIsIk1vZGFsIiwibm90aWZpY2F0aW9uIiwiUm93IiwiU3BhY2UiLCJUYWJzIiwidGhlbWUiLCJUb29sdGlwIiwiQ2FyZXREb3duT3V0bGluZWQiLCJDYXJldFVwT3V0bGluZWQiLCJheGlvcyIsIkF1dGhVSUZ1bmN0aW9ucyIsImNvbW1vbkZ1bmN0aW9ucyIsIkxvYWRlciIsIlZvdGVXaWRnZXQiLCJwcm9wcyIsImRpc3BhdGNoIiwibmF2aWdhdGUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwicG9zdExvYWRpbmciLCJzZXRQb3N0TG9hZGluZyIsIl91c2VTdGF0ZTMiLCJyYXRpbmciLCJfdXNlU3RhdGU0Iiwic2V0UmF0aW5nIiwicHJldlBvc3QiLCJub3RpZnkiLCJzdGF0ZSIsIl90aGVtZSR1c2VUb2tlbiIsInVzZVRva2VuIiwiX3RoZW1lJHVzZVRva2VuJHRva2VuIiwidG9rZW4iLCJjb2xvclByaW1hcnkiLCJjb2xvclByaW1hcnlIb3ZlciIsImNvbG9yVGV4dExhYmVsIiwicGFyYW1zIiwicG9zdElkIiwibG9hZEluaXRpYWxEYXRhIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl90IiwiX2NvbnRleHQiLCJnZXQiLCJjb25jYXQiLCJwb3N0U2hvcnRJZCIsImRhdGEiLCJyZXN1bHQiLCJpdGVtIiwic2V0UG9zdCIsInNob3ciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1cERvd25Wb3RlIiwiX3JlZjIiLCJfY2FsbGVlMiIsInZhbCIsIl90MiIsIl9jb250ZXh0MiIsInBvc3RfaWQiLCJwb3N0IiwiX3giLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwicmVhZG9ubHkiLCJGcmFnbWVudCIsInN0eWxlIiwiY29sb3IiLCJpY29uIiwib25DbGljayIsIm5vY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==