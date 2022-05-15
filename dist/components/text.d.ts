import { SpacingProps } from '../inherited/spacing';
export declare type TextType = SpacingProps & {
    fontSize?: string | number;
    opacity?: number;
    align?: string;
    color?: string;
    fontStyle?: string;
    width?: string;
    transform?: string;
};
declare const Text: import("styled-components").StyledComponent<"div", any, import("styled-components").ThemeProps<any> & {
    p?: string | number | undefined;
    px?: string | number | undefined;
    py?: string | number | undefined;
    pt?: string | number | undefined;
    pb?: string | number | undefined;
    pl?: string | number | undefined;
    pr?: string | number | undefined;
} & {
    m?: string | number | undefined;
    mx?: string | number | undefined;
    my?: string | number | undefined;
    mt?: string | number | undefined;
    mb?: string | number | undefined;
    ml?: string | number | undefined;
    mr?: string | number | undefined;
} & {
    fontSize?: string | number | undefined;
    opacity?: number | undefined;
    align?: string | undefined;
    color?: string | undefined;
    fontStyle?: string | undefined;
    width?: string | undefined;
    transform?: string | undefined;
}, never>;
export default Text;
