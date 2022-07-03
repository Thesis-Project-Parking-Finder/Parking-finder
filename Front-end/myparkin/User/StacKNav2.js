import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileFill from "./Screens/ProfileFill.js";
import MarkerDetail from "./Screens/MarkerDetail";
import SearchFilter from "./Screens/SearchFilter";
import HestoryParking from "./Screens/hertoryParking.js";
import Map from "./Screens/map/Map.js";
import ParkingSpot_1 from './Screens/ParkingSpot_1';
import ParkingSpot_2 from './Screens/ParkingSpot_2';
import ParkingSpot_3 from './Screens/ParkingSpot_3';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Map' component={Map} />
      <Stack.Screen name="ParkingSpot_1" component={ParkingSpot_1} />
       <Stack.Screen name="ParkingSpot_2" component={ParkingSpot_2} />
       <Stack.Screen name="ParkingSpot_3" component={ParkingSpot_3} />
      <Stack.Screen name='HestoryParking' component={HestoryParking} />
      <Stack.Screen name='ProfileFill' component={ProfileFill} />
      <Stack.Screen name='MarkerDetail' component={MarkerDetail} />
      <Stack.Screen name='SearchFilter' component={SearchFilter} />
    </Stack.Navigator>
  );
};

export default StackNav;
