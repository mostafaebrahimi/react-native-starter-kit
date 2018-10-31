import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import style from "./style";
import Card from "./Card";
import InformationRow from "./InformationRow";
class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={style.tabsScreen}>
        <Card title={"Account"}>
          <View>
            <InformationRow title={"Username"} info={"mostafaebra"} />
            <InformationRow
              title={"Email"}
              info={"mostafaebrahimi.me@gmail.com"}
            />
            <InformationRow title={"Phone Number"} info={"09172195514"} />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

export default Second;
