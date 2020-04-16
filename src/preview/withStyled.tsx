import React from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { theme } from '../themes/primaryTheme';
import { GlobalStyle } from '../themes/styleHelpers';
import {Normalize} from "styled-normalize";

export default Component => (props) => {
    const { entry, getAsset, widgetFor, widgetsFor } = props;
    const record = entry.toJS().data;
    const iframe = document.querySelector('#nc-root iframe');
    // @ts-ignore
    const iframeHeadElem = iframe && iframe.contentDocument.head;

    if (!iframeHeadElem) {
        return null;
    }

    const Providers = ({ children }) => {
        return (
            <StyleSheetManager target={iframeHeadElem}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Normalize />
                    {children}
                </ThemeProvider>
            </StyleSheetManager>
        );
    };

    return (
         <Providers>
             <Component {...record} />
         </Providers>
    );
};
