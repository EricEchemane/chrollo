"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackground = exports.getColor = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var spacing_1 = __importDefault(require("../inherited/spacing"));
var button_1 = require("./button");
var getColor = function (props) {
    if (props.hue && !(0, button_1.isInvalidHue)(props.hue))
        return "hsl(".concat(props.hue, ", 100%, 76%)");
    else
        return "hsla(0, 0%, 100%, .9)";
};
exports.getColor = getColor;
var getBackground = function (props, alpha) {
    if (alpha === void 0) { alpha = 0.15; }
    if (props.hue && !(0, button_1.isInvalidHue)(props.hue))
        return "hsla(".concat(props.hue, ", 50%, 50%, 1)");
    else
        return "hsla(255, 50%, 50%, 1)";
};
exports.getBackground = getBackground;
var Switch = styled_components_1.default.input.attrs(function () { return ({
    type: 'checkbox',
    role: 'switch'
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    transition: 150ms ease;\n    appearance: none;\n    display: inline-block;\n    outline: none;\n    width: calc(3rem + 4px);\n    height: calc(1.5rem + 4px);\n    border-radius: 2rem;\n    position: relative;\n    box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.1);\n    border: 1px solid hsla(0, 0%, 100%, .1);\n    background-color: hsla(0, 0%, 100%, .1);\n    cursor: pointer;\n    --transformX: 3px;\n    \n    &:checked {\n        background: ", ";\n    }\n    &:focus-visible {\n        box-shadow: 0 0 0 2px hsla(0, 0%, 100%, .5);\n    }\n    &:checked::before {\n        background: white;\n        box-shadow: 0 0 2px hsla(0, 0%, 0%, 1);\n    }\n    &::after {\n        all: unset !important;\n    }\n    &:checked::before {\n        --transformX: calc(100% + 6px);\n    }\n    &::before {\n        content: \"\";\n        transition: 100ms ease;\n        display: block;\n        width: calc(50% - 4px);\n        height: calc(100% - 6px);\n        border-radius: 50%;\n        background-color: hsla(0, 0%, 100%, .3);\n        transform: translate(var(--transformX), 3px);\n    }\n"], ["\n    ", ";\n    transition: 150ms ease;\n    appearance: none;\n    display: inline-block;\n    outline: none;\n    width: calc(3rem + 4px);\n    height: calc(1.5rem + 4px);\n    border-radius: 2rem;\n    position: relative;\n    box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.1);\n    border: 1px solid hsla(0, 0%, 100%, .1);\n    background-color: hsla(0, 0%, 100%, .1);\n    cursor: pointer;\n    --transformX: 3px;\n    \n    &:checked {\n        background: ", ";\n    }\n    &:focus-visible {\n        box-shadow: 0 0 0 2px hsla(0, 0%, 100%, .5);\n    }\n    &:checked::before {\n        background: white;\n        box-shadow: 0 0 2px hsla(0, 0%, 0%, 1);\n    }\n    &::after {\n        all: unset !important;\n    }\n    &:checked::before {\n        --transformX: calc(100% + 6px);\n    }\n    &::before {\n        content: \"\";\n        transition: 100ms ease;\n        display: block;\n        width: calc(50% - 4px);\n        height: calc(100% - 6px);\n        border-radius: 50%;\n        background-color: hsla(0, 0%, 100%, .3);\n        transform: translate(var(--transformX), 3px);\n    }\n"])), spacing_1.default, function (props) { return (0, exports.getBackground)(props); });
exports.default = Switch;
var templateObject_1;
