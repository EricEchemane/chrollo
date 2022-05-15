"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var BoxStyles = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n"], ["\n    border: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n"])), function (props) { return props.border || 'none'; }, function (props) { return props.radius || 'none'; }, function (props) { return props.shadow || 'none'; });
exports.default = BoxStyles;
var templateObject_1;