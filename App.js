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
  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer theme={MyTheme}>

    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         headerRight: () => (
    //           <Text
    //             onPress={() => {
    //               AsyncStorage.setItem("LOGIN_TOKEN", "deleted");
    //             }}
    //             style={{ fontSize: 16, color: "red", marginRight: 16 }}
    //           >
    //             Log out
    //           </Text>
    //         ),
    //       }}
    //     />
    //     <Stack.Screen name="Registration" component={RegisterScreen} />
    //     <Stack.Screen
    //       options={{ headerShown: false }}
    //       name="Login"
    //       component={LoginScreen}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={MoviesList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});
