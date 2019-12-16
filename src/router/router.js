import { Route, Switch } from 'react-router-dom'
import React from "react";
import Main from "../views/main";
import Instruct from '../views/instruct';
import Decorator from '../views/decorator';
const RouterView = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/instruct" component={Instruct} />
        <Route path="/decorator" component={Decorator} />
    </Switch>
);
export default RouterView;
