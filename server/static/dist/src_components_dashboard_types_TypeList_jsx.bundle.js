"use strict";
(self["webpackChunklagoono_app"] = self["webpackChunklagoono_app"] || []).push([["src_components_dashboard_types_TypeList_jsx"],{

/***/ "./src/components/dashboard/types/ControlPalette.jsx"
/*!***********************************************************!*\
  !*** ./src/components/dashboard/types/ControlPalette.jsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlPalette: () => (/* binding */ ControlPalette)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/CursorText.es.js");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor-icons/react */ "./node_modules/@phosphor-icons/react/dist/csr/NumberSquareEight.es.js");



var controls = [{
  type: 'text',
  label: 'Text Input',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.CursorTextIcon, null)
}, {
  type: 'number',
  label: 'Number Input',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__.NumberSquareEightIcon, null)
}
//{ type: 'select', label: 'Select Dropdown', icon: <InfoCircleFilled /> },
//{ type: 'checkbox', label: 'Checkbox', icon: <InfoCircleFilled /> },
];
var ControlPalette = function ControlPalette(props) {
  var controlMap = controls.map(function (control) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: control.label,
      placement: "left",
      key: control.type
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "control-item"
    }, control.icon));
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/splitter/index.js");
/* harmony import */ var _src_components_ui_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/components/ui/Container */ "./src/components/ui/Container.jsx");
/* harmony import */ var _ControlPalette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ControlPalette */ "./src/components/dashboard/types/ControlPalette.jsx");
/* harmony import */ var _src_components_ui_CustomSortableList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/components/ui/CustomSortableList */ "./src/components/ui/CustomSortableList.jsx");
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedType = _useState4[0],
    setSelectedType = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(fields || [{
      name: 'Field 1',
      type: 'text'
    }, {
      name: 'Field 2',
      type: 'number'
    }]),
    _useState6 = _slicedToArray(_useState5, 2),
    fieldList = _useState6[0],
    setFieldList = _useState6[1];
  var addNewType = function addNewType() {
    var newType = {
      id: "type_".concat(Date.now()),
      "new": true,
      name: "New Type ".concat(types.length + 1)
    };
    setTypes([].concat(_toConsumableArray(types), [newType]));
    setSelectedType(newType);
  };
  var deleteType = function deleteType(typeId) {
    setTypes(types.filter(function (type) {
      return type.id !== typeId;
    }));
    if (selectedType && selectedType.id === typeId) {
      setSelectedType(null);
    }
  };
  var saveChanges = function saveChanges() {
    setTypes(types.map(function (type) {
      return type.id === typeId ? _objectSpread(_objectSpread({}, type), updatedData) : type;
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_Container__WEBPACK_IMPORTED_MODULE_6__.Container, {
    p: "md",
    h100: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    offset: 2,
    span: 20
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Panel, {
    className: "p-20",
    defaultSize: "50%",
    min: "20%",
    max: "70%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Data Types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "primary",
    onClick: addNewType
  }, "Add Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "dashed",
    color: "primary",
    onClick: saveChanges
  }, "Save changes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-20"
  }, types.length == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "info",
    showIcon: true,
    title: "No types created yet. Click the button above to create your first type."
  }) : types.map(function (type) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: type.id,
      className: "type-item ".concat(selectedType && selectedType.id === type.id ? 'selected' : ''),
      onClick: function onClick() {
        return setSelectedType(type);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "name"
    }, type.name));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Panel, {
    className: "p-20"
  }, selectedType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-direction-column h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, selectedType.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Type fields")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-direction-row flex-stretch gap-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-stretch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_ui_CustomSortableList__WEBPACK_IMPORTED_MODULE_8__.CustomSortableList, {
    listItems: fieldList,
    renderItem: renderFieldItem,
    layout: "vertical"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ControlPalette__WEBPACK_IMPORTED_MODULE_7__.ControlPalette, null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  var style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_6__.CSS.Transform.toString(transform),
    transition: transition
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
var CustomSortableList = function CustomSortableList(_ref) {
  var listItems = _ref.listItems,
    selectItemHandle = _ref.selectItemHandle,
    data = _ref.data,
    updateItemList = _ref.updateItemList,
    currentId = _ref.currentId,
    renderItem = _ref.renderItem,
    removeItemHandle = _ref.removeItemHandle,
    layout = _ref.layout,
    _ref$containerClassNa = _ref.containerClassName,
    containerClassName = _ref$containerClassNa === void 0 ? 'cards-container sortable' : _ref$containerClassNa;
  var items = listItems || [];
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
  var sensors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.useSensors)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.PointerSensor, {
    activationConstraint: {
      distance: 8
    }
  }), (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.KeyboardSensor, {
    coordinateGetter: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.sortableKeyboardCoordinates
  }));
  var handleDragEnd = function handleDragEnd(_ref2) {
    var active = _ref2.active,
      over = _ref2.over;
    if (!over) {
      return;
    }
    if (active.id == over.id) {
      return;
    }
    var newAffectedSectionIndex = items.findIndex(function (it) {
      return it.id === active.id;
    });
    var newMovedSectionIndex = items.findIndex(function (it) {
      return it.id === over.id;
    });
    var newItems = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.arrayMove)(items, newAffectedSectionIndex, newMovedSectionIndex);
    if (updateItemList) {
      updateItemList(newItems);
    }
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
    className: containerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.DndContext, {
    sensors: sensors,
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.SortableContext, {
    items: items,
    strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.rectSortingStrategy
  }, (items || []).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortableItem, {
      key: item.id,
      id: item.id,
      item: item,
      renderItem: renderItem,
      text: getItemText(item),
      data: data,
      selectItemHandle: selectItemHandle,
      onRemove: removeItem,
      currentId: currentId
    });
  }))));
};

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfZGFzaGJvYXJkX3R5cGVzX1R5cGVMaXN0X2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQzFCO0FBRStDO0FBRTlFLElBQU1PLFFBQVEsR0FBRyxDQUNiO0VBQUVDLElBQUksRUFBRSxNQUFNO0VBQUVDLEtBQUssRUFBRSxZQUFZO0VBQUVDLElBQUksZUFBRVYsMERBQUEsQ0FBQ0ssaUVBQWMsTUFBRTtBQUFFLENBQUMsRUFDL0Q7RUFBRUcsSUFBSSxFQUFFLFFBQVE7RUFBRUMsS0FBSyxFQUFFLGNBQWM7RUFBRUMsSUFBSSxlQUFFViwwREFBQSxDQUFDTSx3RUFBcUIsTUFBRTtBQUFFO0FBQ3pFO0FBQ0E7QUFBQSxDQUNIO0FBRU0sSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxLQUFLLEVBQUk7RUFDcEMsSUFBTUMsVUFBVSxHQUFHUCxRQUFRLENBQUNRLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO0lBQUEsb0JBQUdoQiwwREFBQSxDQUFDSSw0Q0FBTztNQUFDYSxLQUFLLEVBQUVELE9BQU8sQ0FBQ1AsS0FBTTtNQUFDUyxTQUFTLEVBQUMsTUFBTTtNQUFDQyxHQUFHLEVBQUVILE9BQU8sQ0FBQ1I7SUFBSyxnQkFDeEZSLDBEQUFBO01BQUtvQixTQUFTLEVBQUM7SUFBYyxHQUN4QkosT0FBTyxDQUFDTixJQUNSLENBQ0EsQ0FBQztFQUFBLENBQUMsQ0FBQztFQUM1QixvQkFBUVYsMERBQUE7SUFBS29CLFNBQVMsRUFBQztFQUFpQixHQUMzQk4sVUFDQSxDQUFDO0FBQ2xCLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCd0Q7QUFDUztBQUNiO0FBRUk7QUFDUDtBQUN5QjtBQUUzRSxJQUFNZSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUs7RUFBQSxvQkFDMUI5QiwwREFBQTtJQUFLb0IsU0FBUyxFQUFDLFlBQVk7SUFB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LEVBQUUsRUFBRXhHLEdBQUcsQ0FBQyxVQUFDMEYsSUFBSTtJQUFBLG9CQUNwQnpHLDBEQUFBLENBQUMwRixZQUFZO01BQ1R2RSxHQUFHLEVBQUVzRixJQUFJLENBQUN2RCxFQUFHO01BQUNBLEVBQUUsRUFBRXVELElBQUksQ0FBQ3ZELEVBQUc7TUFDMUJ1RCxJQUFJLEVBQUVBLElBQUs7TUFDWDlCLFVBQVUsRUFBRUEsVUFBVztNQUN2QmdDLElBQUksRUFBRWEsV0FBVyxDQUFDZixJQUFJLENBQUU7TUFDeEJRLElBQUksRUFBRUEsSUFBSztNQUNYRCxnQkFBZ0IsRUFBRUEsZ0JBQWlCO01BQ25DUixRQUFRLEVBQUVKLFVBQVc7TUFDckJlLFNBQVMsRUFBRUE7SUFBVSxDQUFFLENBQUM7RUFBQSxDQUMvQixDQUNnQixDQUNULENBQ1AsQ0FBQztBQUVkLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhZ29vbm8tYXBwLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL3R5cGVzL0NvbnRyb2xQYWxldHRlLmpzeCIsIndlYnBhY2s6Ly9sYWdvb25vLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC90eXBlcy9UeXBlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vbGFnb29uby1hcHAvLi9zcmMvY29tcG9uZW50cy91aS9DdXN0b21Tb3J0YWJsZUxpc3QuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBsYXp5LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgeyBDdXJzb3JUZXh0SWNvbiwgTnVtYmVyU3F1YXJlRWlnaHRJY29uIH0gZnJvbSAnQHBob3NwaG9yLWljb25zL3JlYWN0JztcclxuXHJcbmNvbnN0IGNvbnRyb2xzID0gW1xyXG4gICAgeyB0eXBlOiAndGV4dCcsIGxhYmVsOiAnVGV4dCBJbnB1dCcsIGljb246IDxDdXJzb3JUZXh0SWNvbiAvPiB9LFxyXG4gICAgeyB0eXBlOiAnbnVtYmVyJywgbGFiZWw6ICdOdW1iZXIgSW5wdXQnLCBpY29uOiA8TnVtYmVyU3F1YXJlRWlnaHRJY29uIC8+IH0sXHJcbiAgICAvL3sgdHlwZTogJ3NlbGVjdCcsIGxhYmVsOiAnU2VsZWN0IERyb3Bkb3duJywgaWNvbjogPEluZm9DaXJjbGVGaWxsZWQgLz4gfSxcclxuICAgIC8veyB0eXBlOiAnY2hlY2tib3gnLCBsYWJlbDogJ0NoZWNrYm94JywgaWNvbjogPEluZm9DaXJjbGVGaWxsZWQgLz4gfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250cm9sUGFsZXR0ZSA9IChwcm9wcyk9PiB7XHJcbiAgICBjb25zdCBjb250cm9sTWFwID0gY29udHJvbHMubWFwKGNvbnRyb2w9Pig8VG9vbHRpcCB0aXRsZT17Y29udHJvbC5sYWJlbH0gcGxhY2VtZW50PVwibGVmdFwiIGtleT17Y29udHJvbC50eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD4pKTtcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLXBhbGV0dGVcIj5cclxuICAgICAgICAgICAgICAgIHtjb250cm9sTWFwfVxyXG4gICAgICAgICAgICA8L2Rpdj4pO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IGxhenksIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIENvbCwgUm93LCBTcGxpdHRlciwgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBJbmZvQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL3VpL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IENvbnRyb2xQYWxldHRlIH0gZnJvbSAnLi9Db250cm9sUGFsZXR0ZSc7XHJcbmltcG9ydCB7IEN1c3RvbVNvcnRhYmxlTGlzdCB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy91aS9DdXN0b21Tb3J0YWJsZUxpc3QnO1xyXG5cclxuY29uc3QgcmVuZGVyRmllbGRJdGVtID0gKGZpZWxkKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWl0ZW1cIiBrZXk9e2ZpZWxkLm5hbWV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntmaWVsZC5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZVwiPntmaWVsZC50eXBlfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBUeXBlTGlzdCA9ICh7ZmllbGRzfSk9PiB7XHJcbiAgICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFR5cGUsIHNldFNlbGVjdGVkVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSB1c2VTdGF0ZShmaWVsZHMgfHwgW3tuYW1lOiAnRmllbGQgMScsIHR5cGU6ICd0ZXh0J30sIHtuYW1lOiAnRmllbGQgMicsIHR5cGU6ICdudW1iZXInfV0pO1xyXG4gICAgY29uc3QgYWRkTmV3VHlwZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdUeXBlID0ge1xyXG4gICAgICAgICAgICBpZDogYHR5cGVfJHtEYXRlLm5vdygpfWAsXHJcbiAgICAgICAgICAgIG5ldzogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogYE5ldyBUeXBlICR7dHlwZXMubGVuZ3RoICsgMX1gLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VHlwZXMoWy4uLnR5cGVzLCBuZXdUeXBlXSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUeXBlKG5ld1R5cGUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGRlbGV0ZVR5cGUgPSAodHlwZUlkKSA9PiB7XHJcbiAgICAgICAgc2V0VHlwZXModHlwZXMuZmlsdGVyKHR5cGUgPT4gdHlwZS5pZCAhPT0gdHlwZUlkKSk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHlwZSAmJiBzZWxlY3RlZFR5cGUuaWQgPT09IHR5cGVJZCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFR5cGUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNhdmVDaGFuZ2VzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFR5cGVzKHR5cGVzLm1hcCh0eXBlID0+IHR5cGUuaWQgPT09IHR5cGVJZCA/IHsgLi4udHlwZSwgLi4udXBkYXRlZERhdGEgfSA6IHR5cGUpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKDxDb250YWluZXIgcD1cIm1kXCIgaDEwMD4gXHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezJ9IHNwYW49ezIwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGxpdHRlciBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwbGl0dGVyLlBhbmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTaXplPVwiNTAlXCIgbWluPVwiMjAlXCIgbWF4PVwiNzAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRhdGEgVHlwZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkZE5ld1R5cGV9PkFkZCBUeXBlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFzaGVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17c2F2ZUNoYW5nZXN9PlNhdmUgY2hhbmdlczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVzLmxlbmd0aCA9PSAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdHlwZT1cImluZm9cIiBzaG93SWNvbiB0aXRsZT1cIk5vIHR5cGVzIGNyZWF0ZWQgeWV0LiBDbGljayB0aGUgYnV0dG9uIGFib3ZlIHRvIGNyZWF0ZSB5b3VyIGZpcnN0IHR5cGUuXCIvPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXMubWFwKHR5cGU9Pig8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHR5cGUtaXRlbSAke3NlbGVjdGVkVHlwZSAmJiBzZWxlY3RlZFR5cGUuaWQgPT09IHR5cGUuaWQgPyAnc2VsZWN0ZWQnIDogJyd9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFR5cGUodHlwZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPnt0eXBlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwbGl0dGVyLlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwbGl0dGVyLlBhbmVsIGNsYXNzTmFtZT1cInAtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUeXBlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWRpcmVjdGlvbi1jb2x1bW4gaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntzZWxlY3RlZFR5cGUubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5UeXBlIGZpZWxkczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtZGlyZWN0aW9uLXJvdyBmbGV4LXN0cmV0Y2ggZ2FwLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVNvcnRhYmxlTGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtcz17ZmllbGRMaXN0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckZpZWxkSXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xQYWxldHRlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTZWxlY3QgYSB0eXBlIHRvIHZpZXcgb3IgZWRpdCBpdHMgZGV0YWlscy5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BsaXR0ZXIuUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BsaXR0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBlTGlzdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRG90c1NpeFZlcnRpY2FsSWNvbiwgWEljb24gfSBmcm9tICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFNvcnRhYmxlQ29udGV4dCxcclxuICByZWN0U29ydGluZ1N0cmF0ZWd5LFxyXG4gIHVzZVNvcnRhYmxlLFxyXG4gIHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcclxuICBhcnJheU1vdmUsXHJcbn0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnO1xyXG5pbXBvcnQge1xyXG4gIERuZENvbnRleHQsXHJcbiAgUG9pbnRlclNlbnNvcixcclxuICBLZXlib2FyZFNlbnNvcixcclxuICB1c2VTZW5zb3IsXHJcbiAgdXNlU2Vuc29ycyxcclxufSBmcm9tICdAZG5kLWtpdC9jb3JlJztcclxuaW1wb3J0IHsgQ1NTIH0gZnJvbSAnQGRuZC1raXQvdXRpbGl0aWVzJztcclxuLy9pbXBvcnQgJy4vQXBwLmNzcyc7XHJcblxyXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgYXR0cmlidXRlcywgbGlzdGVuZXJzLCBzZXROb2RlUmVmLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24gfSA9XHJcbiAgICAgICAgdXNlU29ydGFibGUoeyBpZDogcHJvcHMuaWQgfSk7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICB0cmFuc2Zvcm06IENTUy5UcmFuc2Zvcm0udG9TdHJpbmcodHJhbnNmb3JtKSxcclxuICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChwcm9wcy5vblJlbW92ZSkge1xyXG4gICAgICAgICAgICBwcm9wcy5vblJlbW92ZShwcm9wcy5pZCwgcHJvcHMuaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJlZEl0ZW0gPSBwcm9wcy5yZW5kZXJJdGVtID9cclxuICAgICAgICBwcm9wcy5yZW5kZXJJdGVtKHByb3BzLml0ZW0pIDpcclxuICAgICAgICA8c3Bhbj57cHJvcHMudGV4dH08L3NwYW4+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3NldE5vZGVSZWZ9IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwic29ydGFibGUtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtdG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBnYXAtNSBmbGV4LWdyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcmFnLWhhbmRsZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGN1cnNvci1ncmFiXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRyYWcgdG8gcmVvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmF0dHJpYnV0ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmxpc3RlbmVyc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RG90c1NpeFZlcnRpY2FsSWNvbiB3ZWlnaHQ9XCJib2xkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj57cmVuZGVyZWRJdGVtfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZ2FwLTUganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17PFhJY29uIHdlaWdodD1cImJvbGRcIiAvPn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21Tb3J0YWJsZUxpc3QgPSAoeyBsaXN0SXRlbXMsIHNlbGVjdEl0ZW1IYW5kbGUsIGRhdGEsIFxyXG4gICAgdXBkYXRlSXRlbUxpc3QsIGN1cnJlbnRJZCwgcmVuZGVySXRlbSwgcmVtb3ZlSXRlbUhhbmRsZSwgbGF5b3V0LFxyXG4gICAgY29udGFpbmVyQ2xhc3NOYW1lID0gJ2NhcmRzLWNvbnRhaW5lciBzb3J0YWJsZScgfSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBsaXN0SXRlbXMgfHwgW107XHJcblxyXG4gICAgY29uc3QgZ2V0SXRlbVRleHQgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaXRlbSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtLnNldHRpbmdzPy50aXRsZSB8fCBpdGVtLnRpdGxlIHx8IGl0ZW0ubmFtZSB8fCBpdGVtLmxhYmVsIHx8IGl0ZW0udGV4dCB8fCBTdHJpbmcoaXRlbS5pZCB8fCAnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNlbnNvcnMgPSB1c2VTZW5zb3JzKFxyXG4gICAgICAgIHVzZVNlbnNvcihQb2ludGVyU2Vuc29yLCB7XHJcbiAgICAgICAgICAgIGFjdGl2YXRpb25Db25zdHJhaW50OiB7XHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB1c2VTZW5zb3IoS2V5Ym9hcmRTZW5zb3IsIHtcclxuICAgICAgICAgICAgY29vcmRpbmF0ZUdldHRlcjogc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzLFxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAoeyBhY3RpdmUsIG92ZXIgfSkgPT4ge1xyXG4gICAgICAgIGlmICghb3Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWN0aXZlLmlkID09IG92ZXIuaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdBZmZlY3RlZFNlY3Rpb25JbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXQpID0+IGl0LmlkID09PSBhY3RpdmUuaWQpO1xyXG4gICAgICAgIGNvbnN0IG5ld01vdmVkU2VjdGlvbkluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpdCkgPT4gaXQuaWQgPT09IG92ZXIuaWQpO1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gYXJyYXlNb3ZlKFxyXG4gICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgbmV3QWZmZWN0ZWRTZWN0aW9uSW5kZXgsXHJcbiAgICAgICAgICAgIG5ld01vdmVkU2VjdGlvbkluZGV4XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodXBkYXRlSXRlbUxpc3QpIHtcclxuICAgICAgICAgICAgdXBkYXRlSXRlbUxpc3QobmV3SXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpdGVtSWQsIGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAocmVtb3ZlSXRlbUhhbmRsZSkge1xyXG4gICAgICAgICAgICByZW1vdmVJdGVtSGFuZGxlKGl0ZW1JZCwgaXRlbSwgaXRlbXMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXQpID0+IGl0LmlkICE9PSBpdGVtSWQpO1xyXG5cclxuICAgICAgICBpZiAodXBkYXRlSXRlbUxpc3QpIHtcclxuICAgICAgICAgICAgdXBkYXRlSXRlbUxpc3QobmV3SXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBpZiAobGF5b3V0ID09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICBjb250YWluZXJDbGFzc05hbWUgKz0gJyB2ZXJ0aWNhbCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc05hbWV9PlxyXG4gICAgICAgIDxEbmRDb250ZXh0IHNlbnNvcnM9e3NlbnNvcnN9IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgIDxTb3J0YWJsZUNvbnRleHQgaXRlbXM9e2l0ZW1zfSBzdHJhdGVneT17cmVjdFNvcnRpbmdTdHJhdGVneX0+XHJcbiAgICAgICAgICAgIHsoaXRlbXMgfHwgW10pLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNvcnRhYmxlSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9IGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVySXRlbX1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtnZXRJdGVtVGV4dChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW1IYW5kbGU9e3NlbGVjdEl0ZW1IYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e3JlbW92ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudElkPXtjdXJyZW50SWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NvcnRhYmxlQ29udGV4dD5cclxuICAgICAgICA8L0RuZENvbnRleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImxhenkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRvb2x0aXAiLCJDdXJzb3JUZXh0SWNvbiIsIk51bWJlclNxdWFyZUVpZ2h0SWNvbiIsImNvbnRyb2xzIiwidHlwZSIsImxhYmVsIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJDb250cm9sUGFsZXR0ZSIsInByb3BzIiwiY29udHJvbE1hcCIsIm1hcCIsImNvbnRyb2wiLCJ0aXRsZSIsInBsYWNlbWVudCIsImtleSIsImNsYXNzTmFtZSIsIkFsZXJ0IiwiQnV0dG9uIiwiQ29sIiwiUm93IiwiU3BsaXR0ZXIiLCJJbmZvQ2lyY2xlRmlsbGVkIiwiQ29udGFpbmVyIiwiQ3VzdG9tU29ydGFibGVMaXN0IiwicmVuZGVyRmllbGRJdGVtIiwiZmllbGQiLCJuYW1lIiwiVHlwZUxpc3QiLCJfcmVmIiwiZmllbGRzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidHlwZXMiLCJzZXRUeXBlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2VsZWN0ZWRUeXBlIiwic2V0U2VsZWN0ZWRUeXBlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJmaWVsZExpc3QiLCJzZXRGaWVsZExpc3QiLCJhZGROZXdUeXBlIiwibmV3VHlwZSIsImlkIiwiY29uY2F0IiwiRGF0ZSIsIm5vdyIsImxlbmd0aCIsIl90b0NvbnN1bWFibGVBcnJheSIsImRlbGV0ZVR5cGUiLCJ0eXBlSWQiLCJmaWx0ZXIiLCJzYXZlQ2hhbmdlcyIsIl9vYmplY3RTcHJlYWQiLCJ1cGRhdGVkRGF0YSIsInAiLCJoMTAwIiwib2Zmc2V0Iiwic3BhbiIsIlBhbmVsIiwiZGVmYXVsdFNpemUiLCJtaW4iLCJtYXgiLCJvbkNsaWNrIiwidmFyaWFudCIsImNvbG9yIiwic2hvd0ljb24iLCJsaXN0SXRlbXMiLCJyZW5kZXJJdGVtIiwibGF5b3V0IiwiRG90c1NpeFZlcnRpY2FsSWNvbiIsIlhJY29uIiwiU29ydGFibGVDb250ZXh0IiwicmVjdFNvcnRpbmdTdHJhdGVneSIsInVzZVNvcnRhYmxlIiwic29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzIiwiYXJyYXlNb3ZlIiwiRG5kQ29udGV4dCIsIlBvaW50ZXJTZW5zb3IiLCJLZXlib2FyZFNlbnNvciIsInVzZVNlbnNvciIsInVzZVNlbnNvcnMiLCJDU1MiLCJTb3J0YWJsZUl0ZW0iLCJfdXNlU29ydGFibGUiLCJhdHRyaWJ1dGVzIiwibGlzdGVuZXJzIiwic2V0Tm9kZVJlZiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJzdHlsZSIsIlRyYW5zZm9ybSIsInRvU3RyaW5nIiwicmVtb3ZlSXRlbSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uUmVtb3ZlIiwiaXRlbSIsInJlbmRlcmVkSXRlbSIsInRleHQiLCJyZWYiLCJfZXh0ZW5kcyIsIndlaWdodCIsIm9uUG9pbnRlckRvd24iLCJzZWxlY3RJdGVtSGFuZGxlIiwiZGF0YSIsInVwZGF0ZUl0ZW1MaXN0IiwiY3VycmVudElkIiwicmVtb3ZlSXRlbUhhbmRsZSIsIl9yZWYkY29udGFpbmVyQ2xhc3NOYSIsImNvbnRhaW5lckNsYXNzTmFtZSIsIml0ZW1zIiwiZ2V0SXRlbVRleHQiLCJfaXRlbSRzZXR0aW5ncyIsIlN0cmluZyIsInNldHRpbmdzIiwic2Vuc29ycyIsImFjdGl2YXRpb25Db25zdHJhaW50IiwiZGlzdGFuY2UiLCJjb29yZGluYXRlR2V0dGVyIiwiaGFuZGxlRHJhZ0VuZCIsIl9yZWYyIiwiYWN0aXZlIiwib3ZlciIsIm5ld0FmZmVjdGVkU2VjdGlvbkluZGV4IiwiZmluZEluZGV4IiwiaXQiLCJuZXdNb3ZlZFNlY3Rpb25JbmRleCIsIm5ld0l0ZW1zIiwiaXRlbUlkIiwib25EcmFnRW5kIiwic3RyYXRlZ3kiXSwic291cmNlUm9vdCI6IiJ9