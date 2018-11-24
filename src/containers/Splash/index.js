import React, { Component } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";

import style from "./style";

import { connect } from "react-redux";
import { AuthActionsGenerator } from "../../redux/reducers/Auth";
import Toast, { DURATION } from "react-native-easy-toast";
import { Images, Strings, Colors } from "../../config";

import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";

var storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fillInfo: payload => dispatch(AuthActionsGenerator.auth.fillInfo(payload))
  };
};

class Splash extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
    this._isUserExist = this._isUserExist.bind(this);
  }

  componentDidMount() {
    this._isUserExist();
  }

  _isUserExist = async () => {
    let that = this;
    let token = await storage
      .load({ key: "token" })
      .then(value => value)
      .catch(err => undefined);
    let user = await storage
      .load({ key: "user" })
      .then(value => value)
      .catch(err => undefined);
    if (token && user) {
      user.token = token;
      this.props.fillInfo(user);
      setTimeout(() => {
        that.props.navigation.replace("Home");
      }, 3000);
    } else {
      setTimeout(() => {
        that.props.navigation.replace("Login");
      }, 3000);
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: Colors.indicator,
          justifyContent: "space-between"
        }}
      >
        <View style={{ flex: 0.7, justifyContent: "center" }}>
          <Image
            source={Images.splash.logo}
            style={{ alignSelf: "center", height: 150, width: 150 }}
          />
          <Text
            style={{
              color: "#12A9EB",
              fontSize: 30,
              alignSelf: "center",
              fontWeight: "bold"
            }}
          >
            Moon Lesson
          </Text>
        </View>
        <View style={{ alignContent: "flex-end", height: 100 }}>
          <ActivityIndicator
            size="large"
            animating={true}
            color={Colors.primary}
          />
        </View>
      </View>
    );
  }
}

const SplashConnet = connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);

export default SplashConnet;
