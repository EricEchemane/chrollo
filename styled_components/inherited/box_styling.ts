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
    background?: string;
    opacity?: number;
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
    opacity: ${props => props.opacity};
    background: ${props => props.background};
`;

export default BoxStyles;