import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  AsyncStorage,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MoviesList from "./screens/MoviesList";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigation from "./TabNavigation";

enableScreens();

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      primary: "black",
      background: "white",
      card: "white",
      text: "black",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };
  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{
            headerRight: () => (
              <Text
                onPress={() => {
                  AsyncStorage.setItem("LOGIN_TOKEN", "deleted");
                }}
                style={{ fontSize: 16, color: "red", marginRight: 16 }}
              >
                Log out
              </Text>
            ),
          }}
        />
        <Stack.Screen name="Registration" component={RegisterScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});
