import React from 'react';
import {Switch, Router} from 'react-router-dom';

import ListView from './components/list/ListView/ListView';
import Route from 'react-router/Route';

export default (
    <Switch>
        <Route exact path="/" component={ListView} />
    </Switch>
)