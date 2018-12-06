import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import style, { width } from "./style";
import ProfileImage from "./ProfileImage";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { MyCourses, Second } from "./Tabs";
import { connect } from "react-redux";
import { Button } from "native-base";
import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";
import NavigationService from "../../../navigation/NavigationService";
var storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null
});

import AddNewCourseButton from "./AddNewCourseButton";
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
class ProfileComponent extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "first", title: "Courses" },
        { key: "second", title: "Informations" }
      ]
    };
    this.logout = this.logout.bind(this);
  }

  logout = async () => {
    await storage.clearMap();
    NavigationService.replaceTopStack("Login");
  };

  _renderTabBar = props => (
    <TabBar
      scrollEnabled={false}
      {...props}
      indicatorStyle={style.indicator}
      style={style.tabbar}
      tabStyle={style.tab}
      labelStyle={style.label}
    />
  );

  render() {
    return (
      <View style={style.mainContainer}>
        <View style={style.topHalf}>
          <ProfileImage />
          <Text style={style.profileName}>{`${this.props.user.first_name} ${
            this.props.user.last_name
          }`}</Text>
          <Text style={style.subTitle}>
            {this.props.user.role === "student" ? "Student" : "Teacher"}
          </Text>
          <TouchableWithoutFeedback onPress={this.logout}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 5
              }}
            >
              <Text
                style={[
                  style.addNewCourseButton,
                  {
                    borderRadius: 5,
                    backgroundColor: "#ff4d4d",
                    padding: 4,
                    width: 100,
                    textAlign: "center",
                    color: "#fff"
                  }
                ]}
              >
                Logout
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TabView
          style={style.bottomHalf}
          navigationState={this.state}
          renderScene={SceneMap({
            first: MyCourses,
            second: Second
          })}
          renderTabBar={this._renderTabBar}
          onIndexChange={index => this.setState({ index })}
          initialLayout={style.initialLayout}
        />
        <View />
      </View>
    );
  }
}
const ProfileComponentConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
export default ProfileComponentConnect;
