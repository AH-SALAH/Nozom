import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router/*, Link as RouterLink*/ } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

// import Fab from '@material-ui/core/Fab';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import StarsIcon from '@material-ui/icons/Stars';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Avatar from '@material-ui/core/Avatar';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import CustomRouterLink from '../../Utilities/CustomRouterLink';
import ScrollToTop from "../../Utilities/ScrollToTop";

import gglPlay from '../../../assets/homeImgs/Image 46.png';
import appStore from '../../../assets/homeImgs/Image 47.png';
import AboutUsLogo from '../../../assets/icons/About-us.svg';
// import CustomRouterLinkBtn from '../../Utilities/CustomRouterLinkBtn';



const Style = makeStyles(theme => ({
    icons: {
        boxShadow: `${theme.shadows[0]}`,
        backgroundColor: '#EAF1FF',
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText
        }
    },
    footerLink: {
        textDecoration: 'none',
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        color: 'inherit',
        marginBottom: theme.spacing(1 * 3),
        '&:hover': {
            color: theme.palette.info.main
        }
    },
    footerLinkText: {
        marginLeft: '1em'
    },
    socialIcon: {
        marginRight: theme.spacing(1 * 2)
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
}), { name: 'Mui-Footer' });

const Footer = () => {

    const classes = Style();
    const theme = useTheme();
    const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const initialState = {
        data: [
            { title: 'الخدمات المدفوعة', icon: (<StarsIcon />), path: '/paidServices', order: 1 },
            { title: 'عن تطبيق هير', icon: (<img src={AboutUsLogo} alt="about-us-logo" />), path: '/aboutUs', order: 2 },
            { title: 'تواصل معنا', icon: (<QuestionAnswerIcon />), path: '/contactUs', order: 3 },
            { title: 'الشروط و الأحكام', icon: (<VerifiedUserIcon />), path: '/tos', order: 4 },
        ]
    }
    const [state, setState] = useState(initialState);

    useEffect(() => {
        setState(initialState);

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Grid item xs={12}>
                <Paper elevation={0} style={{ padding: theme.spacing(3), /*zIndex: 1,*/ position: 'relative' }}>
                    <Container>
                        <Box display="flex" flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start">
                            {/* <Box display="flex" justifyContent="flex-start" alignItems={isUpMd ? "flex-start" : "center"} flexBasis={{ xs: '100%', sm: '100%', md: '50%' }} position="relative"> */}
                            {
                                [...Array(2)].map((l, x) =>
                                    <Box key={x} display="flex" justifyContent="stretch" alignItems="flex-start" flexDirection="column" flexBasis={{ xs: '100%', sm: '100%', md: '20%' }} position="relative">
                                        {
                                            state && state.data && state.data.map((d, i) => {
                                                return i < 2 && x === 0 ?
                                                    <CustomRouterLink key={d.title + '_' + i + '_' + x} to={d.path} className={classes.footerLink}>
                                                        <Avatar variant="rounded" className={classes.icons}>
                                                            {d.icon}
                                                        </Avatar>
                                                        <Typography variant="body2" className={classes.footerLinkText}>{d.title}</Typography>
                                                    </CustomRouterLink>
                                                    :
                                                    i >= 2 && i < 4 && x === 1 ?
                                                        <CustomRouterLink key={d.title + '_' + i + '_' + x} to={d.path} className={classes.footerLink}>
                                                            <Avatar variant="rounded" className={classes.icons}>
                                                                {d.icon}
                                                            </Avatar>
                                                            <Typography variant="body2" className={classes.footerLinkText}>{d.title}</Typography>
                                                        </CustomRouterLink>
                                                        :
                                                        ''
                                            })
                                        }
                                    </Box>
                                )
                            }
                            {/* </Box> */}
                            <Box display="flex" justifyContent="flex-start" alignItems="flex-start" flexBasis={{ xs: '100%', sm: '100%', md: '20%' }} flexDirection="column" position="relative">
                                <Typography gutterBottom variant="h6" style={{ marginBottom: theme.spacing(1 * 3) }}>شاركنا</Typography>
                                <Box display="flex" justifyContent="flex-start" alignItems="center" flexBasis={{ xs: '100%', sm: '100%', md: '100%' }} width="100%" position="relative">
                                    <Link href="#" onClick={(e) => e.preventDefault()} color="inherit" className={`${classes.footerLink} ${classes.socialIcon}`}>
                                        <Avatar variant="rounded" className={classes.icons}>
                                            <InstagramIcon />
                                        </Avatar>
                                    </Link>
                                    <Link href="#" onClick={(e) => e.preventDefault()} color="inherit" className={`${classes.footerLink} ${classes.socialIcon}`}>
                                        <Avatar variant="rounded" className={classes.icons}>
                                            <TwitterIcon />
                                        </Avatar>
                                    </Link>
                                    <Link href="#" onClick={(e) => e.preventDefault()} color="inherit" className={`${classes.footerLink} ${classes.socialIcon}`}>
                                        <Avatar variant="rounded" className={classes.icons}>
                                            <WhatsAppIcon />
                                        </Avatar>
                                    </Link>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="flex-start" alignItems="flex-start" flexBasis={{ xs: '100%', sm: '100%', md: '40%' }} flexDirection="column" position="relative">
                                <Typography gutterBottom variant="h6" style={{ marginBottom: theme.spacing(1 * 3) }}>حمل تطبيق هنا الان</Typography>
                                <Box display="flex" justifyContent={isUpMd ? "flex-start" : "center"} alignItems="flex-start" flexWrap="wrap" flexBasis={{ xs: '100%', sm: '100%', md: '100%' }} width="100%" position="relative">
                                    <CustomRouterLink
                                        to="/googleStore"
                                    >
                                        <img src={gglPlay} alt="Google play" style={{ width: theme.spacing(1 * 19) }} className={`/*${classes.py}*/ ${classes.pr}`} />
                                    </CustomRouterLink>
                                    <CustomRouterLink
                                        to="/appStore"
                                    >
                                        <img src={appStore} style={{ width: theme.spacing(1 * 19) }} alt="App Store" className={`/*${classes.py}*/ ${classes.pr}`} />
                                    </CustomRouterLink>
                                    <Box display="flex" justifyContent={isUpMd ? "flex-start" : "center"} alignItems="flex-start" flexWrap="wrap" flexBasis={{ xs: '100%', sm: '100%', md: 'auto' }} className={!isUpMd ? `${classes.py}` : ``} position="relative">
                                        <Typography gutterBottom variant="h4" style={{ marginBottom: theme.spacing(1 * 3) }}>
                                            نُظُم
                                            <Typography gutterBottom variant="caption" display="block">
                                                تم تطويره بواسطة
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Paper>
            </Grid >
            <ScrollToTop />
        </>
    )
}

export default Footer;
