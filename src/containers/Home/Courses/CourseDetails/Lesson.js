import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import style from "./style";
const Lesson = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={style.singleLesson}>
      <Text style={style.nameOfLesson}>{props.name}</Text>
      <Text style={style.timeOfLesson}>{`${props.time} min`}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default Lesson;
