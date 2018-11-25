import React, { Component } from "react";
import { View, ScrollView, FlatList } from "react-native";
import style from "../style";
import _ from "lodash";
import { Button, Card, CardItem, Content, Text, Body } from "native-base";
import { connect } from "react-redux";
import { black } from "ansi-colors";

const mapStateToProps = state => {
  return {
    lesson: state.course.selectedLesson
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
class SingleLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: !_.isUndefined(this.props.lesson.question)
        ? this.props.lesson.question.answer
        : -1,
      showAnswer: false,
      clickedItem: -1
    };
    this._showAnswer = this._showAnswer.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: _.isUndefined(navigation.state.params.name)
        ? "Lesson"
        : navigation.state.params.name
    };
  };

  _showAnswer(key) {
    let that = this;
    return function showAnswer() {
      if (!that.state.showAnswer) {
        that.setState({ clickedItem: key });
        that.setState({ showAnswer: true });
      }
    };
  }

  render() {
    let { content, question } = this.props.lesson;

    return (
      <ScrollView>
        {content ? (
          <Card>
            <CardItem header>
              <Text>About Lesson</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Content>
                  <Text>{content}</Text>
                </Content>
              </Body>
            </CardItem>
          </Card>
        ) : (
          <Card>
            <CardItem header>
              <Text>{question.q}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}
                >
                  {question.options.map((item, index) => {
                    return (
                      <View style={{ margin: 3 }}>
                        <Button
                          success={
                            this.state.showAnswer &&
                            this.state.correctAnswer > -1 &&
                            this.state.correctAnswer === index + 1
                          }
                          danger={
                            this.state.showAnswer &&
                            this.state.clickedItem !==
                              this.state.correctAnswer &&
                            this.state.correctAnswer > -1 &&
                            this.state.clickedItem === index + 1
                          }
                          bordered
                          onPress={this._showAnswer(index + 1)}
                        >
                          <Text>{item}</Text>
                        </Button>
                      </View>
                    );
                  })}
                </View>
              </Body>
            </CardItem>
          </Card>
        )}
      </ScrollView>
    );
  }
}

const LessonDetailsConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleLesson);
export default LessonDetailsConnect;
