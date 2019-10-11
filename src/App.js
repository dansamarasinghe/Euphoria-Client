import React from 'react';
import './App.css';
import SignIn from './components/SignIn'
import {Provider} from 'react-redux';
import store from './store';
import SignUpPage from './components/SignUpPage';
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <SignIn></SignIn> */}
        <SignUpPage></SignUpPage>
      </div>
    </Provider>
  );
}

export default App;
