import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Styles } from "./Styles";
import Grid from '@material-ui/core/Grid';


const Search = () => {

    const classes = Styles();
    // const theme = useTheme();

    return (
        <Grid item xs={12} md="auto" style={{ order: 1 }}>
            <div className={`${classes.search}`}>
                <div className={classes.searchIcon}>
                    <SearchIcon color="primary" />
                </div>
                <InputBase
                    placeholder="أبحث هنا"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </Grid>
    )
}

export default Search;
