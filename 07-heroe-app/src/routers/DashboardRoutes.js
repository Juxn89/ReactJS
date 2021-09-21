import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DCScreen from '../components/dc/DCScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/dc" component={DCScreen}/>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeId" component={HeroScreen}/>
                    
                    <Redirect to="/dc"/>
                </Switch>
            </div>
        </>
    );
}

export default DashboardRoutes;