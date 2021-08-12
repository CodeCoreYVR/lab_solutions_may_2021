import React from 'react';
import './App.css';
import ProductIndexPage from './components/ProductIndexPage';
import Home from './components/Home';
import ProductShowPage from './components/ProductShowPage';
import ProductNewPage from './components/ProductNewPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import SignInPage from './components/SignInPage'
import { Session, User } from './requests'
import AuthRoute from './components/AuthRoute'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: false
    };
  }
  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }
  signOut = () => {
    Session.destroy().then(() => {
      this.setState({
        currentUser: null
      });
    });
  }
  componentDidMount() {
    this.getUser();
  }
  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="ui container" >
        < Router >
          <Navbar currentUser={currentUser} onSignOut={this.signOut} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/sign_in"
              exact
              render={routeProps => (
                <SignInPage onSignIn={this.getUser} {...routeProps} />
              )}
            />
            <AuthRoute
              isAuthenticated={currentUser}
              path="/products/"
              exact
              component={ProductIndexPage}
            />
            <AuthRoute
              isAuthenticated={currentUser}
              path="/products/new"
              exact
              component={ProductNewPage}
            />
            <AuthRoute
              isAuthenticated={currentUser}
              path="/products/:id"
              exact
              component={ProductShowPage}
            />
          </Switch>

        </Router>
      </div >
    );
  }
}

export default App;
