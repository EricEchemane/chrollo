import { ThemeProps } from 'styled-components';
export declare type PaddingProps = ThemeProps<any> & {
    p?: string | number;
    px?: string | number;
    py?: string | number;
    pt?: string | number;
    pb?: string | number;
    pl?: string | number;
    pr?: string | number;
};
export declare type MarginProps = ThemeProps<any> & {
    m?: string | number;
    mx?: string | number;
    my?: string | number;
    mt?: string | number;
    mb?: string | number;
    ml?: string | number;
    mr?: string | number;
};
export declare type SpacingProps = ThemeProps<any> & PaddingProps & MarginProps;
declare const Spacing: import("styled-components").FlattenInterpolation<ThemeProps<any>>;
export default Spacing;
