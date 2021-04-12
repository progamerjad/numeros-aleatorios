import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import ArenaJogo from './views/jogos/arena'

export default () => {

    return(
       
            <Switch>
                <Route exact path="/jogos-arena" component={ArenaJogo}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        
    )
}