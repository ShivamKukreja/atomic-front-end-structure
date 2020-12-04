import { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Layout from 'components/shared/templates/Layout';
import Cart from './pages/cart';
import Order from './pages/order';
import Home from './pages/home';
import Plp from './pages/plp';
import PageNotFound from './pages/404Page';
import { request } from './core/AjaxFactoryUtil';
import consoleLog from './core/logger';

function App() {
  // @TODO: remove this function later
  const testGetEpisodes = async () => {
    const response = await request({
      url: 'https://www.episodate.com/api/search?q=arrow&page=1',
      method: 'GET',
    });
    consoleLog.info(' dummy response from test url', response);
  };
  // @TODO: remove this effect later
  // just for checking the axios wrapper utility
  useEffect(() => {
    testGetEpisodes();
  }, []);

  return (
    <Layout>
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/plp">Plp</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/order" exact>
              <Order />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/plp" exact>
              <Plp />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </Layout>
  );
}

export default App;
