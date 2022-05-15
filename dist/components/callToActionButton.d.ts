import { SpacingProps } from '../inherited/spacing';
export declare type CallToActionType = SpacingProps & {
    cursorPointer?: boolean;
    width?: string;
};
declare const CallToActionButton: import("styled-components").StyledComponent<"button", any, import("styled-components").ThemeProps<any> & {
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
    cursorPointer?: boolean | undefined;
    width?: string | undefined;
}, never>;
export default CallToActionButton;
