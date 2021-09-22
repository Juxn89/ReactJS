import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DCScreen from '../components/dc/DCScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/dc" component={DCScreen}/>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>
                    
                    <Redirect to="/dc"/>
                </Switch>
            </div>
        </>
    );
}

export default DashboardRoutes;