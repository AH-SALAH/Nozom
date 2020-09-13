import React, { useState, forwardRef, useEffect } from 'react';

// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

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


const CustomDialog = props => {

    const init = {
        open: props.open,
        handleSubmit: props.handleSubmit || function () { },
        handleClose: props.handleClose || function () { },
        loading: false
    };
    const classes = useStyles();
    const [state, setState] = useState(init);


    useEffect(() => {
        setState(init);
        return () => {
            setState(state);
        };
        // eslint-disable-next-line
    }, [props]);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setState({ ...state, open: false });
        props.handleClose(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(e);
        // props.handleClose(false);
    };

    return (
        <Dialog
            open={state.open}
            TransitionComponent={Transition}
            keepMounted
            // fullScreen
            fullWidth
            onClose={handleClose}
            aria-labelledby="dialog"
        >
            <DialogTitle id="dialog-title">
                {props && props.title ? props.title : ''}
                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    /> */}
                {props.children}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>

                <Button onClick={handleSubmit} color="secondary">
                    {state.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CustomDialog;