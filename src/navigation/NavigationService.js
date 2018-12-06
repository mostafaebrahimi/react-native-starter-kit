import { NavigationActions } from "react-navigation";
import { StackActions } from "react-navigation";

let _navigator;
let _tabNavigator;
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}
function setTabNavigator(tabNavigator) {
  _tabNavigator = tabNavigator;
}

function navigateTopStack(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function replaceTopStack(routeName, params) {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params
    })
  );
}

function navigateTab(routeName, params) {
  _tabNavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigateTopStack,
  navigateTab,
  setTopLevelNavigator,
  setTabNavigator,
  replaceTopStack
};
