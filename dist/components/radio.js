"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var switch_1 = require("./switch");
var styled_components_1 = __importDefault(require("styled-components"));
var spacing_1 = __importDefault(require("../inherited/spacing"));
var Radio = styled_components_1.default.input.attrs(function () { return ({
    type: 'radio',
    role: 'radio'
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    --bg: hsla(0, 0%, 100%, .1);\n    cursor: pointer;\n    transition: 150ms ease;\n    appearance: none;\n    display: inline-block;\n    outline: none;\n    height: 1.3rem;\n    width: 1.3rem;\n    border: 4px solid var(--bg);\n    background-color: var(--bg);\n    position: relative;\n    border-radius: 50%;\n\n    &::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-radius: 50%;\n        opacity: 0.3;\n        transition: 200ms;\n    }\n    &::before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-radius: 50%;\n        transition: 200ms;\n    }\n\n    &:focus-visible::after {\n        box-shadow: 0 0 0 .8rem hsla(0, 0%, 100%, .3);\n    }\n\n    &:hover::after {\n        box-shadow: 0 0 0 .8rem hsla(0, 0%, 100%, .3);\n    }\n    &:checked::before {\n        background-color: ", ";\n        filter: brightness(1.1);\n    }\n"], ["\n    ", ";\n    --bg: hsla(0, 0%, 100%, .1);\n    cursor: pointer;\n    transition: 150ms ease;\n    appearance: none;\n    display: inline-block;\n    outline: none;\n    height: 1.3rem;\n    width: 1.3rem;\n    border: 4px solid var(--bg);\n    background-color: var(--bg);\n    position: relative;\n    border-radius: 50%;\n\n    &::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-radius: 50%;\n        opacity: 0.3;\n        transition: 200ms;\n    }\n    &::before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-radius: 50%;\n        transition: 200ms;\n    }\n\n    &:focus-visible::after {\n        box-shadow: 0 0 0 .8rem hsla(0, 0%, 100%, .3);\n    }\n\n    &:hover::after {\n        box-shadow: 0 0 0 .8rem hsla(0, 0%, 100%, .3);\n    }\n    &:checked::before {\n        background-color: ", ";\n        filter: brightness(1.1);\n    }\n"])), spacing_1.default, function (props) { return (0, switch_1.getBackground)(props); });
exports.default = Radio;
var templateObject_1;
