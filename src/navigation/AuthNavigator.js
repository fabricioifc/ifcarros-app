import Login from "../pages/Login";
import Logout from "../pages/Logout";
import { createStackNavigator } from "react-navigation-stack";

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Logout: { screen: Logout }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default AuthNavigator;
