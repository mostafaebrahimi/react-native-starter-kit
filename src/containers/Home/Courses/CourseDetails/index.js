import React, { Component } from "react";
import { View, Image, ScrollView, FlatList } from "react-native";
import style from "./style";
import _ from "lodash";
import { connect } from "react-redux";
import Lesson from "./Lesson";
import { Card, CardItem, Text, Body } from "native-base";
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
        <View style={{ padding: 10 }}>
          <Card>
            <CardItem header>
              <Text>About Course</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was pop
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Lessons</Text>
            </CardItem>
            <CardItem>
              <Body style={{ flex: 1 }}>
                <FlatList
                  style={style.flatList}
                  data={data}
                  renderItem={({ item }) => (
                    <Lesson name={item.name} time={item.time} />
                  )}
                />
              </Body>
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
const CourseDetailsConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseDetails);
export default CourseDetailsConnect;
