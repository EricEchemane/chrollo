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
var button_1 = require("./button");
var getBackground = function (props, alpha) {
    if (alpha === void 0) { alpha = 0.15; }
    if (props.hue) {
        if ((0, button_1.isInvalidHue)(props.hue))
            throw new Error(button_1.hueErrorMessage);
        return "hsla(".concat(props.hue || 255, ", 100%, 76%, ").concat(alpha, ")");
    }
    return "hsla(".concat(0, ", 100%, 76%, ").concat(alpha, ")");
};
var getColor = function (props) {
    if (props.hue) {
        if ((0, button_1.isInvalidHue)(props.hue))
            throw new Error(button_1.hueErrorMessage);
        return "hsl(".concat(props.hue || 255, ", 100%, 76%)");
    }
    return "hsl(".concat(0, ", 100%, 76%)");
};
var Badge = styled_components_1.default.sup(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    background: ", ";\n    color: ", ";\n    padding: .2rem .3rem;\n    font-size: ", ";\n    border-radius: .3rem;\n"], ["\n    ", ";\n    background: ", ";\n    color: ", ";\n    padding: .2rem .3rem;\n    font-size: ", ";\n    border-radius: .3rem;\n"])), spacing_1.default, function (props) { return getBackground(props); }, function (props) { return getColor(props); }, function (props) { return props.fontSize || '.8rem'; });
exports.default = Badge;
var templateObject_1;
