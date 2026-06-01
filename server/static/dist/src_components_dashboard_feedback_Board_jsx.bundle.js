"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_feedback_Board_jsx"],{

/***/ "./src/components/dashboard/feedback/Board.jsx"
/*!*****************************************************!*\
  !*** ./src/components/dashboard/feedback/Board.jsx ***!
  \*****************************************************/
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/list/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/pagination/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/BugFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/BulbFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/EyeOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/LockFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/MessageOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/NotificationFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/QuestionCircleFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/TagFilled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @src/components/ui/InfoIcon */ "./src/components/ui/InfoIcon.jsx");
/* harmony import */ var _src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @src/components/ui/Loader */ "./src/components/ui/Loader.jsx");
/* harmony import */ var _VoteWidget__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./VoteWidget */ "./src/components/dashboard/feedback/VoteWidget.jsx");
/* harmony import */ var _boardData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./boardData */ "./src/components/dashboard/feedback/boardData.js");
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













var postTypes = {
  question: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: "post-type-icon question"
  }), "Question/help"),
  feature: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "post-type-icon feature-request"
  }), "Feature request"),
  bug: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "post-type-icon bug-report"
  }), "Bug report"),
  announcement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "post-type-icon announcement"
  }), "Announcement")
};
var postCategories = {
  ai: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "post-category-icon ai"
  }), "AI"),
  ui: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "post-category-icon ui"
  }), "User Interface"),
  data: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "post-category-icon data"
  }), "Data/data sources"),
  dashboard: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "post-category-icon dashboard"
  }), "Dashboard"),
  chatbox: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "post-category-icon chatbox"
  }), "Chatbox")
};
var scopeTitles = {
  'all': 'All posts',
  'my': 'My published posts',
  'drafts': 'My drafts'
};

/*const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );*/

var defaultPageSize = 20;
var Board = function Board(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    boardLoading = _useState2[0],
    setBoardLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPageSize),
    _useState8 = _slicedToArray(_useState7, 2),
    pageSize = _useState8[0],
    setPageSize = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    totalPosts = _useState0[0],
    setTotalPosts = _useState0[1];
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_9__["default"].useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorPrimaryHover = _theme$useToken$token.colorPrimaryHover,
    colorTextLabel = _theme$useToken$token.colorTextLabel;
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadData();
    // TODO: when redirected, the current selection in the bottom menu is lost
    //dispatch({ type: 'currentMenuItems', name: 'currentMenuItems', value: ['feedback', null, `logs_${params.projectId}`]});
  }, [params.scope]);
  var loadData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(pageNumber, pageSize) {
      var scope, response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            pageNumber = pageNumber || 1;
            pageSize = pageSize || defaultPageSize;
            _context.p = 1;
            scope = params.scope || 'all';
            _context.n = 2;
            return axios__WEBPACK_IMPORTED_MODULE_18__["default"].get("/api/app/feedbackboard/".concat(scope, "?page=").concat(pageNumber, "&pagesize=").concat(pageSize));
          case 2:
            response = _context.v;
            setBoardLoading(false);
            if (response.data.result) {
              if (response.data.result) {
                setData(response.data.list);
                setTotalPosts(response.data.total);
                setCurrentPage(pageNumber);
                setPageSize(pageSize);
              } else {
                notify.show('error', response.data.error || 'Some error occured during this request... please try again.');
              }
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setBoardLoading(false);
            console.log(_t);
            notify.show('error', 'Some error occured during this request... please try again.');
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function loadData(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var changePage = function changePage(page, pageSize) {
    loadData(page, pageSize);
  };
  var scopeTitle = scopeTitles[params.scope || 'all'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: colorTextLabel
    }
  }, "Feedback / Support Board / ", scopeTitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    offset: 2,
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bordered: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_23__.Loader, {
    show: boardLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    rowKey: "id",
    pagination: false,
    locale: {
      emptyText: 'No posts...'
    },
    itemLayout: "vertical",
    size: "large",
    dataSource: data,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        key: item.id,
        actions: [,],
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "post-data"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VoteWidget__WEBPACK_IMPORTED_MODULE_24__["default"], {
          rating: item.rating,
          readonly: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "mb-10"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "comments-number"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.comment_number || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "comments-number"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.views || 0))))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"].Item.Meta, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "d-flex justify-content-between"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, item["private"] == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: "private-post-icon",
          title: "Private post"
        }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "/dashboard/feedback/post/view/".concat(item.short_id, "/").concat(item.slug)
        }, item.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "post-status-badge ".concat(item.progress_status.replaceAll(' ', ''))
        }, _boardData__WEBPACK_IMPORTED_MODULE_25__.boardData.progressStatus[item.progress_status].icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.progress_status))),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, item.text_preview, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "mt-10"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, item.type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "post-tag"
        }, postTypes[item.type]) : null, item.category ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "post-tag"
        }, postCategories[item.category]) : null)))
      }), item.content);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    total: totalPosts,
    showTotal: function showTotal(total, range) {
      return "".concat(range[0], "-").concat(range[1], " of ").concat(total, " posts");
    },
    defaultPageSize: defaultPageSize,
    defaultCurrent: 1,
    pageSize: pageSize,
    current: currentPage,
    showQuickJumper: true,
    showSizeChanger: true,
    onChange: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    offset: 1,
    span: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "primary",
    onClick: function onClick() {
      return navigate('/dashboard/feedback/post/edit/new', {
        replace: true
      });
    }
  }, "Create a post")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);

