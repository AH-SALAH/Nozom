import React from 'react';
import ReactDOM from 'react-dom';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Redirect,
//     // Router
//     // Link,
//     // useParams,
//     // useRouteMatch
//     // useLocation
// } from "react-router-dom";
import './index.scss';
import App from './Components/App';
// import { useTheme } from '@material-ui/core/styles';
import Theme from "./Components/Theme";
import AppContextProvider from './Store/AppContext/AppContext';

// import i18n (needs to be bundled ;))
import './i18n';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Theme>
        <AppContextProvider>
            <App/>
        </AppContextProvider>
    </Theme>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
