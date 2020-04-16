import { generateMedia } from 'styled-media-query';
import { css, createGlobalStyle } from 'styled-components';

export const breakpoints = {
  xs: `480px`,
  sm: `540px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1200px`,
};

export const media = generateMedia(breakpoints);

export const responsivePadding = css`
  padding: 0 16px;
  margin: 0;

  ${media.greaterThan('sm')`
    padding: 0 24px;
  `}

  ${media.greaterThan('md')`
    padding: 0 32px;
  `}
`;

export const responsiveMargin = css`
  margin: 0 16px;
  padding: 0;

  ${media.greaterThan('sm')`
    margin: 0 24px;
  `}

  ${media.greaterThan('md')`
    margin: 0 32px;
  `}
`;

export const GlobalStyle = createGlobalStyle`
  body p {
    font-family: 'Vollkorn', serif;
  }
`;
