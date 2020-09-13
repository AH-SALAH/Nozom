import React, { useState, forwardRef/*, useEffect*/ } from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Redirect,
    // Router
    // Link,
    // useParams,
    useRouteMatch,
    // useHistory,
    // useLocation
} from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
// import CheckIcon from '@material-ui/icons/Check';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MuiPhoneNumber from 'material-ui-phone-number/dist';
import InputAdornment from '@material-ui/core/InputAdornment';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import green from '@material-ui/core/colors/green';
// import blue from '@material-ui/core/colors/blue';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import InputLabel from '@material-ui/core/InputLabel';

import createDOMForm from "rc-form/es/createDOMForm";

import { useTheme } from '@material-ui/core/styles';
// import CustomDialog from "./CustomDialog";
// import CustomRouterLink from "./CustomRouterLink";

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

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SignUpModal = props => {

    // const location = useLocation();
    const match = useRouteMatch();
    const classes = useStyles();
    const theme = useTheme();

    const {
        getFieldDecorator,
        validateFieldsAndScroll,
        // resetFields,
        // isFieldValidating,
        getFieldError
    } = props.form;

    const {
        open,
        handleSubmit,
        handleClose,
        loadingBtn
    } = props;

    const init = {
        loading: loadingBtn || false,
        showPassword: false
    };

    const [state, setState] = useState(init);

    // useEffect(() => {
    //     setState(init);
    //     return () => {
    //         setState(state);
    //     };
    //     // eslint-disable-next-line
    // }, [props]);

    const handleFormSubmit = async (e) => {
        setState({ ...state, loading: true });

        validateFieldsAndScroll(async (errs, values) => {
            if (!errs) {
                await handleSubmit(values);
                setState({ ...state, loading: false });
            }
            else {
                console.log("solve probs first!");
                setState({ ...state, loading: false });
            }
        });
    };

    // const handleClickShowPassword = () => {
    //     setState({ ...state, showPassword: !state.showPassword });
    // };

    // const handleMouseDownPassword = e => {
    //     e.preventDefault();
    // };

    const toggleDialog = (e) => {
        handleClose(e, match.path+'signin');
    };

    return (
        <Grid item style={{ order: 3 }}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                // fullScreen
                // fullWidth
                onClose={(e)=> handleClose(e, match.path, null, "close")}
                aria-labelledby="dialog"
                PaperProps={{ style: { borderRadius: theme.shape.borderRadius * 4 } }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="row">
                    <DialogTitle id="dialog-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {props && props.title ? props.title : ''}
                    </DialogTitle>
                    <IconButton aria-label="close" onClick={(e)=> handleClose(e, match.path, null, "close")}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <DialogContent style={{ padding: theme.spacing(0, 1 * 6) }}>
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={3}>
                        <Typography variant={`h6`} style={{ color: theme.palette.grey['800'] }}>
                            مرحباً بك في هنا
                        </Typography>
                        <DialogContentText>
                            بيع وشراء أي شيئ ممكن أن تتخيله
                        </DialogContentText>
                    </Box>

                    <form onSubmit={handleFormSubmit}>

                        <Box display="flex" justifyContent="flex-start" alignItems="flex-start" flexDirection="column" mb={3}>
                            <Typography variant="caption" style={{ color: theme.palette.grey['600'] }}>
                                رقم الهاتف
                            </Typography>
                            {
                                getFieldDecorator('phone', {
                                    rules: [
                                        {
                                            required: true,
                                            // type: 'phone',
                                            // message: 'Required'
                                        }
                                    ],
                                    initialValue: ''
                                })(
                                    <MuiPhoneNumber
                                        defaultCountry={'sa'}
                                        regions={['middle-east', 'north-africa']}
                                        style={{ width: '100%' }}
                                        placeholder={'رقم الهاتف'}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end" >
                                                    <PhoneAndroidIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={getFieldError("phone") && getFieldError("phone").length > 0}
                                        helperText={getFieldError("phone") && getFieldError("phone").length > 0 ? getFieldError("phone") : ""}
                                    />
                                )
                            }

                        </Box>

                        <Box display="flex" justifyContent="flex-start" alignItems="center" flexDirection="column" mb={3}>
                            <Fab variant="extended" color="primary" style={{ width: '90%' }} onClick={handleFormSubmit} disabled={state.loading}>
                                {state.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                إبدأ الأن
                            </Fab>
                        </Box>
                        {/* <Box display="flex" justifyContent="flex-start" alignItems="center" flexDirection="column" mb={3}>
                            <CustomRouterLink to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Typography variant="body2" style={{ color: theme.palette.grey['500'] }}>
                                    لدي حساب بالفعل
                                </Typography>
                            </CustomRouterLink>
                        </Box> */}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="100%" p={theme.spacing(0.4)}>
                        <Button style={{ textDecoration: 'none', color: 'inherit' }} onClick={toggleDialog}>
                            <Typography variant="body2" style={{ color: theme.palette.primary.main }}>
                                لدي حساب بالفعل
                            </Typography>
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </Grid >
    )
};

export default createDOMForm({ name: 'signUpForm' })(SignUpModal);
