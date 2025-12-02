import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "../src/screens/MainScreen";
import HomeScreen from "../src/screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0f0f0f",
          borderTopColor: "#222",
          height: 60,
        },
        tabBarActiveTintColor: "#2a72ff",
        tabBarInactiveTintColor: "#aaa",
        tabBarIcon: ({ color }) => {
          let iconName = "home-outline";

          if (route.name === "Головний") iconName = "home-outline";
          if (route.name === "Битви") iconName = "list-outline";

          return <Ionicons name={iconName as any} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Головний" component={MainScreen} />
      <Tab.Screen name="Битви" component={HomeScreen} />
    </Tab.Navigator>
  );
}
