
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SecondView from './Screens/SecondView';
import ThirdView from './Screens/ThirdView';
import FirstView from './Screens/FirstView';
import Let_s_In from './Screens/Let_s_In';
import SignUp  from './Screens/SignUp';
import Login from './Screens/Login.js';
import ProfileFill from './Screens/ProfileFill.js'
import Welcome from './Screens/Welcome';
import MarkerDetail from './Screens/MarkerDetail'
import SearchFilter from './Screens/SearchFilter'
import SuccessfullyCreated from './Screens/SuccessfullyCreated';


import Map from "./Screens/map/Map";

const Stack = createNativeStackNavigator();



const StackNavigation = () =>{
return (
<Stack.Navigator screenOptions={{headerShown: false}}>


       
       <Stack.Screen name="Welcome" component={Welcome} />
       <Stack.Screen name="FirstView" component={FirstView} />
      <Stack.Screen name="SecondView" component={SecondView} />
      <Stack.Screen name="ThirdView" component={ThirdView} />
      <Stack.Screen name="Let_s_In" component={Let_s_In} /> 
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignUp' component={SignUp} />  
       <Stack.Screen name='ProfileFill' component={ProfileFill} />
        <Stack.Screen name='SuccessfullyCreated' component={SuccessfullyCreated} />

      <Stack.Screen name="MarkerDetail" component={MarkerDetail} /> 
       <Stack.Screen name='SearchFilter' component={SearchFilter} /> 
    </Stack.Navigator>
  );
};

export default StackNavigation;
