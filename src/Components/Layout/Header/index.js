import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Styles } from "./Styles";

import Logo from './Logo';
import Location from './Location';
import Search from './Search';
import AddAds from './AddAds';
import Account from './Account';
import RTLBtn from './RTLBtn';
import ThemeStyleBtn from './ThemeStyleBtn';
// import AppContext from '../../../Store/AppContext/AppContext';



const Header = (props) => {

    const classes = Styles();
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    // const appContxt = useContext(AppContext);
    // const [state, dispatch] = useReducer(reducer, initialState, init);

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <AppBar className={`${classes.root}`}>
                <Toolbar className={classes.toolbar} >
                    <Container>
                        <Grid container spacing={2} alignItems="center" justify="flex-start" direction="row">

                            <Logo toggleMenu={toggleMenu} openMenu={openMenu} />

                            {/* Top Menu */}
                            <Box display={{ xs: 'none', md: 'none', lg: 'flex' }} justifyContent="center" alignItems="center" p={2} className={`${classes.toolbarContent} ${openMenu ? classes.show : ''}`}>
                                <Grid container spacing={2} alignItems="center" justify={isMD ? "center" : "flex-start"} direction="row">
                                    <Location />
                                    <Search />
                                    <AddAds />
                                    <Account />
                                    <Grid item md={12} lg="auto" style={{ order: 5 }}>
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <RTLBtn />
                                            <ThemeStyleBtn />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
        </>
    )
}

export default Header