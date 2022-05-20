import styled from "styled-components";
import Spacing, { SpacingProps } from "../inherited/spacing";

type InputType = SpacingProps & {
    small?: boolean;
};

const Input = styled.input<InputType>`
    -webkit-text-size-adjust: 100%;
    flex-grow: 1;
    border-radius: 6px;
    border: 1px solid hsla(0, 0%, 100%, .1);
    background-color: hsla(0, 0%, 100%, .05);
    padding: ${props => props.small ? ".5rem" : "1rem"};
    font-size: ${props => props.small ? ".85rem" : "1rem"};
    color: hsla(0, 0%, 100%, .6);
    &:focus {
        box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3);
    }
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    /* Firefox */
    &[type=number] {
        -moz-appearance: textfield;
    }
    ::-ms-reveal {
        filter: invert(100%);
    }
`;

export default Input;