import React/*, { lazy, Suspense }*/ from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams,
//     useRouteMatch
// } from "react-router-dom";

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';

// import { Styles } from "./Styles";
// import { useMediaQuery } from '@material-ui/core';

import CategoryBoard from "./CategoryBoard";
import RegisterNow from "./RegisterNow";
import RecentAds from './RecentAds';
import NearestStore from './NearestStore';
import DownloadApp from './DownloadApp';

// import ContentLoader from "react-content-loader";

// const CategoryBoard = lazy(() => import('./CategoryBoard'));
// const RegisterNow = lazy(() => import('./RegisterNow'));
// const RecentAds = lazy(() => import('./RecentAds'));
// const NearestStore = lazy(() => import('./NearestStore'));
// const DownloadApp = lazy(() => import('./DownloadApp'));

// const YoutubeLoader = () => (
//     <ContentLoader viewBox="0 0 300 100" height={'100%'} width={'100%'} speed={1.5}>
//         <rect x="30" y="20" rx="0" ry="0" width="130" height="23" />
//         <rect x="30" y="60" rx="0" ry="0" width="200" height="120" />
//         <rect x="30" y="189" rx="0" ry="0" width="200" height="15" />
//         <rect x="30" y="211" rx="0" ry="0" width="140" height="15" />
//         <rect x="243" y="60" rx="0" ry="0" width="200" height="120" />
//         <rect x="243" y="189" rx="0" ry="0" width="200" height="15" />
//         <rect x="243" y="211" rx="0" ry="0" width="140" height="15" />
//         <rect x="455" y="60" rx="0" ry="0" width="200" height="120" />
//         <rect x="455" y="189" rx="0" ry="0" width="200" height="15" />
//         <rect x="455" y="211" rx="0" ry="0" width="140" height="15" />
//         <rect x="667" y="60" rx="0" ry="0" width="200" height="120" />
//         <rect x="667" y="188" rx="0" ry="0" width="200" height="15" />
//         <rect x="667" y="209" rx="0" ry="0" width="140" height="15" />
//         <rect x="30" y="280" rx="0" ry="0" width="130" height="23" />
//         <rect x="30" y="320" rx="0" ry="0" width="200" height="120" />
//         <rect x="30" y="450" rx="0" ry="0" width="200" height="15" />
//         <rect x="30" y="474" rx="0" ry="0" width="140" height="15" />
//         <rect x="243" y="320" rx="0" ry="0" width="200" height="120" />
//         <rect x="455" y="320" rx="0" ry="0" width="200" height="120" />
//         <rect x="667" y="320" rx="0" ry="0" width="200" height="120" />
//         <rect x="243" y="450" rx="0" ry="0" width="200" height="15" />
//         <rect x="455" y="450" rx="0" ry="0" width="200" height="15" />
//         <rect x="667" y="450" rx="0" ry="0" width="200" height="15" />
//         <rect x="243" y="474" rx="0" ry="0" width="140" height="15" />
//         <rect x="455" y="474" rx="0" ry="0" width="140" height="15" />
//         <rect x="667" y="474" rx="0" ry="0" width="140" height="15" />
//     </ContentLoader>
// );

const Body = () => {
    const theme = useTheme();
    // const classes = Styles();
    // const isInMiddle = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Container>
            <Box py={theme.mixins.toolbar.minHeight * 0.13} >
                <Grid container spacing={4} justify="space-between" alignItems="flex-start" >
                    {/* register */}
                    {/* <Suspense fallback={<YoutubeLoader />}> */}
                        <RegisterNow />
                    {/* </Suspense> */}
                    {/* categories */}
                    {/* <Suspense fallback={<YoutubeLoader />}> */}
                        <CategoryBoard />
                    {/* </Suspense> */}
                </Grid>
            </Box>
            <Box pb={theme.mixins.toolbar.minHeight * 0.10} >
                <Grid container spacing={4} justify="center" alignItems="flex-start" >
                    {/* Recent Ads */}
                    {/* <Suspense fallback={<div style={{width: 'auto', display: 'flex'}}><YoutubeLoader /></div>}> */}
                        <RecentAds />
                    {/* </Suspense> */}

                    {/* Nearst store */}
                    {/* <Suspense fallback={<YoutubeLoader />}> */}
                        <NearestStore />
                    {/* </Suspense> */}

                    {/* Nearst store */}
                    {/* <Suspense fallback={<YoutubeLoader />}> */}
                        <DownloadApp />
                    {/* </Suspense> */}

                </Grid>
            </Box>
        </Container>
    )
}

export default Body
