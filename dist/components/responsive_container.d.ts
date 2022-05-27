declare type wrap = "wrap" | "nowrap";
declare type direction = "row" | "column" | "row-reverse" | "column-reverse";
declare type axisAlignment = "flex-start" | "flex-end" | "center" | "space-around" | "space-evenly" | "space-between";
declare const ResponsiveContainer: import("styled-components").StyledComponent<"div", any, import("styled-components").ThemeProps<any> & {
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
} & {
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
    gap?: string | undefined;
    wrap?: {
        sm?: wrap | undefined;
        md?: wrap | undefined;
        lg?: wrap | undefined;
        xl?: wrap | undefined;
    } | undefined;
    direction?: {
        sm?: direction | undefined;
        md?: direction | undefined;
        lg?: direction | undefined;
        xl?: direction | undefined;
    } | undefined;
    mainAxisAlignment?: {
        sm?: axisAlignment | undefined;
        md?: axisAlignment | undefined;
        lg?: axisAlignment | undefined;
        xl?: axisAlignment | undefined;
    } | undefined;
    crossAxisAlignment?: {
        sm?: axisAlignment | undefined;
        md?: axisAlignment | undefined;
        lg?: axisAlignment | undefined;
        xl?: axisAlignment | undefined;
    } | undefined;
}, never>;
export default ResponsiveContainer;
