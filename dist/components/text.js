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
var spacing_1 = __importDefault(require("../inherited/spacing"));
var Text = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  font-weight: 400;\n  letter-spacing: 0.024em;\n  line-height: 24px;\n  font-size: ", ";\n  opacity: ", ";\n  text-align: ", ";\n  color: ", ";\n  width: ", ";\n  text-transform: ", ";\n  &.title {\n    font-size: ", ";\n    font-weight: 600;\n    color: var(--color-fg);\n    opacity: ", ";\n  }\n"], ["\n  ", ";\n  font-weight: 400;\n  letter-spacing: 0.024em;\n  line-height: 24px;\n  font-size: ", ";\n  opacity: ", ";\n  text-align: ", ";\n  color: ", ";\n  width: ", ";\n  text-transform: ", ";\n  &.title {\n    font-size: ", ";\n    font-weight: 600;\n    color: var(--color-fg);\n    opacity: ", ";\n  }\n"])), spacing_1.default, function (props) { return props.fontSize || '1rem'; }, function (props) { return props.opacity || 0.8; }, function (props) { return props.align || 'left'; }, function (props) { return props.color || 'inherit'; }, function (props) { return props.width || 'auto'; }, function (props) { return props.transform || 'none'; }, function (props) { return props.fontSize || '1.2rem'; }, function (props) { return props.opacity || 1; });
exports.default = Text;
var templateObject_1;
