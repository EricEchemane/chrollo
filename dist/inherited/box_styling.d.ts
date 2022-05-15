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
}, any>>;
export default BoxStyles;
