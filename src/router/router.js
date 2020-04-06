import { Route, Switch } from 'react-router-dom'
import React from "react";
import Main from "../views/main";
import Instruct from '../views/instruct';
import Decorator from '../views/decorator';
import Game from '../views/game/game';
const RouterView = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/instruct" component={Instruct} />
        <Route path="/decorator" component={Decorator} />
        <Route path="/game" component={Game} />
    </Switch>
);
export default RouterView;
