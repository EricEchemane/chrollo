import { getBackground } from './switch';
import styled from "styled-components";
import Spacing, { SpacingProps } from "../inherited/spacing";

type SliderType = SpacingProps & {
    hue?: number;
};

const Slider = styled.input.attrs(() => ({
    type: 'range',
    role: 'slider'
})) <SliderType>`

    ${Spacing};
    --track-fill: 30%;
    --thumb-offset: 0rem;
    --thumb-color: ${props => getBackground(props)};
    --bg: hsla(0, 0%, 100%, .1);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    min-width: 18ch;
    background: var(--color-bg-300);
    height: 6px;
    border-radius: 1rem;
    transition: 200ms ease;
    border: none;

    &:focus-visible {
        --thumb-offset: 0.65rem;
    }
    &:focus-visible::-webkit-slider-runnable-track  {
        box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .4);
    }
    &::-webkit-slider-thumb:hover {
        --thumb-offset: 0.65rem;
    }
    &::-webkit-slider-runnable-track {
        height: 6px;
        border-radius: 1rem;
        background: -webkit-gradient(
            linear,
            left top,
            right top,
            from(var(--thumb-color)),
            color-stop(0%, transparent)
        );
        background: linear-gradient(
            to right,
            var(--thumb-color) var(--track-fill),
            transparent 0%
        );
    }
    &::-moz-range-track {
        height: 6px;
        background: linear-gradient(
            to right,
            var(--thumb-color) var(--track-fill),
            transparent 0%
        );
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        border: 3px solid var(--color-bg);
        background-color: var(--thumb-color);
        position: relative;
        top: -6px;
        box-shadow: 0 0 0 var(--thumb-offset) hsla(0, 0%, 100%, .1);
        -webkit-transition: 100ms ease;
        transition: 100ms ease;
    }

    &::-moz-range-thumb {
        -moz-appearance: none;
        appearance: none;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        border: 3px solid var(--bg);
        background-color: var(--thumb-color);
        position: relative;
        top: -6px;
        box-shadow: 0 0 0 var(--thumb-offset) rgba(0, 0, 0, 0.2);
        -webkit-transition: 100ms ease;
        transition: 100ms ease;
    }
`;

export default Slider;