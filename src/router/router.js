import { Route } from 'react-router-dom'
import React from "react";
import Main from "../views/main";
import Test from '../views/test';
const RouterView = () => (
    <div>
        <Route exact path="/" component={Main} />
        <Route path="/test" component={Test} />
    </div>
);
export default RouterView;
