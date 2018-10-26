/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
console.disableYellowBox = true;
let debug = require("debug");

debug.enable("axios");

AppRegistry.registerComponent(appName, () => App);
