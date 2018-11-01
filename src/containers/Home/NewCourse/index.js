import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import { DatePicker, Item, Input, Textarea } from "native-base";
import { Images, Colors } from "../../../config";
import NavigationService from "../../../navigation/NavigationService";
import style from "./style";
import { height } from "../Profile/style";
import SaveButton from "./SaveButton";
import moment from "moment";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class NewCourse extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Create New Course"
  });

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      short: "",
      details: "",
      start_date: undefined,
      end_date: undefined,
      cost: 0
    };
    this.changeCourseName = this.changeCourseName.bind(this);
    this.changeShortInfo = this.changeShortInfo.bind(this);
    this.changeDetailInfo = this.changeDetailInfo.bind(this);
    this.changeCost = this.changeCost.bind(this);
    this.setStartData = this.setStartData.bind(this);
    this.setEndData = this.setEndData.bind(this);
  }

  changeCourseName(value) {
    this.setState({ name: value });
  }
  changeShortInfo(value) {
    this.setState({ short: value });
  }
  changeDetailInfo(value) {
    this.setState({ details: value });
  }
  changeCost(value) {
    this.setState({ cost: value });
  }
  setStartData(date) {
    this.setState({ start_date: date }, this.forceUpdate());
  }
  setEndData(date) {
    this.setState({ end_date: date });
  }
  /**
   * "name": "course two",
	"cost": 1200000,
	"start_time": 123232,
	"end_time": 2113223,
	"detailed_information": "adsf sadfkas;dkfj alskdjfklsajdlkfjklasdjf ;aslkdjfl j",
    "short_information": "asdf asdf asdf ",
    image
   */

  render() {
    let { start_date } = this.state;
    let endOfStartDate = moment(new Date()).add(1, "year");
    endOfStartDate = endOfStartDate.toDate();
    let endOfEndData = new Date();
    let startOfEndDate = new Date();
    if (start_date) {
      startOfEndDate = moment(start_date).add(1, "day");
      startOfEndDate = startOfEndDate.toDate();
      endOfEndData = moment(start_date).add(1, "year");
      endOfEndData = endOfEndData.toDate();
    }

    return (
      <ScrollView contentContainerStyle={style.mainContainer}>
        <View style={style.imageContainer}>
          <Image style={style.classImage} source={Images.courses.class} />
        </View>

        <View style={style.inputContainer}>
          <Item>
            <Input
              onChangeText={this.changeCourseName}
              placeholderTextColor={Colors.placeHolderColor}
              placeholder={"Course Name"}
              placeholderTextColor={"#D3D3D3"}
              value={this.state.name || ""}
              style={style.textInput}
            />
          </Item>
          <Item>
            <Input
              onChangeText={this.changeShortInfo}
              placeholderTextColor={Colors.placeHolderColor}
              placeholder={"Short Information"}
              placeholderTextColor={"#D3D3D3"}
              value={this.state.short || ""}
              style={style.textInput}
            />
          </Item>

          <Item>
            <Input
              onChangeText={this.changeCost}
              placeholderTextColor={Colors.placeHolderColor}
              placeholder={"Cost"}
              keyboardType="numeric"
              placeholderTextColor={"#D3D3D3"}
              value={this.state.cost || ""}
              style={style.textInput}
            />
          </Item>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date()}
              maximumDate={endOfStartDate}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select Start Date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setStartData}
            />

            <DatePicker
              defaultDate={startOfEndDate}
              minimumDate={startOfEndDate}
              maximumDate={endOfEndData}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select End Date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setEndData}
            />
          </View>

          <Textarea
            rowSpan={6}
            bordered
            onChangeText={this.changeDetailInfo}
            placeholderTextColor={Colors.placeHolderColor}
            placeholder={"Details Information"}
            placeholderTextColor={"#D3D3D3"}
            value={this.state.details || ""}
            style={[style.textInput, { marginTop: 15 }]}
          />
        </View>
        <View style={style.buttonContainer}>
          <SaveButton style={style.saveBtn} text={"Save"} />
        </View>
      </ScrollView>
    );
  }
}

const NewCourseConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCourse);

export default NewCourseConnect;
