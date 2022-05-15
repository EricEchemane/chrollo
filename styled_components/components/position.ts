import BoxStyles, { BoxStylingType } from '../inherited/box_styling';
import styled from "styled-components";
import Spacing, { SpacingProps } from "../inherited/spacing";

type PositionPropsType = SpacingProps & BoxStylingType & {
    top?: number | string,
    bottom?: number | string,
    left?: number | string,
    right?: number | string,
};

const Position = styled.div<PositionPropsType>`
    ${Spacing};
    ${BoxStyles};
    position: ${props => props.position || "absolute"};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.right};
`;

export default Position;