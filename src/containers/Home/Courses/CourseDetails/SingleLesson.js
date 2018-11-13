import React, { Component } from "react";
import { View } from "react-native";
import style from "../style";
import _ from "lodash";
import { Card, CardItem, Text, Body } from "native-base";

export default class SingleLesson extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: _.isUndefined(navigation.state.params.name)
        ? "Lesson"
        : navigation.state.params.name
    };
  };

  render() {
    return (
      <View>
        <Card>
          <CardItem header>
            <Text>Lesson Name</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                pop
              </Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}
