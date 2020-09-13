import React, { Suspense/*, lazy*/ } from 'react';
// import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
// import logo from '../logo.svg';
import { routes } from "../Routes/routes";

import CssBaseline from '@material-ui/core/CssBaseline';
import Skeleton from '@material-ui/lab/Skeleton';
import { useTheme } from '@material-ui/core/styles';

import './App.scss';

// import Layout from "./Layout";
// const Layout = lazy(() => import('./Layout'));
// const SignIn = lazy(() => import('./Utilities/SignInModal'));
// const SignUp = lazy(() => import('./Utilities/SignUpModal'));

function App() {

    const theme = useTheme();


    return (
        <CssBaseline>
            <Router>
                <Switch>
                    <Suspense fallback={<Skeleton animation="wave" />}>
                        <div className="App" dir={theme.direction}>
                            {
                                routes.map(r =>
                                    <Route key={r.path} path={`${r.path}`} render={
                                        (props) => <Suspense fallback={<Skeleton animation="wave" />}>
                                            <r.component exact={r.exact} {...props} routes={r.children}/>
                                        </Suspense>
                                    } />
                                )
                            }
                            {/* <Suspense fallback={<Skeleton animation="wave" />}>
                                <Route exact path="/" component={Layout} />
                            </Suspense>
                            <Suspense fallback={<Skeleton animation="wave" />}>
                                <Route path="/signin" render={() => <SignIn open={true} />} />
                            </Suspense> */}
                        </div>
                    </Suspense>
                </Switch>
            </Router>
        </CssBaseline>
    );
}

export default App;
