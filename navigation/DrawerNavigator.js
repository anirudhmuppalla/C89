import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";
import Feed from "../screens/Feed";

const Drawer = createDrawerNavigator();
export default class BottomTabNavigator extends component{
  constructor(props){
    super(props);
    this.state={
      light_theme:true,
      isUpdated:false
    }
  }
  renderFeed=props=>{
    return <Feed setUpdateToFalse={this.removeUpdated}{
      ...props
    }/>
  }
  renderStory=props=>{
    return <Feed setUpdateToFalse={this.changeUpdated}{
      ...props
    }/>
  }
  changeUpdated=()=>{
    this.setState({isUpdated:true})
  }
  removeUpdated=()=>{
    this.setState({isUpdated:false})
  }
  componentDidMount(){
    let theme:
    firebase
    .database()
    .ref("/users/"+firebase.auth().currentUser.uid)
    .on("value",function(snapshot){
      theme=snapshot.val().current_theme
    })
    this.setState({light_theme:theme==="light"?true:false})
  }
  render(){
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Feed") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Create Story") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Create Story" component={CreateStory} />
      </Tab.Navigator>
    );
  };
  
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default DrawerNavigator;
