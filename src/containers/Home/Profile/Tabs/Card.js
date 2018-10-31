import React, { Component } from "react";
import { View, Text } from "react-native";
import style from "./style";
export default class InformationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.borderedView}>
        <View style={style.cardHeader}>
          <Text style={style.headerTitle}>{this.props.title}</Text>
        </View>
        <View style={style.cardBody}>{this.props.children}</View>
      </View>
    );
  }
}
