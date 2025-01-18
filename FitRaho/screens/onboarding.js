import { StatusBar } from "expo-status-bar";
import AppIntroSlider from "react-native-app-intro-slider";
import { View, Text, Image, StyleSheet, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { Dropdown } from 'react-native-element-dropdown';
import Details from "./Details";



const slides = [
  {
    key: "one",
    title: "TRACK YOUR DAILY ACTIVITIES",
    text:
      "See daily calories burned by you for each activity",
    image: require("./../images/1.png"),
  },
  {
    key: "two",
    title: "GET RECOMMENDATIONS",
    text:
      "Get yoga exercises and diets recommended just for you",
    image: require("./../images/2.png"),
  },
  {
    key: "three",
    title: "ENJOY THIS JOURNEY",
    text:
      "See visible tranformation in your life",
    image: require("./../images/3.png"),
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getuserdata: false
    };
    this._onDone = this._onDone.bind(this);
  }

  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "73%",
            width: "100%",
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 17,
            fontWeight: "bold",
            color: "#9933ff",
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign: "center",
          color: "#4d4dff",
          fontSize: 15,
          paddingHorizontal: 30
        }}>
          {item.text}
        </Text>
      </View>
    );
  };

  _onDone = () => {
    this.setState({ getuserdata: true });
  }

  render() {
    if (this.state.getuserdata) {
      this.props.navigation.navigate("Details");
    } else
      return (

        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          activeDotStyle={{
            backgroundColor: "#cc33ff",
            width: 30
          }}
        />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});