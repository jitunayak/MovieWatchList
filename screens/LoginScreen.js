import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  AsyncStorage,
  ImageBackground,
} from "react-native";
import { max, or } from "react-native-reanimated";

export default function LoginScreen({ navigation }) {
  const image = { uri: "assets/bg.png" };

  // useEffect(() => {
  //   fetch("https://randomuser.me/api/")
  //     .then((results) => results.json())
  //     .then((data) => {
  //       console.log(data.results[0]);
  //       alert(data.results[0].email);
  //     });
  // }, [])};
  const [wait, setWait] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  AsyncStorage.getItem("LOGIN_TOKEN").then((token) => {
    if (token == "abc@123") {
      navigation.navigate("Home");
    }
  });

  const VerifyLogin = () => {
    if (!emailAddress || !password) {
      alert("Empty fields");
    } else {
      setWait(true);
      let body = {
        emailAddress: emailAddress,
        passWord: password,
      };
      axios
        .post(`http://localhost:8080/login`, body)
        .then((res) => {
          if (res.data == "login successful") {
            AsyncStorage.setItem("LOGIN_TOKEN", "abc@123");

            navigation.navigate("Home");
          } else {
            alert(res.data);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    setWait(false);
  };

  // try {
  //   AsyncStorage.getItem("LOGIN_TOKEN").then((token) => {
  //     if (token != "abc@123") {
  //       navigation.navigate("Home");
  //     }
  //   });
  // } catch (error) {}

  return (
    <ImageBackground
      style={{ height: "100%", justifyContent: "space-around" }}
      source={require("../assets/bg2.png")}
    >
      <View style={styles.container}>
        <View style={styles.loginView}>
          <Text style={styles.title}>Log in</Text>
          <Text></Text>

          <TextInput
            placeholderTextColor="gray"
            secureTextEntry={false}
            style={styles.input}
            placeholder="Email Address"
            autoCapitalize="none"
            autoCompleteType="email"
            value={emailAddress}
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          ></TextInput>

          <TextInput
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
          ></TextInput>

          <TouchableOpacity onPress={VerifyLogin} style={styles.button}>
            <Text
              onPress={VerifyLogin}
              style={{ fontSize: 22, fontWeight: "600", color: "white" }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity>
              <Text
                style={styles.fontMWhite}
                onPress={() => {
                  navigation.push("Registration");
                }}
              >
                Don't have an account, Register
              </Text>
            </TouchableOpacity>
          </View>

          {wait ? (
            <ActivityIndicator size="large"></ActivityIndicator>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",

    padding: 2,
  },
  loginView: {
    width: "100%",
    height: "60%",
    marginTop: 50,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  fontMWhite: {
    fontSize: 18,
    color: "black",
    color: "white",
    fontWeight: "500",
    marginTop: 10,
  },
  fontMBlack: {
    fontSize: 24,
    fontWeight: "500",
    color: "#2D4CAA",
  },

  title: {
    fontSize: 40,
    padding: 5,
    fontWeight: "700",
    marginBottom: 20,
    alignSelf: "center",
    color: "white",
  },
  button: {
    padding: 8,
    //backgroundColor: "#00A7D9",
    backgroundColor: "#0869c9",
    color: "white",
    width: "90%",
    height: "18%",
    fontSize: 8,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    elevation: 8,
  },
  input: {
    width: "90%",
    padding: 16,
    fontSize: 20,
    backgroundColor: "#F6F6F6",
    //backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 5,
    textAlign: "left",
    // borderBottomColor: "#00A7D9",
    // borderBottomWidth: 2,
    elevation: 1,
  },
});
