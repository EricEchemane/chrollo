import { ThemeProps } from 'styled-components';
export declare type BoxStylingType = ThemeProps<any> & {
    border?: string;
    radius?: string;
    shadow?: string;
};
declare const BoxStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    border?: string | undefined;
    radius?: string | undefined;
    shadow?: string | undefined;
}, any>>;
export default BoxStyles;
