import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./component/header/Header.component";
import SinInSinUpPage from "./pages/signIn-and-singUp/SinInSinUpPage.component";
import { auth} from './firebase/firebase.utils'
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const[currentUser, setCurentUser] = useState(null)

   //au chargement du composant
  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      setCurentUser({user})
    })      
    return () =>{
      setCurentUser(null);
    };
  },[]);


  return (
    <div>

      <Header currentUser={currentUser} onLogout={setCurentUser}/>

      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SinInSinUpPage} />




      </Switch>
    </div>
  );
}

export default App;
