import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router/*, Link as RouterLink*/ } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';

import { useTheme, makeStyles } from '@material-ui/core/styles';

import SlickSlider, { CustomLeftArrow, CustomRightArrow } from "./Slider";

import CustomRouterLink from '../../../Utilities/CustomRouterLinkBtn';

import img1 from '../../../../assets/homeImgs/Image 30.png';
import img2Logo from '../../../../assets/homeImgs/Image 32.png';
import img3Logo from '../../../../assets/homeImgs/Image 48.png';
import img4Logo from '../../../../assets/homeImgs/Image 49.png';
import img5Logo from '../../../../assets/homeImgs/Image 50.png';


const Style = makeStyles(theme => ({
    root: {
        boxShadow: `${theme.shadows[0]}`,
        backgroundColor: '#EAF1FF',
        '& > span': {
            color: theme.palette.primary.main
        }
    },
    watchBtnRoot: {
        minWidth: `${theme.spacing(2 * 6.25)}px!important`,
    }
}));

const NearestStore = (props) => {

    const classes = Style();
    const theme = useTheme();

    let date = new Date().toLocaleDateString(theme.direction === 'rtl' ? 'ar-EG' : 'en-GB', { hour12: true, /*weekday: 'short',*/ year: 'numeric', month: 'long', day: 'numeric' }).replace(',', '');

    const initialState = {
        data: [
            {
                category: 'موبايلات واكسسواراتها',
                location: 'النزهة , الرياض',
                date: date,
                title: 'العاب دار جيم - بلايستيشن',
                img: img1,
                logo: img2Logo
            },
            {
                category: 'موبايلات واكسسواراتها',
                location: 'النزهة , الرياض',
                date: date,
                title: 'أسواق العثيم',
                img: img1,
                logo: img3Logo
            },
            {
                category: 'موبايلات واكسسواراتها',
                location: 'النزهة , الرياض',
                date: date,
                title: 'الجزيرة اكسبرس',
                img: img1,
                logo: img4Logo
            },
            {
                category: 'موبايلات واكسسواراتها',
                location: 'النزهة , الرياض',
                date: date,
                title: 'مكتبة جرير',
                img: img1,
                logo: img5Logo
            },
            {
                category: 'موبايلات واكسسواراتها',
                location: 'النزهة , الرياض',
                date: date,
                title: 'العاب دار جيم - بلايستيشن',
                img: img1,
                logo: img2Logo
            },
            {
                category: 'موبايلات واكسسواراتها',
                location: 'النزهة , الرياض',
                date: date,
                title: 'أسواق العثيم',
                img: img1,
                logo: img3Logo
            },
            {
                category: 'موبايلات واكسسواراتها',
                location: 'النزهة , الرياض',
                date: date,
                title: 'الجزيرة اكسبرس',
                img: img1,
                logo: img4Logo
            },
            {
                category: 'موبايلات واكسسواراتها',
                location: 'النزهة , الرياض',
                date: date,
                title: 'مكتبة جرير',
                img: img1,
                logo: img5Logo
            },
        ]
    };

    const [state, setState] = useState({});

    useEffect(() => {
        setState(initialState);

        // eslint-disable-next-line
    }, []);

    const SliderInitOptions = {
        arrows: false
    };

    return (
        <Grid item xs={12}>
            <Paper elevation={0} style={{ padding: theme.spacing(3), borderRadius: theme.shape.borderRadius * 4 }}>
                <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" color="textSecondary">المتاجر الأقرب اليك</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexBasis={{ xs: '45%', sm: '30%', md: '19%' }} position="relative">
                        <CustomRouterLink
                            to="/stores?sort=latest"
                            variant="extended"
                            size="medium"
                            className={`${classes.root} ${classes.watchBtnRoot}`}
                        >
                            <Typography variant="body2">شاهد الكل</Typography>
                        </CustomRouterLink>
                        <CustomLeftArrow className={classes.root} />
                        <CustomRightArrow className={classes.root} />
                    </Box>
                </Box>
                <SlickSlider options={SliderInitOptions} itemsData={state.data} />
            </Paper>
        </Grid >
    );
}

export default NearestStore;
