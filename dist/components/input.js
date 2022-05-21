"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    -webkit-text-size-adjust: 100%;\n    flex-grow: 1;\n    border-radius: 6px;\n    border: 1px solid hsla(0, 0%, 100%, .1);\n    background-color: hsla(0, 0%, 100%, .05);\n    padding: ", ";\n    font-size: ", ";\n    color: hsla(0, 0%, 100%, .6);\n    &:focus {\n        box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3);\n    }\n    /* Chrome, Safari, Edge, Opera */\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    /* Firefox */\n    &[type=number] {\n        -moz-appearance: textfield;\n    }\n    ::-ms-reveal {\n        filter: invert(100%);\n    }\n"], ["\n    -webkit-text-size-adjust: 100%;\n    flex-grow: 1;\n    border-radius: 6px;\n    border: 1px solid hsla(0, 0%, 100%, .1);\n    background-color: hsla(0, 0%, 100%, .05);\n    padding: ", ";\n    font-size: ", ";\n    color: hsla(0, 0%, 100%, .6);\n    &:focus {\n        box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3);\n    }\n    /* Chrome, Safari, Edge, Opera */\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    /* Firefox */\n    &[type=number] {\n        -moz-appearance: textfield;\n    }\n    ::-ms-reveal {\n        filter: invert(100%);\n    }\n"])), function (props) { return props.small ? ".5rem" : "1rem"; }, function (props) { return props.small ? ".85rem" : "1rem"; });
exports.default = Input;
var templateObject_1;
