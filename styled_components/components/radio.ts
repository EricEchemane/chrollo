import { getBackground } from './switch';
import styled from "styled-components";
import Spacing, { SpacingProps } from "../inherited/spacing";

type RadioType = SpacingProps & {
    hue?: number;
};

const Radio = styled.input.attrs(() => ({
    type: 'radio',
    role: 'radio'
})) <RadioType>`
    ${Spacing};
    --bg: hsla(0, 0%, 100%, .1);
    cursor: pointer;
    transition: 150ms ease;
    appearance: none;
    display: inline-block;
    outline: none;
    height: 1.3rem;
    width: 1.3rem;
    border: 4px solid var(--bg);
    background-color: var(--bg);
    position: relative;
    border-radius: 50%;

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
    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 50%;
        transition: 200ms;
    }

    &:focus-visible::after {
        box-shadow: 0 0 0 .8rem hsla(0, 0%, 100%, .3);
    }

    &:hover::after {
        box-shadow: 0 0 0 .8rem hsla(0, 0%, 100%, .3);
    }
    &:checked::before {
        background-color: ${props => getBackground(props)};
        filter: brightness(1.1);
    }
`;

export default Radio;