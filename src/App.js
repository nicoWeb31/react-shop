import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./component/header/Header.component";
import SinInSinUpPage from "./pages/signIn-and-singUp/SinInSinUpPage.component";
import { auth,createUserProfileDoc} from './firebase/firebase.utils'


class App extends React.Component{

  constructor(){
    super();

    this.state = {
      curentUser : null
    }
  }

  unsusbscribeFromAuth = null;


  componentDidMount() {
    this.unsusbscribeFromAuth = auth.onAuthStateChanged(async userAuht =>{
      
      
      if(userAuht){
        const userRef = await createUserProfileDoc(userAuht);

        userRef.onSnapshot(snapShot =>{
          console.log(snapShot)
          
          this.setState({curentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }})
        })

      }else{
        this.setState({
          curentUser: userAuht
        })
      }

      
    })

    console.log(this.state.curentUser)
  }

componentWillUnmount(){
this.unsusbscribeFromAuth = null
}

  render (){

    return (
      <div>
  
        <Header />
  
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
