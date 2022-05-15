import styled from "styled-components";
import BoxStyles, { BoxStylingType } from './../inherited/box_styling';
import Spacing, { SpacingProps } from "../inherited/spacing";

type RowPropsType = SpacingProps & BoxStylingType & {
    reverse?: boolean; // reverse the direction of flex
    gap?: string;
    mainAxisAlignment?: "flex-start" | "flex-end" | "center" | "space-around" | "space-evenly" | "space-between";
    crossAxisAlignment?: "flex-start" | "flex-end" | "center" | "space-around" | "space-evenly" | "space-between";
};

const Row = styled.div<RowPropsType>`
    ${Spacing};
    ${BoxStyles};

    display: flex;

    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    gap: ${props => props.gap};
    justify-content: ${props => props.mainAxisAlignment};
    align-items: ${props => props.crossAxisAlignment};
`;

export default Row;