"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var box_styling_1 = __importDefault(require("../inherited/box_styling"));
var styled_components_1 = __importDefault(require("styled-components"));
var spacing_1 = __importDefault(require("../inherited/spacing"));
var Position = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    position: ", ";\n    top: ", ";\n    bottom: ", ";\n    left: ", ";\n    right: ", ";\n"], ["\n    ", ";\n    ", ";\n    position: ", ";\n    top: ", ";\n    bottom: ", ";\n    left: ", ";\n    right: ", ";\n"])), spacing_1.default, box_styling_1.default, function (props) { return props.position || "absolute"; }, function (props) { return props.top; }, function (props) { return props.bottom; }, function (props) { return props.left; }, function (props) { return props.right; });
exports.default = Position;
var templateObject_1;
