"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var box_styling_1 = __importDefault(require("./../inherited/box_styling"));
var styled_components_1 = __importDefault(require("styled-components"));
var spacing_1 = __importDefault(require("../inherited/spacing"));
var Center = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: ", ";\n    gap: ", ";\n"], ["\n    ", ";\n    ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: ", ";\n    gap: ", ";\n"])), spacing_1.default, box_styling_1.default, function (props) { return props.direction; }, function (props) { return props.gap; });
exports.default = Center;
var templateObject_1;
