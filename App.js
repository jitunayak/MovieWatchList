import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  // const AppNavigation = createStackNavigation(
  //   {
  //     LoginScreen: LoginScreen,
  //     RegisterScreen: RegisterScreen,
  //     HomeScreen: HomeScreen,
  //   },
  //   {
  //     initialRouteName: "LoginScreen",
  //   }
  // );

  //const AppContainer = createAppContainer(AppNavigation);
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <Stack.Screen name="Login" component={LoginScreen} />
      </NavigationContainer> */}
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    padding: 16,
  },
});
