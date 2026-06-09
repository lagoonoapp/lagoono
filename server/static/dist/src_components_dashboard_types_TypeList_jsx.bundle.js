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
/* harmony import */ var _src_components_ui_CustomSortableList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @src/components/ui/CustomSortableList */ "./src/components/ui/CustomSortableList.jsx");
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
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(fields || [{
      id: 'field_1',
      name: 'Field 1',
      type: 'text'
    }, {
      id: 'field_2',
      name: 'Field 2',
      type: 'number'
    }]),
    _useState12 = _slicedToArray(_useState11, 2),
    fieldList = _useState12[0],
    setFieldList = _useState12[1];
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
  var sensors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.useSensors)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.PointerSensor, {
    activationConstraint: {
      distance: 8
    }
  }), (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.KeyboardSensor, {
    coordinateGetter: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_11__.sortableKeyboardCoordinates
  }));
  var getInsertIndexFromOverId = function getInsertIndexFromOverId(overId, items) {
    if (!overId) {
      return null;
    }
    if (overId === "".concat(dropZonePrefix, "-start")) {
      return 0;
    }
    if (overId.startsWith("".concat(dropZonePrefix, "-after-"))) {
      var itemId = overId.replace("".concat(dropZonePrefix, "-after-"), '');
      var itemIndex = items.findIndex(function (item) {
        return item.id === itemId;
      });
      if (itemIndex >= 0) {
        return itemIndex + 1;
      }
    }
    var hoveredIndex = items.findIndex(function (item) {
      return item.id === overId;
    });
    if (hoveredIndex >= 0) {
      return hoveredIndex;
    }
    return null;
  };
  var createFieldFromControl = function createFieldFromControl(control, items) {
    var existingCount = items.filter(function (item) {
      return item.type === control.type;
    }).length;
    return {
      id: "field_".concat(Date.now(), "_").concat(Math.random().toString(16).slice(2, 8)),
      name: "".concat(control.label, " ").concat(existingCount + 1),
      type: control.type
    };
  };
  var handleDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref5) {
    var active = _ref5.active,
      over = _ref5.over;
    if (!over) {
      return;
    }
    var activeId = String(active.id);
    var overId = String(over.id);
    var activeData = active.data.current;
    if ((activeData === null || activeData === void 0 ? void 0 : activeData.source) === 'control-palette') {
      var _targetIndex = getInsertIndexFromOverId(overId, fieldList);
      if (_targetIndex == null) {
        return;
      }
      setFieldList(function (prevItems) {
        var nextItems = _toConsumableArray(prevItems);
        var control = activeData.control || _ControlPalette__WEBPACK_IMPORTED_MODULE_18__.controls.find(function (item) {
          return "palette-control-".concat(item.type) === activeId;
        });
        if (!control) {
          return prevItems;
        }
        var newField = createFieldFromControl(control, prevItems);
        nextItems.splice(Math.max(0, Math.min(_targetIndex, nextItems.length)), 0, newField);
        return nextItems;
      });
      return;
    }
    if (activeId === overId) {
      return;
    }
    var fromIndex = fieldList.findIndex(function (item) {
      return item.id === activeId;
    });
    if (fromIndex < 0) {
      return;
    }
    var targetIndex = getInsertIndexFromOverId(overId, fieldList);
    if (targetIndex == null) {
      return;
    }
    setFieldList(function (prevItems) {
      var movedItems = _toConsumableArray(prevItems);
      var _movedItems$splice = movedItems.splice(fromIndex, 1),
        _movedItems$splice2 = _slicedToArray(_movedItems$splice, 1),
        movedItem = _movedItems$splice2[0];
      if (!movedItem) {
        return prevItems;
      }
      var adjustedIndex = fromIndex < targetIndex ? targetIndex - 1 : targetIndex;
      movedItems.splice(Math.max(0, Math.min(adjustedIndex, movedItems.length)), 0, movedItem);
      return movedItems;
    });
  }, [fieldList, dropZonePrefix]);
  var addNewType = function addNewType() {
    var newType = {
      singular_name: "New Type ".concat(types.length + 1),
      plural_name: '',
      description: ''
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
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_10__.DndContext, {
      sensors: sensors,
      onDragEnd: handleDragEnd
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex flex-direction-row flex-stretch gap-10 h-100"
    }, selectedType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex-stretch h-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_CustomSortableList__WEBPACK_IMPORTED_MODULE_19__.CustomSortableList, {
      listItems: fieldList,
      renderItem: renderFieldItem,
      layout: "vertical",
      updateItemList: setFieldList,
      dropZonePrefix: dropZonePrefix
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ControlPalette__WEBPACK_IMPORTED_MODULE_18__.ControlPalette, null)) : null))
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

/***/ "./src/components/ui/CustomSortableList.jsx"
/*!**************************************************!*\
  !*** ./src/components/ui/CustomSortableList.jsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomSortableList: () => (/* binding */ CustomSortableList)
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






//import './App.css';

