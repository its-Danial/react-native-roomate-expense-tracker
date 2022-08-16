import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

import { RootStackParamList, RootTabParamList } from "../types";
import ManageExpense from "../screens/ManageExpense";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import colors from "tailwindcss/colors";
import IconButton from "../components/UI/IconButton";

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
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.gray[100] },
        headerTintColor: colors.blue[600],
      }}
    >
      <Stack.Screen name="ExpensesOverview" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ManageExpense" component={ManageExpense} options={{ presentation: "modal" }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="AllExpenses"
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: colors.gray[100] },
        headerTintColor: colors.blue[600],
        tabBarStyle: { backgroundColor: colors.gray[100] },
        tabBarActiveTintColor: colors.blue[600],
        tabBarInactiveTintColor: colors.slate[400],
        headerRight: ({ tintColor }) => (
          <IconButton color={tintColor} iconName="add" size={30} onPress={() => navigation.navigate("ManageExpense")} />
        ),
        // headerShadowVisible: false,
      })}
      // sceneContainerStyle={{ backgroundColor: colors.slate[50] }}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />,
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />,
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
    </BottomTab.Navigator>
  );
}
