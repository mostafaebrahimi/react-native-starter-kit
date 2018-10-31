import React from "react";
import { Text, View } from "react-native";
import style from "./style";

const InformationRow = props => (
  <View style={style.informationRow}>
    <Text style={style.informationRow_title}>{props.title}</Text>
    <Text style={style.informationRow_info}>{props.info}</Text>
  </View>
);

export default InformationRow;
