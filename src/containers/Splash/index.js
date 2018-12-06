import React, { Component } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import style from "./style";
import { connect } from "react-redux";
import { AuthActionsGenerator } from "../../redux/reducers/Auth";
import Toast, { DURATION } from "react-native-easy-toast";
import { Images, Strings, Colors } from "../../config";
import _ from "lodash";
import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";

var storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null
});

const mapStateToProps = state => {
  return {
    getuser: state.auth.getUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fillInfo: payload => dispatch(AuthActionsGenerator.auth.fillInfo(payload)),
    isTeacher: () => dispatch(AuthActionsGenerator.auth.isTeacher()),
    isNotTeacher: () => dispatch(AuthActionsGenerator.auth.isNotTeacher()),
    requestForUser: payload =>
      dispatch(AuthActionsGenerator.auth.user.fetching(payload))
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

  props;

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
      if (user.user.role === "teacher") this.props.isTeacher();
      else this.props.isNotTeacher();
      this.props.requestForUser(token);
      // setTimeout(() => {
      //   that.props.navigation.replace("Login");
      // }, 4000);
      // setTimeout(() => {
      //   that.props.navigation.replace("Home");
      // }, 3000);
    } else {
      setTimeout(() => {
        that.props.navigation.replace("Login");
      }, 7000);
    }
  };

  render() {
    if (
      !this.props.getuser.fetching &&
      !_.isUndefined(this.props.getuser.response) &&
      _.isUndefined(this.props.getuser.error)
    ) {
      this.props.navigation.replace("Home");
      // this.props.navigation.replace("Login");
      return <View />;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFF",
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
        <View
          style={{
            alignContent: "flex-end",
            height: 100
          }}
        >
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
