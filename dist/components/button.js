"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInvalidHue = exports.hueErrorMessage = void 0;
var spacing_1 = __importDefault(require("../inherited/spacing"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.hueErrorMessage = 'Hue must be from 0 to 360 in filled anchors.';
var isInvalidHue = function (hue) { return !hue || hue < 0 || hue > 360; };
exports.isInvalidHue = isInvalidHue;
var getBackground = function (props, alpha) {
    if (alpha === void 0) { alpha = 0.15; }
    if (props.filled) {
        if (props.hue && !(0, exports.isInvalidHue)(props.hue))
            return "hsla(".concat(props.hue, ", 100%, 76%, ").concat(alpha, ")");
        else
            return "hsla(0, 0%, 100%, .1)";
    }
    else
        return 'transparent';
};
var getColor = function (props) {
    if (props.filled) {
        if (props.hue && !(0, exports.isInvalidHue)(props.hue))
            return "hsl(".concat(props.hue, ", 100%, 76%)");
        else
            return "hsla(0, 0%, 100%, .9)";
    }
    else if (props.color)
        return props.color;
    else
        return 'var(--color-fg)';
};
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(1rem - 2px);\n    border-radius: 8px;\n    transition: background-color .1s;\n    letter-spacing: .05ch;\n\n    padding: ", ";\n    flex-direction: ", ";\n    gap: ", ";\n    background: ", ";\n    color: ", ";\n    cursor: ", ";\n\n    &:hover {\n        background: ", ";\n    }\n    & > .icon {\n        color: ", ";\n        transition: 200ms;\n        font-weight: bolder;\n        font-size: 1rem;\n    }\n    &:hover > .icon {\n        transform: ", ";\n    }\n"], ["\n    ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(1rem - 2px);\n    border-radius: 8px;\n    transition: background-color .1s;\n    letter-spacing: .05ch;\n\n    padding: ", ";\n    flex-direction: ", ";\n    gap: ", ";\n    background: ", ";\n    color: ", ";\n    cursor: ", ";\n\n    &:hover {\n        background: ", ";\n    }\n    & > .icon {\n        color: ", ";\n        transition: 200ms;\n        font-weight: bolder;\n        font-size: 1rem;\n    }\n    &:hover > .icon {\n        transform: ", ";\n    }\n"])), spacing_1.default, function (props) { return props.filled ? '.4rem .9rem' : 0; }, function (props) { return props.direction; }, function (props) { return props.gap ? props.gap : '1ch'; }, function (props) { return getBackground(props); }, function (props) { return getColor(props); }, function (props) { return props.cursorPointer ? 'pointer' : 'normal'; }, function (props) {
    return props.hue ? getBackground(props, 0.2)
        : props.filled ? 'hsla(0, 0%, 100%, .2)' : 'transparent';
}, function (props) { return getColor(props); }, function (props) { return props.direction != 'row-reverse' ? 'translateX(.3ch)' : '0'; });
exports.default = Button;
var templateObject_1;
