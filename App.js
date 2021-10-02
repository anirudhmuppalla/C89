import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";

import DashboardScreen from "./screens/DashboardScreen";
import DrawerNavigator from "./screens/DrawerNavigator"
import * as firebase from "firebase";
import { firebaseConfig } from "./babel.config";


  


const AppSwitchNavigator = createSwitchNavigator({
  
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <DrawerNavigator/>
  return <AppNavigator />;
}
