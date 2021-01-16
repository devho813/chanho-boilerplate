import { css } from 'styled-components';

type BreakPoint = {
  tablet: number;
  Laptop: number;
  LaptopL: number;
};

// mobile: 375px
// tablet: 768px
// Laptop: 1024px
// Laptop L: 1440px
export const sizes: BreakPoint = {
  tablet: 768,
  Laptop: 1024,
  LaptopL: 1440,
};

type Media = {
  tablet: (arg: TemplateStringsArray) => ReturnType<typeof css>;
  Laptop: (arg: TemplateStringsArray) => ReturnType<typeof css>;
  LaptopL: (arg: TemplateStringsArray) => ReturnType<typeof css>;
};

const media: Media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (args: TemplateStringsArray) => css`
    @media (min-width: ${(sizes as any)[label] / 16}em) {
      ${css(args)};
    }
  `;

  return acc;
}, {});

export default media;
