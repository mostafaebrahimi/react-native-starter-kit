import React, { Component } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import BackgroundImage from "../../components/BackgroundImage";
import { Toast } from "antd-mobile-rn";
import { Colors, Images, Strings } from "../../config";
import style from "./Style";
import { Button, Item, Input, Title, Subtitle } from "native-base";
import { connect } from "react-redux";
import {
  AuthActionsGenerator
} from "../../redux/reducers/Auth";


const mapStateToProps = state => {
  return {
    mystate: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(AuthActionsGenerator.auth.counter.inc())
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
      phone: "",
      isLoading: false
    };
    this.changeUserNameValue = this.changeUserNameValue.bind(this);
    this.changePasswordValue = this.changePasswordValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
    let that = this;
    Toast.info("this is toast");
    console.log(this.state);
    this.setState({ isLoading: true });
    setTimeout(function() {
      that.setState({ isLoading: false });
      that.props.navigation.navigate("Register");
    }, 5000);
  }

  render() {
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
                onPress={this.submitPhoneNumber}
              >
                <Text style={style.submitButtonText}>
                  {Strings.splash.submit}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BackgroundImage>
      </View>
    );
  }
}

const LoginScreenConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
export default LoginScreenConnect;
