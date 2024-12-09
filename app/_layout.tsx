import { Text, View } from "react-native";

import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Pokedex" }} />
      <Stack.Screen name="(pokemon)/[id]" options={{ title: "" }} />
    </Stack>
  );
};

export default Layout;
