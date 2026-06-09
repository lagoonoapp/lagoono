"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_types_TypeList_jsx"],{

/***/ "./src/components/dashboard/types/ControlPalette.jsx"
/*!***********************************************************!*\
  !*** ./src/components/dashboard/types/ControlPalette.jsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlPalette: () => (/* binding */ ControlPalette),
/* harmony export */   controls: () => (/* binding */ controls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/CursorText.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/NumberSquareEight.es.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }





var controls = [{
  type: 'text',
  label: 'Text Input',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__.CursorTextIcon, null)
}, {
  type: 'number',
  label: 'Number Input',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__.NumberSquareEightIcon, null)
}
//{ type: 'select', label: 'Select Dropdown', icon: <InfoCircleFilled /> },
//{ type: 'checkbox', label: 'Checkbox', icon: <InfoCircleFilled /> },
];
var DraggableControl = function DraggableControl(_ref) {
  var control = _ref.control;
  /*const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
      id: `palette-control-${control.type}`,
      data: {
          source: 'control-palette',
          control,
      },
  });*/

  var draggableData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      source: 'control-palette',
      control: {
        type: control.type,
        label: control.label
        // do not pass icon into dnd-kit data
      }
    };
  }, [control.type, control.label]);
  var _useDraggable = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useDraggable)({
      id: "palette-control-".concat(control.type),
      data: draggableData
    }),
    attributes = _useDraggable.attributes,
    listeners = _useDraggable.listeners,
    setNodeRef = _useDraggable.setNodeRef,
    transform = _useDraggable.transform,
    isDragging = _useDraggable.isDragging;
  var style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__.CSS.Translate.toString(transform),
    opacity: isDragging ? 0.6 : 1,
    cursor: 'grab'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: control.label,
    placement: "left",
    key: control.type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    ref: setNodeRef,
    style: style,
    className: "control-item"
  }, listeners, attributes), control.icon));
};
var ControlPalette = function ControlPalette() {
  var controlMap = controls.map(function (control) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DraggableControl, {
      control: control,
      key: control.type
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "control-palette"
  }, controlMap);
};

/***/ },

/***/ "./src/components/dashboard/types/TypeList.jsx"
/*!*****************************************************!*\
  !*** ./src/components/dashboard/types/TypeList.jsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/splitter/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tabs/index.js");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/Article.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/Textbox.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/Warning.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/components/ui/Loader */ "./src/components/ui/Loader.jsx");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _ControlPalette__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ControlPalette */ "./src/components/dashboard/types/ControlPalette.jsx");
/* harmony import */ var _src_components_ui_FieldsSortableList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @src/components/ui/FieldsSortableList */ "./src/components/ui/FieldsSortableList.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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











