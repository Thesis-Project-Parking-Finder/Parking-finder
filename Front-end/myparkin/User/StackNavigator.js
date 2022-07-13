import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondView from "./Screens/SecondView";
import ThirdView from "./Screens/ThirdView";
import FirstView from "./Screens/FirstView";
import Let_s_In from "./Screens/Let_s_In";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login.js";

import ProfileFill from "./Screens/ProfileFill.js";
import SuccessfullyCreated from "./Screens/SuccessfullyCreated";

import Welcome from "./Screens/Welcome";
import Map from "./Screens/map/Map";

import ForgetPassword from "./Screens/ForgetPassword.js";


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

       <Stack.Screen name="Welcome" component={Welcome} />


      <Stack.Screen name="FirstView" component={FirstView} />
      <Stack.Screen name="SecondView" component={SecondView} />
      <Stack.Screen name="ThirdView" component={ThirdView} />
      <Stack.Screen name="Let_s_In" component={Let_s_In} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

      <Stack.Screen name="ProfileFill" component={ProfileFill} />

      <Stack.Screen
        name="SuccessfullyCreated"
        component={SuccessfullyCreated}
      />

    </Stack.Navigator>
  );
};

export default StackNavigation;
