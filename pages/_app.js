import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from '../src/themes/styleHelpers';
import {theme} from "../src/themes/primaryTheme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
