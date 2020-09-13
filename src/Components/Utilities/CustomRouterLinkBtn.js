import React, { forwardRef, useMemo } from 'react';
import { Link as RouterLink, BrowserRouter as Router } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';


const CustomRouterLinkBtn = props => {

    const renderLink = useMemo(
        () => forwardRef((itemProps, ref) => <Router><RouterLink to={props.to} ref={ref} {...itemProps} /></Router>),
        [props.to]
    );

    return (
        <Fab component={renderLink} {...props}>
            {props.children}
        </Fab>
    );
}

export default CustomRouterLinkBtn;