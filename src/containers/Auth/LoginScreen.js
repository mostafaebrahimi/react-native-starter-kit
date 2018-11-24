import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import BackgroundImage from "../../components/BackgroundImage";

import { Colors, Images, Strings } from "../../config";
import style from "./Style";
import { Button, Item, Input, Title, Subtitle } from "native-base";
import { connect } from "react-redux";
import { AuthActionsGenerator } from "../../redux/reducers/Auth";
import Toast, { DURATION } from "react-native-easy-toast";

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(AuthActionsGenerator.auth.counter.inc()),
    login: payload => dispatch(AuthActionsGenerator.auth.login.call(payload)),
    action: () => dispatch({ type: "action" })
    // ,
    // login: loginInfo => dispatch(login(loginInfo))
  };
};

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoading: props.auth.login.isFetching
    };
    this.changeUserNameValue = this.changeUserNameValue.bind(this);
    this.changePasswordValue = this.changePasswordValue.bind(this);
    this.navigateToRegisterStudent = this.navigateToRegisterStudent.bind(this);
    this.navigateToRegisterTeacher = this.navigateToRegisterTeacher.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ isLoading: this.props.auth.login.isFetching });
  }

  changeUserNameValue(value) {
    this.setState({ username: value });
  }

  changePasswordValue(value) {
    this.setState({ password: value });
  }

  componentDidMount() {
    // console.log();
    // console.log(increamentCounter());
    // console.log(decreamentCounter());
    this.props.inc();
  }

  submitForm() {
    if (!this.validateForm()) return;
    let login = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(login);
    this.setState({ isLoading: true });
  }

  validateForm = () => {
    if (this.state.username.length <= 0) {
      this.refs.toast.show("Please enter username");
      return false;
    }
    if (this.state.password.length <= 0) {
      this.refs.toast.show("Please enter password");
      return false;
    }
    return true;
  };

  navigateToRegisterStudent() {
    this.props.navigation.navigate("RegisterStudent");
  }

  navigateToRegisterTeacher() {
    this.props.navigation.navigate("RegisterTeacher");
  }

  render() {
    let { error, response } = this.props.auth.login;
    if (error) {
      this.refs.toast.show(error.response.data.error);
    } else if (response) {
      this.props.navigation.replace("Home");
      return <View />;
    }
    return (
      <View style={{ flex: 1 }}>
        <BackgroundImage>
          <View style={[style.darkBoxWithOpacity]}>
            <View style={style.logoContainer}>
              <Image source={Images.splash.logo} style={style.logo} />
              <Text style={style.AppName}>{Strings.APP_NAME}</Text>
            </View>

            <View style={[style.textInputContainer]}>
              <View>
                <Title>{Strings.splash.SIGN_UP_TO_MOON_LESSON}</Title>
                <Subtitle>
                  {Strings.splash.Please_Enter_Your_Phone_Number_to_Continue}
                </Subtitle>
              </View>

              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changeUserNameValue}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.splash.usernameInput}
                  value={this.state.username || ""}
                  style={style.textInput}
                />
              </Item>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changePasswordValue}
                  secureTextEntry={true}
                  value={this.state.password || ""}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.splash.passwordInput}
                  style={style.textInput}
                />
              </Item>
              <TouchableOpacity
                style={[style.submitButton]}
                loading={this.state.isLoading}
                onPress={this.submitForm}
              >
                <Text style={style.submitButtonText}>
                  {Strings.splash.submit}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={style.registerLink}>
              <Text style={{ color: "#fff" }}>Don't have account?</Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  onPress={this.navigateToRegisterStudent}
                  style={[style.link, { marginRight: 5 }]}
                >
                  Student
                </Text>
                <Text
                  onPress={this.navigateToRegisterTeacher}
                  style={style.link}
                >
                  Teacher
                </Text>
              </View>
            </View>
            {this.props.auth.login.isFetching ? (
              <ActivityIndicator
                size="large"
                animating={true}
                color={Colors.indicator}
              />
            ) : (
              <View />
            )}
          </View>
        </BackgroundImage>
        <Toast ref="toast" />
      </View>
    );
  }
}

const LoginScreenConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
export default LoginScreenConnect;
