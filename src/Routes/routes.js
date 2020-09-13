import { lazy } from 'react';

const Layout = lazy(() => import('../Components/Layout'));
// const SignIn = lazy(() => import('../Components/Utilities/SignInModal'));
// const SignUp = lazy(() => import('../Components/Utilities/SignUpModal'));

export const routes = [
    {
        path: "/",
        component: Layout,
        exact: true,
        // children: [
        //     {
        //         path: "/signin",
        //         component: SignIn
        //     },
        //     {
        //         path: "/signup",
        //         component: SignUp
        //     }
        // ]
    },
    // {
    //     path: "/signin",
    //     component: SignIn,
    //     exact: false
    // },
    // {
    //     path: "/signup",
    //     component: SignUp,
    //     exact: false
    // },
    // {
    //   path: "/tacos",
    //   component: Tacos,
    //   routes: [
    //     {
    //       path: "/tacos/bus",
    //       component: Bus
    //     },
    //     {
    //       path: "/tacos/cart",
    //       component: Cart
    //     }
    //   ]
    // }
];