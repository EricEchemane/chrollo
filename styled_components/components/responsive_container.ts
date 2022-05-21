import styled from "styled-components";
import BoxStyles, { BoxStylingType } from "../inherited/box_styling";
import Spacing, { SpacingProps } from "../inherited/spacing";

type wrap = "wrap" | "nowrap";
type direction = "row" | "column" | "row-reverse" | "column-reverse";
type axisAlignment = "flex-start" | "flex-end" | "center" | "space-around" | "space-evenly" | "space-between";

type ResponsiveContainerType = BoxStylingType & SpacingProps & {
    gap?: string;
    wrap?: {
        sm?: wrap;
        md?: wrap;
        lg?: wrap;
        xl?: wrap;
    };
    direction?: {
        sm?: direction;
        md?: direction;
        lg?: direction;
        xl?: direction;
    };
    mainAxisAlignment?: {
        sm?: axisAlignment;
        md?: axisAlignment;
        lg?: axisAlignment;
        xl?: axisAlignment;
    };
    crossAxisAlignment?: {
        sm?: axisAlignment;
        md?: axisAlignment;
        lg?: axisAlignment;
        xl?: axisAlignment;
    };
};

const ResponsiveContainer = styled.div<ResponsiveContainerType>`
    ${BoxStyles};
    ${Spacing};

    display: flex;
    
    gap: ${props => props.gap};
    
    @media screen and (max-width: 576px) {
        gap: ${props => props.wrap?.sm};
        flex-direction: ${props => props.direction?.sm};
        justify-content: ${props => props.mainAxisAlignment?.sm};
        align-items: ${props => props.crossAxisAlignment?.sm};
    }
    @media screen and (max-width: 768px) {
        gap: ${props => props.wrap?.md};
        flex-direction: ${props => props.direction?.md};
        justify-content: ${props => props.mainAxisAlignment?.md};
        align-items: ${props => props.crossAxisAlignment?.md};
    }
    @media screen and (max-width: 992px) {
        gap: ${props => props.wrap?.lg};
        flex-direction: ${props => props.direction?.lg};
        justify-content: ${props => props.mainAxisAlignment?.lg};
        align-items: ${props => props.crossAxisAlignment?.lg};
    }
    @media screen and (max-width: 1200px) {
        gap: ${props => props.wrap?.xl};
        flex-direction: ${props => props.direction?.xl};
        justify-content: ${props => props.mainAxisAlignment?.xl};
        align-items: ${props => props.crossAxisAlignment?.xl};
    }
`;

export default ResponsiveContainer;