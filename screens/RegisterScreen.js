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
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterScreen() {
  const [wait, setWait] = useState(false);

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const VerifyLogin = () => {
    setWait(true);
    try {
      let body = {
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
      <LinearGradient
        // Background Linear Gradient
        colors={["white", "pink", "white", "#0869c9"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 950,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} pagingEnabled={true}>
          <View style={styles.loginView}>
            <Text style={styles.title}>Account Setup</Text>
            <Text style={styles.fontMBlack}>
              Sign up to receive the latest updates, directly from our company
            </Text>

            <View style={styles.row}>
              <TextInput
                placeholderTextColor="gray"
                secureTextEntry={false}
                style={styles.input}
                placeholder="First Name"
                value={userName}
                onChangeText={(userName) => setUserName(userName)}
              ></TextInput>
              <TextInput
                placeholderTextColor="gray"
                secureTextEntry={false}
                style={styles.input}
                placeholder="Last Name"
              ></TextInput>
            </View>

            <TextInput
              placeholderTextColor="gray"
              secureTextEntry={false}
              style={styles.input}
              autoCompleteType="email"
              placeholder="Email address"
              value={emailAddress}
              onChangeText={(email) => setEmailAddress(email)}
              autoCapitalize="none"
            ></TextInput>
            <TextInput
              placeholderTextColor="gray"
              secureTextEntry={true}
              style={styles.input}
              value={passWord}
              onChangeText={(password) => setPassWord(password)}
              placeholder="Password"
            ></TextInput>

            <TouchableOpacity style={styles.button} onPress={VerifyLogin}>
              <Text style={styles.fontMWhite}>Register</Text>
            </TouchableOpacity>

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
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  loginView: {
    width: "100%",
    marginTop: 10,
    padding: 30,
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
    fontWeight: "500",
    marginBottom: 16,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    height: "100%",
  },
  title: {
    fontSize: 35,
    padding: 5,
    fontWeight: "600",
    marginBottom: 30,
    alignSelf: "center",
  },
  button: {
    padding: 12,
    backgroundColor: "#0869c9",
    color: "white",
    width: "100%",
    marginTop: 20,
    fontSize: 20,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  input: {
    width: "100%",
    padding: 16,
    fontSize: 20,
    backgroundColor: "#F6F6F6",
    margin: 8,
    borderRadius: 5,
    textAlign: "center",
    elevation: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: "48%",
  },
});
