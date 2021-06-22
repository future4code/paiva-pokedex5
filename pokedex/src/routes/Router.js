import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PokedexPage from '../pages/PokedexPage/PokedexPage';
import PokeDetailPage from '../pages/PokeDetailPage/PokeDetailPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path={"/"}>
              <HomePage />
          </Route>
          <Route exact path={"/pokedex"}>
              <PokedexPage />
          </Route>
          <Route exact path={"/poke-detail/:pokeName"}>
              <PokeDetailPage />
          </Route>
          <Route>
              <ErrorPage />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;