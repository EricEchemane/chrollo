import { ThemeProps, css } from 'styled-components';

export type BoxStylingType = ThemeProps<any> & {
    border?: string;
    radius?: string;
    shadow?: string;
    height?: string;
    width?: string;
};

const BoxStyles = css`
    border: ${(props: BoxStylingType) => props.border || 'none'};
    border-radius: ${(props: BoxStylingType) => props.radius || 'none'};
    box-shadow: ${(props: BoxStylingType) => props.shadow || 'none'};
    height: ${props => props.height};
    width: ${props => props.width};
`;

export default BoxStyles;