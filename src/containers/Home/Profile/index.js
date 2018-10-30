import React, { Component } from "react";
import { View, Text } from "react-native";
import style, { width } from "./style";
import ProfileImage from "./ProfileImage";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { MyCourses, Second } from "./Tabs";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {};
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
  }

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
          <Text style={style.profileName}>Mostafa Ebrahimi</Text>
          <Text style={style.subTitle}>
            {this.props.isTeacher ? "Teacher" : "Student"}
          </Text>
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
