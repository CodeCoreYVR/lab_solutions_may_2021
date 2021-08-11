import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductIndexPage from './components/ProductIndexPage'
import ProductShowPage from './components/ProductShowPage'
import ProductNewPage from './components/ProductNewPage'
import Navbar from './components/Navbar'
import Home from './components/Home'



function App() {
  return (
    <div className="ui container" >
      < Router >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductIndexPage} />
          <Route path="/products/new" exact component={ProductNewPage} />
          <Route path="/products/:id" exact component={ProductShowPage} />
        </Switch>

      </Router>
    </div >

  );
}

export default App;
