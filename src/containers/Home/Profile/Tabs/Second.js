import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import style from "./style";
import Card from "./Card";
import InformationRow from "./InformationRow";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

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
            <InformationRow title={"Username: "} info={this.props.user.email} />
            <InformationRow title={"Email: "} info={this.props.user.email} />
            <InformationRow
              title={"Phone Number: "}
              info={this.props.user.phone}
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const SecondConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Second);
export default SecondConnect;
