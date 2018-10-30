import React, { Component } from "react";
import { View, Text } from "react-native";
import style from "./style";
class First extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={style.tabsScreen} />;
  }
}

export default First;
