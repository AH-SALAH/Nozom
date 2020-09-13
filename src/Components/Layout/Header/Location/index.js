import React from 'react';

import { useTranslation } from 'react-i18next';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Styles } from "./Styles";


const Location = () => {

    const { t } = useTranslation();
    const classes = Styles();
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid item md={12} lg="auto" style={{ order: isMD ? 2 : 0 }}>
            <Fab variant="extended" size="large" className={classes.placeBtn}>
                <LocationOnIcon />
                <Typography
                    style={
                        {
                            margin: theme.direction === 'rtl' ?
                                '0px 0.5em 0px 1.7em' :
                                '0px 1.7em 0px 0.5em'
                        }
                    }
                    className={classes.placeBtnText} >
                    {t('riyadh')}
                </Typography>
                <KeyboardArrowDownIcon />
            </Fab>
        </Grid>
    )
}

export default Location;
