import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const Parkingspot = () => {
  const data = useSelector((state) => state.bookplace.value);
  return (
    <View>
      {console.log(data, "in last component")}
      <Text>Parkingspot</Text>
    </View>
  );
};
export default Parkingspot;
