import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch,Redirect } from 'react-router-dom';
import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./component/header/Header.component";
import SinInSinUpPage from "./pages/signIn-and-singUp/SinInSinUpPage.component";
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from 'reselect'


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
