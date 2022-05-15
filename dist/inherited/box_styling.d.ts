import { ThemeProps } from 'styled-components';
export declare type BoxStylingType = ThemeProps<any> & {
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
declare const BoxStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    border?: string | undefined;
    radius?: string | undefined;
    shadow?: string | undefined;
    height?: string | undefined;
    width?: string | undefined;
    position?: string | undefined;
    overflow?: string | undefined;
    display?: string | undefined;
    transform?: string | undefined;
    background?: string | undefined;
    opacity?: number | undefined;
}, any>>;
export default BoxStyles;
