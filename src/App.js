import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./component/header/Header.component";
import SinInSinUpPage from "./pages/signIn-and-singUp/SinInSinUpPage.component";
import { auth} from './firebase/firebase.utils'


class App extends React.Component{

  constructor(){
    super();

    this.state = {
      curentUser : null
    }
  }

  unsusbscribeFromAuth = null;


  componentDidMount() {
    this.unsusbscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({curentUser: user})
      console.log(user);
    })
  }

componentWillUnmount(){
this.unsusbscribeFromAuth = null
}

  render (){

    return (
      <div>
  
        <Header curentUser={this.state.curentUser}/>
  
        <Switch>
  
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SinInSinUpPage} />
  
  
  
  
        </Switch>
      </div>
    );
  }


  }

export default App;
