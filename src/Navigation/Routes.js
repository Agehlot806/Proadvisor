import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home/HomeScreen';
import Splash from '../Screens/AuthScreens/Splash';
import Login from '../Screens/AuthScreens/Login';
import LoginOTP from '../Screens/AuthScreens/LoginOTP';
import SignUp from '../Screens/AuthScreens/SignUp';
import SignUpOTP from '../Screens/AuthScreens/SignUpOTP';
import BookYourHome from '../Screens/Home/BookYourHome';
import Demo from '../Screens/AuthScreens/Demo';
import GetStart from '../Screens/AuthScreens/GetStart';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="BookYourHome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginOTP" component={LoginOTP} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpOTP" component={SignUpOTP} />
        <Stack.Screen name="BookYourHome" component={BookYourHome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Demo" component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
