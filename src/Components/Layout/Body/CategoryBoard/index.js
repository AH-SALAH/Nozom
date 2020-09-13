import React from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    // useParams,
    // useRouteMatch
} from "react-router-dom";

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItemLink from '../../../Utilities/ListItemLink';
import { Styles } from "./Styles";

// import ContentLoader from "react-content-loader";

import UserIcon from '../../../../assets/icons/specialist-user.svg';
import animalPaw from '../../../../assets/icons/animal-paw-print.svg';
import armChair from '../../../../assets/icons/arm-chair.svg';
import babyCart from '../../../../assets/icons/baby-cart.svg';
import boxIcon from '../../../../assets/icons/box.svg';
import carFront from '../../../../assets/icons/car-front.svg';
import casualTShirt from '../../../../assets/icons/casual-t-shirt.svg';
import lampIcon from '../../../../assets/icons/lamp.svg';
import mobileIcon from '../../../../assets/icons/mobile.svg';
import roadBicycle from '../../../../assets/icons/road-bicycle.svg';
import villaIcon from '../../../../assets/icons/villa.svg';

// const UserIcon = lazy(() => import('../../../../assets/icons/specialist-user.svg'));

const CategoryBoard = () => {

    const theme = useTheme();
    const classes = Styles();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    // const isInMiddle = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    let cateData = [
        { id: 1, title: 'خدمات', icon: UserIcon, path: '/services' },
        { id: 2, title: 'عقارات', icon: villaIcon, path: '/buildings' },
        { id: 3, title: 'الكترونيات وأجهزة منزلية', icon: lampIcon, path: '/electronics' },
        { id: 4, title: 'دراجات ومعدات رياضية', icon: roadBicycle, path: '/sports-equipment' },
        { id: 5, title: 'سيارات وقطع غيار', icon: carFront, path: '/cars' },
        { id: 6, title: 'موبايلات واكسسواراتها', icon: mobileIcon, path: '/mobile-accesories' },
        { id: 7, title: 'تجارة وصناعة', icon: boxIcon, path: '/trade-industry' },
        { id: 8, title: 'مستلزمات أطفال', icon: babyCart, path: '/kids-stuff' },
        { id: 9, title: 'حيوانات أليفة', icon: animalPaw, path: '/pets' },
        { id: 10, title: 'الموضة والجمال', icon: casualTShirt, path: '/fashion' },
        { id: 11, title: 'المنزل والحديقة', icon: armChair, path: '/home-garden' }
    ];

    let colors = [
        { id: 1, color: '#67A6F1' },
        { id: 2, color: '#F7D16E' },
        { id: 3, color: '#4CDBE9' },
        { id: 4, color: '#D6A267' },
        { id: 5, color: '#A2E2B8' },
        { id: 6, color: '#FF9266' },
        { id: 7, color: '#7567D6' },
        { id: 8, color: '#67D6A6' },
        { id: 9, color: '#66ADD5' },
        { id: 10, color: '#F068A9' },
        { id: 11, color: '#BD8FBC' }
    ];

    const ListImg = ({ li }) => {
        return (
            // <Paper elevation={0} className={`${classes.catPaper}`}>
            <Box
                mr={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={
                    {
                        backgroundColor: li['color'] ? li['color'] : theme.palette.info.light,
                        width: theme.spacing(6),
                        height: theme.spacing(6),
                        //fontSize: '1em'
                    }
                }
                borderRadius="50%"
                p={theme.spacing(0.1)}
            >
                {
                    <img alt={li.title} src={li.icon} style={{ maxWidth: "100%" }} />                    
                }

            </Box>
            // </Paper>
        )
    }


    return (
        <Grid item lg={9} md={9} xs={12}>
            <Paper elevation={0} style={{ padding: theme.spacing(2), borderRadius: theme.shape.borderRadius * 4 }}>
                <Box mb={2} display="flex" justifyContent="flex-start" alignItems="flex-start">
                    <Typography variant="h5">
                        الفئات
                    </Typography>
                </Box>
                <Router>
                    <List component="nav" aria-label="category board">
                        <Grid container spacing={0} justify="flex-start" alignItems="flex-start" style={{ marginBottom: '1em' }}>
                            {colors && cateData && cateData.map((d, i) => Object.assign({}, d, colors[i])).map((it, i, arr) => (
                                <Grid key={i} item lg={3} md={3} xs={12} className={`${classes.catGrid}`}>
                                    <ListItemLink
                                        to={it.path}
                                        secondary={<Typography variant={md ? "body1" : "body2"}>{it.title}</Typography>}
                                        icon={<ListImg li={it} />}
                                        classname={classes.catPaper}
                                    />
                                    {/* <Link to={it.path}>
                                                <Paper elevation={0} className={`${classes.catPaper}`}>
                                                    <Box
                                                        mr={1}
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        style={
                                                            {
                                                                backgroundColor: it['color'] ? it['color'] : theme.palette.info.light,
                                                                width: theme.spacing(6),
                                                                height: theme.spacing(6),
                                                                //fontSize: '1em'
                                                            }
                                                        }
                                                        borderRadius="50%"
                                                        p={theme.spacing(0.1)}
                                                    >

                                                        <img alt={it.title} src={it.icon} style={{ maxWidth: "100%" }} />
                                                    </Box>
                                                    <Typography variant="caption">
                                                        {it.title}
                                                    </Typography>
                                                </Paper>
                                            </Link> */}
                                </Grid>
                            ))}
                        </Grid>
                    </List>
                </Router>
            </Paper>
        </Grid>
    )
}

export default CategoryBoard;
