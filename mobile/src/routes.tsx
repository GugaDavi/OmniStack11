import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./types";

import Home from "./pages/Home";
import IncidentDetails from "./pages/IncidentDetails";
import Chat from "./pages/Chat";

const { Navigator: Stack, Screen } = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="IncidentsDatails" component={IncidentDetails} />
        <Screen name="Chat" component={Chat} />
      </Stack>
    </NavigationContainer>
  );
}
