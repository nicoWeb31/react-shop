import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from "./component/header/Header.component";
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import checkoutPage from './pages/checkout/checkoutPage.conmponent';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import SinInSinUpPage from "./pages/signIn-and-singUp/SinInSinUpPage.component";
import { setCurrentUser } from './redux/user/user.action';
import { selectCurentUser } from "./redux/user/user.selector";


class App extends React.Component {


  unsusbscribeFromAuth = null;
  
  
  
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsusbscribeFromAuth = auth.onAuthStateChanged(async userAuht => {


      if (userAuht) {
        const userRef = await createUserProfileDoc(userAuht);

        userRef.onSnapshot(snapShot => {


          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      }
      
      setCurrentUser(
        userAuht
      )


    })

  }

  componentWillUnmount() {
    this.unsusbscribeFromAuth = null
  }

  render() {

    return (
      <div>

        <Header />

        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/chekout" component={checkoutPage} />

          <Route exact path="/signin" render={()=>
            this.props.currentUser ? (<Redirect to='/' />) : (<SinInSinUpPage />)
          } />


        </Switch>
      </div>
    );
  }


}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
