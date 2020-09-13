import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Icon,
  SafeAreaView,
  View,
  Text,
  TextInput,
  SearchBar,
  Image,
  Alert,
  AsyncStorage,
} from "react-native";
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [searchInput, SetSearchInput] = useState([
    {
      value: "",
    },
  ]);
  const [result, setResult] = useState([
    {
      genres: [],
      id: "207703",
      overview:
        "The story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius.",
      poster:
        "https://image.tmdb.org/t/p/w1280/8x7ej0LnHdKUqilNNJXYOeyB6L9.jpg",
      release_date: 1422057600,
      title: "Kingsman: The Secret Service",
    },
  ]);

  useEffect(() => {
    AsyncStorage.getItem("LOGIN_TOKEN").then((token) => {
      if (token != "abc@123") {
        navigation.navigate("Login");
      }
    });

    const body = { q: searchInput.value, limit: 4 };
    axios
      .post(`http://localhost:7700/indexes/movies/search`, body)
      .then((res) => {
        setResult(res.data.hits);
      });
  }),
    [searchInput.value];

  const onPressCard = (id) => {
    alert("Booked movie with " + id + " Check your email");
  };

  return (
    <View style={styles.MainBackgorund}>
      <View style={styles.searchBar}>
        <Ionicons
          name="md-search"
          size={32}
          style={{ marginLeft: 10 }}
          color="grey"
        />

        <TextInput
          style={{
            fontSize: 22,
            marginLeft: 10,
            paddingLeft: 10,
            width: "80%",
          }}
          autoFocus={false}
          placeholder="Search"
          value={searchInput.value}
          onChangeText={(text) => SetSearchInput({ value: text })}
        ></TextInput>
        <Ionicons
          name="md-close"
          size={32}
          style={{ marginRight: 10 }}
          color="grey"
          onPress={() => {
            SetSearchInput({ value: "" });
          }}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 34,
            marginBottom: 8,
            marginLeft: 10,
          }}
        >
          Movies World
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          <View style={styles.roundedCard}>
            <Ionicons name="md-videocam" size={40} color="#00A7D9" />
          </View>
          <View style={styles.roundedCard}>
            <Ionicons name="md-headset" size={40} color="#00A7D9" />
          </View>
          <View style={styles.roundedCard}>
            <Ionicons name="md-heart" size={40} color="#00A7D9" />
          </View>
          <View style={styles.roundedCard}>
            <Ionicons name="md-person" size={40} color="#00A7D9" />
          </View>
        </ScrollView>

        {result.map((movie, index = movie.id) => {
          return (
            <TouchableOpacity onPress={() => onPressCard(movie.id)}>
              <View style={styles.roundedCardVertical} key={index}>
                <Text style={styles.title}>{movie.title}</Text>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: movie.poster,
                  }}
                />

                <View style={{ display: "flex", flexDirection: "row" }}>
                  {movie.genres.map((genre, index) => {
                    if (index < 3) {
                      return (
                        <Text
                          key={index}
                          style={{
                            color: "red",
                            display: "flex",
                            flexDirection: "row",
                            fontWeight: "600",
                            paddingTop: 8,
                            paddingBottom: 8,
                          }}
                        >
                          {genre + " | "}
                        </Text>
                      );
                    }
                  })}
                </View>

                <Text>{movie.overview}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginTop: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
  title: {
    fontSize: 22,
    color: "black",
    fontWeight: "700",
  },
  searchBar: {
    padding: 8,
    fontSize: 18,
    marginTop: 0,
    backgroundColor: "#F6F6F6",
    marginBottom: 10,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
  },
  MainBackgorund: {
    backgroundColor: "white",
    padding: 8,
  },

  roundedCard: {
    backgroundColor: "#DAF1F8",
    width: 70,
    height: 70,
    margin: 8,
    paddingLeft: 20,
    paddingTop: 15,
    borderRadius: 50,
    // shadowColor: "white",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // elevation: 4,
  },
  roundedCardVertical: {
    display: "flex",
    backgroundColor: "white",
    width: "96%",
    minHeight: 220,
    margin: 5,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
});
