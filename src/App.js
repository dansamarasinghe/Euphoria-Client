import React from 'react';
import './App.css';
import SignIn from './components/SignIn'
import {Provider} from 'react-redux';
import store from './store';
import SignUpPage from './views/user/SignUpPage';
import HomePageUser from './views/user/HomePageUser';
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <SignIn></SignIn> */}
        {/* <SignUpPage></SignUpPage> */}
        <HomePageUser></HomePageUser>
      </div>
    </Provider>
  );
}

export default App;

