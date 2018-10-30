import React, { Component } from "react";
import { View, Text } from "react-native";
import ImageLoad from "react-native-image-placeholder";
import style from "./style";
import ProfileImage from "./ProfileImage";
class ProfileComponent extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ProfileImage />
      </View>
    );
  }
}

export default ProfileComponent;
