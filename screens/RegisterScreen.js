import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios";

export default function RegisterScreen() {
  const [wait, setWait] = useState(false);

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const VerifyLogin = () => {
    setWait(true);
    try {
      body = {
        userName: userName,
        passWord: passWord,
        emailAddress: emailAddress,
      };

      axios.post(`http://localhost:8080/register`, body).then((res) => {
        alert("Check email inbox");
      });
      setWait(false);
    } catch (error) {
      alert(error.message);
      setWait(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.loginView}>
          <Text style={styles.title}>Register</Text>
          <Text
            style={styles.fontMBlack}
            style={{ marginBottom: 16, fontSize: 18 }}
          >
            Sign up to receive the latest updates, directly from our company
          </Text>

          <View style={styles.row}>
            <TextInput
              secureTextEntry={false}
              style={styles.input}
              placeholder="First Name"
              value={userName}
              onChangeText={(userName) => setUserName(userName)}
            ></TextInput>
            <TextInput
              secureTextEntry={false}
              style={styles.input}
              placeholder="Last Name"
            ></TextInput>
          </View>

          <TextInput
            secureTextEntry={false}
            style={styles.input}
            autoCompleteType="email"
            placeholder="Email address"
            value={emailAddress}
            onChangeText={(email) => setEmailAddress(email)}
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={passWord}
            onChangeText={(password) => setPassWord(password)}
            placeholder="Password"
          ></TextInput>

          <View style={styles.button}>
            <TouchableOpacity onPress={VerifyLogin}>
              <Text style={styles.fontMWhite}>Register</Text>
            </TouchableOpacity>
          </View>

          {wait ? (
            <ActivityIndicator
              style={{ margin: 20 }}
              size="large"
            ></ActivityIndicator>
          ) : (
            <View></View>
          )}
          <Text style={{ marginTop: 30 }}>2020 | Jitu Nayak</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loginView: {
    width: "100%",
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  fontMWhite: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  fontMBlack: {
    fontSize: 18,
    color: "black",
    margin: 8,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    height: "100%",
  },
  title: {
    fontSize: 35,
    padding: 5,
    marginBottom: 30,
    alignSelf: "center",
  },
  button: {
    padding: 12,
    backgroundColor: "deepskyblue",
    color: "white",
    width: "100%",
    marginTop: 20,
    fontSize: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    padding: 16,
    fontSize: 18,
    backgroundColor: "#F6F6F6",
    margin: 8,
    borderRadius: 10,
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: "48%",
  },
});
