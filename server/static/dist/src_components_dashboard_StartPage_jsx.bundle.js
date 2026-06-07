"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_StartPage_jsx"],{

/***/ "./src/components/dashboard/StartPage.jsx"
/*!************************************************!*\
  !*** ./src/components/dashboard/StartPage.jsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-QUQL4437.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/components/ui/InfoIcon */ "./src/components/ui/InfoIcon.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");




var Option = antd__WEBPACK_IMPORTED_MODULE_9__["default"].Option;
var confirm = antd__WEBPACK_IMPORTED_MODULE_7__["default"].confirm;





var points = [];
var resourceCards = [{
  title: ''
}];
var otherPoints = [];
var StartPage = function StartPage(props) {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.notify;
  });
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_10__["default"].useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimaryHover = _theme$useToken$token.colorPrimaryHover,
    colorTextLabel = _theme$useToken$token.colorTextLabel;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch({
      type: 'currentMenuItems',
      name: 'currentMenuItems',
      value: ['start']
    });
  }, []);
  var cards = points.map(function (point) {
    var cardTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "d-flex justify-content-between datasource-title",
      to: "/dashboard/project/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "project-item-name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, point.title)), point.icon);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_12__.Container, {
      position: "relative",
      key: point.title,
      className: "project-list-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: cardTitle,
      bordered: true,
      hoverable: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-preview"
    }, point.description)));
  });
  var otherCards = otherPoints.map(function (point) {
    var cardTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "d-flex justify-content-between datasource-title",
      href: point.link,
      target: "blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "project-item-name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, point.title)), point.icon);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_12__.Container, {
      position: "relative",
      key: point.title,
      className: "project-list-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: cardTitle,
      bordered: true,
      hoverable: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-preview"
    }, point.description)));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_12__.Container, {
    p: "md",
    h100: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    offset: 2,
    span: 22
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: colorTextLabel
    }
  }, "Where to start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Item Types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "d-inline-flex",
    type: "info",
    title: "Create your own data types",
    showIcon: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cards-container scrollable"
  }, cards), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/dashboard/settings/types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "primary"
  }, "Go to the type editor"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX1N0YXJ0UGFnZV9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBQ2Q7QUFDVDtBQUN5QztBQUNoRyxJQUFRc0IsTUFBTSxHQUFLSCw0Q0FBTSxDQUFqQkcsTUFBTTtBQUNkLElBQVFDLE9BQU8sR0FBS04sNENBQUssQ0FBakJNLE9BQU87QUFLVztBQUNtQztBQUVKO0FBQ0Y7QUFDTTtBQUs3RCxJQUFNTSxNQUFNLEdBQUcsRUFFZDtBQUVELElBQU1DLGFBQWEsR0FBRyxDQUNsQjtFQUNJQyxLQUFLLEVBQUU7QUFDWCxDQUFDLENBQ0o7QUFFRCxJQUFNQyxXQUFXLEdBQUcsRUFFbkI7QUFFRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsS0FBSyxFQUFJO0VBQ3hCLElBQU1DLFFBQVEsR0FBRzVCLDZEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNNkIsUUFBUSxHQUFHMUIsd0RBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQU0yQixNQUFNLEdBQUc1Qix3REFBVyxDQUFDLFVBQUM2QixLQUFLO0lBQUEsT0FBS0EsS0FBSyxDQUFDRCxNQUFNO0VBQUEsRUFBQztFQUNuRCxJQUFBRSxlQUFBLEdBQXVEbkIsNkNBQUssQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDO0lBQUFDLHFCQUFBLEdBQUFGLGVBQUEsQ0FBaEVHLEtBQUs7SUFBSUMsaUJBQWlCLEdBQUFGLHFCQUFBLENBQWpCRSxpQkFBaUI7SUFBRUMsY0FBYyxHQUFBSCxxQkFBQSxDQUFkRyxjQUFjO0VBRWpEekMsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1ppQyxRQUFRLENBQUM7TUFBRVMsSUFBSSxFQUFFLGtCQUFrQjtNQUFFQyxJQUFJLEVBQUUsa0JBQWtCO01BQUVDLEtBQUssRUFBRSxDQUFDLE9BQU87SUFBQyxDQUFDLENBQUM7RUFDckYsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1DLEtBQUss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QUcsU0FBWEEsUUFBUUEsQ0FBSU8sS0FBSyxFQUFJO0VBQzlCLG9CQUFPbEMsMERBQUEsQ0FBQ3dFLDRDQUFPO0lBQUNFLFNBQVMsRUFBRXhDLEtBQUssQ0FBQ3dDLFNBQVMsSUFBSSxPQUFRO0lBQ2xEQyxPQUFPLEVBQUV6QyxLQUFLLENBQUN5QyxPQUFRO0lBQ3ZCNUMsS0FBSyxFQUFFRyxLQUFLLENBQUNIO0VBQU0sZ0JBQUMvQiwwREFBQSxDQUFDeUUseURBQWdCO0lBQUNwQixTQUFTLEVBQUM7RUFBVyxDQUFFLENBQVUsQ0FBQztBQUNoRixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9TdGFydFBhZ2UuanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvSW5mb0ljb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBsYXp5LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgQ29sLCBDYXJkLCBGb3JtLCBJbnB1dCwgTW9kYWwsIFJvdywgU2VsZWN0LCB0aGVtZSwgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmNvbnN0IHsgY29uZmlybSB9ID0gTW9kYWw7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBdXRoVUlGdW5jdGlvbnMgfSBmcm9tICdAc3JjL3V0aWxzL0F1dGhVSUZ1bmN0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvQ29udGFpbmVyJztcclxuaW1wb3J0IHsgSW5mb0ljb24gfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvSW5mb0ljb24nO1xyXG5pbXBvcnQgeyBjb21tb25GdW5jdGlvbnMgfSBmcm9tICdAc3JjL3V0aWxzL2NvbW1vbkZ1bmN0aW9ucyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBwb2ludHMgPSBbXHJcblxyXG5dO1xyXG5cclxuY29uc3QgcmVzb3VyY2VDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJydcclxuICAgIH1cclxuXTtcclxuXHJcbmNvbnN0IG90aGVyUG9pbnRzID0gW1xyXG5cclxuXTtcclxuXHJcbmNvbnN0IFN0YXJ0UGFnZSA9IChwcm9wcyk9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBub3RpZnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5vdGlmeSk7XHJcbiAgICBjb25zdCB7dG9rZW46IHsgY29sb3JQcmltYXJ5SG92ZXIsIGNvbG9yVGV4dExhYmVsIH19ID0gdGhlbWUudXNlVG9rZW4oKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2N1cnJlbnRNZW51SXRlbXMnLCBuYW1lOiAnY3VycmVudE1lbnVJdGVtcycsIHZhbHVlOiBbJ3N0YXJ0J119KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBjYXJkcyA9IHBvaW50cy5tYXAocG9pbnQ9PntcclxuICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSAoPExpbmsgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGRhdGFzb3VyY2UtdGl0bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9kYXNoYm9hcmQvcHJvamVjdC9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9pbnQudGl0bGV9PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9pbnQuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4pO1xyXG4gICAgICAgIHJldHVybiA8Q29udGFpbmVyIHBvc2l0aW9uPVwicmVsYXRpdmVcIiBrZXk9e3BvaW50LnRpdGxlfSBjbGFzc05hbWU9XCJwcm9qZWN0LWxpc3QtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17Y2FyZFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXt0cnVlfSBob3ZlcmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXByZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvaW50LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb3RoZXJDYXJkcyA9IG90aGVyUG9pbnRzLm1hcChwb2ludD0+e1xyXG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9ICg8YSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gZGF0YXNvdXJjZS10aXRsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3BvaW50Lmxpbmt9IHRhcmdldD1cImJsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWl0ZW0tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BvaW50LnRpdGxlfTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvaW50Lmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+KTtcclxuICAgICAgICByZXR1cm4gPENvbnRhaW5lciBwb3NpdGlvbj1cInJlbGF0aXZlXCIga2V5PXtwb2ludC50aXRsZX0gY2xhc3NOYW1lPVwicHJvamVjdC1saXN0LWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9e2NhcmRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJlZD17dHJ1ZX0gaG92ZXJhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb2ludC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoPENvbnRhaW5lciBwPVwibWRcIiBoMTAwPiBcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezJ9IHNwYW49ezIyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Y29sb3I6IGNvbG9yVGV4dExhYmVsfX0+V2hlcmUgdG8gc3RhcnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+SXRlbSBUeXBlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4XCIgdHlwZT1cImluZm9cIiB0aXRsZT1cIkNyZWF0ZSB5b3VyIG93biBkYXRhIHR5cGVzXCIgc2hvd0ljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzLWNvbnRhaW5lciBzY3JvbGxhYmxlXCI+e2NhcmRzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZGFzaGJvYXJkL3NldHRpbmdzL3R5cGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkdvIHRvIHRoZSB0eXBlIGVkaXRvcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPik7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0UGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgbGF6eSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHsgSW5mb0NpcmNsZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvSWNvbiA9IChwcm9wcyk9PiB7XHJcbiAgICByZXR1cm4gPFRvb2x0aXAgcGxhY2VtZW50PXtwcm9wcy5wbGFjZW1lbnQgfHwgXCJyaWdodFwifSBcclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX0+PEluZm9DaXJjbGVGaWxsZWQgY2xhc3NOYW1lPVwiaW5mby1pY29uXCIgLz48L1Rvb2x0aXA+XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJsYXp5IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJBbGVydCIsIkJ1dHRvbiIsIkNvbCIsIkNhcmQiLCJGb3JtIiwiSW5wdXQiLCJNb2RhbCIsIlJvdyIsIlNlbGVjdCIsInRoZW1lIiwiVXBsb2FkIiwiT3B0aW9uIiwiY29uZmlybSIsImF4aW9zIiwiQXV0aFVJRnVuY3Rpb25zIiwiQ29udGFpbmVyIiwiSW5mb0ljb24iLCJjb21tb25GdW5jdGlvbnMiLCJwb2ludHMiLCJyZXNvdXJjZUNhcmRzIiwidGl0bGUiLCJvdGhlclBvaW50cyIsIlN0YXJ0UGFnZSIsInByb3BzIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsIm5vdGlmeSIsInN0YXRlIiwiX3RoZW1lJHVzZVRva2VuIiwidXNlVG9rZW4iLCJfdGhlbWUkdXNlVG9rZW4kdG9rZW4iLCJ0b2tlbiIsImNvbG9yUHJpbWFyeUhvdmVyIiwiY29sb3JUZXh0TGFiZWwiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiY2FyZHMiLCJtYXAiLCJwb2ludCIsImNhcmRUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0byIsImljb24iLCJwb3NpdGlvbiIsImtleSIsImJvcmRlcmVkIiwiaG92ZXJhYmxlIiwiZGVzY3JpcHRpb24iLCJvdGhlckNhcmRzIiwiaHJlZiIsImxpbmsiLCJ0YXJnZXQiLCJwIiwiaDEwMCIsIm9mZnNldCIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwic2hvd0ljb24iLCJUb29sdGlwIiwiSW5mb0NpcmNsZUZpbGxlZCIsInBsYWNlbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9