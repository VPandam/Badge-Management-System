import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Badges from './pages/Badges';
import BadgeNew from './pages/BadgeNew';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import BadgeEdit  from './pages/BadgeEdit';
import BadgeDetails from './pages/BadgeDetailsContainer';


function App() {

    return (
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path='/badges' component={Badges}/>
                    <Route exact path='/badges/new' component={BadgeNew} />
                    <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
                    <Route exact path='/badges/:badgeId/' component={BadgeDetails} />
                    <Route exact path='/' component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </HashRouter >
    );
}

export default App;