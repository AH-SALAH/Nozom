import React, { useEffect, useCallback } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, useTheme } from '@material-ui/core/styles';


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// export const CheckDirection = (props) => {
//     let { theme } = props;
//     const chkDir = useCallback(() => {

//         let body = document.querySelector('body'),
//             html = document.querySelector('html'),
//             app = document.querySelector('.App'),
//             p = document.querySelectorAll('p');


//         if (theme.direction === 'ltr') {

//             body &&
//                 body.classList.add('rtl');
//             body.classList.remove('ltr');
//             body.setAttribute('dir', 'rtl');
//             body.style.textAlign = 'right';

//             html &&
//                 html.classList.add('rtl');
//             html.classList.remove('ltr');
//             html.setAttribute('dir', 'rtl');

//             app &&
//                 app.classList.add('rtl');
//             app.classList.remove('ltr');
//             app.setAttribute('dir', 'rtl');

//             p.forEach((it) => it.style.textAlign = 'right');

//         } else {

//             body &&
//                 body.classList.add('ltr');
//             body.classList.remove('rtl');
//             body.setAttribute('dir', 'ltr');
//             body.style.textAlign = 'left';

//             html &&
//                 html.classList.add('ltr');
//             html.classList.remove('rtl');
//             html.setAttribute('dir', 'ltr');

//             app &&
//                 app.classList.add('ltr');
//             app.classList.remove('rtl');
//             app.setAttribute('dir', 'ltr');

//             p.forEach((it) => it.style.textAlign = 'left');

//         }

//     }, [theme]);

//     return { theme, chkDir };
// };

export const RTL = props => {

    const theme = useTheme();

    const checkDirection = useCallback(props => {

        let body = document.querySelector('body');
        let html = document.querySelector('html');
        let app = document.querySelector('.App');
        let p = document.querySelectorAll('p');


        if (theme.direction === 'ltr') {

            body &&
                body.classList.add('rtl');
            body.classList.remove('ltr');
            body.setAttribute('dir', 'rtl');
            body.style.textAlign = 'right';

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

            body &&
                body.classList.add('ltr');
            body.classList.remove('rtl');
            body.setAttribute('dir', 'ltr');
            body.style.textAlign = 'left';

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

    }, [theme]);


    useEffect(() => {
        checkDirection();
    }, [checkDirection]);

    return (
        <StylesProvider jss={jss}>
            {props.children}
        </StylesProvider>
    );
}