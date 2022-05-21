import styled from "styled-components";
import Spacing, { SpacingProps } from "../inherited/spacing";
import { isInvalidHue } from "./button";

type SwitchType = SpacingProps & {
    hue?: number;
};

export const getColor = (props: any) => {
    if (props.hue && !isInvalidHue(props.hue)) return `hsl(${props.hue}, 100%, 76%)`;
    else return `hsla(0, 0%, 100%, .9)`;
};

export const getBackground = (props: any, alpha: number = 0.15) => {
    if (props.hue && !isInvalidHue(props.hue)) return `hsla(${props.hue}, 50%, 50%, 1)`;
    else return `hsla(255, 50%, 50%, 1)`;
};

const Switch = styled.input.attrs(() => ({
    type: 'checkbox',
    role: 'switch'
})) <SwitchType>`
    ${Spacing};
    transition: 150ms ease;
    appearance: none;
    display: inline-block;
    outline: none;
    width: calc(3rem + 4px);
    height: calc(1.5rem + 4px);
    border-radius: 2rem;
    position: relative;
    box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid hsla(0, 0%, 100%, .1);
    background-color: hsla(0, 0%, 100%, .1);
    cursor: pointer;
    --transformX: 3px;
    
    &:checked {
        background: ${props => getBackground(props)};
    }
    &:focus-visible {
        box-shadow: 0 0 0 2px hsla(0, 0%, 100%, .5);
    }
    &:checked::before {
        background: white;
        box-shadow: 0 0 2px hsla(0, 0%, 0%, 1);
    }
    &::after {
        all: unset !important;
    }
    &:checked::before {
        --transformX: calc(100% + 6px);
    }
    &::before {
        content: "";
        transition: 100ms ease;
        display: block;
        width: calc(50% - 4px);
        height: calc(100% - 6px);
        border-radius: 50%;
        background-color: hsla(0, 0%, 100%, .3);
        transform: translate(var(--transformX), 3px);
    }
`;

export default Switch;