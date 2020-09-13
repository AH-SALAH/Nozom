import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: `${theme.palette.type === 'light' ? theme.palette.common.white : theme.palette.background.paper}`,
        color:  `${theme.palette.type === 'light' ? '#403c3c' : 'inherit'}`,
        boxShadow: `${theme.shadows[0]}`,
        marginBottom: `${theme.mixins.toolbar.minHeight / 2}px`,
        [theme.breakpoints.down('md')]: {
            boxShadow: `${theme.shadows[3]}`, 
        }
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingTop: theme.spacing(1 + 1 / 6),
        paddingBottom: theme.spacing(1 + 1 / 6),
    },
    px2: {
        paddingLeft: '15px',
        paddingRight: '15px'
    },
    mx2: {
        marginLeft: '15px',
        marginRight: '15px'
    },
    py2: {
        paddingLeft: '15px',
        paddingRight: '15px'
    },
    my2: {
        marginLeft: '15px',
        marginRight: '15px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    show:{
        display: 'flex'
    },
    hide:{
        display: 'none'
    }
}));