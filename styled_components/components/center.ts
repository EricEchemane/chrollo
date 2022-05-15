import BoxStyles, { BoxStylingType } from './../inherited/box_styling';
import styled from "styled-components";
import Spacing, { SpacingProps } from "../inherited/spacing";

type CenterPropsType = SpacingProps & BoxStylingType & {
    gap?: string;
    direction?: "row" | "column";
};

const Center = styled.div<CenterPropsType>`
    ${Spacing};
    ${BoxStyles};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap};
`;

export default Center;