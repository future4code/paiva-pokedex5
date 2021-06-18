import React, {useState} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PokedexPage from '../pages/PokedexPage/PokedexPage';
import PokeDetailPage from '../pages/PokeDetailPage/PokeDetailPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import useRequestedPokeInfo from '../hooks/useRequestedPokeInfo';

const Router = () => {
  const allPokeInfo = useRequestedPokeInfo([]);
  const [pokedex, setPokedex] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
          <Route exact path={"/"}>
              <HomePage pokedex={pokedex} setPokedex={setPokedex} allPokeInfo={allPokeInfo}/>
          </Route>
          <Route exact path={"/pokedex"}>
              <PokedexPage pokedex={pokedex} setPokedex={setPokedex} allPokeInfo={allPokeInfo}/>
          </Route>
          <Route exact path={"/poke-detail/:pokeName"}>
              <PokeDetailPage allPokeInfo={allPokeInfo}/>
          </Route>
          <Route>
              <ErrorPage />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;