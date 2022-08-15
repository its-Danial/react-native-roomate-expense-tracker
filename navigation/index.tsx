import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import { RootStackParamList, RootTabParamList } from "../types";
import ManageExpense from "../screens/ManageExpense";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExpensesOverview" component={BottomTabNavigator} />
      <Stack.Screen name="ManageExpense" component={ManageExpense} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="AllExpenses">
      <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTab.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTab.Navigator>
  );
}
