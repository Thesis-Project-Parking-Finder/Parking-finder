import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileFill from "./Screens/ProfileFill.js";
import MarkerDetail from "./Screens/MarkerDetail";
import SearchFilter from "./Screens/SearchFilter";
import Login from "./Screens/Login.js";
import HistoryParking from "./Screens/hirtoryParking.js";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Parkingspot from "./Screens/Parkingspot";
import ParkingDetail from "./Screens/ParkingDetail/ParkingDetail";
import Map from "./Screens/map/Map.js";
import Profile from "./Screens/Profile.js";
import MyBookMark from "./Screens/MyBookMark.js";
import MyParkings from "./Screens/MyParkings.js";
import BookingReview from "./Screens/BookingReview.js";
import EditProfile from "./Screens/EditProfile.js";
import SelectVec from "./Screens/SelectVec";

import test from "./Screens/test.js";
import FillCarInformation from "./Screens/FillCarInformation.js";
import ParkingSpot_1 from "./Screens/ParkingSpot_1.js";
import ParkingSpot_2 from "./Screens/ParkingSpot_2";
import ParkingSpot_3 from "./Screens/ParkingSpot_3";
import ParkingTimer from "./Screens/ParkingTimer";
import SuccessfullyCreated from "./Screens/SuccessfullyCreated.js";
import ExtendParkingTimer from "./Screens/ExtendParkingTimer.js";
import Ticket from "./Screens/ticket.js";


const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Map" component={Map} /> */}
        {/* <Stack.Screen name="test" component={test} /> */}
        {/* <Stack.Screen name="ProfileFill" component={ProfileFill} />
        <Stack.Screen
          name="SuccessfullyCreated"
          component={SuccessfullyCreated}
        /> */}
{/* 
        <Stack.Screen name="MyBookMark" component={MyBookMark} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SelectVec" component={SelectVec} />
        <Stack.Screen
          name="FillCarInformation"
          component={FillCarInformation}
        /> */}
        {/* <Stack.Screen name="HestoryParking" component={HistoryParking} />
        <Stack.Screen name="Parkingspot" component={Parkingspot} />
        <Stack.Screen name="MarkerDetail" component={MarkerDetail} />
        <Stack.Screen name="SearchFilter" component={SearchFilter} />
        <Stack.Screen name="MyParkings" component={MyParkings} />
        <Stack.Screen name="ParkingDetail" component={ParkingDetail} />
        <Stack.Screen name="ParkingSpot_1" component={ParkingSpot_1} />
        <Stack.Screen name="ParkingSpot_2" component={ParkingSpot_2} />
        <Stack.Screen name="ParkingSpot_3" component={ParkingSpot_3} />
        <Stack.Screen name="BookingReview" component={BookingReview} />
        <Stack.Screen name="ticket" component={Ticket} />
        <Stack.Screen name="ParkingTimer" component={ParkingTimer} /> 
        <Stack.Screen name="ExtendTime" component={ExtendParkingTimer} /> */}
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </Provider>
  );
};

export default StackNav;
