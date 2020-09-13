import { makeStyles, fade } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    catGrid: {
        borderRadius: theme.spacing(0),
        border: `1px solid ${fade(theme.palette.common.black, 0.02)}`,
        '&:hover': {
            // border: `${theme.spacing(0)} none`,
            zIndex: theme.zIndex.appBar / theme.zIndex.appBar
        },
    },
    catPaper: {
        borderRadius: theme.spacing(0),
        padding: theme.spacing(1.4),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        transition: `all ${theme.spacing(0.03)}s cubic-bezier(0.4, 0, 0.2, 1)`,
        '&:hover': {
            boxShadow: `${theme.spacing(0, 2, 1.2, 0.3)} ${fade(theme.palette.common.black, 0.06)}`,
            backgroundColor: fade(theme.palette.common.black, 0.02),
        },
    },
    avatarBox: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.info.light,
        // margin: '0 1em 0 0'
    },
    avatarRoot: {
        // padding: theme.spacing(1),
        backgroundColor: theme.palette.info.light,
        margin: '0 1em 0 0'
    },
    avatarImg: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));