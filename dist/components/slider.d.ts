declare const Slider: import("styled-components").StyledComponent<"input", any, {
    type: "range";
    role: "slider";
} & import("styled-components").ThemeProps<any> & {
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
    hue?: number | undefined;
}, "type" | "role">;
export default Slider;
