import React from 'react';
import { BrowserRouter as Router/*, Link as RouterLink*/ } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CustomRouterLink from '../../../../Utilities/CustomRouterLink';



const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
        boxShadow: theme.shadows[0],
        "&:hover": {
            boxShadow: theme.shadows[3],
        },
        // padding: theme.spacing(1),
        margin: theme.spacing(2, 1),
        borderRadius: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "space-between"
    },
    cardMediaWrapper: {
        display: "flex",
        position: "relative"
    },
    cardMediaItem: {
        borderRadius: theme.spacing(2)
    },
    cardMediaMetaBar: {
        display: "flex",
        justifyContent: theme.direction === "rtl" ? "flex-end" : "flex-start",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        right: `calc(100% - 48px)`,
        // width: "100%"
    },
    favIconBtn: {
        '&:hover': {
            backgroundColor: `rgba(0,0,0,0.3)`
        }
    },
    cardActionArea: {
        borderRadius: theme.spacing(2)
    },
    // cardMeta: {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItems: "center"
    // },
    // metaItem: {
    //     borderRight: `1px solid ${theme.palette.grey[500]}`,
    // },
    logo: {
        width: 70,
        height: 70,
        borderRadius: `${theme.shape.borderRadius * 12.5}%`,
        marginTop: `calc(-70px/2)`,
        zIndex: 1
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginTop: `calc(-70px/2)`,
        boxShadow: theme.shadows[1],
        backgroundColor: theme.palette.common.white
    },
    borderR: {
        borderRight: `1px solid ${theme.palette.grey[500]}`,
    },
    px0: {
        padding: `0 ${theme.spacing(1 / 2)}px`
    },
    px1: {
        padding: `0 ${theme.spacing(1)}px`
    }
}), { name: 'MuiCard-NearstStore' });

const SliderItem = ({ key, item }) => {
    const classes = useStyles();
    const theme = useTheme();

    // console.log("item: ", item);
    return (
        <Card key={key} className={classes.card} raised>
            <div className={`${classes.cardMediaWrapper}`}>
                <Router>
                    <CustomRouterLink to={item.category ? item.category : '/stores'}>
                        <CardMedia
                            component="img"
                            alt={item.title || 'alt-title'}
                            height="140"
                            image={item.img || ''}
                            title={item.title || 'img-title'}
                            className={`${classes.cardMediaItem}`}
                        />
                    </CustomRouterLink>
                </Router>
                {/* <div className={`${classes.cardMediaMetaBar}`}>
                    <IconButton aria-label="add to favorites" className={`${classes.favIconBtn}`}>
                        <FavoriteBorderIcon />
                    </IconButton>
                </div> */}
            </div>
            {/* <CardActionArea className={`${classes.cardActionArea}`}> */}
            <Router>
                <CustomRouterLink to={item.category ? item.category : '/stores'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <CardContent style={{ padding: theme.spacing(1) }}>
                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection={theme.direction === 'rtl' ? 'row-reverse' : 'row'}>
                            <Avatar alt={item.title || "alt-title"} src={item.logo} className={classes.large}/>
                            {/* <img src={item.logo} alt={item.title || "alt-title"} className={classes.logo} /> */}
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection={'column'} marginY={2}>
                            <Typography gutterBottom variant="body1" component="p">
                                {item.title && item.title}
                            </Typography>
                            <Typography gutterBottom variant="caption" color="textSecondary" component="span" className={`${classes.px1}`}>
                                {item.category}
                            </Typography>
                            <Typography gutterBottom variant="caption" color="primary" component="p">
                                {item.location}
                            </Typography>
                        </Box>
                    </CardContent>
                </CustomRouterLink>
            </Router>
            {/* </CardActionArea> */}
            {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
        </Card>
    );
}

export default SliderItem;
