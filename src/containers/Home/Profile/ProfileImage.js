import React from "react";
import ImageLoad from "react-native-image-placeholder";
import style from "./style";

export default (ProfileImage = props => {
  return (
    <ImageLoad
      borderRadius={80}
      style={style.image}
      loadingStyle={{ size: "large", color: "blue" }}
      source={{
        uri: props.img
          ? props.img
          : "https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-150595123.jpg"
      }}
    />
  );
});
