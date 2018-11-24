import React, { Component } from "react";
import { View, Image, ScrollView, FlatList } from "react-native";
import style from "./style";
import _ from "lodash";
import { connect } from "react-redux";
import Lesson from "./Lesson";
import { Card, CardItem, Text, Body } from "native-base";
import data from "./fake";
import Dialog from "react-native-dialog";
import RegisterButton from "./RegisterButton";

const mapStateToProps = state => {
  return {
    course: state.course.selectedCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class CourseDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title ||
      navigation.state.params.courseName ||
      "Course Name"}`,
    headerRight: !_.isUndefined(navigation.state.params.showAlert) ? (
      <RegisterButton onPress={navigation.getParam("showAlert")} />
    ) : (
      <View />
    )
  });

  showAlert = () => {
    this.setState({
      showAlert: true
    });
    this.navigateToSingleLesson = this.navigateToSingleLesson.bind(this);
  };

  componentDidMount() {
    this.props.navigation.setParams({
      showAlert: this.showAlert,
      course: this.props.course,
      courseName: this.props.course.name
    });
  }

  constructor(props) {
    super(props);
    this.state = { showAlert: false };
    this._showMoreText = this._showMoreText.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  hideAlert = () => {
    this.setState(
      {
        showAlert: false
      },
      () => this.props.navigation.goBack()
    );
  };

  _showMoreText(text) {
    if (!text) return "";
    return _.isString(text) && text.length <= 20
      ? text
      : text.substring(0, 20) + "...";
  }

  navigateToSingleLesson(item) {
    let { name } = item;
    this.props.navigation.navigate("SingleLesson", name);
  }

  render() {
    let { showAlert } = this.state;

    return (
      <ScrollView style={style.courseDetails}>
        <Dialog.Container visible={showAlert}>
          <Dialog.Title>Register</Dialog.Title>
          <Dialog.Description>
            Are you sure to register in this course?
          </Dialog.Description>
          <Dialog.Button label="No, cancel" onPress={this.hideAlert} />
          <Dialog.Button label="Yes, sure" onPress={this.hideAlert} />
        </Dialog.Container>
        <View style={{ padding: 10 }}>
          <Card>
            <CardItem header>
              <Text>About Course</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.props.course
                    ? this.props.course.detailed_information
                    : "No information here"}
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
                    <Lesson
                      name={item.name}
                      time={item.time}
                      onPress={() => this.navigateToSingleLesson(item)}
                    />
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
