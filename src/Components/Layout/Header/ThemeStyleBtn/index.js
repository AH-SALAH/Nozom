import React from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
// import { Styles } from "./Styles";
import { useTheme } from '@material-ui/core/styles';


const ThemeStyleBtn = () => {

    // const classes = Styles();
    const theme = useTheme();
    
    const toggleLDStyle = () => {

        if (theme.palette.type === 'light') {
            theme.toggleThemeStyle('dark');
        } else {
            theme.toggleThemeStyle('light');
        }

    };


    return (
        <Grid item style={{ order: 5 }}>
            <Tooltip title="Dark/Light" arrow>
                <IconButton onClick={toggleLDStyle}>
                    {theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
            </Tooltip>
        </Grid>
    )
}

export default ThemeStyleBtn;
