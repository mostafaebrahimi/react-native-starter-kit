import React, { Component } from "react";
import { View, Text } from "react-native";
import { Images } from "../../../config";
import style from "./style";
class HeaderTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.textCenter}>
        <Text style={style.title}>Moon Lesson</Text>
      </View>
    );
  }
}

export default HeaderTitle;
