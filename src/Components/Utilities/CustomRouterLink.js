import React, { useMemo } from 'react';
import { Link as RouterLink, BrowserRouter as Router } from 'react-router-dom';
// import Fab from '@material-ui/core/Fab';


const CustomRouterLink = props => {

    const renderLink = useMemo(
        () =>
            <RouterLink to={props.to} {...props}>{props.children}</RouterLink>,
        // eslint-disable-next-line
        [props.to]
    );

    return (
        <>
            <Router>
                {renderLink}
            </Router>
        </>
    );
};

export default CustomRouterLink;