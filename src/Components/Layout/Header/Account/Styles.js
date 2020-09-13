import { makeStyles, fade } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    accountBtn: {
        boxShadow: `${theme.shadows[0]}`,
        backgroundColor: 'transparent',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        padding: '0!important'
    },
    chipStyle: {
        // backgroundColor: `${theme.palette.common.white}`,
        color: "grey",
        fontSize: '1.2em',
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 25
    },
    chipIcon: {
        color: fade(theme.palette.common.black, 0.15),
        marginRight: 6
    },
    snackBarClose: {
        padding: theme.spacing(0.5),
    },
}));