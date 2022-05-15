import BoxStyles, { BoxStylingType } from './../inherited/box_styling';
import styled from "styled-components";
import Spacing, { SpacingProps } from "../inherited/spacing";

type BoxPropsType = SpacingProps & BoxStylingType;

const Box = styled.div<BoxPropsType>`
    ${Spacing};
    ${BoxStyles};
`;

export default Box;