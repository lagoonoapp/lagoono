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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _src_components_ui_InfoIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/components/ui/InfoIcon */ "./src/components/ui/InfoIcon.jsx");
/* harmony import */ var _src_utils_commonFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/utils/commonFunctions */ "./src/utils/commonFunctions.js");




var Option = antd__WEBPACK_IMPORTED_MODULE_8__["default"].Option;
var confirm = antd__WEBPACK_IMPORTED_MODULE_6__["default"].confirm;






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
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_9__["default"].useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimaryHover = _theme$useToken$token.colorPrimaryHover,
    colorTextLabel = _theme$useToken$token.colorTextLabel;
  var cards = points.map(function (point) {
    var cardTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "d-flex justify-content-between datasource-title",
      to: "/dashboard/project/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "project-item-name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, point.title)), point.icon);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_11__.Container, {
      position: "relative",
      key: point.title,
      className: "project-list-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_11__.Container, {
      position: "relative",
      key: point.title,
      className: "project-list-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: cardTitle,
      bordered: true,
      hoverable: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-preview"
    }, point.description)));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_11__.Container, {
    p: "md",
    h100: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    offset: 2,
    span: 22
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: colorTextLabel
    }
  }, "Where to start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "New "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "d-inline-flex",
    type: "info",
    message: "Create a project",
    showIcon: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cards-container scrollable"
  }, cards), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "mt-20"
  }, "A new project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "d-inline-flex",
    type: "info",
    message: "Create",
    showIcon: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cards-container scrollable"
  }, otherCards))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX1N0YXJ0UGFnZV9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEU7QUFDZDtBQUNUO0FBQ3lDO0FBQ2hHLElBQVFzQixNQUFNLEdBQUtILDRDQUFNLENBQWpCRyxNQUFNO0FBQ2QsSUFBUUMsT0FBTyxHQUFLTiw0Q0FBSyxDQUFqQk0sT0FBTztBQUkwRztBQUkvRjtBQUNtQztBQUVKO0FBQ0Y7QUFDTTtBQUs3RCxJQUFNa0IsTUFBTSxHQUFHLEVBRWQ7QUFFRCxJQUFNQyxhQUFhLEdBQUcsQ0FDbEI7RUFDSUMsS0FBSyxFQUFFO0FBQ1gsQ0FBQyxDQUNKO0FBRUQsSUFBTUMsV0FBVyxHQUFHLEVBRW5CO0FBRUQsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLEtBQUssRUFBSTtFQUN4QixJQUFNQyxRQUFRLEdBQUd4Qyw2REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTXlDLFFBQVEsR0FBR3RDLHdEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNdUMsTUFBTSxHQUFHeEMsd0RBQVcsQ0FBQyxVQUFDeUMsS0FBSztJQUFBLE9BQUtBLEtBQUssQ0FBQ0QsTUFBTTtFQUFBLEVBQUM7RUFDbkQsSUFBQUUsZUFBQSxHQUF1RC9CLDRDQUFLLENBQUNnQyxRQUFRLENBQUMsQ0FBQztJQUFBQyxxQkFBQSxHQUFBRixlQUFBLENBQWhFRyxLQUFLO0lBQUlDLGlCQUFpQixHQUFBRixxQkFBQSxDQUFqQkUsaUJBQWlCO0lBQUVDLGNBQWMsR0FBQUgscUJBQUEsQ0FBZEcsY0FBYztFQUVqRCxJQUFNQyxLQUFLLEdBQUdoQixNQUFNLENBQUNpQixHQUFHLENBQUMsVUFBQUMsS0FBSyxFQUFFO0lBQzVCLElBQU1DLFNBQVMsZ0JBQUk1RCwwREFBQSxDQUFDTSxrREFBSTtNQUFDd0QsU0FBUyxFQUFDLGlEQUFpRDtNQUM1REMsRUFBRTtJQUF3QixnQkFDMUIvRCwwREFBQTtN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TztJQUFDRSxTQUFTLEVBQUV2QyxLQUFLLENBQUN1QyxTQUFTLElBQUksT0FBUTtJQUNsREMsT0FBTyxFQUFFeEMsS0FBSyxDQUFDd0MsT0FBUTtJQUN2QjNDLEtBQUssRUFBRUcsS0FBSyxDQUFDSDtFQUFNLGdCQUFDM0MsMERBQUEsQ0FBQ29GLHlEQUFnQjtJQUFDdEIsU0FBUyxFQUFDO0VBQVcsQ0FBRSxDQUFVLENBQUM7QUFDaEYsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFnb29uby1hcHAvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvU3RhcnRQYWdlLmpzeCIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL0luZm9JY29uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbGF6eSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIENvbCwgQ2FyZCwgRm9ybSwgSW5wdXQsIE1vZGFsLCBSb3csIFNlbGVjdCwgdGhlbWUsIFVwbG9hZCB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xyXG5cclxuaW1wb3J0IHsgQ2hlY2tDaXJjbGVPdXRsaW5lZCwgRGF0YWJhc2VPdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQsIEVkaXRPdXRsaW5lZCwgRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQsIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQsIEluYm94T3V0bGluZWQsXHJcbiAgICAgICAgICAgIC8qRmlsZVBkZk91dGxpbmVkLCBGaWxlVGV4dE91dGxpbmVkLCBHbG9iYWxPdXRsaW5lZCwqL1xyXG4gICAgSXNzdWVzQ2xvc2VPdXRsaW5lZCwgTG9hZGluZ091dGxpbmVkLCBSYWRhckNoYXJ0T3V0bGluZWQsIFJlbG9hZE91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEF1dGhVSUZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvQXV0aFVJRnVuY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9Db250YWluZXInO1xyXG5pbXBvcnQgeyBJbmZvSWNvbiB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9JbmZvSWNvbic7XHJcbmltcG9ydCB7IGNvbW1vbkZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvY29tbW9uRnVuY3Rpb25zJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHBvaW50cyA9IFtcclxuXHJcbl07XHJcblxyXG5jb25zdCByZXNvdXJjZUNhcmRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnJ1xyXG4gICAgfVxyXG5dO1xyXG5cclxuY29uc3Qgb3RoZXJQb2ludHMgPSBbXHJcblxyXG5dO1xyXG5cclxuY29uc3QgU3RhcnRQYWdlID0gKHByb3BzKT0+IHtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG5vdGlmeSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZ5KTtcclxuICAgIGNvbnN0IHt0b2tlbjogeyBjb2xvclByaW1hcnlIb3ZlciwgY29sb3JUZXh0TGFiZWwgfX0gPSB0aGVtZS51c2VUb2tlbigpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRzID0gcG9pbnRzLm1hcChwb2ludD0+e1xyXG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9ICg8TGluayBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gZGF0YXNvdXJjZS10aXRsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2Rhc2hib2FyZC9wcm9qZWN0L2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pdGVtLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb2ludC50aXRsZX08L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb2ludC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPik7XHJcbiAgICAgICAgcmV0dXJuIDxDb250YWluZXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIGtleT17cG9pbnQudGl0bGV9IGNsYXNzTmFtZT1cInByb2plY3QtbGlzdC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPXtjYXJkVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWQ9e3RydWV9IGhvdmVyYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9pbnQuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvdGhlckNhcmRzID0gb3RoZXJQb2ludHMubWFwKHBvaW50PT57XHJcbiAgICAgICAgY29uc3QgY2FyZFRpdGxlID0gKDxhIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBkYXRhc291cmNlLXRpdGxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cG9pbnQubGlua30gdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9pbnQudGl0bGV9PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9pbnQuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4pO1xyXG4gICAgICAgIHJldHVybiA8Q29udGFpbmVyIHBvc2l0aW9uPVwicmVsYXRpdmVcIiBrZXk9e3BvaW50LnRpdGxlfSBjbGFzc05hbWU9XCJwcm9qZWN0LWxpc3QtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17Y2FyZFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXt0cnVlfSBob3ZlcmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXByZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvaW50LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICg8Q29udGFpbmVyIHA9XCJtZFwiIGgxMDA+IFxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG9mZnNldD17Mn0gc3Bhbj17MjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjogY29sb3JUZXh0TGFiZWx9fT5XaGVyZSB0byBzdGFydDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5OZXcgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXhcIiB0eXBlPVwiaW5mb1wiIG1lc3NhZ2U9XCJDcmVhdGUgYSBwcm9qZWN0XCIgc2hvd0ljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzLWNvbnRhaW5lciBzY3JvbGxhYmxlXCI+e2NhcmRzfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTIwXCI+QSBuZXcgcHJvamVjdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4XCIgdHlwZT1cImluZm9cIiBtZXNzYWdlPVwiQ3JlYXRlXCIgc2hvd0ljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzLWNvbnRhaW5lciBzY3JvbGxhYmxlXCI+e290aGVyQ2FyZHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj4pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdGFydFBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IGxhenksIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCB7IEluZm9DaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb0ljb24gPSAocHJvcHMpPT4ge1xyXG4gICAgcmV0dXJuIDxUb29sdGlwIHBsYWNlbWVudD17cHJvcHMucGxhY2VtZW50IHx8IFwicmlnaHRcIn0gXHJcbiAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9PjxJbmZvQ2lyY2xlRmlsbGVkIGNsYXNzTmFtZT1cImluZm8taWNvblwiIC8+PC9Ub29sdGlwPlxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwibGF6eSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiQWxlcnQiLCJCdXR0b24iLCJDb2wiLCJDYXJkIiwiRm9ybSIsIklucHV0IiwiTW9kYWwiLCJSb3ciLCJTZWxlY3QiLCJ0aGVtZSIsIlVwbG9hZCIsIk9wdGlvbiIsImNvbmZpcm0iLCJDaGVja0NpcmNsZU91dGxpbmVkIiwiRGF0YWJhc2VPdXRsaW5lZCIsIkRlbGV0ZU91dGxpbmVkIiwiRWRpdE91dGxpbmVkIiwiRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQiLCJFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkIiwiSW5ib3hPdXRsaW5lZCIsIklzc3Vlc0Nsb3NlT3V0bGluZWQiLCJMb2FkaW5nT3V0bGluZWQiLCJSYWRhckNoYXJ0T3V0bGluZWQiLCJSZWxvYWRPdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsImF4aW9zIiwiQXV0aFVJRnVuY3Rpb25zIiwiQ29udGFpbmVyIiwiSW5mb0ljb24iLCJjb21tb25GdW5jdGlvbnMiLCJwb2ludHMiLCJyZXNvdXJjZUNhcmRzIiwidGl0bGUiLCJvdGhlclBvaW50cyIsIlN0YXJ0UGFnZSIsInByb3BzIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsIm5vdGlmeSIsInN0YXRlIiwiX3RoZW1lJHVzZVRva2VuIiwidXNlVG9rZW4iLCJfdGhlbWUkdXNlVG9rZW4kdG9rZW4iLCJ0b2tlbiIsImNvbG9yUHJpbWFyeUhvdmVyIiwiY29sb3JUZXh0TGFiZWwiLCJjYXJkcyIsIm1hcCIsInBvaW50IiwiY2FyZFRpdGxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwiaWNvbiIsInBvc2l0aW9uIiwia2V5IiwiYm9yZGVyZWQiLCJob3ZlcmFibGUiLCJkZXNjcmlwdGlvbiIsIm90aGVyQ2FyZHMiLCJocmVmIiwibGluayIsInRhcmdldCIsInAiLCJoMTAwIiwib2Zmc2V0Iiwic3BhbiIsInN0eWxlIiwiY29sb3IiLCJ0eXBlIiwibWVzc2FnZSIsInNob3dJY29uIiwiVG9vbHRpcCIsIkluZm9DaXJjbGVGaWxsZWQiLCJwbGFjZW1lbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==