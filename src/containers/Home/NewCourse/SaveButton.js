import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import style from "./style";

const SaveButton = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={style.saveBtn}>
      <Text style={{ color: "#fff", fontSize: 16 }}>Save</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default SaveButton;
