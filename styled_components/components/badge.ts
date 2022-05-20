import styled from "styled-components";
import Spacing, { SpacingProps } from "../inherited/spacing";
import { hueErrorMessage, isInvalidHue } from "./button";

type BadgeType = SpacingProps & {
    hue?: number;
    fontSize?: string;
};

const getBackground = (props: BadgeType, alpha: number = 0.15) => {
    if (props.hue) {
        if (isInvalidHue(props.hue)) throw new Error(hueErrorMessage);
        return `hsla(${props.hue || 255}, 100%, 76%, ${alpha})`;
    }
    return `hsla(${0}, 100%, 76%, ${alpha})`;
};

const getColor = (props: BadgeType) => {
    if (props.hue) {
        if (isInvalidHue(props.hue)) throw new Error(hueErrorMessage);
        return `hsl(${props.hue || 255}, 100%, 76%)`;
    }
    return `hsl(${0}, 100%, 76%)`;
};

const Badge = styled.sup<BadgeType>`
    ${Spacing};
    background: ${props => getBackground(props)};
    color: ${props => getColor(props)};
    padding: .2rem .3rem;
    font-size: ${props => props.fontSize || '.8rem'};
    border-radius: .3rem;
`;

export default Badge;