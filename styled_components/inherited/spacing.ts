import { ThemeProps, css } from 'styled-components';

export type PaddingProps = ThemeProps<any> & {
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pb?: string | number;
  pl?: string | number;
  pr?: string | number;
};
export type MarginProps = ThemeProps<any> & {
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
};

export type SpacingProps = ThemeProps<any> & PaddingProps & MarginProps;

const Spacing = css`
  padding: ${(props: PaddingProps) => {
    if (typeof props.p === 'string') return props.p;
    if (props.p) return `${props.p}rem`;
    if (props.px && props.py) return `${props.py}rem ${props.px}rem`;
    if (props.px && !props.py) return `0 ${props.px}rem`;
    if (!props.px && props.py) return `${props.py}rem 0`;
  }};
  /* over rides old values */
  padding-top: ${(props: PaddingProps) => props.pt + 'rem' || 0};
  padding-bottom: ${(props: PaddingProps) => props.pb + 'rem' || 0};
  padding-left: ${(props: PaddingProps) => props.pl + 'rem' || 0};
  padding-right: ${(props: PaddingProps) => props.pr + 'rem' || 0};
  margin: ${(props: MarginProps) => {
    if (typeof props.m === 'string') return props.m;
    if (props.m) return `${props.m}rem`;
    if (props.mx && props.my) return `${props.my}rem ${props.mx}rem`;
    if (props.mx && !props.my) return `0 ${props.mx}rem`;
    if (!props.mx && props.my) return `${props.my}rem 0`;
  }};
  /* over rides old values */
  margin-top: ${(props: MarginProps) => props.mt + 'rem' || 0};
  margin-bottom: ${(props: MarginProps) => props.mb + 'rem' || 0};
  margin-left: ${(props: MarginProps) => props.ml + 'rem' || 0};
  margin-right: ${(props: MarginProps) => props.mr + 'rem' || 0};
`;

export default Spacing;