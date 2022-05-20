import Spacing, { SpacingProps } from '../inherited/spacing';
import styled from "styled-components";

type AnchorType = SpacingProps & {
    color?: string;
    cursorPointer?: boolean;
    direction?: "row" | "row-reverse";
    filled?: boolean;
    gap?: string;
    hue?: number;
};

export const hueErrorMessage = 'Hue must be from 0 to 360 in filled anchors.';

export const isInvalidHue = (hue?: number) => !hue || hue < 0 || hue > 360;

const getBackground = (props: AnchorType, alpha: number = 0.15) => {
    if (props.filled) {
        if (isInvalidHue(props.hue)) throw new Error(hueErrorMessage);
        return `hsla(${props.hue || 255}, 100%, 76%, ${alpha})`;
    }
    else return 'transparent';
};

const getColor = (props: AnchorType) => {
    if (props.filled) {
        if (isInvalidHue(props.hue)) throw new Error(hueErrorMessage);
        return `hsl(${props.hue || 255}, 100%, 76%)`;
    }
    else if (props.color) return props.color;
    else return 'var(--color-fg)';
};

const Button = styled.button<AnchorType>`
    ${Spacing};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1rem - 2px);
    border-radius: 8px;
    transition: background-color .2s;
    letter-spacing: .05ch;

    padding: ${props => props.filled ? '.4rem .9rem' : 0};
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap ? props.gap : '1ch'};
    background: ${props => getBackground(props)};
    color: ${props => getColor(props)};
    cursor: ${props => props.cursorPointer ? 'pointer' : 'normal'};

    &:hover {
        background: ${props => getBackground(props, 0.25)};
    }
    & > .icon {
        color: ${props => getColor(props)};
        transition: 200ms;
        font-weight: bolder;
        font-size: 1rem;
    }
    &:hover > .icon {
        transform: ${props => props.direction != 'row-reverse' ? 'translateX(.3ch)' : '0'};
    }
`;

export default Button;