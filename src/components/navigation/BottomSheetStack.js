import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../../screens/home/home/Home';
import Buy from '../../screens/modal/buy/Buy';
import Receive from '../../screens/modal/receive/Receive';
import Send from '../../screens/modal/send/Send';
import Swap from '../../screens/modal/swap/Swap';
import Bridge from '../../screens/modal/Bridge';
import Sell from '../../screens/modal/sell/Sell';

const Stack = createNativeStackNavigator();

export default function BottomSheetStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Wallets" component={Home} />
          <Stack.Screen name="Buy" component={Buy} />
          <Stack.Screen name="Sell" component={Sell} />
          <Stack.Screen name="Receive" component={Receive} />
          <Stack.Screen name="Send" component={Send} />
          <Stack.Screen name="Swap" component={Swap} />
          <Stack.Screen name="Bridge" component={Bridge} />
      </Stack.Navigator>
    );
  }