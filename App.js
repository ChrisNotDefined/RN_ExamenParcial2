import { StatusBar } from "expo-status-bar";
import React from "react";
import Login from "./src/pages/loginPage";
import Register from "./src/pages/registerPage";
import Summary from "./src/pages/summaryPage";
import Quotation from "./src/pages/quotationPage";
import { Image, StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();

  let headerOptions = {
    headerStyle: { backgroundColor: "#0057EE" },
    headerTitleStyle: { color: "#FFFFFF", fontWeight: "200" },
    headerRight: () => {
      return (
        <Image
          resizeMode="contain"
          resizeMethod="scale"
          source={require("./assets/banco.png")}
          style={styles.imagen}
        />
      );
    },
  };

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ cardStyle: styles.container }}>
          <Stack.Screen
            options={headerOptions}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={headerOptions}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={headerOptions}
            name="Summary"
            component={Summary}
          />
          <Stack.Screen
            options={headerOptions}
            name="Quotation"
            component={Quotation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEEAFF",
    color: "#FFFFFF",
  },
  imagen: {
    height: "100%",
    width: 40,
    margin: 10
  },
});
