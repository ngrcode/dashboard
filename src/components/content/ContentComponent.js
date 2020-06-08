import React from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid/index';
import {makeStyles} from "@material-ui/core/styles/index";
import {Paper} from '@material-ui/core/index';


import {
    Switch,
    Route,
} from "react-router-dom";

import * as routes from './../../store/store'

const useStyles = makeStyles((theme) => ({
    content: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        boxShadow: '0 0 0 0',
    }
}));

function HeaderComponent() {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.content}>
                        <Switch>
                            {routes.routes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                        </Switch>
                    </Paper>
                </Grid>
            </Grid>
            {/*<TestComponent></TestComponent>*/}
        </>
    );
}

export default HeaderComponent;


