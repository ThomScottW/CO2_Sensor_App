import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sensing from './screens/Sensing';
import Co2Details from './screens/Co2Details';
import TemperatureDetails from './screens/TemperatureDetails';
import HumidityDetails from './screens/HumidityDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sensing">
        <Stack.Screen name="Sensing" component={Sensing} options={{ headerShown: false }}/>
        <Stack.Screen name="Co2Details" component={Co2Details}/>
        <Stack.Screen name="TemperatureDetails" component={TemperatureDetails}/>
        <Stack.Screen name="HumidityDetails" component={HumidityDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
