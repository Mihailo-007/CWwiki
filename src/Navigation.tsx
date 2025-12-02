import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "./screens/MainScreen";
import HomeScreen from "./screens/HomeScreen";
import BattleScreen from "./screens/BattleScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
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
        tabBarIcon: ({ color, size }) => {
          let name = "home-outline";

          if (route.name === "Головний") name = "home-outline";
          if (route.name === "Битви") name = "list-outline";

          return <Ionicons name={name as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Головний" component={MainScreen} />
      <Tab.Screen name="Битви" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />

        <Stack.Screen
          name="Battle"
          component={BattleScreen}
          options={{
            headerShown: true,
            title: "Інформація про битву",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