/***/ },

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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX2ZlZWRiYWNrX0JvYXJkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDQSx1S0FBQUEsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBTCxDQUFBLElBQUFBLENBQUEsQ0FBQU0sU0FBQSxZQUFBQyxTQUFBLEdBQUFQLENBQUEsR0FBQU8sU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQVYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUksQ0FBQSxNQUFBQyxDQUFBLEdBQUFYLENBQUEsUUFBQVksQ0FBQSxPQUFBQyxDQUFBLEtBQUFGLENBQUEsS0FBQWIsQ0FBQSxLQUFBZ0IsQ0FBQSxFQUFBcEIsQ0FBQSxFQUFBcUIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFOLENBQUEsRUFBQU0sQ0FBQSxDQUFBQyxJQUFBLENBQUF2QixDQUFBLE1BQUFzQixDQUFBLFdBQUFBLEVBQUFyQixDQUFBLEVBQUFDLENBQUEsV0FBQU0sQ0FBQSxHQUFBUCxDQUFBLEVBQUFRLENBQUEsTUFBQUcsQ0FBQSxHQUFBWixDQUFBLEVBQUFtQixDQUFBLENBQUFmLENBQUEsR0FBQUYsQ0FBQSxFQUFBbUIsQ0FBQSxnQkFBQUMsRUFBQXBCLENBQUEsRUFBQUUsQ0FBQSxTQUFBSyxDQUFBLEdBQUFQLENBQUEsRUFBQVUs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QUFTLEVBQUU4SDtFQUFnQixnQkFDL0ZqTCwwREFBQSxDQUFDZ0wseURBQWU7SUFBQ0ssSUFBSTtFQUFBLENBQUMsQ0FDckIsQ0FBQyxHQUFFLElBQUk7QUFDaEIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFnb29uby1hcHAvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvZmVlZGJhY2svQm9hcmQuanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2ZlZWRiYWNrL2JvYXJkRGF0YS5qcyIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL0luZm9JY29uLmpzeCIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL0xvYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGxhenksIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEFsZXJ0LCBBdmF0YXIsIEJhZGdlLCBCdXR0b24sIENhcmQsIENoZWNrYm94LCBDb2wsIERpdmlkZXIsIEZvcm0sIElucHV0LCBMaXN0LCBNb2RhbCwgbm90aWZpY2F0aW9uLCBQYWdpbmF0aW9uLCBSb3csIFNwYWNlLCBUYWJzLCBcclxuICAgICAgICAgICAgICAgIHRoZW1lLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgeyAgQnVnRmlsbGVkLCBCdWxiRmlsbGVkLCBFeWVPdXRsaW5lZCwgRmlyZVR3b1RvbmUsIEZpcmVGaWxsZWQsIExvY2tGaWxsZWQsIE1lc3NhZ2VPdXRsaW5lZCwgXHJcbiAgICBOb3RpZmljYXRpb25GaWxsZWQsIFF1ZXN0aW9uQ2lyY2xlRmlsbGVkLCBUYWdGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBdXRoVUlGdW5jdGlvbnMgfSBmcm9tICdAc3JjL3V0aWxzL0F1dGhVSUZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNvbW1vbkZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvY29tbW9uRnVuY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9Db250YWluZXInO1xyXG5pbXBvcnQgeyBJbmZvSWNvbiB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9JbmZvSWNvbic7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9Mb2FkZXInO1xyXG5pbXBvcnQgVm90ZVdpZGdldCBmcm9tICcuL1ZvdGVXaWRnZXQnO1xyXG5pbXBvcnQge2JvYXJkRGF0YX0gZnJvbSAnLi9ib2FyZERhdGEnO1xyXG5cclxuY29uc3QgcG9zdFR5cGVzID0ge1xyXG4gICAgcXVlc3Rpb246IDw+PFF1ZXN0aW9uQ2lyY2xlRmlsbGVkIGNsYXNzTmFtZT1cInBvc3QtdHlwZS1pY29uIHF1ZXN0aW9uXCIgLz5RdWVzdGlvbi9oZWxwPC8+LFxyXG4gICAgZmVhdHVyZTogPD48QnVsYkZpbGxlZCBjbGFzc05hbWU9XCJwb3N0LXR5cGUtaWNvbiBmZWF0dXJlLXJlcXVlc3RcIiAvPkZlYXR1cmUgcmVxdWVzdDwvPixcclxuICAgIGJ1ZzogPD48QnVnRmlsbGVkIGNsYXNzTmFtZT1cInBvc3QtdHlwZS1pY29uIGJ1Zy1yZXBvcnRcIiAvPkJ1ZyByZXBvcnQ8Lz4sXHJcbiAgICBhbm5vdW5jZW1lbnQ6IDw+PE5vdGlmaWNhdGlvbkZpbGxlZCBjbGFzc05hbWU9XCJwb3N0LXR5cGUtaWNvbiBhbm5vdW5jZW1lbnRcIiAvPkFubm91bmNlbWVudDwvPlxyXG59O1xyXG5cclxuY29uc3QgcG9zdENhdGVnb3JpZXMgPSB7XHJcbiAgICBhaTogPD48VGFnRmlsbGVkIGNsYXNzTmFtZT1cInBvc3QtY2F0ZWdvcnktaWNvbiBhaVwiIC8+QUk8Lz4sXHJcbiAgICB1aTogPD48VGFnRmlsbGVkIGNsYXNzTmFtZT1cInBvc3QtY2F0ZWdvcnktaWNvbiB1aVwiIC8+VXNlciBJbnRlcmZhY2U8Lz4sXHJcbiAgICBkYXRhOiA8PjxUYWdGaWxsZWQgY2xhc3NOYW1lPVwicG9zdC1jYXRlZ29yeS1pY29uIGRhdGFcIiAvPkRhdGEvZGF0YSBzb3VyY2VzPC8+LFxyXG4gICAgZGFzaGJvYXJkOiA8PjxUYWdGaWxsZWQgY2xhc3NOYW1lPVwicG9zdC1jYXRlZ29yeS1pY29uIGRhc2hib2FyZFwiIC8+RGFzaGJvYXJkPC8+LFxyXG4gICAgY2hhdGJveDogPD48VGFnRmlsbGVkIGNsYXNzTmFtZT1cInBvc3QtY2F0ZWdvcnktaWNvbiBjaGF0Ym94XCIgLz5DaGF0Ym94PC8+XHJcbn07XHJcblxyXG5jb25zdCBzY29wZVRpdGxlcyA9IHtcclxuICAgICdhbGwnOiAnQWxsIHBvc3RzJyxcclxuICAgICdteSc6ICdNeSBwdWJsaXNoZWQgcG9zdHMnLFxyXG4gICAgJ2RyYWZ0cyc6ICdNeSBkcmFmdHMnXHJcbn07XHJcblxyXG4vKmNvbnN0IEljb25UZXh0ID0gKHsgaWNvbiwgdGV4dCB9KSA9PiAoXHJcbiAgICA8U3BhY2U+XHJcbiAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICB7dGV4dH1cclxuICAgIDwvU3BhY2U+XHJcbiAgKTsqL1xyXG5cclxuY29uc3QgZGVmYXVsdFBhZ2VTaXplID0gMjA7XHJcblxyXG5jb25zdCBCb2FyZCA9IChwcm9wcyk9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbYm9hcmRMb2FkaW5nLCBzZXRCb2FyZExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3BhZ2VTaXplLCBzZXRQYWdlU2l6ZV0gPSB1c2VTdGF0ZShkZWZhdWx0UGFnZVNpemUpO1xyXG4gICAgY29uc3QgW3RvdGFsUG9zdHMsIHNldFRvdGFsUG9zdHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBub3RpZnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5vdGlmeSk7XHJcbiAgICBjb25zdCB7dG9rZW46IHsgY29sb3JQcmltYXJ5LCBjb2xvclByaW1hcnlIb3ZlciwgY29sb3JUZXh0TGFiZWwgfX0gPSB0aGVtZS51c2VUb2tlbigpO1xyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkRGF0YSgpO1xyXG4gICAgICAgIC8vIFRPRE86IHdoZW4gcmVkaXJlY3RlZCwgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSBib3R0b20gbWVudSBpcyBsb3N0XHJcbiAgICAgICAgLy9kaXNwYXRjaCh7IHR5cGU6ICdjdXJyZW50TWVudUl0ZW1zJywgbmFtZTogJ2N1cnJlbnRNZW51SXRlbXMnLCB2YWx1ZTogWydmZWVkYmFjaycsIG51bGwsIGBsb2dzXyR7cGFyYW1zLnByb2plY3RJZH1gXX0pO1xyXG4gICAgfSwgW3BhcmFtcy5zY29wZV0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jKHBhZ2VOdW1iZXIsIHBhZ2VTaXplKT0+e1xyXG4gICAgICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyIHx8IDE7XHJcbiAgICAgICAgcGFnZVNpemUgPSBwYWdlU2l6ZSB8fCBkZWZhdWx0UGFnZVNpemU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NvcGUgPSBwYXJhbXMuc2NvcGUgfHwgJ2FsbCc7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hcHAvZmVlZGJhY2tib2FyZC8ke3Njb3BlfT9wYWdlPSR7cGFnZU51bWJlcn0mcGFnZXNpemU9JHtwYWdlU2l6ZX1gKTtcclxuICAgICAgICAgICAgc2V0Qm9hcmRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRvdGFsUG9zdHMocmVzcG9uc2UuZGF0YS50b3RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UocGFnZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZVNpemUocGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgc2V0Qm9hcmRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VQYWdlID0gKHBhZ2UsIHBhZ2VTaXplKT0+e1xyXG4gICAgICAgIGxvYWREYXRhKHBhZ2UsIHBhZ2VTaXplKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzY29wZVRpdGxlID0gc2NvcGVUaXRsZXNbcGFyYW1zLnNjb3BlIHx8ICdhbGwnXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Y29sb3I6IGNvbG9yVGV4dExhYmVsfX0+RmVlZGJhY2sgLyBTdXBwb3J0IEJvYXJkIC8ge3Njb3BlVGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsyfSBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciBzaG93PXtib2FyZExvYWRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dLZXk9XCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17e2VtcHR5VGV4dDogJ05vIHBvc3RzLi4uJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPEljb25UZXh0IGljb249e1N0YXJPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWb3RlV2lkZ2V0IHJhdGluZz17aXRlbS5yYXRpbmd9IHJlYWRvbmx5PXt0cnVlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1udW1iZXJcIj48TWVzc2FnZU91dGxpbmVkLz48c3Bhbj57aXRlbS5jb21tZW50X251bWJlcnx8MH08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1udW1iZXJcIj48RXllT3V0bGluZWQgLz48c3Bhbj57aXRlbS52aWV3c3x8MH08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpdmF0ZSA9PSB0cnVlPyA8TG9ja0ZpbGxlZCBjbGFzc05hbWU9XCJwcml2YXRlLXBvc3QtaWNvblwiIHRpdGxlPVwiUHJpdmF0ZSBwb3N0XCIgLz46IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Rhc2hib2FyZC9mZWVkYmFjay9wb3N0L3ZpZXcvJHtpdGVtLnNob3J0X2lkfS8ke2l0ZW0uc2x1Z31gfT57aXRlbS50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3N0LXN0YXR1cy1iYWRnZSAke2l0ZW0ucHJvZ3Jlc3Nfc3RhdHVzLnJlcGxhY2VBbGwoJyAnLCAnJyl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib2FyZERhdGEucHJvZ3Jlc3NTdGF0dXNbaXRlbS5wcm9ncmVzc19zdGF0dXNdLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnByb2dyZXNzX3N0YXR1c308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0X3ByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHlwZSA/IDxkaXYgY2xhc3NOYW1lPVwicG9zdC10YWdcIj57cG9zdFR5cGVzW2l0ZW0udHlwZV19PC9kaXY+OiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNhdGVnb3J5ID8gPGRpdiBjbGFzc05hbWU9XCJwb3N0LXRhZ1wiPntwb3N0Q2F0ZWdvcmllc1tpdGVtLmNhdGVnb3J5XX08L2Rpdj46IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsPXt0b3RhbFBvc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvdGFsPXsodG90YWwsIHJhbmdlKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtyYW5nZVswXX0tJHtyYW5nZVsxXX0gb2YgJHt0b3RhbH0gcG9zdHNgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZVNpemU9e2RlZmF1bHRQYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UXVpY2tKdW1wZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaXplQ2hhbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG9mZnNldD17MX0gc3Bhbj17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpPT5uYXZpZ2F0ZSgnL2Rhc2hib2FyZC9mZWVkYmFjay9wb3N0L2VkaXQvbmV3Jywge3JlcGxhY2U6IHRydWV9KX0+Q3JlYXRlIGEgcG9zdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2Pik7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyAgQnVnRmlsbGVkLCBCdWxiRmlsbGVkLCBOb3RpZmljYXRpb25GaWxsZWQsIE1lc3NhZ2VPdXRsaW5lZCwgUXVlc3Rpb25DaXJjbGVGaWxsZWQsIFRhZ0ZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB7IFByb2hpYml0SWNvbiwgTGlnaHRidWxiSWNvbiwgQ2hlY2tGYXRJY29uLCBDaGVja0NpcmNsZUljb24sIEV5ZUljb24sIFxyXG4gICAgICAgIEhhbW1lckljb24sIFF1ZXN0aW9uSWNvbiwgWENpcmNsZUljb24gfSBmcm9tICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvYXJkRGF0YSA9IHtcclxuICAgIHByb2dyZXNzU3RhdHVzOiB7XHJcbiAgICAgICAgJ25ldyc6IHtpY29uOiA8TGlnaHRidWxiSWNvbi8+fSxcclxuICAgICAgICAnaW4gcmV2aWV3Jzoge2ljb246IDxFeWVJY29uLz59LFxyXG4gICAgICAgICdwbGFubmVkJzoge2ljb246IDxDaGVja0ZhdEljb24vPn0sXHJcbiAgICAgICAgJ3JlamVjdGVkJzoge2ljb246IDxQcm9oaWJpdEljb24gLz59LFxyXG4gICAgICAgICdpbiBwcm9ncmVzcyc6IHtpY29uOiA8SGFtbWVySWNvbi8+fSxcclxuICAgICAgICAnZG9uZSc6IHtpY29uOiA8Q2hlY2tDaXJjbGVJY29uLz59LFxyXG4gICAgICAgICdjbG9zZWQnOiB7aWNvbjogPFhDaXJjbGVJY29uLz59LFxyXG4gICAgICAgICd3YWl0IGZvciB1c2VyIHJlc3BvbnNlJzoge2ljb246IDxRdWVzdGlvbkljb24vPn1cclxuICAgIH0sXHJcbiAgICBwb3N0Q2F0ZWdvcmllczogW1xyXG4gICAgICAgIHt2YWx1ZTogJ2FpJywgbGFiZWw6ICdBSSd9LFxyXG4gICAgICAgIHt2YWx1ZTogJ3VpJywgbGFiZWw6ICdVc2VyIEludGVyZmFjZSd9LFxyXG4gICAgICAgIHt2YWx1ZTogJ2RhdGEnLCBsYWJlbDogJ0RhdGEvZGF0YSBzb3VyY2VzJ30sXHJcbiAgICAgICAge3ZhbHVlOiAnZGFzaGJvYXJkJywgbGFiZWw6ICdEYXNoYm9hcmQnfSxcclxuICAgICAgICB7dmFsdWU6ICdjaGF0Ym94JywgbGFiZWw6ICdDaGF0Ym94J31cclxuICAgIF0sXHJcbiAgICBwb3N0VHlwZXM6IFtcclxuICAgICAgICB7dmFsdWU6ICdxdWVzdGlvbicsIGxhYmVsOiAnUXVlc3Rpb24vaGVscCcsIGljb246IDxRdWVzdGlvbkNpcmNsZUZpbGxlZCBjbGFzc05hbWU9XCJwb3N0LXR5cGUtaWNvbiBxdWVzdGlvblwiIC8+fSxcclxuICAgICAgICB7dmFsdWU6ICdmZWF0dXJlJywgbGFiZWw6ICdGZWF0dXJlIHJlcXVlc3QnLCBpY29uOiA8QnVsYkZpbGxlZCBjbGFzc05hbWU9XCJwb3N0LXR5cGUtaWNvbiBmZWF0dXJlLXJlcXVlc3RcIiAvPn0sXHJcbiAgICAgICAge3ZhbHVlOiAnYnVnJywgbGFiZWw6ICdCdWcgcmVwb3J0JywgaWNvbjogPEJ1Z0ZpbGxlZCBjbGFzc05hbWU9XCJwb3N0LXR5cGUtaWNvbiBidWctcmVwb3J0XCIgLz59XHJcbiAgICBdLFxyXG4gICAgcG9zdFR5cGVzQWRtaW46IFtcclxuICAgICAgICB7dmFsdWU6ICdhbm5vdW5jZW1lbnQnLCBsYWJlbDogJ0Fubm91bmNlbWVudCcsIGljb246IDxOb3RpZmljYXRpb25GaWxsZWQgY2xhc3NOYW1lPVwicG9zdC10eXBlLWljb24gYW5ub3VuY2VtZW50XCIgLz59XHJcbiAgICBdXHJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IGxhenksIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCB7IEluZm9DaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb0ljb24gPSAocHJvcHMpPT4ge1xyXG4gICAgcmV0dXJuIDxUb29sdGlwIHBsYWNlbWVudD17cHJvcHMucGxhY2VtZW50IHx8IFwicmlnaHRcIn0gXHJcbiAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9PjxJbmZvQ2lyY2xlRmlsbGVkIGNsYXNzTmFtZT1cImluZm8taWNvblwiIC8+PC9Ub29sdGlwPlxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlciA9IChwcm9wcyk9PntcclxuICAgIGNvbnN0IGxvYWRlckNsYXNzTmFtZSA9IHByb3BzLm5vY29udGFpbmVyID8gJyc6IChwcm9wcy5zbWFsbCA/ICdsb2FkZXItY29udGFpbmVyLXNtYWxsJzogXHJcbiAgICAgICAgKHByb3BzLmlubGluZSA/ICdsb2FkZXItY29udGFpbmVyLWlubGluZSc6ICdsb2FkZXItY29udGFpbmVyJykpO1xyXG4gICAgcmV0dXJuIChwcm9wcy5zaG93ID09IG51bGwgfHwgKHByb3BzLnNob3cgIT0gbnVsbCAmJiBwcm9wcy5zaG93KSA/IDxkaXYgY2xhc3NOYW1lPXtsb2FkZXJDbGFzc05hbWV9PlxyXG4gICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3Bpbi8+XHJcbiAgICA8L2Rpdj46IG51bGwpO1xyXG59Il0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsIlJlYWN0IiwibGF6eSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIkFsZXJ0IiwiQXZhdGFyIiwiQmFkZ2UiLCJCdXR0b24iLCJDYXJkIiwiQ2hlY2tib3giLCJDb2wiLCJEaXZpZGVyIiwiRm9ybSIsIklucHV0IiwiTGlzdCIsIk1vZGFsIiwibm90aWZpY2F0aW9uIiwiUGFnaW5hdGlvbiIsIlJvdyIsIlNwYWNlIiwiVGFicyIsInRoZW1lIiwiVG9vbHRpcCIsIkJ1Z0ZpbGxlZCIsIkJ1bGJGaWxsZWQiLCJFeWVPdXRsaW5lZCIsIkZpcmVUd29Ub25lIiwiRmlyZUZpbGxlZCIsIkxvY2tGaWxsZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJOb3RpZmljYXRpb25GaWxsZWQiLCJRdWVzdGlvbkNpcmNsZUZpbGxlZCIsIlRhZ0ZpbGxlZCIsImF4aW9zIiwiQXV0aFVJRnVuY3Rpb25zIiwiY29tbW9uRnVuY3Rpb25zIiwiQ29udGFpbmVyIiwiSW5mb0ljb24iLCJMb2FkZXIiLCJWb3RlV2lkZ2V0IiwiYm9hcmREYXRhIiwicG9zdFR5cGVzIiwicXVlc3Rpb24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJmZWF0dXJlIiwiYnVnIiwiYW5ub3VuY2VtZW50IiwicG9zdENhdGVnb3JpZXMiLCJhaSIsInVpIiwiZGF0YSIsImRhc2hib2FyZCIsImNoYXRib3giLCJzY29wZVRpdGxlcyIsImRlZmF1bHRQYWdlU2l6ZSIsIkJvYXJkIiwicHJvcHMiLCJkaXNwYXRjaCIsIm5hdmlnYXRlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsImJvYXJkTG9hZGluZyIsInNldEJvYXJkTG9hZGluZyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2V0RGF0YSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwidG90YWxQb3N0cyIsInNldFRvdGFsUG9zdHMiLCJub3RpZnkiLCJzdGF0ZSIsIl90aGVtZSR1c2VUb2tlbiIsInVzZVRva2VuIiwiX3RoZW1lJHVzZVRva2VuJHRva2VuIiwidG9rZW4iLCJjb2xvclByaW1hcnkiLCJjb2xvclByaW1hcnlIb3ZlciIsImNvbG9yVGV4dExhYmVsIiwicGFyYW1zIiwibG9hZERhdGEiLCJzY29wZSIsIl9yZWYiLCJfY2FsbGVlIiwicGFnZU51bWJlciIsInJlc3BvbnNlIiwiX3QiLCJfY29udGV4dCIsImdldCIsImNvbmNhdCIsInJlc3VsdCIsImxpc3QiLCJ0b3RhbCIsInNob3ciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJfeCIsIl94MiIsImNoYW5nZVBhZ2UiLCJwYWdlIiwic2NvcGVUaXRsZSIsIm9mZnNldCIsInN0eWxlIiwiY29sb3IiLCJzcGFuIiwiYm9yZGVyZWQiLCJyb3dLZXkiLCJwYWdpbmF0aW9uIiwibG9jYWxlIiwiZW1wdHlUZXh0IiwiaXRlbUxheW91dCIsInNpemUiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsIml0ZW0iLCJJdGVtIiwia2V5IiwiaWQiLCJhY3Rpb25zIiwiZXh0cmEiLCJyYXRpbmciLCJyZWFkb25seSIsImNvbW1lbnRfbnVtYmVyIiwidmlld3MiLCJNZXRhIiwidGl0bGUiLCJ0byIsInNob3J0X2lkIiwic2x1ZyIsInByb2dyZXNzX3N0YXR1cyIsInJlcGxhY2VBbGwiLCJwcm9ncmVzc1N0YXR1cyIsImljb24iLCJkZXNjcmlwdGlvbiIsInRleHRfcHJldmlldyIsInR5cGUiLCJjYXRlZ29yeSIsImNvbnRlbnQiLCJzaG93VG90YWwiLCJyYW5nZSIsImRlZmF1bHRDdXJyZW50IiwiY3VycmVudCIsInNob3dRdWlja0p1bXBlciIsInNob3dTaXplQ2hhbmdlciIsIm9uQ2hhbmdlIiwib25DbGljayIsInJlcGxhY2UiLCJQcm9oaWJpdEljb24iLCJMaWdodGJ1bGJJY29uIiwiQ2hlY2tGYXRJY29uIiwiQ2hlY2tDaXJjbGVJY29uIiwiRXllSWNvbiIsIkhhbW1lckljb24iLCJRdWVzdGlvbkljb24iLCJYQ2lyY2xlSWNvbiIsImxhYmVsIiwicG9zdFR5cGVzQWRtaW4iLCJJbmZvQ2lyY2xlRmlsbGVkIiwicGxhY2VtZW50IiwiTG9hZGluZ091dGxpbmVkIiwibG9hZGVyQ2xhc3NOYW1lIiwibm9jb250YWluZXIiLCJzbWFsbCIsImlubGluZSIsInNwaW4iXSwic291cmNlUm9vdCI6IiJ9