import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
// Imports from src
import Header from './Header';
import Navigation from './Navigation';
import CustomCursor from '../ui/CustomCursor';
import { GlobalStyle, LayoutContainer } from '../../styles/base/globalStyles';
import { getTheme } from '../../styles/base/themes';
import { useStore } from '../../hooks/useStore';
import { PageProps } from 'gatsby';
import DragCursor from '../ui/DragCursor';

const Layout = (props: PageProps): JSX.Element => {
    const store = useStore();
    const { setTheme, setCursor } = store.uiStore;

    useEffect(() => {
        const theme = window.localStorage.getItem('theme');

        if (theme) {
            setTheme(theme);
        }
    }, []);

    useEffect(() => {
        // setCursor();
    }, [props.location.pathname]);

    return (
        <ThemeProvider theme={getTheme()}>
            <GlobalStyle />
            <CustomCursor />

            <Navigation />
            <LayoutContainer>
                <Header />
                {props.children}
            </LayoutContainer>
        </ThemeProvider>
    );
};

export default observer(Layout);