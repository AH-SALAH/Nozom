import React, { useState } from 'react';
// import "../App.scss";
// import Bahij from '../../fonts/Bahij_TheSansArabic-Bold.ttf';
import { RTL } from './RTL';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { LTRDark, LTRLight } from "./LTRTheme";
import { RTLDark, RTLLight } from "./RTLTheme";


const lightRTL = createMuiTheme(RTLLight);
const darkRTL = createMuiTheme(RTLDark);
const lightLTR = createMuiTheme(LTRLight);
const darkLTR = createMuiTheme(LTRDark);

const Theme = props => {
    // let theme = useTheme();
    // theme = lightRTL;
    const [currentTheme, setCurrentTheme] = useState(lightRTL);

    const toggleThemeDir = dir => {

        if(dir === 'rtl' && currentTheme.palette.type === 'light'){
            setCurrentTheme({...lightRTL});
        }
        else if(dir === 'ltr' && currentTheme.palette.type === 'light'){
            setCurrentTheme({...lightLTR});
        }
        else if(dir === 'rtl' && currentTheme.palette.type === 'dark'){
            setCurrentTheme({...darkRTL});
        }
        else if(dir === 'ltr' && currentTheme.palette.type === 'dark'){
            setCurrentTheme({...darkLTR});
        }
        else{
            setCurrentTheme({...lightRTL});
        }

    };

    const toggleThemeStyle = type => {

        if(type === 'light' && currentTheme.direction === 'rtl'){
            setCurrentTheme({...lightRTL});
        }
        else if(type === 'light' && currentTheme.direction === 'ltr'){
            setCurrentTheme({...lightLTR});
        }
        else if(type === 'dark' && currentTheme.direction === 'rtl'){
            setCurrentTheme({...darkRTL});
        }
        else if(type === 'dark' && currentTheme.direction === 'ltr'){
            setCurrentTheme({...darkLTR});
        }
        else{
            setCurrentTheme({...lightRTL});
        }

    };

    console.log("theme: ", currentTheme);
    
    return (
        <RTL>
            <MuiThemeProvider theme={{...currentTheme, toggleThemeDir, toggleThemeStyle }} {...props}>
                {props.children}
            </MuiThemeProvider>
        </RTL>
    )
}

export default Theme;
