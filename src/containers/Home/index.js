import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Text } from "react-native";
import Courses from "./Courses";
import Profile from "./Profile";
import Header from "../Layouts/Header";
import NavigationService from "../../navigation/NavigationService";
import AddNewCourseButton from "./Profile/AddNewCourseButton";
const bottomNavigation = createBottomTabNavigator(
  {
    Courses: {
      screen: Courses,
      navigationOptions: {
        title: "Explore"
      }
    },
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

  // let title = routeName === "Profile" ? "Profile" : "Explore";
  headerRight = (routeName == "Profile" ? <AddNewCourseButton /> : null);
  return {
    // title,
    // header: null
    // headerLeft: <Text>Left</Text>,
    headerTitle: <Header />,
    headerRight
    // headerRight: <AddNewCourseButton />
  };
};
export default bottomNavigation;
