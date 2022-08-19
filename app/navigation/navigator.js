// Import React, React Native
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import Screen
import Home from '../src/screen/home';
import RemoteConfig from '../src/screen/firebase-remote-config';

// Const
const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RemoteConfig" component={RemoteConfig} />
    </Stack.Navigator>
  );
}

export default Navigator;
