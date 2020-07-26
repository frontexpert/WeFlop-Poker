import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import { ThemeProvider } from '../providers';
import { Helmet } from 'react-helmet';
import './style.scss';

import { Welcome, SignUp, SignIn, Reset, ResetPassword } from '../pages';

const App = () => {
    return (
        <ThemeProvider mode={'light'}>
            <Helmet defaultTitle="We Flop" titleTemplate="We Flop - %s" />
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/" exact>
                        <Welcome />
                    </PublicRoute>
                    <PublicRoute path="/signup" exact>
                        <SignUp />
                    </PublicRoute>
                    <PublicRoute path="/signin" exact>
                        <SignIn />
                    </PublicRoute>
                    <PublicRoute path="/reset/password" exact>
                        <Reset />
                    </PublicRoute>
                    <PublicRoute path="/reset/password/:token" exact>
                        <ResetPassword />
                    </PublicRoute>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
