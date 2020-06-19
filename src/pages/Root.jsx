import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import Cadastro from './Cadastro/Cadastro';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <RoutesPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
