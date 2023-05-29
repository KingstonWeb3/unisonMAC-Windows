// ExploreStack.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from '../../screens/home/explore/Explore';
import ExploreFS from '../../screens/home/explore/ExploreFS';

const Stack = createNativeStackNavigator();

function ExploreStack() {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
      <Stack.Screen name="ExploreFS" component={ExploreFS} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default ExploreStack;
