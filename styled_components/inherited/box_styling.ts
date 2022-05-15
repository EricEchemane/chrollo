import { ThemeProps, css } from 'styled-components';

export type BoxStylingType = ThemeProps<any> & {
    border?: string;
    radius?: string;
    shadow?: string;
    height?: string;
    width?: string;
    position?: string;
    overflow?: string;
    display?: string;
    transform?: string;
};

const BoxStyles = css`
    border: ${(props: BoxStylingType) => props.border || 'none'};
    border-radius: ${(props: BoxStylingType) => props.radius || 'none'};
    box-shadow: ${(props: BoxStylingType) => props.shadow || 'none'};
    height: ${props => props.height};
    width: ${props => props.width};
    position: ${props => props.position};
    overflow: ${props => props.overflow};
    display: ${props => props.display};
    transform: ${props => props.transform};
`;

export default BoxStyles;