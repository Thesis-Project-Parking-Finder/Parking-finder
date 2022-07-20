import SecondView from "./Screens/SecondView";
import ThirdView from "./Screens/ThirdView";
import FirstView from "./Screens/FirstView";
import Let_s_In from "./Screens/Let_s_In";
import SignUp from "./Screens/SignUp";
import Welcome from "./Screens/Welcome";
import ForgetPassword from "./Screens/ForgetPassword.js";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileFill from "./Screens/ProfileFill.js";
import MarkerDetail from "./Screens/MarkerDetail";
import SearchFilter from "./Screens/SearchFilter";
import Login from "./Screens/Login.js";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Parkingspot from "./Screens/Parkingspot";
import ParkingDetail from "./Screens/ParkingDetail/ParkingDetail";
import Map from "./Screens/map/Map.js";
import Profile from "./Screens/Profile.js";
import MyBookMark from "./Screens/MyBookMark.js";
import BookingReview from "./Screens/BookingReview.js";
import EditProfile from "./Screens/EditProfile.js";
import SelectVec from "./Screens/SelectVec";

import FillCarInformation from "./Screens/FillCarInformation.js";
import ParkingSpot_1 from "./Screens/ParkingSpot_1.js";
import ParkingSpot_2 from "./Screens/ParkingSpot_2";
import ParkingSpot_3 from "./Screens/ParkingSpot_3";
import ParkingTimer from "./Screens/ParkingTimer";
import SuccessfullyCreated from "./Screens/SuccessfullyCreated.js";
import ExtendParkingTimer from "./Screens/ExtendParkingTimer.js";
import Ticket from "./Screens/ticket.js";
import HistoryParking from "./Screens/hirtoryParking.js";
import CantBookings from "./Screens/CantBooking";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import test from "./Screens/test";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [check, setcheck] = useState("");
  onAuthStateChanged(auth, async (user) => {
    if (user != null && auth.currentUser.emailVerified) {
      const uid = user.email;
      await setIsLogedIn(true);
      setcheck(uid);
    } else {
      setIsLogedIn(false);
    }
  });
  return (
    <Provider store={store}>
      {console.log(isLogedIn, "mohamed")}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogedIn ? (
          <>
            <Stack.Screen name="test" component={test} />
            {/* <Stack.Screen name="ProfileFill" component={ProfileFill} /> */}
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="MyBookMark" component={MyBookMark} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="SelectVec" component={SelectVec} />

            <Stack.Screen
              name="FillCarInformation"
              component={FillCarInformation}
            />
            <Stack.Screen name="HestoryParking" component={HistoryParking} />
            <Stack.Screen name="Parkingspot" component={Parkingspot} />
            <Stack.Screen name="MarkerDetail" component={MarkerDetail} />
            <Stack.Screen name="SearchFilter" component={SearchFilter} />
            <Stack.Screen name="HistoryParking" component={HistoryParking} />
            <Stack.Screen name="ParkingDetail" component={ParkingDetail} />
            <Stack.Screen name="ParkingSpot_1" component={ParkingSpot_1} />
            <Stack.Screen name="ParkingSpot_2" component={ParkingSpot_2} />
            <Stack.Screen name="ParkingSpot_3" component={ParkingSpot_3} />
            <Stack.Screen name="BookingReview" component={BookingReview} />
            <Stack.Screen name="ticket" component={Ticket} />
            <Stack.Screen name="ParkingTimer" component={ParkingTimer} />
            <Stack.Screen name="ExtendTime" component={ExtendParkingTimer} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="CantBookings" component={CantBookings} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="FirstView" component={FirstView} />
            <Stack.Screen name="SecondView" component={SecondView} />
            <Stack.Screen name="ThirdView" component={ThirdView} />
            <Stack.Screen name="Let_s_In" component={Let_s_In} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen
              name="SuccessfullyCreated"
              component={SuccessfullyCreated}
            />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          </>
        )}
      </Stack.Navigator>
    </Provider>
  );
};

export default StackNavigation;
