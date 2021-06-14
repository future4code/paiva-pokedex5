import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PokedexPage from '../pages/PokedexPage';
import PokeDetailPage from '../pages/PokeDetailPage';
import ErrorPage from '../pages/ErrorPage';

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
          <Route exact path={"/poke-detail"}>
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