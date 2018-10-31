import React, { Component } from "react";
import { Text, View, Image, ScrollView, FlatList } from "react-native";
import style from "./style";
import _ from "lodash";
import { connect } from "react-redux";
import Lesson from "./Lesson";
import data from "./fake";
import RegisterButton from "./RegisterButton";
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class CourseDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title || "Course Name"}`,
    headerRight: <RegisterButton />
  });

  constructor(props) {
    super(props);
    this.state = {};
    this._showMoreText = this._showMoreText.bind(this);
  }

  _showMoreText(text) {
    if (!text) return "";
    return _.isString(text) && text.length <= 20
      ? text
      : text.substring(0, 20) + "...";
  }

  render() {
    return (
      <ScrollView style={style.courseDetails}>
        <View style={style.detailsTextContainer}>
          <Text style={style.infoFontSize}>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuri
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "#6a6a6a",
            borderBottomWidth: 0.5
          }}
        />
        <FlatList
          style={style.flatList}
          data={data}
          renderItem={({ item }) => (
            <Lesson name={item.name} time={item.time} />
          )}
        />
      </ScrollView>
    );
  }
}
const CourseDetailsConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseDetails);
export default CourseDetailsConnect;
