import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landing';
import Contact from './contacts';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/contacts" component={Contact} />
        <Route  path="/resume" component={Resume} />
        <Route  path="/projects" component={Projects} />
    </Switch>
)

export default Main;