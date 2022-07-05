import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileFill from "./Screens/ProfileFill.js";
import MarkerDetail from "./Screens/MarkerDetail";
import SearchFilter from "./Screens/SearchFilter";
import HestoryParking from "./Screens/hertoryParking.js";

import ParkingDetail from "./Screens/ParkingDetail/ParkingDetail";

import Map from "./Screens/map/Map.js";
import Profile from "./Screens/Profile.js";
import MyBookMark from "./Screens/MyBookMark.js";
import MyParkings from "./Screens/MyParkings.js";

import EditProfile from "./Screens/EditProfile.js";
import SelectVec from "./Screens/SelectVec";
// import test from "./Screens/test.js";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="tes" component={test} /> */}
      {/* <Stack.Screen name="SelectVec" component={SelectVec} /> */}

      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="MyBookMark" component={MyBookMark} />
      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen name="HestoryParking" component={HestoryParking} />
      <Stack.Screen name="ProfileFill" component={ProfileFill} />
      <Stack.Screen name="MarkerDetail" component={MarkerDetail} />
      <Stack.Screen name="SearchFilter" component={SearchFilter} />
      <Stack.Screen name="MyParkings" component={MyParkings} />
      <Stack.Screen name="ParkingDetail" component={ParkingDetail} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default StackNav;
