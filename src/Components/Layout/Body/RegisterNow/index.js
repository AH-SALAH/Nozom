import React, { useState/*, useEffect*/ } from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Redirect,
    // Link,
    // useParams,
    useRouteMatch,
    useHistory,
    // useLocation
} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MuiPhoneNumber from 'material-ui-phone-number/dist';
import InputAdornment from '@material-ui/core/InputAdornment';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';

// import { Styles } from "./Styles";
import { useTheme, makeStyles } from '@material-ui/core/styles';

import createDOMForm from "rc-form/es/createDOMForm";

import SignUpConfirmForm from '../../../Utilities/SignUpConfirm';

const SlideTransition = props => <Slide {...props} direction="up" />;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

const RegisterNow = props => {

    const {
        getFieldDecorator,
        validateFieldsAndScroll,
        // resetFields,
        // isFieldValidating,
        getFieldError
    } = props.form;

    const match = useRouteMatch();
    // const location = useLocation();
    const history = useHistory();

    const theme = useTheme();
    const classes = useStyles();
    // const classes = Styles();

    const init = {
        loading: false,
        showPassword: false,
        showSignUpDialog: false,
        showSignUpConfirmDialog: false,
        showSnackBar: false,
        snackMsg: '',
        snackBarTransition: SlideTransition
    };

    const [state, setState] = useState(init);

    // useEffect(() => {
    //     // if (location.pathname.includes('/signin')) toggleSignInDialog(null, match.path, true, true);
    //     // if (location.pathname.includes('/signup')) toggleSignUpDialog(null, match.path, true, true);
    //     if (location.pathname.includes('/regconfirm')) toggleSignUpConfirmDialog(null, match.path, true, true);

    //     // return () => {
    //     //     cleanup
    //     // };
    //     // eslint-disable-next-line
    // }, [location]);

    const handleSubmit = async (values) => {
        // TODO: ajaxCall
        return new Promise(resolve => {
            let tout = setTimeout(() => {
                resolve(values);
                toggleSignUpConfirmDialog(null, match.path, null);
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


    const handleFormSubmit = async (e) => {
        setState({ ...state, loading: true });

        validateFieldsAndScroll(async (errs, values) => {
            if (!errs) {
                await handleSubmit(values);
                setState(s => { return { ...s, loading: false } });
            }
            else {
                console.log("solve probs first!");
                setState(s => { return { ...s, loading: false } });
            }
        });
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
        <Grid item lg={3} md={3} xs={12}>
            <Paper elevation={0} style={{ padding: theme.spacing(2, 2, 3, 2), borderRadius: theme.shape.borderRadius * 4 }}>
                <Box mb={2} display="flex" justifyContent="flex-start" alignItems="flex-start">
                    <Typography variant="h5">
                        سجل الان
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="flex-start" alignItems="flex-start" mb={3}>
                    <Typography style={{ color: theme.palette.grey['500'] }}>
                        حسابك دلوقتي بقى برقم موبايلك! احتفظ بإعلاناتك المفضلة
                    </Typography>
                </Box>

                <form onSubmit={handleFormSubmit}>
                    <Box display="flex" justifyContent="flex-start" alignItems="flex-start" flexDirection="column" mb={3}>
                        <Typography variant="caption" style={{ color: theme.palette.grey['600'] }}>
                            رقم الهاتف
                        </Typography>
                        {
                            getFieldDecorator('reg-phone', {
                                rules: [
                                    {
                                        required: true,
                                        // type: 'phone',
                                        message: 'Phone is Required'
                                    }
                                ],
                                initialValue: ''
                            })(
                                <MuiPhoneNumber
                                    defaultCountry={'sa'}
                                    regions={['middle-east', 'north-africa']}
                                    style={{ marginBottom: '1em', width: '100%' }}
                                    placeholder={'رقم الهاتف'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" >
                                                <PhoneAndroidIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    error={getFieldError("reg-phone") && getFieldError("reg-phone").length > 0}
                                    helperText={getFieldError("reg-phone") && getFieldError("reg-phone").length > 0 ? getFieldError("reg-phone") : ""}
                                />
                            )
                        }
                    </Box>

                    {/* <Box display="flex" justifyContent="flex-start" alignItems="center" flexDirection="column" mb={3}>
                        <Fab variant="extended" color="primary" style={{ width: '90%' }} onClick={handleFormSubmit} disabled={state.loading}>
                            {state.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                            إبدأ الأن
                        </Fab>
                    </Box> */}
                    {/* <Box display="flex" justifyContent="flex-start" alignItems="center" flexDirection="column" mb={3}>
                        <CustomRouterLink to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" style={{ color: theme.palette.grey['500'] }}>
                                لدي حساب بالفعل
                            </Typography>
                        </CustomRouterLink>
                    </Box> */}
                </form>

                {/* ['america', 'europe', 'asia', 'oceania', 'africa'] */}
                {/* ['north-america', 'south-america', 'central-america', 'carribean', 'european-union', 'ex-ussr', 'middle-east', 'north-africa'] */}
                {/* <Box display="flex" justifyContent="flex-start" alignItems="flex-start" flexDirection="column" mb={3}>
                    <Typography style={{ color: theme.palette.grey['500'] }}>
                        رقم الهاتف
                    </Typography>
                    <MuiPhoneNumber
                        defaultCountry={'sa'}
                        regions={['middle-east', 'north-africa']}
                        style={{ marginBottom: '1em', width: '100%' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <PhoneAndroidIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Box> */}
                <Box display="flex" justifyContent="flex-start" alignItems="center" flexDirection="column" mb={3}>
                    <Fab variant="extended" color="primary" style={{ width: '90%' }} onClick={handleFormSubmit} disabled={state.loading}>
                        {state.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        تسجيل
                    </Fab>
                </Box>

                <SignUpConfirmForm
                    open={state.showSignUpConfirmDialog}
                    handleSubmit={handleSignUpConfirmSubmit}
                    handleClose={toggleSignUpConfirmDialog}
                // loadingBtn={state.showLoadingBtn}
                />

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

            </Paper>
        </Grid>
    )
}

export default createDOMForm({ name: 'signUpFormAside' })(RegisterNow);
