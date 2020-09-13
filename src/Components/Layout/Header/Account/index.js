import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Redirect,
    // Link,
    // useParams,
    useRouteMatch,
    useHistory,
    useLocation
} from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';

import { Styles } from "./Styles";
// import { useTheme } from '@material-ui/core/styles';

// import CustomDialog from "../../../Utilities/CustomDialog";
import SignInForm from '../../../Utilities/SignInModal';
import SignUpForm from '../../../Utilities/SignUpModal';
import SignUpConfirmForm from '../../../Utilities/SignUpConfirm';
import CustomRouterLink from "../../../Utilities/CustomRouterLink";
// import CustomRouterLinkBtn from "../../../Utilities/CustomRouterLinkBtn";

const SlideTransition = props => <Slide {...props} direction="up" />;

const Account = () => {

    const match = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const classes = Styles();
    // const theme = useTheme();
    // console.log("location from acc: ", location);
    console.log("match from acc: ", match);
    console.log("history from acc: ", history);

    const init = {
        showSignInDialog: false,
        showSignUpDialog: false,
        showSignUpConfirmDialog: false,
        showSnackBar: false,
        snackMsg: '',
        snackBarTransition: SlideTransition
    };

    const [state, setState] = useState(init);

    useEffect(() => {
        if (location.pathname.includes('/signin')) toggleSignInDialog(null, match.path, true, true);
        if (location.pathname.includes('/signup')) toggleSignUpDialog(null, match.path, true, true);
        if (location.pathname.includes('/regconfirm')) toggleSignUpConfirmDialog(null, match.path, true, true);

        // return () => {
        //     cleanup
        // };
        // eslint-disable-next-line
    }, [location]);

    const handleSignInSubmit = async (values) => {
        // TODO: ajaxCall
        return new Promise(resolve => {
            let tout = setTimeout(() => {
                resolve(values);
                toggleSignInDialog(null, location.pathname, null, true, true, 'Successfully Logged In ' + JSON.stringify(values));
                clearTimeout(tout);
            }, 3000);
        });
    };

    const handleSignUpSubmit = async (values) => {
        // TODO: ajaxCall
        return new Promise(resolve => {
            let tout = setTimeout(() => {
                resolve(values);
                toggleSignUpDialog(null, match.path, null, true);
                toggleSignUpConfirmDialog(null, location.pathname);
                clearTimeout(tout);
            }, 3000);
        });
    };

    const handleSignUpConfirmSubmit = async (values) => {
        // TODO: ajaxCall
        return new Promise(resolve => {
            let tout = setTimeout(() => {
                resolve(values);
                toggleSignUpConfirmDialog(null, match.path, null, true, true, 'Successfully Confirmed ' + values);
                clearTimeout(tout);
            }, 3000);
        });
    };

    const toggleSignInDialog = (e, k, watched, close, showSnackBar, snackBarMsg) => {
        setState(s => {
            return {
                ...s,
                showSignInDialog: !s.showSignInDialog,
                showSignUpDialog: k && k.includes('/signup') ? true : false,
                showSnackBar: showSnackBar ? showSnackBar : false,
                snackMsg: showSnackBar && snackBarMsg ? snackBarMsg || 'Succesfully Logged In' : ''
            }
        });
        // if(!state.showSignInDialog) history.push('/signin');
        // if (state.showSignInDialog) history.goBack();
        if (k && close) {
            // toggleSignUpDialog();
            history.push(k);
        }
    };

    const toggleSignUpDialog = (e, k, watched, close) => {
        setState(s => { return { ...s, showSignUpDialog: !s.showSignUpDialog, showSignInDialog: k && k.includes('/signin') ? true : false } });
        // if (state.showSignUpDialog) history.goBack();
        if (k && close) {
            // toggleSignInDialog();
            history.push(k);
        }
    };

    const toggleSignUpConfirmDialog = (e, k, watched, close, showSnackBar, snackBarMsg) => {
        setState(s => {
            return {
                ...s,
                showSignUpConfirmDialog: !s.showSignUpConfirmDialog,
                showSignUpDialog: k && k.includes('/signup') ? true : false,
                showSnackBar: showSnackBar ? showSnackBar : false,
                snackMsg: showSnackBar && snackBarMsg ? snackBarMsg || 'Succesfully Confirmed' : ''
            }
        });
        // if (state.showSignUpDialog) history.goBack();
        if (k && close) {
            // toggleSignInDialog();
            history.push(k);
        }
    };

    const handleCloseSnackBar = () => {
        setState({
            ...state,
            showSnackBar: false,
        });
    };

    const handleExitedSnackBar = () => {
        setState({
            ...state,
            snackMsg: '',
        });
    };

    return (
        <>
            <Grid item style={{ order: 3 }}>
                {/* <Chip
                    icon={<AccountCircle className={classes.chipIcon} fontSize="large" />}
                    //avatar={<Avatar>M</Avatar>}
                    label="حسابى"
                    className={classes.chipStyle}
                    variant="outlined"
                    // color="secondary"
                /> */}
                <Fab variant="extended" size="large" className={`${classes.accountBtn}`} onClick={(e) => toggleSignInDialog(e, match.path + 'signin')}>
                    {/* <Fab variant="extended" size="large" className={`${classes.accountBtn}`}> */}
                    <CustomRouterLink to={{
                        pathname: `${match.path}signin`,
                        // This is the trick! This link sets
                        // the `background` in location state.
                        state: { sign: "in" }
                    }} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography style={{ margin: `0 3em 0 1em` }}>حسابى</Typography>
                    </CustomRouterLink>
                    <AccountCircle className={classes.chipIcon} fontSize="large" />
                </Fab>
                {/* <CustomRouterLinkBtn to={{
                    pathname: `/signin`,
                    // This is the trick! This link sets
                    // the `background` in location state.
                    state: { sign: "in" }
                }} variant="extended" size="large" className={`${classes.accountBtn}`} onClick={toggleSignInDialog} >
                    <Typography style={{ margin: `0 3em 0 1em` }}>حسابى</Typography>
                    <AccountCircle className={classes.chipIcon} fontSize="large" />
                </CustomRouterLinkBtn> */}
            </Grid>
            <SignInForm
                open={state.showSignInDialog}
                handleSubmit={handleSignInSubmit}
                handleClose={toggleSignInDialog}
            // loadingBtn={state.showLoadingBtn}
            />
            <SignUpForm
                open={state.showSignUpDialog}
                handleSubmit={handleSignUpSubmit}
                handleClose={toggleSignUpDialog}
            // loadingBtn={state.showLoadingBtn}
            />
            <SignUpConfirmForm
                open={state.showSignUpConfirmDialog}
                handleSubmit={handleSignUpConfirmSubmit}
                handleClose={toggleSignUpConfirmDialog}
            // loadingBtn={state.showLoadingBtn}
            />

            {
                (state.showSignInDialog && <Router><Redirect to="/signin" /></Router>) || ''
            }
            {
                (state.showSignUpDialog && <Router><Redirect to="/signup" /></Router>) || ''
            }
            {
                (state.showSignUpConfirmDialog && <Router><Redirect to="/regconfirm" /></Router>) || ''
            }


            <Snackbar
                open={state.showSnackBar}
                onClose={handleCloseSnackBar}
                onExited={handleExitedSnackBar}
                TransitionComponent={state.snackBarTransition}
                message={state.snackMsg}
                autoHideDuration={4000}
                action={
                    <>
                        <Button color="secondary" size="small" onClick={handleCloseSnackBar}>
                            UNDO
                        </Button>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            className={classes.snackBarClose}
                            onClick={handleCloseSnackBar}
                        >
                            <CloseIcon />
                        </IconButton>
                    </>
                }
            >
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackBar} severity="success" >
                    {state.snackMsg}
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default Account;
