import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import BackgroundImage from "../../../components/BackgroundImage";
import { Toast } from "antd-mobile-rn";
import { Colors, Images, Strings } from "../../../config";
import style from "../Style";
import { Button, Item, Input, Title, Subtitle } from "native-base";
import { connect } from "react-redux";
import { AuthActionsGenerator } from "../../../redux/reducers/Auth";

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: payload =>
      dispatch(AuthActionsGenerator.auth.register.teacher.call(payload))
  };
};

class TeacherComponent extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: ""
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.changeToLogin = this.changeToLogin.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ isLoading: this.props.auth.login.isFetching });
  }

  changeFirstName(value) {
    this.setState({ first_name: value });
  }

  changeLastName(value) {
    this.setState({ last_name: value });
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changePassword(value) {
    this.setState({ password: value });
  }

  changePhone(value) {
    this.setState({ phone: value });
  }

  componentDidMount() {
    //
  }

  changeToLogin() {
    this.props.navigation.navigate("Login");
  }

  submitForm() {
    let { first_name, last_name, email, phone, password } = this.state;
    if (
      first_name.length <= 0 ||
      last_name.length <= 0 ||
      password.length <= 0 ||
      email.length <= 0 ||
      phone.length <= 0
    ) {
      Toast.info("Please fill the form");
      return;
    }
    let teacher = { ...this.state };
    this.props.register(teacher);
    // this.props.action();

    /*
    let that = this;
    Toast.info("this is toast");
    console.log(this.state);
    this.setState({ isLoading: true });
    setTimeout(function() {
      that.setState({ isLoading: false });
      that.props.navigation.navigate("Register");
    }, 5000);
    */
  }

  navigateToLogin() {
    this.props.navigation.navigate("Login");
  }

  render() {
    let { isFetching } = this.props.auth.registerTeacher;
    return (
      <View style={{ flex: 1 }}>
        <BackgroundImage>
          <View style={[style.darkBoxWithOpacity]}>
            <View style={{ flex: 0.1 }}>
              <Text style={style.AppName}>
                {Strings.register.teacher_title}
              </Text>
            </View>
            <View style={[style.textInputContainer, { flex: 0.8 }]}>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changeFirstName}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.firstname}
                  value={this.state.first_name || ""}
                  style={style.textInput}
                />
              </Item>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changeLastName}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.lastname}
                  value={this.state.last_name || ""}
                  style={style.textInput}
                />
              </Item>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changeEmail}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.email}
                  value={this.state.email || ""}
                  style={style.textInput}
                />
              </Item>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changePhone}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.phone}
                  value={this.state.phone || ""}
                  style={style.textInput}
                />
              </Item>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changePassword}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.password}
                  value={this.state.password || ""}
                  style={style.textInput}
                />
              </Item>
              <TouchableOpacity
                style={[style.submitButton]}
                loading={this.state.isLoading}
                onPress={this.submitForm}
              >
                <Text
                  onPress={this.changeToLogin}
                  style={style.submitButtonText}
                >
                  {Strings.register.submit}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[style.registerLink, { flex: 0.1 }]}>
              <Text onPress={this.changeToLogin} style={style.link}>
                {Strings.register.to_login}
              </Text>
            </View>
            {isFetching ? (
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
      </View>
    );
  }
}

const TeacherComponentConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherComponent);
export default TeacherComponentConnect;
