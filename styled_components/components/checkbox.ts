import { getBackground } from './switch';
import styled from "styled-components";
import Spacing, { SpacingProps } from "../inherited/spacing";

type CheckboxType = SpacingProps & {
    hue?: number;
};

const Checkbox = styled.input.attrs(() => ({
    type: 'checkbox',
    role: 'checkbox'
})) <CheckboxType>`
    ${Spacing};
    --bg: hsla(0, 0%, 100%, .1);
    cursor: pointer;
    transition: 150ms ease;
    appearance: none;
    display: inline-block;
    outline: none;
    height: 1.3rem;
    width: 1.3rem;
    border: 1px solid var(--bg);
    background-color: var(--bg);
    position: relative;
    border-radius: .2rem;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 50%;
        opacity: 0.3;
        transition: 200ms;
    }

    &:focus-visible::after {
        box-shadow: 0 0 0 .8rem hsla(0, 0%, 100%, .3);
    }

    &:hover::after {
        box-shadow: 0 0 0 .8rem hsla(0, 0%, 100%, .3);
    }
    &:checked {
        background-color: ${props => getBackground(props)};
    }
    &:checked::before {
        font-size: 1rem;
        position: absolute;
        top: 2px;
        left: 3px;
        right: 0;
        bottom: 0;
        line-height: 0.9;
        color: white;
        z-index: 2;
    }
`;

export default Checkbox;