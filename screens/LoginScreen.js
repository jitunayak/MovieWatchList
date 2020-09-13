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
} from "react-native";
import { or } from "react-native-reanimated";

export default function LoginScreen({ navigation }) {
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
      setWait(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.loginView}>
          <Text style={styles.title}>MOVIE</Text>
          <Text></Text>

          <TextInput
            secureTextEntry={false}
            style={styles.input}
            placeholder="Email Address"
            autoCapitalize="none"
            autoCompleteType="email"
            value={emailAddress}
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          ></TextInput>

          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
          ></TextInput>

          <TouchableOpacity onPress={VerifyLogin} style={styles.button}>
            <Text onPress={VerifyLogin} style={styles.fontMWhite}>
              Login
            </Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity>
              <Text
                style={styles.fontMBlack}
                onPress={() => {
                  navigation.navigate("Registration");
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginView: {
    width: "100%",
    height: "100%",
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  fontMWhite: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
  },
  fontMBlack: {
    fontSize: 18,
    color: "black",
    marginTop: 16,
  },
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    padding: 0,
  },
  title: {
    fontSize: 35,
    padding: 5,
    fontWeight: "500",
    marginBottom: 30,
    alignSelf: "center",
    color: "#00A7D9",
  },
  button: {
    padding: 12,
    backgroundColor: "#00A7D9",
    color: "white",
    width: 350,
    fontSize: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  input: {
    width: 350,
    padding: 16,
    fontSize: 20,
    backgroundColor: "#F6F6F6",
    marginBottom: 10,
    borderRadius: 10,
    textAlign: "center",
  },
});
