import './App.css';
import Header from './components/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProductListing from './components/ProductsListing';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Header /> 
        <Switch>
          <Route path='/' component={ProductListing} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
