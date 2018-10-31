import React from "react";
import { Text, View,Image } from "react-native";
import style from "./style";

const InformationRow = props => (
  <View style={style.imageInformationRow}>
    <Image style={style.icon} source={props.img}/>
    <Text style={style.info}>{props.info}</Text>
  </View>
);

export default InformationRow;
