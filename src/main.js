import React, { Component } from 'react'
import { Text, View } from 'react-native'
import "./config/ReactotronConfig";
import { Provider } from "react-redux";
import store from "./store";
import { AppContainer } from "~/routes";
import { isAuthenticated } from "./services/auth";
import { createAppContainer } from 'react-navigation';
import { createRootNavigator } from './routes';

export default class App extends Component {

  state = {
    signed: false,
    signLoaded: false,
  };

  componentWillMount() {
    // const AppContainer = createAppContainer(createRootNavigator(isAuthenticated()));
    isAuthenticated()
      .then(res => this.setState({ signed: res, signLoaded: true }))
      .catch(err => alert("Erro"));
  }

  render() {
    const { signLoaded, signed } = this.state;

    if (!signLoaded) {
      return null;
    }

    // const Layout = createRootNavigator(signed);
    const AppContainer = createAppContainer(createRootNavigator(signed));
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

// const App = () => (
//   <Provider store={store}>
//     <AppContainer />
//   </Provider>
// );

// export default App;
