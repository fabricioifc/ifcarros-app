import { createStackNavigator } from "react-navigation-stack";
import TabNavigator from "./TabNavigation";

const StackNavigator = createStackNavigator({
  TabNavigator: TabNavigator
});

export default StackNavigator;
