import React, { Component } from "react";
import { View, Text } from "react-native";
import style, { width } from "./style";
import ProfileImage from "./ProfileImage";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { First, Second } from "./Tabs";

// const FirstRoute = () => (
  
// );
// const SecondRoute = () => (
//   <View style={[{ backgroundColor: "#673ab7", height: 150 }]} />
// );

class ProfileComponent extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "first", title: "First" },
        { key: "second", title: "Second" }
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
        </View>
        <TabView
          style={style.bottomHalf}
          navigationState={this.state}
          renderScene={SceneMap({
            first: First,
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

export default ProfileComponent;
