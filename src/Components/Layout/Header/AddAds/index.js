import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

import campaign from "../../../../assets/icons/campaign.svg";


const AddAds = () => {
    return (
        <Grid item style={{ order: 2 }}>
            <Fab variant="extended" color="primary" size="large">
                <Typography style={{ margin: `0 1em` }}>أضف إعلان</Typography>
                <img src={campaign} alt="campaign Icon" style={{ width: '2em' }} />
            </Fab>
        </Grid>
    )
}

export default AddAds;
