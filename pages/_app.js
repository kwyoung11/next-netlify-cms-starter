import App from 'next/app';
import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import mainTheme from '../src/themes/mui-theme';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { GlobalStyle } from '../src/themes/sc-utils';
import { isLocale } from '../src/translations/types';
import { LocaleProvider } from '../src/context/locale-context';
import { locales } from '../src/translations/config';
import locale from 'locale';

export const theme = {
  colors: {
    primary: '#019387',
    secondary: '#703141',
    grey: '#aaa',
    white: '#fff',
    black: '#333',
  },
};

export const ThemeContext = React.createContext(theme);

const MyApp = ({ Component, pageProps, locale }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <StyledThemeProvider theme={theme}>
        <LocaleProvider lang={locale}>
          <GlobalStyle />
          <CssBaseline />
          <Component {...pageProps} data-testid="application" testProp="hello, world!" />
        </LocaleProvider>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  if (typeof appContext.ctx.query.lang !== 'string' || !isLocale(appContext.ctx.query.lang)) {
    let bestGuess;
    if (appContext.ctx.req) {
      const userBrowserLangs = appContext.ctx.req.headers['accept-language'];
      const supported = new locale.Locales(locales);
      const userLocales = new locale.Locales(userBrowserLangs);
      bestGuess = userLocales.best(supported);
    }

    return { ...appProps, locale: bestGuess };
  }

  return { ...appProps, locale: appContext.ctx.query.lang };
};

export default MyApp;
