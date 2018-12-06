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
import { Colors, Images, Strings } from "../../../config";
import style from "../Style";
import { Button, Item, Input, Title, Subtitle } from "native-base";
import { connect } from "react-redux";
import { AuthActionsGenerator } from "../../../redux/reducers/Auth";
import Toast, { DURATION } from "react-native-easy-toast";
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: payload =>
      dispatch(AuthActionsGenerator.auth.register.student.call(payload)),
    reinit: paylaod =>
      dispatch(AuthActionsGenerator.auth.register.student.response(paylaod))
  };
};

class StudentComponent extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.props.reinit(undefined);
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: ""
      },
      opacity: false,
      isLoading: false
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
    this.setState({ user: { ...this.state.user, first_name: value } });
  }

  changeLastName(value) {
    this.setState({ user: { ...this.state.user, last_name: value } });
  }

  changeEmail(value) {
    this.setState({ user: { ...this.state.user, email: value } });
  }

  changePassword(value) {
    this.setState({ user: { ...this.state.user, password: value } });
  }

  changePhone(value) {
    this.setState({ user: { ...this.state.user, phone: value } });
  }

  componentDidMount() {
    //
  }

  changeToLogin() {
    this.props.navigation.replace("Login");
  }

  submitForm() {
    this.setState({ opacity: true });
    let { first_name, last_name, email, phone, password } = this.state.user;
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

    let teacher = { ...this.state.user };
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
    this.props.navigation.replace("Login");
  }

  render() {
    let { error, response } = this.props.auth.registerStudent;
    if (error) {
      this.refs.toast.show(error.message || error.response.data.error, 2000);
    } else if (response) {
      this.props.navigation.replace("Home");
      return <View />;
    }
    return (
      <View style={{ flex: 1 }}>
        <BackgroundImage>
          <Toast ref="toast" />
          <View style={[style.darkBoxWithOpacity]}>
            <View style={{ flex: 0.1 }}>
              <Text style={style.AppName}>
                {Strings.register.student_title}
              </Text>
            </View>
            <View style={[style.textInputContainer, { flex: 0.8 }]}>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changeFirstName}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.firstname}
                  value={this.state.user.first_name || ""}
                  style={style.textInput}
                />
              </Item>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changeLastName}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.lastname}
                  value={this.state.user.last_name || ""}
                  style={style.textInput}
                />
              </Item>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changeEmail}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.email}
                  value={this.state.user.email || ""}
                  style={style.textInput}
                />
              </Item>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changePhone}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.phone}
                  value={this.state.user.phone || ""}
                  style={style.textInput}
                />
              </Item>
              <Item style={style.ItemStyle}>
                <Input
                  onChangeText={this.changePassword}
                  placeholderTextColor={Colors.placeHolderColor}
                  placeholder={Strings.register.password}
                  value={this.state.user.password || ""}
                  style={style.textInput}
                />
              </Item>
              <TouchableOpacity
                style={[style.submitButton]}
                loading={this.state.isLoading}
                onPress={this.submitForm}
              >
                <Text onPress={this.submitForm} style={style.submitButtonText}>
                  {Strings.register.submit}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[style.registerLink, { flex: 0.1 }]}>
              <Text onPress={this.changeToLogin} style={style.link}>
                {Strings.register.to_login}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flex: 0.1
              }}
            >
              <ActivityIndicator
                animating={true}
                color="#000"
                style={{
                  opacity: this.props.auth.registerStudent.isFetching
                    ? 1.0
                    : 0.0,
                  height: 50
                }}
                size="large"
              />
            </View>
          </View>
        </BackgroundImage>
      </View>
    );
  }
}

const StudentComponentConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentComponent);
export default StudentComponentConnect;
