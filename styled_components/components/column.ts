import styled from "styled-components";
import BoxStyles, { BoxStylingType } from './../inherited/box_styling';
import Spacing, { SpacingProps } from "../inherited/spacing";

type ColumnPropsType = SpacingProps & BoxStylingType & {
    reverse?: boolean; // reverse the direction of flex
    gap?: string;
    mainAxisAlignment?: "flex-start" | "flex-end" | "center";
    crossAxisAlignment?: "flex-start" | "flex-end" | "center";
};

const Column = styled.div<ColumnPropsType>`
    ${Spacing};
    ${BoxStyles};

    display: flex;

    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};;
    gap: ${props => props.gap};
    justify-content: ${props => props.mainAxisAlignment};
    align-items: ${props => props.crossAxisAlignment};
`;

export default Column;