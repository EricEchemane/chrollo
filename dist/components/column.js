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
var box_styling_1 = __importDefault(require("./../inherited/box_styling"));
var spacing_1 = __importDefault(require("../inherited/spacing"));
var Column = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n\n    display: flex;\n\n    flex-direction: ", ";;\n    gap: ", ";\n    justify-content: ", ";\n    align-items: ", ";\n"], ["\n    ", ";\n    ", ";\n\n    display: flex;\n\n    flex-direction: ", ";;\n    gap: ", ";\n    justify-content: ", ";\n    align-items: ", ";\n"])), spacing_1.default, box_styling_1.default, function (props) { return props.reverse ? 'column-reverse' : 'column'; }, function (props) { return props.gap; }, function (props) { return props.mainAxisAlignment; }, function (props) { return props.crossAxisAlignment; });
exports.default = Column;
var templateObject_1;
