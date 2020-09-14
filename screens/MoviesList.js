import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
export default function MoviesList() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>My WatchList</Text>

          <View style={styles.card}>
            <ImageBackground
              style={styles.imageRounded}
              source={require("../assets/avenger.jpg")}
            >
              <View style={styles.status}>
                <Text style={{ color: "black", fontWeight: "600" }}>
                  Completed
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.card}>
            <ImageBackground
              style={styles.imageRounded}
              source={require("../assets/john-wick.jpg")}
            >
              <View style={styles.status}>
                <Text style={{ color: "black", fontWeight: "600" }}>
                  Completed
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.card}></View>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageRounded: {
    overflow: "hidden",
    flex: 1,
    flexDirection: "column",
    borderRadius: 20,
  },
  card: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "pink",
    borderRadius: 20,
    width: "96%",
    height: 200,
    margin: 8,
  },

  status: {
    backgroundColor: "white",
    width: "26%",
    height: "18%",
    padding: 8,
    borderRadius: 8,
    margin: 8,
    opacity: 0.9,
  },
  container: {
    marginTop: 30,
    padding: 10,
  },
  title: {
    fontSize: 26,
    color: "black",
    padding: 10,
    fontWeight: "600",
  },
});
