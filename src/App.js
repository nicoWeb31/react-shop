import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./component/header/Header.component";
import SinInSinUpPage from "./pages/signIn-and-singUp/SinInSinUpPage.component"


function App() {
  return (
    <div>

      <Header/>

      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SinInSinUpPage} />




      </Switch>
    </div>
  );
}

export default App;
