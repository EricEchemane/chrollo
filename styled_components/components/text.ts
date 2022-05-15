import styled from 'styled-components';
import Spacing, { SpacingProps } from '../inherited/spacing';

export type TextType = SpacingProps & {
    fontSize?: string | number;
    opacity?: number;
    align?: string;
    color?: string;
    fontStyle?: string;
    width?: string;
    transform?: string;
};

const Text = styled.div<TextType>`
  ${Spacing};
  font-weight: 400;
  letter-spacing: 0.024em;
  line-height: 24px;
  font-size: ${(props) => props.fontSize || '16px'};
  opacity: ${(props) => props.opacity || 0.8};
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => props.color || 'inherit'};
  width: ${(props) => props.width || 'auto'};
  text-transform: ${(props) => props.transform || 'none'};
  &.title {
    font-size: ${(props) => props.fontSize || '1.3rem'};
    font-weight: 600;
    color: var(--color-fg);
    opacity: ${(props) => props.opacity || 1};
  }
`;

export default Text;