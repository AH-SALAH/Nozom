import React from 'react';

import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import { Styles } from "./Styles";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";

import logo from "../../../../assets/icons/logo.svg";


const Logo = (props) => {

    const {openMenu, toggleMenu} = props;

    return (
        <Grid item xs={12} md={12} lg="auto" style={{ padding: '0' }}>
            <Grid container spacing={0} alignItems="center" justify="space-between">
                <Typography variant="h4" style={{ fontWeight: 600, padding: '0 0.5em' }}>
                    <Router>
                        <Link to="/">
                            <img src={logo} alt="logo" style={{ width: 100 }} />
                        </Link>
                    </Router>
                </Typography>
                <Box display={{ md: 'flex', lg: 'none' }} justifyContent="center" alignItems="center">
                    <IconButton onClick={toggleMenu}>
                        {
                            openMenu ? <CloseIcon /> : <MenuIcon />
                        }
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Logo;