var renderFieldItem = function renderFieldItem(field) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field-item",
    key: field.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "name"
  }, field.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "type"
  }, field.type));
};
var TypeList = function TypeList(_ref) {
  var _activeDragItem$data$;
  var fields = _ref.fields;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    types = _useState2[0],
    setTypes = _useState2[1];
  var notify = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notify;
  });
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedType = _useState4[0],
    setSelectedType = _useState4[1];
  var dropZonePrefix = 'type-field-list';
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    newTypeAdding = _useState6[0],
    setNewTypeAdding = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    listLoading = _useState8[0],
    setListLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    itemLoading = _useState0[0],
    setItemLoading = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    itemSaving = _useState10[0],
    setItemSaving = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    activeDragItem = _useState12[0],
    setActiveDragItem = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    overItemId = _useState14[0],
    setOverItemId = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(fields || [{
      id: 'field_1',
      name: 'Field 1',
      type: 'text'
    }, {
      id: 'field_2',
      name: 'Field 2',
      type: 'number'
    }]),
    _useState16 = _slicedToArray(_useState15, 2),
    fieldList = _useState16[0],
    setFieldList = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadItemTypeList();
  }, []);
  var clickItemType = function clickItemType(typeInstance) {
    loadItem(typeInstance.id);
  };
  var loadItem = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(itemId) {
      var response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setItemLoading(true);
            _context.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("/api/app/item/instance/item_type/".concat(itemId));
          case 1:
            response = _context.v;
            setItemLoading(false);
            if (response.data.result) {
              setSelectedType(response.data.item);
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'errorGeneralSettingsData', 10);
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.log(_t);
            notify.show('error', 'Some error occured during this request... please try again.', 'errorGeneralSettingsData', 10);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function loadItem(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var upsertItemType = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(itemTypeInstance) {
      var response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            if (itemTypeInstance.id) {
              setItemSaving(true);
            } else {
              setNewTypeAdding(true);
            }
            _context2.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_15__["default"].post('/api/app/item/list/item_type', itemTypeInstance);
          case 1:
            response = _context2.v;
            if (itemTypeInstance.id) {
              setItemSaving(false);
            } else {
              setNewTypeAdding(false);
            }
            if (response.data.result) {
              if (!itemTypeInstance.id) {
                itemTypeInstance.id = response.data.item.id;
                setSelectedType(itemTypeInstance);
                setTypes([].concat(_toConsumableArray(types), [itemTypeInstance]));
              }
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'errorGeneralSettingsData', 10);
            }
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            console.log(_t2);
            notify.show('error', 'Some error occured during this request... please try again.', 'errorGeneralSettingsData', 10);
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function upsertItemType(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadItemTypeList = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var response, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            setListLoading(true);
            _context3.n = 1;
            return axios__WEBPACK_IMPORTED_MODULE_15__["default"].get('/api/app/item/list/item_type');
          case 1:
            response = _context3.v;
            setListLoading(false);
            if (response.data.result) {
              setTypes(response.data.items);
            } else {
              notify.show('error', response.data.error || 'Some error occured during this request... please try again.', 'errorGeneralSettingsData', 10);
            }
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            console.log(_t3);
            notify.show('error', 'Some error occured during this request... please try again.', 'errorGeneralSettingsData', 10);
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function loadItemTypeList() {
      return _ref4.apply(this, arguments);
    };
  }();
  var addNewType = function addNewType() {
    var newType = {
      singular_name: "New Type ".concat(types.length + 1),
      plural_name: '',
      description: '',
      fields: []
    };
    upsertItemType(newType);
  };
  var deleteType = function deleteType(typeId) {
    setTypes(types.filter(function (type) {
      return type.id !== typeId;
    }));
    if (selectedType && selectedType.id === typeId) {
      setSelectedType(null);
    }
  };
  var saveChanges = function saveChanges(typeInstance) {
    //setTypes(types.map(type => type.id === typeInstance.id ? { ...type, ...typeInstance } : type));
    upsertItemType(typeInstance);
  };
  var handleTypePropertiesChange = function handleTypePropertiesChange(changedValues) {
    if (!selectedType) {
      return;
    }
    var updatedType = _objectSpread(_objectSpread({}, selectedType), changedValues);
    setSelectedType(updatedType);
    setTypes(function (prevTypes) {
      return prevTypes.map(function (type) {
        return type.id === updatedType.id ? _objectSpread(_objectSpread({}, type), changedValues) : type;
      });
    });
  };
  var handleDragStart = function handleDragStart(_ref5) {
    var active = _ref5.active;
    setActiveDragItem(active);
  };
  var handleDragOver = function handleDragOver(_ref6) {
    var over = _ref6.over;
    setOverItemId(over ? over.id : null);
  };
  var sensors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.useSensors)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.PointerSensor, {
    activationConstraint: {
      distance: 8
    }
  }), (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.KeyboardSensor, {
    coordinateGetter: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_11__.sortableKeyboardCoordinates
  }));
  var handleDragEnd = function handleDragEnd(_ref7) {
    var _active$data$current;
    var active = _ref7.active,
      over = _ref7.over;
    setActiveDragItem(null);
    setOverItemId(null);
    if (!over) return;

    // Case 1: Dropping a new control from the palette into the list
    if (((_active$data$current = active.data.current) === null || _active$data$current === void 0 ? void 0 : _active$data$current.source) === 'control-palette') {
      var controlType = active.data.current.control.type;
      var controlLabel = active.data.current.control.label;
      var newItem = {
        id: "field-".concat(Date.now()),
        // Ensure unique string ID
        type: controlType,
        title: controlLabel
      };
      if (over.id === 'sortable-list-bottom-zone' || over.id === 'sortable-list-container') {
        setFieldList([].concat(_toConsumableArray(fieldList), [newItem]));
        return;
      }

      // If over a specific sortable item, insert it at that index
      var overIndex = fieldList.findIndex(function (item) {
        return item.id === over.id;
      });
      if (overIndex !== -1) {
        var newList = _toConsumableArray(fieldList);
        newList.splice(overIndex, 0, newItem);
        setFieldList(newList);
      } else {
        // Appends to end if dropped on container but not on an item
        setFieldList([].concat(_toConsumableArray(fieldList), [newItem]));
      }
      return;
    }

    // Case 2: Internal list reordering
    if (active.id !== over.id) {
      var oldIndex = fieldList.findIndex(function (item) {
        return item.id === active.id;
      });
      var newIndex = fieldList.findIndex(function (item) {
        return item.id === over.id;
      });
      setFieldList((0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_11__.arrayMove)(fieldList, oldIndex, newIndex));
    }
  };
  var typeTabs = [{
    key: 'info',
    label: 'Type info',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_12__.ArticleIcon, {
      size: 24
    }),
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      layout: "vertical",
      key: selectedType === null || selectedType === void 0 ? void 0 : selectedType.id,
      initialValues: selectedType,
      onValuesChange: handleTypePropertiesChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutter: 16
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
      span: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
      label: "Singular Name",
      name: "singular_name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
      span: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
      label: "Plural Name",
      name: "plural_name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
      label: "Description",
      name: "description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"].TextArea, {
      rows: 3
    })))
  }, {
    key: 'fields',
    label: 'Fields',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_13__.TextboxIcon, null),
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex flex-direction-row flex-stretch gap-10 h-100"
    }, selectedType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.DndContext, {
      sensors: sensors,
      onDragStart: handleDragStart,
      onDragOver: handleDragOver,
      onDragEnd: handleDragEnd
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex-stretch h-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_FieldsSortableList__WEBPACK_IMPORTED_MODULE_19__.FieldsSortableList, {
      listItems: fieldList,
      renderItem: renderFieldItem,
      layout: "vertical",
      updateItemList: setFieldList,
      overItemId: overItemId,
      isActivePaletteItem: (activeDragItem === null || activeDragItem === void 0 || (_activeDragItem$data$ = activeDragItem.data.current) === null || _activeDragItem$data$ === void 0 ? void 0 : _activeDragItem$data$.source) === 'control-palette'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ControlPalette__WEBPACK_IMPORTED_MODULE_18__.ControlPalette, null)) : null)
  }, {
    key: 'dangerous',
    label: 'Dangerous',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_14__.WarningIcon, null),
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Dangerous actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "primary",
      danger: true,
      onClick: deleteType
    }, "Delete Type"))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_17__.Container, {
    p: "md",
    h100: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    offset: 2,
    span: 20
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"].Panel, {
    className: "p-20",
    defaultSize: "50%",
    min: "20%",
    max: "70%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Data Types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "primary",
    onClick: addNewType,
    loading: newTypeAdding
  }, "Add Type")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-20"
  }, listLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_16__.Loader, null) : types.length == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "info",
    showIcon: true,
    title: "No types created yet. Click the button above to create your first type."
  }) : types.map(function (type) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: type.id,
      className: "type-item ".concat(selectedType && selectedType.id === type.id ? 'selected' : ''),
      onClick: function onClick() {
        return clickItemType(type);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "name"
    }, type.singular_name));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"].Panel, {
    className: "p-20"
  }, itemLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Loader__WEBPACK_IMPORTED_MODULE_16__.Loader, null) : selectedType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-direction-column h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "m-0"
  }, selectedType.singular_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "primary",
    loading: itemSaving,
    onClick: function onClick() {
      return saveChanges(selectedType);
    }
  }, "Save type")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "flex-stretch",
    items: typeTabs
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Select a type to view or edit its details.",
    type: "info",
    showIcon: true
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeList);

/***/ },

/***/ "./src/components/ui/FieldsSortableList.jsx"
/*!**************************************************!*\
  !*** ./src/components/ui/FieldsSortableList.jsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsSortableList: () => (/* binding */ FieldsSortableList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/DotsSixVertical.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/X.es.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






