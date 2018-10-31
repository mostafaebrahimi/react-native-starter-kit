import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import style from "./style";
import ImageLoad from "react-native-image-placeholder";
import _ from "lodash";
import InformationRow from "../Profile/Tabs/InformationRow";
import images from "../../../config/images";
import ImageInfoRow from "./ImgeInfoRow";
class CourseRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._showMoreText = this._showMoreText.bind(this);
  }

  _showMoreText(text) {
    if (!text) return "";
    return _.isString(text) && text.length < 18
      ? text
      : text.substring(0, 18) + "...";
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
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
            <Text style={style.courseTitle}>
              {this._showMoreText(this.props.courseName)}
            </Text>
            <ImageInfoRow
              img={images.courses.teacher}
              info={this._showMoreText(this.props.teacher)}
            />
            <ImageInfoRow
              img={images.courses.data}
              info={this._showMoreText(this.props.startDate)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default CourseRow;
