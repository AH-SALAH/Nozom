import React from 'react';
// import { BrowserRouter as Router/*, Link as RouterLink*/ } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import CustomRouterLink from '../../../Utilities/CustomRouterLink';

import gglPlay from '../../../../assets/homeImgs/Image 46.png';
import appStore from '../../../../assets/homeImgs/Image 47.png';
import whiteMockup from '../../../../assets/homeImgs/white-mockup.png';


const Style = makeStyles(theme => ({
    longText: {
        // paddingLeft: theme.spacing(1 * 15),
        color: theme.palette.common.white
    },
    px: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
    },
    py: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    pl: {
        paddingLeft: theme.spacing(2)
    },
    pr: {
        paddingRight: theme.spacing(2)
    }
}), { name: 'Mui-DownloadApp' });


const DownloadApp = (props) => {

    const classes = Style();
    const theme = useTheme();
    const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

    // const [state, setState] = useState({});

    // useEffect(() => {
    //     setState(initialState);

    //     // eslint-disable-next-line
    // }, []);


    return (
        <Grid item xs={12}>
            <Paper elevation={0} style={{ padding: theme.spacing(3), borderRadius: theme.shape.borderRadius * 4, background: `transparent linear-gradient(180deg, #4BBAFF 0%, #2680EB 100%) 0% 0% no-repeat padding-box`, minHeight: '34em' }}>
                <Box mb={3} display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="flex-start" paddingLeft={isUpMd ? theme.spacing(1 * 1.9) : '1em'}>
                    <Box display="flex" justifyContent="flex-start" alignItems={isUpMd ? "flex-start" : "center"} flexBasis={{ xs: '100%', sm: '100%', md: '50%' }} flexDirection="column" position="relative" marginTop="6em">
                        <Typography gutterBottom variant="h4" style={{ color: theme.palette.common.white }}>حمل تطبيق هنا الان</Typography>
                        <Typography gutterBottom variant="body1" color="textSecondary" className={classes.longText}>يتيح لك تطبيق هير تصفح وشراء أكثر من منتج بخصومات كبيرة في جميع فئات التسوق مثل: الأزياء والإلكترونيات والهواتف المحمولة والأجهزة اللوحية والعطور الأصلية.</Typography>
                        <Box display="flex" justifyContent={isUpMd ? "space-between" : "center"} alignItems="center" flexWrap="wrap" flexBasis={{ xs: '100%', sm: '100%', md: '70%' }} paddingY="3em" position="relative">
                            <CustomRouterLink
                                to="/googleStore"
                            >
                                <img src={gglPlay} alt="Google play" className={`${classes.py} ${classes.pr}`} />
                            </CustomRouterLink>
                            <CustomRouterLink
                                to="/appStore"
                            >
                                <img src={appStore} alt="App Store" className={`${classes.py} ${classes.pr}`} />
                            </CustomRouterLink>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" flexBasis={{ xs: '100%', sm: '100%', md: '50%' }} position="relative" zIndex="0">
                        <img src={whiteMockup} alt="mob frame" style={{ maxHeight: isUpMd ? '48em' : '45em', position: isUpMd ? 'absolute' : 'inherit', top: 0 }} />
                    </Box>
                </Box>
            </Paper>
        </Grid >
    );
}

export default DownloadApp;
