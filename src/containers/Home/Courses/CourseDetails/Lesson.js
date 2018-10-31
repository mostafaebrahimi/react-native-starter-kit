import React from "react";
import { Text, View } from "react-native";
import style from "./style";
const Lesson = props => (
  <View style={style.singleLesson}>
    <Text style={style.nameOfLesson}>{props.name}</Text>
    <Text style={style.timeOfLesson}>{`${props.time} min`}</Text>
  </View>
);

export default Lesson;
