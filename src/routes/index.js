import React from 'react';
import config from './config'
import { Lifecycle } from 'react-router'

const Routes = React.createClass({
    mixins: [ Lifecycle ],
    routerWillLeave(nextLocation) {
        if (!this.state.isSaved)
            return 'Your work is not saved! Are you sure you want to leave?'
    }
})
