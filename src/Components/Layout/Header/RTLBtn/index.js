import React, { /*useEffect,*/ useState/*, useRef*/ } from 'react';

import { useTranslation/*, withTranslation, Trans*/ } from 'react-i18next';

import Grid from '@material-ui/core/Grid';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import TextDirectionL from '@material-ui/icons/FormatTextdirectionLToR';
// import TextDirectionR from '@material-ui/icons/FormatTextdirectionRToL';
import TranslateIcon from '@material-ui/icons/Translate';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { Styles } from "./Styles";
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 90,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}), {name: "mui-lang-choice"});

const RTLBtn = () => {

    // const classes = Styles();
    const theme = useTheme();
    const { i18n } = useTranslation();

    const toggleLR = lng => {
        let body = document.querySelector('body');
        let html = document.querySelector('html');
        let app = document.querySelector('.App');
        let p = document.querySelectorAll('p');

        if (theme.direction === 'ltr' && (lng === 'ar' || lng === 'he')) {
            theme.toggleThemeDir('rtl');

            body &&
                body.classList.add('rtl');
            body.classList.remove('ltr');
            body.setAttribute('dir', 'rtl');

            html &&
                html.classList.add('rtl');
            html.classList.remove('ltr');
            html.setAttribute('dir', 'rtl');

            app &&
                app.classList.add('rtl');
            app.classList.remove('ltr');
            app.setAttribute('dir', 'rtl');

            p.forEach((it) => it.style.textAlign = 'right');

        } else {
            theme.toggleThemeDir('ltr');

            body &&
                body.classList.add('ltr');
            body.classList.remove('rtl');
            body.setAttribute('dir', 'ltr');

            html &&
                html.classList.add('ltr');
            html.classList.remove('rtl');
            html.setAttribute('dir', 'ltr');

            app &&
                app.classList.add('ltr');
            app.classList.remove('rtl');
            app.setAttribute('dir', 'ltr');

            p.forEach((it) => it.style.textAlign = 'left');

        }


    };

    const classes = useStyles();
    const [lng, setLng] = useState('ar');

    // const inputLabel = useRef(null);
    // const [labelWidth, setLabelWidth] = useState(0);

    // useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    const handleLngChange = event => {
        setLng(event.target.value);
        toggleLR(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Grid item style={{ order: 4 }}>
            {/* <Tooltip title="RTL/LTR" arrow>
                <IconButton onClick={toggleLR}>
                    {theme.direction === 'rtl' ? <TextDirectionR /> : <TextDirectionL />}
                </IconButton>
            </Tooltip> */}

            <FormControl className={classes.formControl}>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                    labelId="lngSelect"
                    id="lng-select"
                    value={lng}
                    onChange={handleLngChange}
                    prefix={<TranslateIcon />}
                >
                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'ar'}>العربية</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    )
}

export default RTLBtn;
