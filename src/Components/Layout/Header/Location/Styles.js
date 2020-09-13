import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    placeBtn: {
        boxShadow: `${theme.shadows[0]}`,
        backgroundColor: '#EAF1FF',
        color: theme.palette.primary.main,
        // border: '1px solid rgba(0, 0, 0, 0.3)',
        padding: theme.spacing(0, 1)
    },
    placeBtnText: {
        maxWidth: '120px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        // margin: '0px 0.5em 0px 3em',
        [theme.breakpoints.down('md')]: {
            maxWidth: '220px',
        },
    }
}));