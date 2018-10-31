import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import style from "./style";
import ImageLoad from "react-native-image-placeholder";

class SingleCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={style.courseViewContainer}>
        <ImageLoad
          style={[style.courseImageStyle]}
          loadingStyle={{ size: "large", color: "blue" }}
          source={{
            uri: this.props.img
              ? this.props.img
              : "https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-150595123.jpg"
          }}
        />
        <View style={style.bodyContainer}>
          <Text style={style.courseTitle}>{this.props.courseName}</Text>
        </View>
      </View>
    );
  }
}

export default SingleCourse;