var SortableItem = function SortableItem(props) {
  var _useSortable = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.useSortable)({
      id: props.id
    }),
    attributes = _useSortable.attributes,
    listeners = _useSortable.listeners,
    setNodeRef = _useSortable.setNodeRef,
    transform = _useSortable.transform,
    transition = _useSortable.transition;
  var style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_6__.CSS.Translate.toString(transform),
    transition: transition,
    width: '100%',
    boxSizing: 'border-box'
  };
  var removeItem = function removeItem(e) {
    e.stopPropagation();
    e.preventDefault();
    if (props.onRemove) {
      props.onRemove(props.id, props.item);
    }
  };
  var renderedItem = props.renderItem ? props.renderItem(props.item) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.text);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: setNodeRef,
    style: style,
    className: "sortable-item d-flex justify-content-between align-items-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex align-items-center gap-5 flex-grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: "drag-handle d-flex align-items-center cursor-grab",
    title: "Drag to reorder"
  }, attributes, listeners), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.DotsSixVerticalIcon, {
    weight: "bold"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-grow"
  }, renderedItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex gap-5 justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-button",
    title: "Remove",
    onClick: removeItem,
    onPointerDown: function onPointerDown(e) {
      return e.stopPropagation();
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__.XIcon, {
      weight: "bold"
    })
  })));
};
var FieldsSortableList = function FieldsSortableList(_ref) {
  var listItems = _ref.listItems,
    selectItemHandle = _ref.selectItemHandle,
    data = _ref.data,
    updateItemList = _ref.updateItemList,
    currentId = _ref.currentId,
    renderItem = _ref.renderItem,
    removeItemHandle = _ref.removeItemHandle,
    layout = _ref.layout,
    overItemId = _ref.overItemId,
    isActivePaletteItem = _ref.isActivePaletteItem,
    _ref$containerClassNa = _ref.containerClassName,
    containerClassName = _ref$containerClassNa === void 0 ? 'cards-container sortable' : _ref$containerClassNa;
  var items = listItems || [];
  var _useDroppable = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.useDroppable)({
      id: items.length > 0 ? 'sortable-list-bottom-zone' : 'sortable-list-container'
    }),
    setNodeRef = _useDroppable.setNodeRef;
  var getItemText = function getItemText(item) {
    var _item$settings;
    if (item == null) {
      return '';
    }
    if (typeof item === 'string' || typeof item === 'number') {
      return String(item);
    }
    return ((_item$settings = item.settings) === null || _item$settings === void 0 ? void 0 : _item$settings.title) || item.title || item.name || item.label || item.text || String(item.id || '');
  };
  var removeItem = function removeItem(itemId, item) {
    if (removeItemHandle) {
      removeItemHandle(itemId, item, items);
      return;
    }
    var newItems = items.filter(function (it) {
      return it.id !== itemId;
    });
    if (updateItemList) {
      updateItemList(newItems);
    }
  };
  if (layout == 'vertical') {
    containerClassName += ' vertical';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: setNodeRef,
    className: containerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.SortableContext, {
    items: items,
    strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.rectSortingStrategy
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: item.id
    }, isActivePaletteItem && overItemId === item.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "drag-placeholder-line",
      style: {
        height: '2px',
        backgroundColor: '#1890ff',
        margin: '8px 0'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortableItem, {
      id: item.id,
      item: item,
      renderItem: renderItem,
      text: getItemText(item),
      data: data,
      selectItemHandle: selectItemHandle,
      onRemove: removeItem,
      currentId: currentId
    }));
  }), isActivePaletteItem && (overItemId === 'sortable-list-bottom-zone' || overItemId === 'sortable-list-container') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "drag-placeholder-line",
    style: {
      height: '2px',
      backgroundColor: '#1890ff',
      margin: '8px 0'
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX3R5cGVzX1R5cGVMaXN0X2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNOO0FBQ2M7QUFDSjtBQUVxQztBQUV2RSxJQUFNTyxRQUFRLEdBQUcsQ0FDcEI7RUFBRUMsSUFBSSxFQUFFLE1BQU07RUFBRUMsS0FBSyxFQUFFLFlBQVk7RUFBRUMsSUFBSSxlQUFFViwwREFBQSxDQUFDSyxpRUFBYyxNQUFFO0FBQUUsQ0FBQyxFQUMvRDtFQUFFRyxJQUFJLEVBQUUsUUFBUTtFQUFFQyxLQUFLLEVBQUUsY0FBYztFQUFFQyxJQUFJLGVBQUVWLDBEQUFBLENBQUNNLHdFQUFxQixNQUFFO0FBQUU7QUFDekU7QUFDQTtBQUFBLENBQ0g7QUFFRCxJQUFNTSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBQyxJQUFBLEVBQW9CO0VBQUEsSUFBZEMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87RUFDL0I7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUksSUFBTUMsYUFBYSxHQUFHZCw4Q0FBTyxDQUFDO0lBQUEsT0FBTztNQUNqQ2UsTUFBTSxFQUFFLGlCQUFpQjtNQUN6QkYsT0FBTyxFQUFFO1FBQ0xOLElBQUksRUFBRU0sT0FBTyxDQUFDTixJQUFJO1FBQ2xCQyxLQUFLLEVBQUVLLE9BQU8sQ0FBQ0w7UUFDZjtNQUNKO0lBQ0osQ0FBQztFQUFBLENBQUMsRUFBRSxDQUFDSyxPQUFPLENBQUNOLElBQUksRUFBRU0sT0FBTyxDQUFDTCxLQUFLLENBQUMsQ0FBQztFQUVsQyxJQUFBUSxhQUFBLEdBQXFFZCwyREFBWSxDQUFDO01BQzlFZSxFQUFFLHFCQUFBQyxNQUFBLENBQXFCTCxPQUFPLENBQUNOLElBQUksQ0FBRTtNQUNyQ1ksSUFBSSxFQUFFTDtJQUNWLENBQUMsQ0FBQztJQUhNTSxVQUFVLEdBQUFKLGFBQUEsQ0FBVkksVUFBVTtJQUFFQyxTQUFT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Ozs7Ozs7QUN2SHlCO0FBQzBCO0FBRTdDLElBQU10TCxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSXlKLEtBQUssRUFBRztFQUMzQixJQUFNK0IsZUFBZSxHQUFHL0IsS0FBSyxDQUFDZ0MsV0FBVyxHQUFHLEVBQUUsR0FBR2hDLEtBQUssQ0FBQ2lDLEtBQUssR0FBRyx3QkFBd0IsR0FDbEZqQyxLQUFLLENBQUNrQyxNQUFNLEdBQUcseUJBQXlCLEdBQUUsa0JBQW9CO0VBQ25FLE9BQVFsQyxLQUFLLENBQUM3RixJQUFJLElBQUksSUFBSSxJQUFLNkYsS0FBSyxDQUFDN0YsSUFBSSxJQUFJLElBQUksSUFBSTZGLEtBQUssQ0FBQzdGLElBQUssZ0JBQUdqTSwwREFBQTtJQUFLb0MsU0FBUyxFQUFFeVI7RUFBZ0IsZ0JBQy9GN1QsMERBQUEsQ0FBQzRULHlEQUFlO0lBQUNLLElBQUk7RUFBQSxDQUFDLENBQ3JCLENBQUMsR0FBRSxJQUFJO0FBQ2hCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL3R5cGVzL0NvbnRyb2xQYWxldHRlLmpzeCIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC90eXBlcy9UeXBlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vbGFnb29uby1hcHAvLi9zcmMvY29tcG9uZW50cy91aS9GaWVsZHNTb3J0YWJsZUxpc3QuanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvTG9hZGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRHJhZ2dhYmxlIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XHJcbmltcG9ydCB7IENTUyB9IGZyb20gJ0BkbmQta2l0L3V0aWxpdGllcyc7XHJcblxyXG5pbXBvcnQgeyBDdXJzb3JUZXh0SWNvbiwgTnVtYmVyU3F1YXJlRWlnaHRJY29uIH0gZnJvbSAnQHBob3NwaG9yLWljb25zL3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBjb250cm9scyA9IFtcclxuICAgIHsgdHlwZTogJ3RleHQnLCBsYWJlbDogJ1RleHQgSW5wdXQnLCBpY29uOiA8Q3Vyc29yVGV4dEljb24gLz4gfSxcclxuICAgIHsgdHlwZTogJ251bWJlcicsIGxhYmVsOiAnTnVtYmVyIElucHV0JywgaWNvbjogPE51bWJlclNxdWFyZUVpZ2h0SWNvbiAvPiB9LFxyXG4gICAgLy97IHR5cGU6ICdzZWxlY3QnLCBsYWJlbDogJ1NlbGVjdCBEcm9wZG93bicsIGljb246IDxJbmZvQ2lyY2xlRmlsbGVkIC8+IH0sXHJcbiAgICAvL3sgdHlwZTogJ2NoZWNrYm94JywgbGFiZWw6ICdDaGVja2JveCcsIGljb246IDxJbmZvQ2lyY2xlRmlsbGVkIC8+IH0sXHJcbl07XHJcblxyXG5jb25zdCBEcmFnZ2FibGVDb250cm9sID0gKHsgY29udHJvbCB9KSA9PiB7XHJcbiAgICAvKmNvbnN0IHsgYXR0cmlidXRlcywgbGlzdGVuZXJzLCBzZXROb2RlUmVmLCB0cmFuc2Zvcm0sIGlzRHJhZ2dpbmcgfSA9IHVzZURyYWdnYWJsZSh7XHJcbiAgICAgICAgaWQ6IGBwYWxldHRlLWNvbnRyb2wtJHtjb250cm9sLnR5cGV9YCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogJ2NvbnRyb2wtcGFsZXR0ZScsXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgfSxcclxuICAgIH0pOyovXHJcblxyXG4gICAgY29uc3QgZHJhZ2dhYmxlRGF0YSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICBzb3VyY2U6ICdjb250cm9sLXBhbGV0dGUnLFxyXG4gICAgICAgIGNvbnRyb2w6IHtcclxuICAgICAgICAgICAgdHlwZTogY29udHJvbC50eXBlLFxyXG4gICAgICAgICAgICBsYWJlbDogY29udHJvbC5sYWJlbCxcclxuICAgICAgICAgICAgLy8gZG8gbm90IHBhc3MgaWNvbiBpbnRvIGRuZC1raXQgZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICB9KSwgW2NvbnRyb2wudHlwZSwgY29udHJvbC5sYWJlbF0pO1xyXG5cclxuICAgIGNvbnN0IHsgYXR0cmlidXRlcywgbGlzdGVuZXJzLCBzZXROb2RlUmVmLCB0cmFuc2Zvcm0sIGlzRHJhZ2dpbmcgfSA9IHVzZURyYWdnYWJsZSh7XHJcbiAgICAgICAgaWQ6IGBwYWxldHRlLWNvbnRyb2wtJHtjb250cm9sLnR5cGV9YCxcclxuICAgICAgICBkYXRhOiBkcmFnZ2FibGVEYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBDU1MuVHJhbnNsYXRlLnRvU3RyaW5nKHRyYW5zZm9ybSksXHJcbiAgICAgICAgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAuNiA6IDEsXHJcbiAgICAgICAgY3Vyc29yOiAnZ3JhYicsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2NvbnRyb2wubGFiZWx9IHBsYWNlbWVudD1cImxlZnRcIiBrZXk9e2NvbnRyb2wudHlwZX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJlZj17c2V0Tm9kZVJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICB7Li4ubGlzdGVuZXJzfVxyXG4gICAgICAgICAgICAgICAgey4uLmF0dHJpYnV0ZXN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb250cm9sLmljb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ29udHJvbFBhbGV0dGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250cm9sTWFwID0gY29udHJvbHMubWFwKChjb250cm9sKSA9PiAoXHJcbiAgICAgICAgPERyYWdnYWJsZUNvbnRyb2wgY29udHJvbD17Y29udHJvbH0ga2V5PXtjb250cm9sLnR5cGV9IC8+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbC1wYWxldHRlXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29udHJvbE1hcH1cclxuICAgICAgICAgICAgPC9kaXY+KTtcclxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgQ29sLCBGb3JtLCBJbnB1dCwgUm93LCBTcGxpdHRlciwgVGFicyB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHtcclxuICBEbmRDb250ZXh0LFxyXG4gIFBvaW50ZXJTZW5zb3IsXHJcbiAgS2V5Ym9hcmRTZW5zb3IsXHJcbiAgdXNlU2Vuc29yLFxyXG4gIHVzZVNlbnNvcnMsXHJcbn0gZnJvbSAnQGRuZC1raXQvY29yZSc7XHJcbmltcG9ydCB7IHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcywgYXJyYXlNb3ZlIH0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnO1xyXG5cclxuaW1wb3J0IHsgQXJ0aWNsZUljb24sIFRleHRib3hJY29uLCBXYXJuaW5nSWNvbiB9IGZyb20gJ0BwaG9zcGhvci1pY29ucy9yZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvTG9hZGVyJztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IGNvbnRyb2xzLCBDb250cm9sUGFsZXR0ZSB9IGZyb20gJy4vQ29udHJvbFBhbGV0dGUnO1xyXG5pbXBvcnQgeyBGaWVsZHNTb3J0YWJsZUxpc3QgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvRmllbGRzU29ydGFibGVMaXN0JztcclxuXHJcblxyXG5jb25zdCByZW5kZXJGaWVsZEl0ZW0gPSAoZmllbGQpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtaXRlbVwiIGtleT17ZmllbGQubmFtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2ZpZWxkLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlXCI+e2ZpZWxkLnR5cGV9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IFR5cGVMaXN0ID0gKHtmaWVsZHN9KT0+IHtcclxuICAgIGNvbnN0IFt0eXBlcywgc2V0VHlwZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgbm90aWZ5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZnkpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgZHJvcFpvbmVQcmVmaXggPSAndHlwZS1maWVsZC1saXN0JztcclxuICAgIGNvbnN0IFtuZXdUeXBlQWRkaW5nLCBzZXROZXdUeXBlQWRkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsaXN0TG9hZGluZywgc2V0TGlzdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2l0ZW1Mb2FkaW5nLCBzZXRJdGVtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXRlbVNhdmluZywgc2V0SXRlbVNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZURyYWdJdGVtLCBzZXRBY3RpdmVEcmFnSXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtvdmVySXRlbUlkLCBzZXRPdmVySXRlbUlkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSB1c2VTdGF0ZShmaWVsZHMgfHwgW1xyXG4gICAgICAgIHsgaWQ6ICdmaWVsZF8xJywgbmFtZTogJ0ZpZWxkIDEnLCB0eXBlOiAndGV4dCcgfSxcclxuICAgICAgICB7IGlkOiAnZmllbGRfMicsIG5hbWU6ICdGaWVsZCAyJywgdHlwZTogJ251bWJlcicgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9hZEl0ZW1UeXBlTGlzdCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGNsaWNrSXRlbVR5cGUgPSAodHlwZUluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgbG9hZEl0ZW0odHlwZUluc3RhbmNlLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbSA9IGFzeW5jKGl0ZW1JZCk9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0SXRlbUxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hcHAvaXRlbS9pbnN0YW5jZS9pdGVtX3R5cGUvJHtpdGVtSWR9YCk7XHJcbiAgICAgICAgICAgIHNldEl0ZW1Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVHlwZShyZXNwb25zZS5kYXRhLml0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAnZXJyb3JHZW5lcmFsU2V0dGluZ3NEYXRhJywgMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAnZXJyb3JHZW5lcmFsU2V0dGluZ3NEYXRhJywgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBzZXJ0SXRlbVR5cGUgPSBhc3luYyhpdGVtVHlwZUluc3RhbmNlKT0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbVR5cGVJbnN0YW5jZS5pZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtU2F2aW5nKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV3VHlwZUFkZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2FwcC9pdGVtL2xpc3QvaXRlbV90eXBlJywgaXRlbVR5cGVJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtVHlwZUluc3RhbmNlLmlkKXtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1TYXZpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV3VHlwZUFkZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbVR5cGVJbnN0YW5jZS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVR5cGVJbnN0YW5jZS5pZCA9IHJlc3BvbnNlLmRhdGEuaXRlbS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFR5cGUoaXRlbVR5cGVJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VHlwZXMoWy4uLnR5cGVzLCBpdGVtVHlwZUluc3RhbmNlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmVycm9yIHx8ICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdlcnJvckdlbmVyYWxTZXR0aW5nc0RhdGEnLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoaXMgcmVxdWVzdC4uLiBwbGVhc2UgdHJ5IGFnYWluLicsIFxyXG4gICAgICAgICAgICAgICAgICAgICdlcnJvckdlbmVyYWxTZXR0aW5nc0RhdGEnLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbVR5cGVMaXN0ID0gYXN5bmMoKT0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRMaXN0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FwcC9pdGVtL2xpc3QvaXRlbV90eXBlJyk7XHJcbiAgICAgICAgICAgIHNldExpc3RMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIHNldFR5cGVzKHJlc3BvbnNlLmRhdGEuaXRlbXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAnZXJyb3JHZW5lcmFsU2V0dGluZ3NEYXRhJywgMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAnZXJyb3JHZW5lcmFsU2V0dGluZ3NEYXRhJywgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkTmV3VHlwZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdUeXBlID0ge1xyXG4gICAgICAgICAgICBzaW5ndWxhcl9uYW1lOiBgTmV3IFR5cGUgJHt0eXBlcy5sZW5ndGggKyAxfWAsXHJcbiAgICAgICAgICAgIHBsdXJhbF9uYW1lOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICBmaWVsZHM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cHNlcnRJdGVtVHlwZShuZXdUeXBlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBkZWxldGVUeXBlID0gKHR5cGVJZCkgPT4ge1xyXG4gICAgICAgIHNldFR5cGVzKHR5cGVzLmZpbHRlcih0eXBlID0+IHR5cGUuaWQgIT09IHR5cGVJZCkpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFR5cGUgJiYgc2VsZWN0ZWRUeXBlLmlkID09PSB0eXBlSWQpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUeXBlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzYXZlQ2hhbmdlcyA9ICh0eXBlSW5zdGFuY2UpID0+IHtcclxuICAgICAgICAvL3NldFR5cGVzKHR5cGVzLm1hcCh0eXBlID0+IHR5cGUuaWQgPT09IHR5cGVJbnN0YW5jZS5pZCA/IHsgLi4udHlwZSwgLi4udHlwZUluc3RhbmNlIH0gOiB0eXBlKSk7XHJcbiAgICAgICAgdXBzZXJ0SXRlbVR5cGUodHlwZUluc3RhbmNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVHlwZVByb3BlcnRpZXNDaGFuZ2UgPSAoY2hhbmdlZFZhbHVlcykgPT4ge1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUeXBlID0geyAuLi5zZWxlY3RlZFR5cGUsIC4uLmNoYW5nZWRWYWx1ZXMgfTtcclxuICAgICAgICBzZXRTZWxlY3RlZFR5cGUodXBkYXRlZFR5cGUpO1xyXG4gICAgICAgIHNldFR5cGVzKChwcmV2VHlwZXMpID0+IHByZXZUeXBlcy5tYXAoKHR5cGUpID0+IChcclxuICAgICAgICAgICAgdHlwZS5pZCA9PT0gdXBkYXRlZFR5cGUuaWQgPyB7IC4uLnR5cGUsIC4uLmNoYW5nZWRWYWx1ZXMgfSA6IHR5cGVcclxuICAgICAgICApKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9ICh7IGFjdGl2ZSB9KSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlRHJhZ0l0ZW0oYWN0aXZlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoeyBvdmVyIH0pID0+IHtcclxuICAgICAgICBzZXRPdmVySXRlbUlkKG92ZXIgPyBvdmVyLmlkIDogbnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNlbnNvcnMgPSB1c2VTZW5zb3JzKFxyXG4gICAgICAgIHVzZVNlbnNvcihQb2ludGVyU2Vuc29yLCB7XHJcbiAgICAgICAgYWN0aXZhdGlvbkNvbnN0cmFpbnQ6IHsgZGlzdGFuY2U6IDggfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB1c2VTZW5zb3IoS2V5Ym9hcmRTZW5zb3IsIHtcclxuICAgICAgICBjb29yZGluYXRlR2V0dGVyOiBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMsXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9ICh7IGFjdGl2ZSwgb3ZlciB9KSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlRHJhZ0l0ZW0obnVsbCk7XHJcbiAgICAgICAgc2V0T3Zlckl0ZW1JZChudWxsKTtcclxuICAgICAgICBpZiAoIW92ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gQ2FzZSAxOiBEcm9wcGluZyBhIG5ldyBjb250cm9sIGZyb20gdGhlIHBhbGV0dGUgaW50byB0aGUgbGlzdFxyXG4gICAgICAgIGlmIChhY3RpdmUuZGF0YS5jdXJyZW50Py5zb3VyY2UgPT09ICdjb250cm9sLXBhbGV0dGUnKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSBhY3RpdmUuZGF0YS5jdXJyZW50LmNvbnRyb2wudHlwZTtcclxuICAgICAgICBjb25zdCBjb250cm9sTGFiZWwgPSBhY3RpdmUuZGF0YS5jdXJyZW50LmNvbnRyb2wubGFiZWw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgICAgICAgaWQ6IGBmaWVsZC0ke0RhdGUubm93KCl9YCwgLy8gRW5zdXJlIHVuaXF1ZSBzdHJpbmcgSURcclxuICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXHJcbiAgICAgICAgICAgIHRpdGxlOiBjb250cm9sTGFiZWwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG92ZXIuaWQgPT09ICdzb3J0YWJsZS1saXN0LWJvdHRvbS16b25lJyB8fCBvdmVyLmlkID09PSAnc29ydGFibGUtbGlzdC1jb250YWluZXInKSB7XHJcbiAgICAgICAgICAgIHNldEZpZWxkTGlzdChbLi4uZmllbGRMaXN0LCBuZXdJdGVtXSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIG92ZXIgYSBzcGVjaWZpYyBzb3J0YWJsZSBpdGVtLCBpbnNlcnQgaXQgYXQgdGhhdCBpbmRleFxyXG4gICAgICAgIGNvbnN0IG92ZXJJbmRleCA9IGZpZWxkTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IG92ZXIuaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChvdmVySW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4uZmllbGRMaXN0XTtcclxuICAgICAgICAgICAgbmV3TGlzdC5zcGxpY2Uob3ZlckluZGV4LCAwLCBuZXdJdGVtKTtcclxuICAgICAgICAgICAgc2V0RmllbGRMaXN0KG5ld0xpc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEFwcGVuZHMgdG8gZW5kIGlmIGRyb3BwZWQgb24gY29udGFpbmVyIGJ1dCBub3Qgb24gYW4gaXRlbVxyXG4gICAgICAgICAgICBzZXRGaWVsZExpc3QoWy4uLmZpZWxkTGlzdCwgbmV3SXRlbV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXNlIDI6IEludGVybmFsIGxpc3QgcmVvcmRlcmluZ1xyXG4gICAgICAgIGlmIChhY3RpdmUuaWQgIT09IG92ZXIuaWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2xkSW5kZXggPSBmaWVsZExpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3RpdmUuaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGZpZWxkTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IG92ZXIuaWQpO1xyXG4gICAgICAgICAgICBzZXRGaWVsZExpc3QoYXJyYXlNb3ZlKGZpZWxkTGlzdCwgb2xkSW5kZXgsIG5ld0luZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gIH07XHJcbiAgICBjb25zdCB0eXBlVGFicyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ2luZm8nLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1R5cGUgaW5mbycsXHJcbiAgICAgICAgICAgIGljb246IDxBcnRpY2xlSWNvbiBzaXplPXsyNH0gLz4sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzZWxlY3RlZFR5cGU/LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtzZWxlY3RlZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtoYW5kbGVUeXBlUHJvcGVydGllc0NoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU2luZ3VsYXIgTmFtZVwiIG5hbWU9XCJzaW5ndWxhcl9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiUGx1cmFsIE5hbWVcIiBuYW1lPVwicGx1cmFsX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJEZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHJvd3M9ezN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6ICdmaWVsZHMnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0ZpZWxkcycsXHJcbiAgICAgICAgICAgIGljb246IDxUZXh0Ym94SWNvbiAvPixcclxuICAgICAgICAgICAgY2hpbGRyZW46IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWRpcmVjdGlvbi1yb3cgZmxleC1zdHJldGNoIGdhcC0xMCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUeXBlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERuZENvbnRleHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vuc29ycz17c2Vuc29yc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtc3RyZXRjaCBoLTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZHNTb3J0YWJsZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtcz17ZmllbGRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVyRmllbGRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSd2ZXJ0aWNhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1MaXN0PXtzZXRGaWVsZExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVySXRlbUlkPXtvdmVySXRlbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVQYWxldHRlSXRlbT17YWN0aXZlRHJhZ0l0ZW0/LmRhdGEuY3VycmVudD8uc291cmNlID09PSAnY29udHJvbC1wYWxldHRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbFBhbGV0dGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRG5kQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAnZGFuZ2Vyb3VzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdEYW5nZXJvdXMnLFxyXG4gICAgICAgICAgICBpY29uOiA8V2FybmluZ0ljb24gLz4sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5EYW5nZXJvdXMgYWN0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGRhbmdlciBvbkNsaWNrPXtkZWxldGVUeXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFR5cGVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKDxDb250YWluZXIgcD1cIm1kXCIgaDEwMD4gXHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezJ9IHNwYW49ezIwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGxpdHRlciBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwbGl0dGVyLlBhbmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTaXplPVwiNTAlXCIgbWluPVwiMjAlXCIgbWF4PVwiNzAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRhdGEgVHlwZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkZE5ld1R5cGV9IGxvYWRpbmc9e25ld1R5cGVBZGRpbmd9PkFkZCBUeXBlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdExvYWRpbmcgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVzLmxlbmd0aCA9PSAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9XCJpbmZvXCIgc2hvd0ljb24gdGl0bGU9XCJObyB0eXBlcyBjcmVhdGVkIHlldC4gQ2xpY2sgdGhlIGJ1dHRvbiBhYm92ZSB0byBjcmVhdGUgeW91ciBmaXJzdCB0eXBlLlwiLz4gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlcy5tYXAodHlwZT0+KDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0eXBlLWl0ZW0gJHtzZWxlY3RlZFR5cGUgJiYgc2VsZWN0ZWRUeXBlLmlkID09PSB0eXBlLmlkID8gJ3NlbGVjdGVkJyA6ICcnfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrSXRlbVR5cGUodHlwZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57dHlwZS5zaW5ndWxhcl9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwbGl0dGVyLlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwbGl0dGVyLlBhbmVsIGNsYXNzTmFtZT1cInAtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUxvYWRpbmcgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkVHlwZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWRpcmVjdGlvbi1jb2x1bW4gaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtLTBcIj57c2VsZWN0ZWRUeXBlLnNpbmd1bGFyX25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtpdGVtU2F2aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNhdmVDaGFuZ2VzKHNlbGVjdGVkVHlwZSl9PlNhdmUgdHlwZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMgY2xhc3NOYW1lPVwiZmxleC1zdHJldGNoXCIgaXRlbXM9e3R5cGVUYWJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2VsZWN0IGEgdHlwZSB0byB2aWV3IG9yIGVkaXQgaXRzIGRldGFpbHMuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BsaXR0ZXIuUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BsaXR0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBlTGlzdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRG90c1NpeFZlcnRpY2FsSWNvbiwgWEljb24gfSBmcm9tICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QnO1xyXG5pbXBvcnQgeyBTb3J0YWJsZUNvbnRleHQsIHJlY3RTb3J0aW5nU3RyYXRlZ3ksIHVzZVNvcnRhYmxlIH0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnO1xyXG5pbXBvcnQgeyB1c2VEcm9wcGFibGUgfSBmcm9tICdAZG5kLWtpdC9jb3JlJztcclxuaW1wb3J0IHsgQ1NTIH0gZnJvbSAnQGRuZC1raXQvdXRpbGl0aWVzJztcclxuXHJcbmNvbnN0IFNvcnRhYmxlSXRlbSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBsaXN0ZW5lcnMsIHNldE5vZGVSZWYsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiB9ID1cclxuICAgICAgICB1c2VTb3J0YWJsZSh7IGlkOiBwcm9wcy5pZCB9KTtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogQ1NTLlRyYW5zbGF0ZS50b1N0cmluZyh0cmFuc2Zvcm0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24sXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAocHJvcHMub25SZW1vdmUpIHtcclxuICAgICAgICAgICAgcHJvcHMub25SZW1vdmUocHJvcHMuaWQsIHByb3BzLml0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyZWRJdGVtID0gcHJvcHMucmVuZGVySXRlbSA/XHJcbiAgICAgICAgcHJvcHMucmVuZGVySXRlbShwcm9wcy5pdGVtKSA6XHJcbiAgICAgICAgPHNwYW4+e3Byb3BzLnRleHR9PC9zcGFuPjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtzZXROb2RlUmVmfSBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT0nc29ydGFibGUtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtdG9wJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZ2FwLTUgZmxleC1ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2RyYWctaGFuZGxlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgY3Vyc29yLWdyYWInXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0RyYWcgdG8gcmVvcmRlcidcclxuICAgICAgICAgICAgICAgICAgICB7Li4uYXR0cmlidXRlc31cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGlzdGVuZXJzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEb3RzU2l4VmVydGljYWxJY29uIHdlaWdodD0nYm9sZCcgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3Jvdyc+e3JlbmRlcmVkSXRlbX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZ2FwLTUganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbi1idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9J1JlbW92ZSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgIGljb249ezxYSWNvbiB3ZWlnaHQ9J2JvbGQnIC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpZWxkc1NvcnRhYmxlTGlzdCA9ICh7IGxpc3RJdGVtcywgc2VsZWN0SXRlbUhhbmRsZSwgZGF0YSwgXHJcbiAgICB1cGRhdGVJdGVtTGlzdCwgY3VycmVudElkLCByZW5kZXJJdGVtLCByZW1vdmVJdGVtSGFuZGxlLCBsYXlvdXQsXHJcbiAgICBvdmVySXRlbUlkLCBpc0FjdGl2ZVBhbGV0dGVJdGVtLFxyXG4gICAgY29udGFpbmVyQ2xhc3NOYW1lID0gJ2NhcmRzLWNvbnRhaW5lciBzb3J0YWJsZScgfSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBsaXN0SXRlbXMgfHwgW107XHJcblxyXG4gICAgY29uc3QgeyBzZXROb2RlUmVmIH0gPSB1c2VEcm9wcGFibGUoe1xyXG4gICAgICAgIGlkOiBpdGVtcy5sZW5ndGggPiAwID8gJ3NvcnRhYmxlLWxpc3QtYm90dG9tLXpvbmUnIDogJ3NvcnRhYmxlLWxpc3QtY29udGFpbmVyJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldEl0ZW1UZXh0ID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGl0ZW0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbS5zZXR0aW5ncz8udGl0bGUgfHwgaXRlbS50aXRsZSB8fCBpdGVtLm5hbWUgfHwgaXRlbS5sYWJlbCB8fCBpdGVtLnRleHQgfHwgU3RyaW5nKGl0ZW0uaWQgfHwgJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGl0ZW1JZCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChyZW1vdmVJdGVtSGFuZGxlKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUl0ZW1IYW5kbGUoaXRlbUlkLCBpdGVtLCBpdGVtcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gaXRlbXMuZmlsdGVyKChpdCkgPT4gaXQuaWQgIT09IGl0ZW1JZCk7XHJcblxyXG4gICAgICAgIGlmICh1cGRhdGVJdGVtTGlzdCkge1xyXG4gICAgICAgICAgICB1cGRhdGVJdGVtTGlzdChuZXdJdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobGF5b3V0ID09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICBjb250YWluZXJDbGFzc05hbWUgKz0gJyB2ZXJ0aWNhbCc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17c2V0Tm9kZVJlZn0gY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc05hbWV9PlxyXG4gICAgICAgICAgICA8U29ydGFibGVDb250ZXh0IGl0ZW1zPXtpdGVtc30gc3RyYXRlZ3k9e3JlY3RTb3J0aW5nU3RyYXRlZ3l9PlxyXG57aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICB7aXNBY3RpdmVQYWxldHRlSXRlbSAmJiBvdmVySXRlbUlkID09PSBpdGVtLmlkICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RyYWctcGxhY2Vob2xkZXItbGluZScgc3R5bGU9e3sgaGVpZ2h0OiAnMnB4JywgYmFja2dyb3VuZENvbG9yOiAnIzE4OTBmZicsIG1hcmdpbjogJzhweCAwJyB9fSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFNvcnRhYmxlSXRlbSBcclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckl0ZW19XHJcbiAgICAgICAgICAgIHRleHQ9e2dldEl0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICBzZWxlY3RJdGVtSGFuZGxlPXtzZWxlY3RJdGVtSGFuZGxlfVxyXG4gICAgICAgICAgICBvblJlbW92ZT17cmVtb3ZlSXRlbX1cclxuICAgICAgICAgICAgY3VycmVudElkPXtjdXJyZW50SWR9IC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4pKX1cclxue2lzQWN0aXZlUGFsZXR0ZUl0ZW0gJiYgKG92ZXJJdGVtSWQgPT09ICdzb3J0YWJsZS1saXN0LWJvdHRvbS16b25lJyB8fCBvdmVySXRlbUlkID09PSAnc29ydGFibGUtbGlzdC1jb250YWluZXInKSAmJiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZHJhZy1wbGFjZWhvbGRlci1saW5lJyBzdHlsZT17eyBoZWlnaHQ6ICcycHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMTg5MGZmJywgbWFyZ2luOiAnOHB4IDAnIH19IC8+XHJcbil9XHJcbjwvU29ydGFibGVDb250ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKHByb3BzKT0+e1xyXG4gICAgY29uc3QgbG9hZGVyQ2xhc3NOYW1lID0gcHJvcHMubm9jb250YWluZXIgPyAnJzogKHByb3BzLnNtYWxsID8gJ2xvYWRlci1jb250YWluZXItc21hbGwnOiBcclxuICAgICAgICAocHJvcHMuaW5saW5lID8gJ2xvYWRlci1jb250YWluZXItaW5saW5lJzogJ2xvYWRlci1jb250YWluZXInKSk7XHJcbiAgICByZXR1cm4gKHByb3BzLnNob3cgPT0gbnVsbCB8fCAocHJvcHMuc2hvdyAhPSBudWxsICYmIHByb3BzLnNob3cpID8gPGRpdiBjbGFzc05hbWU9e2xvYWRlckNsYXNzTmFtZX0+XHJcbiAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluLz5cclxuICAgIDwvZGl2PjogbnVsbCk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwiVG9vbHRpcCIsInVzZURyYWdnYWJsZSIsIkNTUyIsIkN1cnNvclRleHRJY29uIiwiTnVtYmVyU3F1YXJlRWlnaHRJY29uIiwiY29udHJvbHMiLCJ0eXBlIiwibGFiZWwiLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsIkRyYWdnYWJsZUNvbnRyb2wiLCJfcmVmIiwiY29udHJvbCIsImRyYWdnYWJsZURhdGEiLCJzb3VyY2UiLCJfdXNlRHJhZ2dhYmxlIiwiaWQiLCJjb25jYXQiLCJkYXRhIiwiYXR0cmlidXRlcyIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJpc0RyYWdnaW5nIiwic3R5bGUiLCJUcmFuc2xhdGUiLCJ0b1N0cmluZyIsIm9wYWNpdHkiLCJjdXJzb3IiLCJ0aXRsZSIsInBsYWNlbWVudCIsImtleSIsIl9leHRlbmRzIiwicmVmIiwiY2xhc3NOYW1lIiwiQ29udHJvbFBhbGV0dGUiLCJjb250cm9sTWFwIiwibWFwIiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiQWxlcnQiLCJCdXR0b24iLCJDb2wiLCJGb3JtIiwiSW5wdXQiLCJSb3ciLCJTcGxpdHRlciIsIlRhYnMiLCJEbmRDb250ZXh0IiwiUG9pbnRlclNlbnNvciIsIktleWJvYXJkU2Vuc29yIiwidXNlU2Vuc29yIiwidXNlU2Vuc29ycyIsInNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyIsImFycmF5TW92ZSIsIkFydGljbGVJY29uIiwiVGV4dGJveEljb24iLCJXYXJuaW5nSWNvbiIsImF4aW9zIiwiTG9hZGVyIiwiQ29udGFpbmVyIiwiRmllbGRzU29ydGFibGVMaXN0IiwicmVuZGVyRmllbGRJdGVtIiwiZmllbGQiLCJUeXBlTGlzdCIsIl9hY3RpdmVEcmFnSXRlbSRkYXRhJCIsImZpZWxkcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJ0eXBlcyIsInNldFR5cGVzIiwibm90aWZ5Iiwic3RhdGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNlbGVjdGVkVHlwZSIsInNldFNlbGVjdGVkVHlwZSIsImRyb3Bab25lUHJlZml4IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJuZXdUeXBlQWRkaW5nIiwic2V0TmV3VHlwZUFkZGluZyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibGlzdExvYWRpbmciLCJzZXRMaXN0TG9hZGluZyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiaXRlbUxvYWRpbmciLCJzZXRJdGVtTG9hZGluZyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIml0ZW1TYXZpbmciLCJzZXRJdGVtU2F2aW5nIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImFjdGl2ZURyYWdJdGVtIiwic2V0QWN0aXZlRHJhZ0l0ZW0iLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0Iiwib3Zlckl0ZW1JZCIsInNldE92ZXJJdGVtSWQiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZmllbGRMaXN0Iiwic2V0RmllbGRMaXN0IiwibG9hZEl0ZW1UeXBlTGlzdCIsImNsaWNrSXRlbVR5cGUiLCJ0eXBlSW5zdGFuY2UiLCJsb2FkSXRlbSIsIl9yZWYyIiwiX2NhbGxlZSIsIml0ZW1JZCIsInJlc3BvbnNlIiwiX3QiLCJfY29udGV4dCIsImdldCIsInJlc3VsdCIsIml0ZW0iLCJzaG93IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiX3giLCJ1cHNlcnRJdGVtVHlwZSIsIl9yZWYzIiwiX2NhbGxlZTIiLCJpdGVtVHlwZUluc3RhbmNlIiwiX3QyIiwiX2NvbnRleHQyIiwicG9zdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl94MiIsIl9yZWY0IiwiX2NhbGxlZTMiLCJfdDMiLCJfY29udGV4dDMiLCJpdGVtcyIsImFkZE5ld1R5cGUiLCJuZXdUeXBlIiwic2luZ3VsYXJfbmFtZSIsInBsdXJhbF9uYW1lIiwiZGVzY3JpcHRpb24iLCJkZWxldGVUeXBlIiwidHlwZUlkIiwiZmlsdGVyIiwic2F2ZUNoYW5nZXMiLCJoYW5kbGVUeXBlUHJvcGVydGllc0NoYW5nZSIsImNoYW5nZWRWYWx1ZXMiLCJ1cGRhdGVkVHlwZSIsIl9vYmplY3RTcHJlYWQiLCJwcmV2VHlwZXMiLCJoYW5kbGVEcmFnU3RhcnQiLCJfcmVmNSIsImFjdGl2ZSIsImhhbmRsZURyYWdPdmVyIiwiX3JlZjYiLCJvdmVyIiwic2Vuc29ycyIsImFjdGl2YXRpb25Db25zdHJhaW50IiwiZGlzdGFuY2UiLCJjb29yZGluYXRlR2V0dGVyIiwiaGFuZGxlRHJhZ0VuZCIsIl9yZWY3IiwiX2FjdGl2ZSRkYXRhJGN1cnJlbnQiLCJjdXJyZW50IiwiY29udHJvbFR5cGUiLCJjb250cm9sTGFiZWwiLCJuZXdJdGVtIiwiRGF0ZSIsIm5vdyIsIm92ZXJJbmRleCIsImZpbmRJbmRleCIsIm5ld0xpc3QiLCJzcGxpY2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwidHlwZVRhYnMiLCJzaXplIiwiY2hpbGRyZW4iLCJsYXlvdXQiLCJpbml0aWFsVmFsdWVzIiwib25WYWx1ZXNDaGFuZ2UiLCJndXR0ZXIiLCJzcGFuIiwiSXRlbSIsIlRleHRBcmVhIiwicm93cyIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJhZ0VuZCIsImxpc3RJdGVtcyIsInJlbmRlckl0ZW0iLCJ1cGRhdGVJdGVtTGlzdCIsImlzQWN0aXZlUGFsZXR0ZUl0ZW0iLCJkYW5nZXIiLCJvbkNsaWNrIiwiaDEwMCIsIm9mZnNldCIsIlBhbmVsIiwiZGVmYXVsdFNpemUiLCJtaW4iLCJtYXgiLCJsb2FkaW5nIiwic2hvd0ljb24iLCJEb3RzU2l4VmVydGljYWxJY29uIiwiWEljb24iLCJTb3J0YWJsZUNvbnRleHQiLCJyZWN0U29ydGluZ1N0cmF0ZWd5IiwidXNlU29ydGFibGUiLCJ1c2VEcm9wcGFibGUiLCJTb3J0YWJsZUl0ZW0iLCJwcm9wcyIsIl91c2VTb3J0YWJsZSIsInRyYW5zaXRpb24iLCJ3aWR0aCIsImJveFNpemluZyIsInJlbW92ZUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uUmVtb3ZlIiwicmVuZGVyZWRJdGVtIiwidGV4dCIsIndlaWdodCIsIm9uUG9pbnRlckRvd24iLCJzZWxlY3RJdGVtSGFuZGxlIiwiY3VycmVudElkIiwicmVtb3ZlSXRlbUhhbmRsZSIsIl9yZWYkY29udGFpbmVyQ2xhc3NOYSIsImNvbnRhaW5lckNsYXNzTmFtZSIsIl91c2VEcm9wcGFibGUiLCJnZXRJdGVtVGV4dCIsIl9pdGVtJHNldHRpbmdzIiwiU3RyaW5nIiwic2V0dGluZ3MiLCJuZXdJdGVtcyIsIml0Iiwic3RyYXRlZ3kiLCJGcmFnbWVudCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIkxvYWRpbmdPdXRsaW5lZCIsImxvYWRlckNsYXNzTmFtZSIsIm5vY29udGFpbmVyIiwic21hbGwiLCJpbmxpbmUiLCJzcGluIl0sInNvdXJjZVJvb3QiOiIifQ==