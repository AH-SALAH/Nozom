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

import img1 from '../../../../assets/homeImgs/Image 51.png';
import img2 from '../../../../assets/homeImgs/Image 52.png';
import img3 from '../../../../assets/homeImgs/Image 53.png';

// const img1 = lazy(() => import('../../../../assets/homeImgs/Image 51.png'));
// const img2 = lazy(() => import('../../../../assets/homeImgs/Image 52.png'));
// const img3 = lazy(() => import('../../../../assets/homeImgs/Image 53.png'));



// import path from 'path';
// import {importAll} from '../../../Utilities/ImportAllFs';

// const itemImgs = [img1, img2, img3, img1, img2, img3];
// const itemImgs = [];
// const importAll = (r) => {
//     r.keys().forEach(async (key) => {
//         // cache[key] = r(key);
//         let t = await import('../../../../assets/homeImgs/' + key.split('/')[1]);
//         itemImgs.push(t);
//     });
// }
// const imp = importAll(require.context('../../../../assets/homeImgs/', false, /(51|52|53)\.(png|jpe?g|gif|svg)$/));
// const itemImgs = [];
// console.log("itemImgs: ", itemImgs);
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

// const RenderLink = (props) => {
//     const { text, textVariant, btnVariant, size, btnClassName, txtClassName, to } = props;

//     const renderLink = useMemo(
//         () => forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
//         [to]
//     );

//     return (
//         <Fab component={renderLink} variant={btnVariant} size={size} className={btnClassName}>
//             <Typography variant={textVariant} className={txtClassName}>{text}</Typography>
//         </Fab>
//     );
// };

const RecentAds = (props) => {

    const classes = Style();
    const theme = useTheme();

    let date = new Date().toLocaleDateString(theme.direction === 'rtl' ? 'ar-EG' : 'en-GB', { hour12: true, /*weekday: 'short',*/ year: 'numeric', month: 'long', day: 'numeric' }).replace(',', '');

    const initialState = {
        data: [
            {
                category: 'سيارات وقطع غيار',
                location: 'النزهة , الرياض',
                date: date,
                title: 'بكارت شاشه نفديا ٤ جيجا Core i7 بحالة الجديد وارد اوروبا بدون خدش',
                author: 'احمد مصطفي',
                price: '85',
                currency: 'ريال',
                tags: ['اعلان مميز'],
                img: img2
            },
            {
                category: 'سيارات وقطع غيار',
                location: 'النزهة , الرياض',
                date: date,
                title: 'شقه ٨٥م ايجار مفروش سنوي',
                author: 'احمد مصطفي',
                price: '85',
                currency: 'ريال',
                tags: ['اعلان مميز'],
                img: img1
            },
            {
                category: 'سيارات وقطع غيار',
                location: 'النزهة , الرياض',
                date: date,
                title: 'الكنبة السرير رويال بسعر مغري جدا والخشب زان قماش شموازيت مستورد',
                author: 'احمد مصطفي',
                price: '8000',
                currency: 'ريال',
                tags: ['اعلان مميز'],
                img: img3
            },
            {
                category: 'سيارات وقطع غيار',
                location: 'النزهة , الرياض',
                date: date,
                title: 'بكارت شاشه نفديا ٤ جيجا Core i7 بحالة الجديد وارد اوروبا بدون خدش',
                author: 'احمد مصطفي',
                price: '85',
                currency: 'ريال',
                tags: ['اعلان مميز'],
                img: img2
            },
            {
                category: 'سيارات وقطع غيار',
                location: 'النزهة , الرياض',
                date: date,
                title: 'شقه ٨٥م ايجار مفروش سنوي',
                author: 'احمد مصطفي',
                price: '85',
                currency: 'ريال',
                tags: ['اعلان مميز'],
                img: img1
            },
            {
                category: 'سيارات وقطع غيار',
                location: 'النزهة , الرياض',
                date: date,
                title: 'الكنبة السرير رويال بسعر مغري جدا والخشب زان قماش شموازيت مستورد',
                author: 'احمد مصطفي',
                price: '8000',
                currency: 'ريال',
                tags: ['اعلان مميز'],
                img: img3
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
                    <Typography variant="h6" color="textSecondary">الاعلانات المضافة حديثاً</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexBasis={{ xs: '45%', sm: '30%', md: '19%' }} position="relative">
                        <CustomRouterLink
                            to="/ads?sort=latest"
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

export default RecentAds;
