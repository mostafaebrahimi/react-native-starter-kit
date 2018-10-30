import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation";
import { Text } from "react-native";
import Courses from "./Courses";
import Profile from "./Profile";
import Header from "../Layouts/Header";

const bottomNavigation = createBottomTabNavigator(
  {
    Courses,
    Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Profile") {
          iconName = "ios-person";
          //   iconName = `ios-person${focused ? "" : "-outline"}`;
        } else if (routeName === "Courses") {
          iconName = `ios-options`;
        }

        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

//config header title
bottomNavigation.navigationOptions = ({ navigation }) => {
  const { index, routes } = navigation.state;
  const { routeName } = routes[index];
  //multiple states handled.
  //uncomment to change
  return {
    // header: null
    // headerLeft: <Text>Left</Text>,
    headerTitle: <Header />
    // headerRight: <Text>Right</Text>
  };
};

export default bottomNavigation;
