"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Spacing = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n  /* over rides old values */\n  padding-top: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  margin: ", ";\n  /* over rides old values */\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"], ["\n  padding: ", ";\n  /* over rides old values */\n  padding-top: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  margin: ", ";\n  /* over rides old values */\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"])), function (props) {
    if (typeof props.p === 'string')
        return props.p;
    if (props.p)
        return "".concat(props.p, "rem");
    if (props.px && props.py)
        return "".concat(props.py, "rem ").concat(props.px, "rem");
    if (props.px && !props.py)
        return "0 ".concat(props.px, "rem");
    if (!props.px && props.py)
        return "".concat(props.py, "rem 0");
}, function (props) { return props.pt + 'rem' || 0; }, function (props) { return props.pb + 'rem' || 0; }, function (props) { return props.pl + 'rem' || 0; }, function (props) { return props.pr + 'rem' || 0; }, function (props) {
    if (typeof props.m === 'string')
        return props.m;
    if (props.m)
        return "".concat(props.m, "rem");
    if (props.mx && props.my)
        return "".concat(props.my, "rem ").concat(props.mx, "rem");
    if (props.mx && !props.my)
        return "0 ".concat(props.mx, "rem");
    if (!props.mx && props.my)
        return "".concat(props.my, "rem 0");
}, function (props) { return props.mt + 'rem' || 0; }, function (props) { return props.mb + 'rem' || 0; }, function (props) { return props.ml + 'rem' || 0; }, function (props) { return props.mr + 'rem' || 0; });
exports.default = Spacing;
var templateObject_1;
