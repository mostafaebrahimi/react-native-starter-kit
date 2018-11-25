import React, { Component } from "react";
import { View, Image, ScrollView, FlatList } from "react-native";
import style from "./style";
import _ from "lodash";
import { connect } from "react-redux";
import Lesson from "./Lesson";
import Course, {
  CourseActionsGenerator
} from "../../../../redux/reducers/Course";
import { Card, CardItem, Text, Body } from "native-base";
import data from "./fake";
import Dialog from "react-native-dialog";
import RegisterButton from "./RegisterButton";
import { ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import NavigationService from "../../../../navigation/NavigationService";

const mapStateToProps = state => {
  return {
    course: state.course.selectedCourse,
    register: state.course.register
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectLesson: item =>
      dispatch(CourseActionsGenerator.course.selectLesson(item)),
    registerCourse: course =>
      dispatch(CourseActionsGenerator.course.registerCall(course))
  };
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

  constructor(props) {
    super(props);
    this.state = { showAlert: false };
    this._showMoreText = this._showMoreText.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this._registerOnCourse = this._registerOnCourse.bind(this);
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });

    this.navigateToSingleLesson = this.navigateToSingleLesson.bind(this);
  };
  _registerOnCourse() {
    this.setState({
      showAlert: false
    });
    this.props.registerCourse(this.props.course);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      showAlert: this.showAlert,
      course: this.props.course,
      courseName: this.props.course.name
    });
  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  _showMoreText(text) {
    if (!text) return "";
    return _.isString(text) && text.length <= 20
      ? text
      : text.substring(0, 20) + "...";
  }

  navigateToSingleLesson(item) {
    this.props.selectLesson(item);
    let { name } = item;
    NavigationService.navigateTopStack("SingleLesson", { name });
  }

  render() {
    let { showAlert } = this.state;

    return (
      <ScrollView style={style.courseDetails}>
        <ConfirmDialog
          title="Register"
          message="Are you sure to register in this course?"
          visible={showAlert}
          onTouchOutside={this.hideAlert}
          positiveButton={{
            title: "YES",
            onPress: this._registerOnCourse
          }}
          negativeButton={{
            title: "NO",
            onPress: this.hideAlert
          }}
        />
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
                  data={this.props.course.lessons || []}
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
        <ProgressDialog
          visible={this.props.register.fetching}
          title="Progress Dialog"
          message="Please, wait..."
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
