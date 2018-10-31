import React from "react";
import { Image, Text, View } from "react-native";
import style from "./style";
import { Images } from "../../../../config";

const EmptyView = props => (
  <View style={style.emptyViewContainer}>
    <Image style={{ width: 100, height: 100 }} source={Images.home.empty} />
    <Text style={style.emptyMessage}>
      {props.msg ? props.msg : "not exist"}
    </Text>
  </View>
);

export default EmptyView;
