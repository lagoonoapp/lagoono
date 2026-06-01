"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_userSettings_Settings_jsx"],{

/***/ "./src/components/dashboard/userSettings/Settings.jsx"
/*!************************************************************!*\
  !*** ./src/components/dashboard/userSettings/Settings.jsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var _src_utils_AuthUIFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/utils/AuthUIFunctions */ "./src/utils/AuthUIFunctions.jsx");
/* harmony import */ var _src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/components/ui/Loader */ "./src/components/ui/Loader.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var Settings = function Settings(props) {
  var accountData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.accountData || {};
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (accountData) {
      setLoading(false);
    }
  }, [accountData]);
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_4__["default"].useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimaryHover = _theme$useToken$token.colorPrimaryHover,
    colorTextLabel = _theme$useToken$token.colorTextLabel;
  return loading || !accountData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_6__.Loader, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-block scrollable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: colorTextLabel
    }
  }, "Settings"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Your email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, accountData.email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    offset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Application version"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "1.0"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX3VzZXJTZXR0aW5nc19TZXR0aW5nc19qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNKO0FBQ0c7QUFFYjtBQUdnQjtBQUVWO0FBSW5ELElBQU0wQixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsS0FBSyxFQUFJO0VBRXZCLElBQU1DLFdBQVcsR0FBR3hCLHdEQUFXLENBQUMsVUFBQ3lCLEtBQUs7SUFBQSxPQUFLQSxLQUFLLENBQUNELFdBQVcsSUFBSSxDQUFDLENBQUM7RUFBQSxFQUFDO0VBRW5FLElBQUFFLFNBQUEsR0FBOEIzQiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBNEIsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLE9BQU8sR0FBQUYsVUFBQTtJQUFFRyxVQUFVLEdBQUFILFVBQUE7RUFFMUI5QixnREFBUyxDQUFDLFlBQU07SUFDWixJQUFJMkIsV0FBVyxFQUFDO01BQ1pNLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckI7RUFDSixDQUFDLEVBQUUsQ0FBQ04sV0FBVyxDQUFDLENBQUM7RUFDakIsSUFBQU8sZUFBQSxHQUF1RGIsNENBQUssQ0FBQ2MsUUFBUSxDQUFDLENBQUM7SUFBQUMscUJBQUEsR0FBQUYsZUFBQSxDQUFoRUcsS0FBSztJQUFJQyxpQkFBaUIsR0FBQUYscUJBQUEsQ0FBakJFLGlCQUFpQjtJQUFFQyxjQUFjLEdBQUFILHFCQUFBLENBQWRHLGNBQWM7RUFFakQsT0FBUVAsT0FBTyxJQUFJLENBQUNMLFdBQVcsZ0JBQUU1QiwwREFBQSxDQUFDeUIsNkRBQU0sTUFBQyxDQUFDLGdCQUFFekIsMERBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUF1QixnQkFDMUUxQywwREFBQSxDQUFDa0IsNENBQUcscUJBQ0FsQiwwREFBQSxDQUFDWSw0Q0FBRztJQUFDK0IsTUFBTSxFQUFFO0VBQUUsZ0JBQ1gzQywwREFBQTtJQUFJNEMsS0FBSyxFQUFFO01BQUNDLEtBQUssRUFBRUw7SUFBYztFQUFFLEdBQUMsVUFBWSxDQUMvQyxDQUNKLENBQUMsZUFDTnhDLDBEQUFBLENBQUNrQiw0Q0FBRyxxQkFDQWxCLDBEQUFBLENBQUNZLDRDQUFHO0lBQUMrQixNQUFNLEVBQUU7RUFBRSxnQkFDWDNDLDBEQUFBLGFBQUksWUFBYyxDQUFDLGVBQ25CQSwwREFBQSxjQUFNNEIsV0FBVyxDQUFDa0IsS0FBVyxDQUM1QixDQUNKLENBQUMsZUFDTjlDLDBEQUFBLENBQUNrQiw0Q0FBRyxxQkFDQWxCLDBEQUFBLENBQUNZLDRDQUFHO0lBQUMrQixNQUFNLEVBQUU7RUFBRSxnQkFDWDNDLDBEQUFBLGFBQUkscUJBQXVCLENBQUMsZUFDNUJBLDBEQUFBLGNBQUssS0FBUSxDQUNaLENBQ0osQ0FDSixDQUFDO0FBQ2QsQ0FBQztBQUNELGlFQUFlMEIsUUFBUSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDRztBQUMwQjtBQUU3QyxJQUFNRCxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSUUsS0FBSyxFQUFHO0VBQzNCLElBQU1xQixlQUFlLEdBQUdyQixLQUFLLENBQUNzQixXQUFXLEdBQUcsRUFBRSxHQUFHdEIsS0FBSyxDQUFDdUIsS0FBSyxHQUFHLHdCQUF3QixHQUNsRnZCLEtBQUssQ0FBQ3dCLE1BQU0sR0FBRyx5QkFBeUIsR0FBRSxrQkFBb0I7RUFDbkUsT0FBUXhCLEtBQUssQ0FBQ3lCLElBQUksSUFBSSxJQUFJLElBQUt6QixLQUFLLENBQUN5QixJQUFJLElBQUksSUFBSSxJQUFJekIsS0FBSyxDQUFDeUIsSUFBSyxnQkFBR3BELDBEQUFBO0lBQUswQyxTQUFTLEVBQUVNO0VBQWdCLGdCQUMvRmhELDBEQUFBLENBQUMrQyx5REFBZTtJQUFDTSxJQUFJO0VBQUEsQ0FBQyxDQUNyQixDQUFDLEdBQUUsSUFBSTtBQUNoQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyU2V0dGluZ3MvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvTG9hZGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQWxlcnQsIEJhZGdlLCBCdXR0b24sIENoZWNrYm94LCBDb2wsIERpdmlkZXIsIEZvcm0sIElucHV0LCBNb2RhbCwgbm90aWZpY2F0aW9uLCBSb3csIFNlbGVjdCwgU3BhY2UsIFN0YXRpc3RpYywgXHJcbiAgICAgICAgICAgICAgICB0aGVtZSwgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5cclxuXHJcbmltcG9ydCB7IEF1dGhVSUZ1bmN0aW9ucyB9IGZyb20gJ0BzcmMvdXRpbHMvQXV0aFVJRnVuY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9Mb2FkZXInO1xyXG5cclxuXHJcblxyXG5jb25zdCBTZXR0aW5ncyA9IChwcm9wcyk9PiB7XHJcblxyXG4gICAgY29uc3QgYWNjb3VudERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY291bnREYXRhIHx8IHt9KTsgXHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjY291bnREYXRhKXtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FjY291bnREYXRhXSk7XHJcbiAgICBjb25zdCB7dG9rZW46IHsgY29sb3JQcmltYXJ5SG92ZXIsIGNvbG9yVGV4dExhYmVsIH19ID0gdGhlbWUudXNlVG9rZW4oKTtcclxuXHJcbiAgICByZXR1cm4gKGxvYWRpbmcgfHwgIWFjY291bnREYXRhPyA8TG9hZGVyLz46IDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ibG9jayBzY3JvbGxhYmxlXCI+IFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOiBjb2xvclRleHRMYWJlbH19PlNldHRpbmdzPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+WW91ciBlbWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57YWNjb3VudERhdGEuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG9mZnNldD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkFwcGxpY2F0aW9uIHZlcnNpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+MS4wPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlciA9IChwcm9wcyk9PntcclxuICAgIGNvbnN0IGxvYWRlckNsYXNzTmFtZSA9IHByb3BzLm5vY29udGFpbmVyID8gJyc6IChwcm9wcy5zbWFsbCA/ICdsb2FkZXItY29udGFpbmVyLXNtYWxsJzogXHJcbiAgICAgICAgKHByb3BzLmlubGluZSA/ICdsb2FkZXItY29udGFpbmVyLWlubGluZSc6ICdsb2FkZXItY29udGFpbmVyJykpO1xyXG4gICAgcmV0dXJuIChwcm9wcy5zaG93ID09IG51bGwgfHwgKHByb3BzLnNob3cgIT0gbnVsbCAmJiBwcm9wcy5zaG93KSA/IDxkaXYgY2xhc3NOYW1lPXtsb2FkZXJDbGFzc05hbWV9PlxyXG4gICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3Bpbi8+XHJcbiAgICA8L2Rpdj46IG51bGwpO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJBbGVydCIsIkJhZGdlIiwiQnV0dG9uIiwiQ2hlY2tib3giLCJDb2wiLCJEaXZpZGVyIiwiRm9ybSIsIklucHV0IiwiTW9kYWwiLCJub3RpZmljYXRpb24iLCJSb3ciLCJTZWxlY3QiLCJTcGFjZSIsIlN0YXRpc3RpYyIsInRoZW1lIiwiVG9vbHRpcCIsIkF1dGhVSUZ1bmN0aW9ucyIsIkxvYWRlciIsIlNldHRpbmdzIiwicHJvcHMiLCJhY2NvdW50RGF0YSIsInN0YXRlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdGhlbWUkdXNlVG9rZW4iLCJ1c2VUb2tlbiIsIl90aGVtZSR1c2VUb2tlbiR0b2tlbiIsInRva2VuIiwiY29sb3JQcmltYXJ5SG92ZXIiLCJjb2xvclRleHRMYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvZmZzZXQiLCJzdHlsZSIsImNvbG9yIiwiZW1haWwiLCJMb2FkaW5nT3V0bGluZWQiLCJsb2FkZXJDbGFzc05hbWUiLCJub2NvbnRhaW5lciIsInNtYWxsIiwiaW5saW5lIiwic2hvdyIsInNwaW4iXSwic291cmNlUm9vdCI6IiJ9