var SortableItem = function SortableItem(props) {
  var _useSortable = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.useSortable)({
      id: props.id
    }),
    attributes = _useSortable.attributes,
    listeners = _useSortable.listeners,
    setNodeRef = _useSortable.setNodeRef,
    transform = _useSortable.transform,
    transition = _useSortable.transition;
  var itemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    itemRef.current = node;
    setNodeRef(node);
  }, [setNodeRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!itemRef.current) {
      return;
    }
    itemRef.current.style.transform = _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_6__.CSS.Transform.toString(transform);
    itemRef.current.style.transition = transition || '';
  }, [transform, transition]);
  var removeItem = function removeItem(e) {
    e.stopPropagation();
    e.preventDefault();
    if (props.onRemove) {
      props.onRemove(props.id, props.item);
    }
  };
  var renderedItem = props.renderItem ? props.renderItem(props.item) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.text);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: setRefs,
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
var DropZone = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var id = _ref.id;
  var _useDroppable = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.useDroppable)({
      id: id
    }),
    setNodeRef = _useDroppable.setNodeRef,
    isOver = _useDroppable.isOver;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: setNodeRef,
    className: "sortable-drop-zone ".concat(isOver ? 'sortable-drop-zone-over' : '')
  });
});
var CustomSortableList = function CustomSortableList(props) {
  var listItems = props.listItems,
    selectItemHandle = props.selectItemHandle,
    data = props.data,
    updateItemList = props.updateItemList,
    currentId = props.currentId,
    renderItem = props.renderItem,
    removeItemHandle = props.removeItemHandle,
    layout = props.layout,
    _props$dropZonePrefix = props.dropZonePrefix,
    dropZonePrefix = _props$dropZonePrefix === void 0 ? 'sortable-list' : _props$dropZonePrefix,
    _props$containerClass = props.containerClassName,
    containerClassName = _props$containerClass === void 0 ? 'cards-container sortable' : _props$containerClass;
  var items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return listItems || [];
  }, [listItems]);
  var startZoneId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return "".concat(dropZonePrefix, "-start");
  }, [dropZonePrefix]);
  var zoneIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return items.map(function (item) {
      return "".concat(dropZonePrefix, "-after-").concat(item.id);
    });
  }, [items, dropZonePrefix]);
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
  var resolvedClassName = layout === 'vertical' ? "".concat(containerClassName, " vertical") : containerClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: resolvedClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DropZone, {
    id: startZoneId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.SortableContext, {
    items: items,
    strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.rectSortingStrategy
  }, items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortableItem, {
      id: item.id,
      item: item,
      renderItem: renderItem,
      text: getItemText(item),
      data: data,
      selectItemHandle: selectItemHandle,
      onRemove: removeItem,
      currentId: currentId
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DropZone, {
      id: zoneIds[index]
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX3R5cGVzX1R5cGVMaXN0X2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNOO0FBQ2M7QUFDSjtBQUVxQztBQUV2RSxJQUFNTyxRQUFRLEdBQUcsQ0FDcEI7RUFBRUMsSUFBSSxFQUFFLE1BQU07RUFBRUMsS0FBSyxFQUFFLFlBQVk7RUFBRUMsSUFBSSxlQUFFViwwREFBQSxDQUFDSyxpRUFBYyxNQUFFO0FBQUUsQ0FBQyxFQUMvRDtFQUFFRyxJQUFJLEVBQUUsUUFBUTtFQUFFQyxLQUFLLEVBQUUsY0FBYztFQUFFQyxJQUFJLGVBQUVWLDBEQUFBLENBQUNNLHdFQUFxQixNQUFFO0FBQUU7QUFDekU7QUFDQTtBQUFBLENBQ0g7QUFFRCxJQUFNTSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBQyxJQUFBLEVBQW9CO0VBQUEsSUFBZEMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87RUFDL0I7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUksSUFBTUMsYUFBYSxHQUFHZCw4Q0FBTyxDQUFDO0lBQUEsT0FBTztNQUNqQ2UsTUFBTSxFQUFFLGlCQUFpQjtNQUN6QkYsT0FBTyxFQUFFO1FBQ0xOLElBQUksRUFBRU0sT0FBTyxDQUFDTixJQUFJO1FBQ2xCQyxLQUFLLEVBQUVLLE9BQU8sQ0FBQ0w7UUFDZjtNQUNKO0lBQ0osQ0FBQztFQUFBLENBQUMsRUFBRSxDQUFDSyxPQUFPLENBQUNOLElBQUksRUFBRU0sT0FBTyxDQUFDTCxLQUFLLENBQUMsQ0FBQztFQUVsQyxJQUFBUSxhQUFBLEdBQXFFZCwyREFBWSxDQUFDO01BQzlFZSxFQUFFLHFCQUFBQyxNQUFBLENBQXFCTCxPQUFPLENBQUNOLElBQUksQ0FBRTtNQUNyQ1ksSUFBSSxFQUFFTDtJQUNWLENBQUMsQ0FBQztJQUhNTSxVQUFVLEdBQUFKLGFBQUEsQ0FBVkksVUFBVTtJQUFFQyxTQUFT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QUNLLElBQUk7RUFBQSxDQUFDLENBQ3JCLENBQUMsR0FBRSxJQUFJO0FBQ2hCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL3R5cGVzL0NvbnRyb2xQYWxldHRlLmpzeCIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC90eXBlcy9UeXBlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vbGFnb29uby1hcHAvLi9zcmMvY29tcG9uZW50cy91aS9DdXN0b21Tb3J0YWJsZUxpc3QuanN4Iiwid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvTG9hZGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRHJhZ2dhYmxlIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XHJcbmltcG9ydCB7IENTUyB9IGZyb20gJ0BkbmQta2l0L3V0aWxpdGllcyc7XHJcblxyXG5pbXBvcnQgeyBDdXJzb3JUZXh0SWNvbiwgTnVtYmVyU3F1YXJlRWlnaHRJY29uIH0gZnJvbSAnQHBob3NwaG9yLWljb25zL3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBjb250cm9scyA9IFtcclxuICAgIHsgdHlwZTogJ3RleHQnLCBsYWJlbDogJ1RleHQgSW5wdXQnLCBpY29uOiA8Q3Vyc29yVGV4dEljb24gLz4gfSxcclxuICAgIHsgdHlwZTogJ251bWJlcicsIGxhYmVsOiAnTnVtYmVyIElucHV0JywgaWNvbjogPE51bWJlclNxdWFyZUVpZ2h0SWNvbiAvPiB9LFxyXG4gICAgLy97IHR5cGU6ICdzZWxlY3QnLCBsYWJlbDogJ1NlbGVjdCBEcm9wZG93bicsIGljb246IDxJbmZvQ2lyY2xlRmlsbGVkIC8+IH0sXHJcbiAgICAvL3sgdHlwZTogJ2NoZWNrYm94JywgbGFiZWw6ICdDaGVja2JveCcsIGljb246IDxJbmZvQ2lyY2xlRmlsbGVkIC8+IH0sXHJcbl07XHJcblxyXG5jb25zdCBEcmFnZ2FibGVDb250cm9sID0gKHsgY29udHJvbCB9KSA9PiB7XHJcbiAgICAvKmNvbnN0IHsgYXR0cmlidXRlcywgbGlzdGVuZXJzLCBzZXROb2RlUmVmLCB0cmFuc2Zvcm0sIGlzRHJhZ2dpbmcgfSA9IHVzZURyYWdnYWJsZSh7XHJcbiAgICAgICAgaWQ6IGBwYWxldHRlLWNvbnRyb2wtJHtjb250cm9sLnR5cGV9YCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogJ2NvbnRyb2wtcGFsZXR0ZScsXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgfSxcclxuICAgIH0pOyovXHJcblxyXG4gICAgY29uc3QgZHJhZ2dhYmxlRGF0YSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICBzb3VyY2U6ICdjb250cm9sLXBhbGV0dGUnLFxyXG4gICAgICAgIGNvbnRyb2w6IHtcclxuICAgICAgICAgICAgdHlwZTogY29udHJvbC50eXBlLFxyXG4gICAgICAgICAgICBsYWJlbDogY29udHJvbC5sYWJlbCxcclxuICAgICAgICAgICAgLy8gZG8gbm90IHBhc3MgaWNvbiBpbnRvIGRuZC1raXQgZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICB9KSwgW2NvbnRyb2wudHlwZSwgY29udHJvbC5sYWJlbF0pO1xyXG5cclxuICAgIGNvbnN0IHsgYXR0cmlidXRlcywgbGlzdGVuZXJzLCBzZXROb2RlUmVmLCB0cmFuc2Zvcm0sIGlzRHJhZ2dpbmcgfSA9IHVzZURyYWdnYWJsZSh7XHJcbiAgICAgICAgaWQ6IGBwYWxldHRlLWNvbnRyb2wtJHtjb250cm9sLnR5cGV9YCxcclxuICAgICAgICBkYXRhOiBkcmFnZ2FibGVEYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBDU1MuVHJhbnNsYXRlLnRvU3RyaW5nKHRyYW5zZm9ybSksXHJcbiAgICAgICAgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAuNiA6IDEsXHJcbiAgICAgICAgY3Vyc29yOiAnZ3JhYicsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2NvbnRyb2wubGFiZWx9IHBsYWNlbWVudD1cImxlZnRcIiBrZXk9e2NvbnRyb2wudHlwZX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJlZj17c2V0Tm9kZVJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICB7Li4ubGlzdGVuZXJzfVxyXG4gICAgICAgICAgICAgICAgey4uLmF0dHJpYnV0ZXN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb250cm9sLmljb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ29udHJvbFBhbGV0dGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250cm9sTWFwID0gY29udHJvbHMubWFwKChjb250cm9sKSA9PiAoXHJcbiAgICAgICAgPERyYWdnYWJsZUNvbnRyb2wgY29udHJvbD17Y29udHJvbH0ga2V5PXtjb250cm9sLnR5cGV9IC8+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbC1wYWxldHRlXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29udHJvbE1hcH1cclxuICAgICAgICAgICAgPC9kaXY+KTtcclxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgQ29sLCBGb3JtLCBJbnB1dCwgUm93LCBTcGxpdHRlciwgVGFicyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1xyXG4gICAgRG5kQ29udGV4dCxcclxuICAgIEtleWJvYXJkU2Vuc29yLFxyXG4gICAgUG9pbnRlclNlbnNvcixcclxuICAgIHVzZVNlbnNvcixcclxuICAgIHVzZVNlbnNvcnMsXHJcbn0gZnJvbSAnQGRuZC1raXQvY29yZSc7XHJcbmltcG9ydCB7IHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcclxuaW1wb3J0IHsgQXJ0aWNsZUljb24sIFRleHRib3hJY29uLCBXYXJuaW5nSWNvbiB9IGZyb20gJ0BwaG9zcGhvci1pY29ucy9yZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvTG9hZGVyJztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IGNvbnRyb2xzLCBDb250cm9sUGFsZXR0ZSB9IGZyb20gJy4vQ29udHJvbFBhbGV0dGUnO1xyXG5pbXBvcnQgeyBDdXN0b21Tb3J0YWJsZUxpc3QgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvdWkvQ3VzdG9tU29ydGFibGVMaXN0JztcclxuXHJcblxyXG5jb25zdCByZW5kZXJGaWVsZEl0ZW0gPSAoZmllbGQpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtaXRlbVwiIGtleT17ZmllbGQubmFtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2ZpZWxkLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlXCI+e2ZpZWxkLnR5cGV9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IFR5cGVMaXN0ID0gKHtmaWVsZHN9KT0+IHtcclxuICAgIGNvbnN0IFt0eXBlcywgc2V0VHlwZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgbm90aWZ5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZnkpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgZHJvcFpvbmVQcmVmaXggPSAndHlwZS1maWVsZC1saXN0JztcclxuICAgIGNvbnN0IFtuZXdUeXBlQWRkaW5nLCBzZXROZXdUeXBlQWRkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsaXN0TG9hZGluZywgc2V0TGlzdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2l0ZW1Mb2FkaW5nLCBzZXRJdGVtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXRlbVNhdmluZywgc2V0SXRlbVNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmllbGRMaXN0LCBzZXRGaWVsZExpc3RdID0gdXNlU3RhdGUoZmllbGRzIHx8IFtcclxuICAgICAgICB7IGlkOiAnZmllbGRfMScsIG5hbWU6ICdGaWVsZCAxJywgdHlwZTogJ3RleHQnIH0sXHJcbiAgICAgICAgeyBpZDogJ2ZpZWxkXzInLCBuYW1lOiAnRmllbGQgMicsIHR5cGU6ICdudW1iZXInIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRJdGVtVHlwZUxpc3QoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBjbGlja0l0ZW1UeXBlID0gKHR5cGVJbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgIGxvYWRJdGVtKHR5cGVJbnN0YW5jZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW0gPSBhc3luYyhpdGVtSWQpPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNldEl0ZW1Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvYXBwL2l0ZW0vaW5zdGFuY2UvaXRlbV90eXBlLyR7aXRlbUlkfWApO1xyXG4gICAgICAgICAgICBzZXRJdGVtTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFR5cGUocmVzcG9uc2UuZGF0YS5pdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Vycm9yR2VuZXJhbFNldHRpbmdzRGF0YScsIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Vycm9yR2VuZXJhbFNldHRpbmdzRGF0YScsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwc2VydEl0ZW1UeXBlID0gYXN5bmMoaXRlbVR5cGVJbnN0YW5jZSk9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1UeXBlSW5zdGFuY2UuaWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0SXRlbVNhdmluZyh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldE5ld1R5cGVBZGRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hcHAvaXRlbS9saXN0L2l0ZW1fdHlwZScsIGl0ZW1UeXBlSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbVR5cGVJbnN0YW5jZS5pZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtU2F2aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldE5ld1R5cGVBZGRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1UeXBlSW5zdGFuY2UuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlSW5zdGFuY2UuaWQgPSByZXNwb25zZS5kYXRhLml0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUeXBlKGl0ZW1UeXBlSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFR5cGVzKFsuLi50eXBlcywgaXRlbVR5cGVJbnN0YW5jZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5lcnJvciB8fCAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAnZXJyb3JHZW5lcmFsU2V0dGluZ3NEYXRhJywgMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdygnZXJyb3InLCBcclxuICAgICAgICAgICAgICAgICAgICAnU29tZSBlcnJvciBvY2N1cmVkIGR1cmluZyB0aGlzIHJlcXVlc3QuLi4gcGxlYXNlIHRyeSBhZ2Fpbi4nLCBcclxuICAgICAgICAgICAgICAgICAgICAnZXJyb3JHZW5lcmFsU2V0dGluZ3NEYXRhJywgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW1UeXBlTGlzdCA9IGFzeW5jKCk9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0TGlzdExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hcHAvaXRlbS9saXN0L2l0ZW1fdHlwZScpO1xyXG4gICAgICAgICAgICBzZXRMaXN0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBzZXRUeXBlcyhyZXNwb25zZS5kYXRhLml0ZW1zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdlcnJvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Vycm9yR2VuZXJhbFNldHRpbmdzRGF0YScsIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coJ2Vycm9yJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvbWUgZXJyb3Igb2NjdXJlZCBkdXJpbmcgdGhpcyByZXF1ZXN0Li4uIHBsZWFzZSB0cnkgYWdhaW4uJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Vycm9yR2VuZXJhbFNldHRpbmdzRGF0YScsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNlbnNvcnMgPSB1c2VTZW5zb3JzKFxyXG4gICAgICAgIHVzZVNlbnNvcihQb2ludGVyU2Vuc29yLCB7XHJcbiAgICAgICAgICAgIGFjdGl2YXRpb25Db25zdHJhaW50OiB7XHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB1c2VTZW5zb3IoS2V5Ym9hcmRTZW5zb3IsIHtcclxuICAgICAgICAgICAgY29vcmRpbmF0ZUdldHRlcjogc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzLFxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGdldEluc2VydEluZGV4RnJvbU92ZXJJZCA9IChvdmVySWQsIGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKCFvdmVySWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3ZlcklkID09PSBgJHtkcm9wWm9uZVByZWZpeH0tc3RhcnRgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG92ZXJJZC5zdGFydHNXaXRoKGAke2Ryb3Bab25lUHJlZml4fS1hZnRlci1gKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBvdmVySWQucmVwbGFjZShgJHtkcm9wWm9uZVByZWZpeH0tYWZ0ZXItYCwgJycpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGl0ZW1JZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtSW5kZXggKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBob3ZlcmVkSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IG92ZXJJZCk7XHJcblxyXG4gICAgICAgIGlmIChob3ZlcmVkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaG92ZXJlZEluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUZpZWxkRnJvbUNvbnRyb2wgPSAoY29udHJvbCwgaXRlbXMpID0+IHtcclxuICAgICAgICBjb25zdCBleGlzdGluZ0NvdW50ID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IGNvbnRyb2wudHlwZSkubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYGZpZWxkXyR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyLCA4KX1gLFxyXG4gICAgICAgICAgICBuYW1lOiBgJHtjb250cm9sLmxhYmVsfSAke2V4aXN0aW5nQ291bnQgKyAxfWAsXHJcbiAgICAgICAgICAgIHR5cGU6IGNvbnRyb2wudHlwZSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmFnRW5kID0gdXNlQ2FsbGJhY2soKHsgYWN0aXZlLCBvdmVyIH0pID0+IHtcclxuICAgICAgICBpZiAoIW92ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSWQgPSBTdHJpbmcoYWN0aXZlLmlkKTtcclxuICAgICAgICBjb25zdCBvdmVySWQgPSBTdHJpbmcob3Zlci5pZCk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlRGF0YSA9IGFjdGl2ZS5kYXRhLmN1cnJlbnQ7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVEYXRhPy5zb3VyY2UgPT09ICdjb250cm9sLXBhbGV0dGUnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZ2V0SW5zZXJ0SW5kZXhGcm9tT3ZlcklkKG92ZXJJZCwgZmllbGRMaXN0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldEZpZWxkTGlzdCgocHJldkl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0SXRlbXMgPSBbLi4ucHJldkl0ZW1zXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBhY3RpdmVEYXRhLmNvbnRyb2wgfHwgY29udHJvbHMuZmluZCgoaXRlbSkgPT4gYHBhbGV0dGUtY29udHJvbC0ke2l0ZW0udHlwZX1gID09PSBhY3RpdmVJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZJdGVtcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWVsZCA9IGNyZWF0ZUZpZWxkRnJvbUNvbnRyb2woY29udHJvbCwgcHJldkl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtcy5zcGxpY2UoTWF0aC5tYXgoMCwgTWF0aC5taW4odGFyZ2V0SW5kZXgsIG5leHRJdGVtcy5sZW5ndGgpKSwgMCwgbmV3RmllbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0SXRlbXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUlkID09PSBvdmVySWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gZmllbGRMaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aXZlSWQpO1xyXG5cclxuICAgICAgICBpZiAoZnJvbUluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IGdldEluc2VydEluZGV4RnJvbU92ZXJJZChvdmVySWQsIGZpZWxkTGlzdCk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEZpZWxkTGlzdCgocHJldkl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVkSXRlbXMgPSBbLi4ucHJldkl0ZW1zXTtcclxuICAgICAgICAgICAgY29uc3QgW21vdmVkSXRlbV0gPSBtb3ZlZEl0ZW1zLnNwbGljZShmcm9tSW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtb3ZlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2SXRlbXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkSW5kZXggPSBmcm9tSW5kZXggPCB0YXJnZXRJbmRleCA/IHRhcmdldEluZGV4IC0gMSA6IHRhcmdldEluZGV4O1xyXG4gICAgICAgICAgICBtb3ZlZEl0ZW1zLnNwbGljZShNYXRoLm1heCgwLCBNYXRoLm1pbihhZGp1c3RlZEluZGV4LCBtb3ZlZEl0ZW1zLmxlbmd0aCkpLCAwLCBtb3ZlZEl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1vdmVkSXRlbXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbZmllbGRMaXN0LCBkcm9wWm9uZVByZWZpeF0pO1xyXG5cclxuICAgIGNvbnN0IGFkZE5ld1R5cGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VHlwZSA9IHtcclxuICAgICAgICAgICAgc2luZ3VsYXJfbmFtZTogYE5ldyBUeXBlICR7dHlwZXMubGVuZ3RoICsgMX1gLFxyXG4gICAgICAgICAgICBwbHVyYWxfbmFtZTogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBzZXJ0SXRlbVR5cGUobmV3VHlwZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGVsZXRlVHlwZSA9ICh0eXBlSWQpID0+IHtcclxuICAgICAgICBzZXRUeXBlcyh0eXBlcy5maWx0ZXIodHlwZSA9PiB0eXBlLmlkICE9PSB0eXBlSWQpKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlICYmIHNlbGVjdGVkVHlwZS5pZCA9PT0gdHlwZUlkKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVHlwZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2F2ZUNoYW5nZXMgPSAodHlwZUluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgLy9zZXRUeXBlcyh0eXBlcy5tYXAodHlwZSA9PiB0eXBlLmlkID09PSB0eXBlSW5zdGFuY2UuaWQgPyB7IC4uLnR5cGUsIC4uLnR5cGVJbnN0YW5jZSB9IDogdHlwZSkpO1xyXG4gICAgICAgIHVwc2VydEl0ZW1UeXBlKHR5cGVJbnN0YW5jZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVR5cGVQcm9wZXJ0aWVzQ2hhbmdlID0gKGNoYW5nZWRWYWx1ZXMpID0+IHtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVkVHlwZSA9IHsgLi4uc2VsZWN0ZWRUeXBlLCAuLi5jaGFuZ2VkVmFsdWVzIH07XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUeXBlKHVwZGF0ZWRUeXBlKTtcclxuICAgICAgICBzZXRUeXBlcygocHJldlR5cGVzKSA9PiBwcmV2VHlwZXMubWFwKCh0eXBlKSA9PiAoXHJcbiAgICAgICAgICAgIHR5cGUuaWQgPT09IHVwZGF0ZWRUeXBlLmlkID8geyAuLi50eXBlLCAuLi5jaGFuZ2VkVmFsdWVzIH0gOiB0eXBlXHJcbiAgICAgICAgKSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHR5cGVUYWJzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAnaW5mbycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnVHlwZSBpbmZvJyxcclxuICAgICAgICAgICAgaWNvbjogPEFydGljbGVJY29uIHNpemU9ezI0fSAvPixcclxuICAgICAgICAgICAgY2hpbGRyZW46IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NlbGVjdGVkVHlwZT8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3NlbGVjdGVkVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e2hhbmRsZVR5cGVQcm9wZXJ0aWVzQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTaW5ndWxhciBOYW1lXCIgbmFtZT1cInNpbmd1bGFyX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQbHVyYWwgTmFtZVwiIG5hbWU9XCJwbHVyYWxfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgcm93cz17M30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ2ZpZWxkcycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRmllbGRzJyxcclxuICAgICAgICAgICAgaWNvbjogPFRleHRib3hJY29uIC8+LFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogKFxyXG4gICAgICAgICAgICAgICAgPERuZENvbnRleHQgc2Vuc29ycz17c2Vuc29yc30gb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWRpcmVjdGlvbi1yb3cgZmxleC1zdHJldGNoIGdhcC0xMCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUeXBlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc3RyZXRjaCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tU29ydGFibGVMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbXM9e2ZpZWxkTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckZpZWxkSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1MaXN0PXtzZXRGaWVsZExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wWm9uZVByZWZpeD17ZHJvcFpvbmVQcmVmaXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xQYWxldHRlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RuZENvbnRleHQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAnZGFuZ2Vyb3VzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdEYW5nZXJvdXMnLFxyXG4gICAgICAgICAgICBpY29uOiA8V2FybmluZ0ljb24gLz4sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5EYW5nZXJvdXMgYWN0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGRhbmdlciBvbkNsaWNrPXtkZWxldGVUeXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFR5cGVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKDxDb250YWluZXIgcD1cIm1kXCIgaDEwMD4gXHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezJ9IHNwYW49ezIwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGxpdHRlciBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwbGl0dGVyLlBhbmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTaXplPVwiNTAlXCIgbWluPVwiMjAlXCIgbWF4PVwiNzAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRhdGEgVHlwZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkZE5ld1R5cGV9IGxvYWRpbmc9e25ld1R5cGVBZGRpbmd9PkFkZCBUeXBlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdExvYWRpbmcgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVzLmxlbmd0aCA9PSAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9XCJpbmZvXCIgc2hvd0ljb24gdGl0bGU9XCJObyB0eXBlcyBjcmVhdGVkIHlldC4gQ2xpY2sgdGhlIGJ1dHRvbiBhYm92ZSB0byBjcmVhdGUgeW91ciBmaXJzdCB0eXBlLlwiLz4gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlcy5tYXAodHlwZT0+KDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0eXBlLWl0ZW0gJHtzZWxlY3RlZFR5cGUgJiYgc2VsZWN0ZWRUeXBlLmlkID09PSB0eXBlLmlkID8gJ3NlbGVjdGVkJyA6ICcnfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrSXRlbVR5cGUodHlwZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57dHlwZS5zaW5ndWxhcl9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwbGl0dGVyLlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwbGl0dGVyLlBhbmVsIGNsYXNzTmFtZT1cInAtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUxvYWRpbmcgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkVHlwZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWRpcmVjdGlvbi1jb2x1bW4gaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtLTBcIj57c2VsZWN0ZWRUeXBlLnNpbmd1bGFyX25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtpdGVtU2F2aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNhdmVDaGFuZ2VzKHNlbGVjdGVkVHlwZSl9PlNhdmUgdHlwZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMgY2xhc3NOYW1lPVwiZmxleC1zdHJldGNoXCIgaXRlbXM9e3R5cGVUYWJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2VsZWN0IGEgdHlwZSB0byB2aWV3IG9yIGVkaXQgaXRzIGRldGFpbHMuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BsaXR0ZXIuUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BsaXR0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBlTGlzdDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IERvdHNTaXhWZXJ0aWNhbEljb24sIFhJY29uIH0gZnJvbSAnQHBob3NwaG9yLWljb25zL3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBTb3J0YWJsZUNvbnRleHQsXHJcbiAgcmVjdFNvcnRpbmdTdHJhdGVneSxcclxuICB1c2VTb3J0YWJsZSxcclxufSBmcm9tICdAZG5kLWtpdC9zb3J0YWJsZSc7XHJcbmltcG9ydCB7IHVzZURyb3BwYWJsZSB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xyXG5pbXBvcnQgeyBDU1MgfSBmcm9tICdAZG5kLWtpdC91dGlsaXRpZXMnO1xyXG4vL2ltcG9ydCAnLi9BcHAuY3NzJztcclxuXHJcbmNvbnN0IFNvcnRhYmxlSXRlbSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBsaXN0ZW5lcnMsIHNldE5vZGVSZWYsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiB9ID1cclxuICAgICAgICB1c2VTb3J0YWJsZSh7IGlkOiBwcm9wcy5pZCB9KTtcclxuICAgIGNvbnN0IGl0ZW1SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3Qgc2V0UmVmcyA9IHVzZUNhbGxiYWNrKChub2RlKSA9PiB7XHJcbiAgICAgICAgaXRlbVJlZi5jdXJyZW50ID0gbm9kZTtcclxuICAgICAgICBzZXROb2RlUmVmKG5vZGUpO1xyXG4gICAgfSwgW3NldE5vZGVSZWZdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXRlbVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGl0ZW1SZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBDU1MuVHJhbnNmb3JtLnRvU3RyaW5nKHRyYW5zZm9ybSk7XHJcbiAgICAgICAgaXRlbVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uIHx8ICcnO1xyXG4gICAgfSwgW3RyYW5zZm9ybSwgdHJhbnNpdGlvbl0pO1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChwcm9wcy5vblJlbW92ZSkge1xyXG4gICAgICAgICAgICBwcm9wcy5vblJlbW92ZShwcm9wcy5pZCwgcHJvcHMuaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJlZEl0ZW0gPSBwcm9wcy5yZW5kZXJJdGVtID9cclxuICAgICAgICBwcm9wcy5yZW5kZXJJdGVtKHByb3BzLml0ZW0pIDpcclxuICAgICAgICA8c3Bhbj57cHJvcHMudGV4dH08L3NwYW4+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3NldFJlZnN9IGNsYXNzTmFtZT1cInNvcnRhYmxlLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXRvcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZ2FwLTUgZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhZy1oYW5kbGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBjdXJzb3ItZ3JhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEcmFnIHRvIHJlb3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5hdHRyaWJ1dGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5saXN0ZW5lcnN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERvdHNTaXhWZXJ0aWNhbEljb24gd2VpZ2h0PVwiYm9sZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+e3JlbmRlcmVkSXRlbX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGdhcC01IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgIGljb249ezxYSWNvbiB3ZWlnaHQ9XCJib2xkXCIgLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBEcm9wWm9uZSA9IFJlYWN0Lm1lbW8oKHsgaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBzZXROb2RlUmVmLCBpc092ZXIgfSA9IHVzZURyb3BwYWJsZSh7IGlkIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e3NldE5vZGVSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHNvcnRhYmxlLWRyb3Atem9uZSAke2lzT3ZlciA/ICdzb3J0YWJsZS1kcm9wLXpvbmUtb3ZlcicgOiAnJ31gfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21Tb3J0YWJsZUxpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsaXN0SXRlbXMsIHNlbGVjdEl0ZW1IYW5kbGUsIGRhdGEsXHJcbiAgICAgICAgdXBkYXRlSXRlbUxpc3QsIGN1cnJlbnRJZCwgcmVuZGVySXRlbSwgcmVtb3ZlSXRlbUhhbmRsZSwgbGF5b3V0LFxyXG4gICAgICAgIGRyb3Bab25lUHJlZml4ID0gJ3NvcnRhYmxlLWxpc3QnLFxyXG4gICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZSA9ICdjYXJkcy1jb250YWluZXIgc29ydGFibGUnXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSB1c2VNZW1vKCgpID0+IGxpc3RJdGVtcyB8fCBbXSwgW2xpc3RJdGVtc10pO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0Wm9uZUlkID0gdXNlTWVtbygoKSA9PiBgJHtkcm9wWm9uZVByZWZpeH0tc3RhcnRgLCBbZHJvcFpvbmVQcmVmaXhdKTtcclxuXHJcbiAgICBjb25zdCB6b25lSWRzID0gdXNlTWVtbygoKSA9PlxyXG4gICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4gYCR7ZHJvcFpvbmVQcmVmaXh9LWFmdGVyLSR7aXRlbS5pZH1gKSxcclxuICAgICAgICBbaXRlbXMsIGRyb3Bab25lUHJlZml4XVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBnZXRJdGVtVGV4dCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBpdGVtID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc2V0dGluZ3M/LnRpdGxlIHx8IGl0ZW0udGl0bGUgfHwgaXRlbS5uYW1lIHx8IGl0ZW0ubGFiZWwgfHwgaXRlbS50ZXh0IHx8IFN0cmluZyhpdGVtLmlkIHx8ICcnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpdGVtSWQsIGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAocmVtb3ZlSXRlbUhhbmRsZSkge1xyXG4gICAgICAgICAgICByZW1vdmVJdGVtSGFuZGxlKGl0ZW1JZCwgaXRlbSwgaXRlbXMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXQpID0+IGl0LmlkICE9PSBpdGVtSWQpO1xyXG5cclxuICAgICAgICBpZiAodXBkYXRlSXRlbUxpc3QpIHtcclxuICAgICAgICAgICAgdXBkYXRlSXRlbUxpc3QobmV3SXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXNvbHZlZENsYXNzTmFtZSA9IGxheW91dCA9PT0gJ3ZlcnRpY2FsJ1xyXG4gICAgICAgID8gYCR7Y29udGFpbmVyQ2xhc3NOYW1lfSB2ZXJ0aWNhbGBcclxuICAgICAgICA6IGNvbnRhaW5lckNsYXNzTmFtZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Jlc29sdmVkQ2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgPERyb3Bab25lIGlkPXtzdGFydFpvbmVJZH0gLz5cclxuICAgICAgICAgICAgPFNvcnRhYmxlQ29udGV4dCBpdGVtcz17aXRlbXN9IHN0cmF0ZWd5PXtyZWN0U29ydGluZ1N0cmF0ZWd5fT5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb3J0YWJsZUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtnZXRJdGVtVGV4dChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RJdGVtSGFuZGxlPXtzZWxlY3RJdGVtSGFuZGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e3JlbW92ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SWQ9e2N1cnJlbnRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bab25lIGlkPXt6b25lSWRzW2luZGV4XX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU29ydGFibGVDb250ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKHByb3BzKT0+e1xyXG4gICAgY29uc3QgbG9hZGVyQ2xhc3NOYW1lID0gcHJvcHMubm9jb250YWluZXIgPyAnJzogKHByb3BzLnNtYWxsID8gJ2xvYWRlci1jb250YWluZXItc21hbGwnOiBcclxuICAgICAgICAocHJvcHMuaW5saW5lID8gJ2xvYWRlci1jb250YWluZXItaW5saW5lJzogJ2xvYWRlci1jb250YWluZXInKSk7XHJcbiAgICByZXR1cm4gKHByb3BzLnNob3cgPT0gbnVsbCB8fCAocHJvcHMuc2hvdyAhPSBudWxsICYmIHByb3BzLnNob3cpID8gPGRpdiBjbGFzc05hbWU9e2xvYWRlckNsYXNzTmFtZX0+XHJcbiAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluLz5cclxuICAgIDwvZGl2PjogbnVsbCk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwiVG9vbHRpcCIsInVzZURyYWdnYWJsZSIsIkNTUyIsIkN1cnNvclRleHRJY29uIiwiTnVtYmVyU3F1YXJlRWlnaHRJY29uIiwiY29udHJvbHMiLCJ0eXBlIiwibGFiZWwiLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsIkRyYWdnYWJsZUNvbnRyb2wiLCJfcmVmIiwiY29udHJvbCIsImRyYWdnYWJsZURhdGEiLCJzb3VyY2UiLCJfdXNlRHJhZ2dhYmxlIiwiaWQiLCJjb25jYXQiLCJkYXRhIiwiYXR0cmlidXRlcyIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJpc0RyYWdnaW5nIiwic3R5bGUiLCJUcmFuc2xhdGUiLCJ0b1N0cmluZyIsIm9wYWNpdHkiLCJjdXJzb3IiLCJ0aXRsZSIsInBsYWNlbWVudCIsImtleSIsIl9leHRlbmRzIiwicmVmIiwiY2xhc3NOYW1lIiwiQ29udHJvbFBhbGV0dGUiLCJjb250cm9sTWFwIiwibWFwIiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiQWxlcnQiLCJCdXR0b24iLCJDb2wiLCJGb3JtIiwiSW5wdXQiLCJSb3ciLCJTcGxpdHRlciIsIlRhYnMiLCJEbmRDb250ZXh0IiwiS2V5Ym9hcmRTZW5zb3IiLCJQb2ludGVyU2Vuc29yIiwidXNlU2Vuc29yIiwidXNlU2Vuc29ycyIsInNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyIsIkFydGljbGVJY29uIiwiVGV4dGJveEljb24iLCJXYXJuaW5nSWNvbiIsImF4aW9zIiwiTG9hZGVyIiwiQ29udGFpbmVyIiwiQ3VzdG9tU29ydGFibGVMaXN0IiwicmVuZGVyRmllbGRJdGVtIiwiZmllbGQiLCJUeXBlTGlzdCIsImZpZWxkcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJ0eXBlcyIsInNldFR5cGVzIiwibm90aWZ5Iiwic3RhdGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNlbGVjdGVkVHlwZSIsInNldFNlbGVjdGVkVHlwZSIsImRyb3Bab25lUHJlZml4IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJuZXdUeXBlQWRkaW5nIiwic2V0TmV3VHlwZUFkZGluZyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibGlzdExvYWRpbmciLCJzZXRMaXN0TG9hZGluZyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiaXRlbUxvYWRpbmciLCJzZXRJdGVtTG9hZGluZyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIml0ZW1TYXZpbmciLCJzZXRJdGVtU2F2aW5nIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImZpZWxkTGlzdCIsInNldEZpZWxkTGlzdCIsImxvYWRJdGVtVHlwZUxpc3QiLCJjbGlja0l0ZW1UeXBlIiwidHlwZUluc3RhbmNlIiwibG9hZEl0ZW0iLCJfcmVmMiIsIl9jYWxsZWUiLCJpdGVtSWQiLCJyZXNwb25zZSIsIl90IiwiX2NvbnRleHQiLCJnZXQiLCJyZXN1bHQiLCJpdGVtIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIl94IiwidXBzZXJ0SXRlbVR5cGUiLCJfcmVmMyIsIl9jYWxsZWUyIiwiaXRlbVR5cGVJbnN0YW5jZSIsIl90MiIsIl9jb250ZXh0MiIsInBvc3QiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfeDIiLCJfcmVmNCIsIl9jYWxsZWUzIiwiX3QzIiwiX2NvbnRleHQzIiwiaXRlbXMiLCJzZW5zb3JzIiwiYWN0aXZhdGlvbkNvbnN0cmFpbnQiLCJkaXN0YW5jZSIsImNvb3JkaW5hdGVHZXR0ZXIiLCJnZXRJbnNlcnRJbmRleEZyb21PdmVySWQiLCJvdmVySWQiLCJzdGFydHNXaXRoIiwicmVwbGFjZSIsIml0ZW1JbmRleCIsImZpbmRJbmRleCIsImhvdmVyZWRJbmRleCIsImNyZWF0ZUZpZWxkRnJvbUNvbnRyb2wiLCJleGlzdGluZ0NvdW50IiwiZmlsdGVyIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJyYW5kb20iLCJoYW5kbGVEcmFnRW5kIiwiX3JlZjUiLCJhY3RpdmUiLCJvdmVyIiwiYWN0aXZlSWQiLCJTdHJpbmciLCJhY3RpdmVEYXRhIiwiY3VycmVudCIsInRhcmdldEluZGV4IiwicHJldkl0ZW1zIiwibmV4dEl0ZW1zIiwiZmluZCIsIm5ld0ZpZWxkIiwic3BsaWNlIiwibWF4IiwibWluIiwiZnJvbUluZGV4IiwibW92ZWRJdGVtcyIsIl9tb3ZlZEl0ZW1zJHNwbGljZSIsIl9tb3ZlZEl0ZW1zJHNwbGljZTIiLCJtb3ZlZEl0ZW0iLCJhZGp1c3RlZEluZGV4IiwiYWRkTmV3VHlwZSIsIm5ld1R5cGUiLCJzaW5ndWxhcl9uYW1lIiwicGx1cmFsX25hbWUiLCJkZXNjcmlwdGlvbiIsImRlbGV0ZVR5cGUiLCJ0eXBlSWQiLCJzYXZlQ2hhbmdlcyIsImhhbmRsZVR5cGVQcm9wZXJ0aWVzQ2hhbmdlIiwiY2hhbmdlZFZhbHVlcyIsInVwZGF0ZWRUeXBlIiwiX29iamVjdFNwcmVhZCIsInByZXZUeXBlcyIsInR5cGVUYWJzIiwic2l6ZSIsImNoaWxkcmVuIiwibGF5b3V0IiwiaW5pdGlhbFZhbHVlcyIsIm9uVmFsdWVzQ2hhbmdlIiwiZ3V0dGVyIiwic3BhbiIsIkl0ZW0iLCJUZXh0QXJlYSIsInJvd3MiLCJvbkRyYWdFbmQiLCJGcmFnbWVudCIsImxpc3RJdGVtcyIsInJlbmRlckl0ZW0iLCJ1cGRhdGVJdGVtTGlzdCIsImRhbmdlciIsIm9uQ2xpY2siLCJoMTAwIiwib2Zmc2V0IiwiUGFuZWwiLCJkZWZhdWx0U2l6ZSIsImxvYWRpbmciLCJzaG93SWNvbiIsInVzZVJlZiIsIkRvdHNTaXhWZXJ0aWNhbEljb24iLCJYSWNvbiIsIlNvcnRhYmxlQ29udGV4dCIsInJlY3RTb3J0aW5nU3RyYXRlZ3kiLCJ1c2VTb3J0YWJsZSIsInVzZURyb3BwYWJsZSIsIlNvcnRhYmxlSXRlbSIsInByb3BzIiwiX3VzZVNvcnRhYmxlIiwidHJhbnNpdGlvbiIsIml0ZW1SZWYiLCJzZXRSZWZzIiwibm9kZSIsIlRyYW5zZm9ybSIsInJlbW92ZUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uUmVtb3ZlIiwicmVuZGVyZWRJdGVtIiwidGV4dCIsIndlaWdodCIsIm9uUG9pbnRlckRvd24iLCJEcm9wWm9uZSIsIm1lbW8iLCJfdXNlRHJvcHBhYmxlIiwiaXNPdmVyIiwic2VsZWN0SXRlbUhhbmRsZSIsImN1cnJlbnRJZCIsInJlbW92ZUl0ZW1IYW5kbGUiLCJfcHJvcHMkZHJvcFpvbmVQcmVmaXgiLCJfcHJvcHMkY29udGFpbmVyQ2xhc3MiLCJjb250YWluZXJDbGFzc05hbWUiLCJzdGFydFpvbmVJZCIsInpvbmVJZHMiLCJnZXRJdGVtVGV4dCIsIl9pdGVtJHNldHRpbmdzIiwic2V0dGluZ3MiLCJuZXdJdGVtcyIsIml0IiwicmVzb2x2ZWRDbGFzc05hbWUiLCJzdHJhdGVneSIsImluZGV4IiwiTG9hZGluZ091dGxpbmVkIiwibG9hZGVyQ2xhc3NOYW1lIiwibm9jb250YWluZXIiLCJzbWFsbCIsImlubGluZSIsInNwaW4iXSwic291cmNlUm9vdCI6IiJ9