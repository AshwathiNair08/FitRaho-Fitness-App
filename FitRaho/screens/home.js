import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import Slider from "../components/Slider";

const headerImage = require("./../assets/header.jpg");
const banner = require("./../assets/BG.png");
const fire = require("./../assets/fire.png");
const model = require("./../assets/model.png");
const Vaata_icon = require("./../assets/Vaata icon.png");
const Vaata = require("../ayurvedic/Vaata")
const Kapha_icon = require("./../assets/Kapha icon.png");
const Kapha = require("../ayurvedic/Kapha")
const Pitta_icon = require("./../assets/Pitta icon.png");
const Pitta = require("../ayurvedic/Pitta")
const next = require("./../assets/next.png");
const home = require("./../assets/Home.png");
const heart = require("./../assets/H.png");
const calendar = require("./../assets/Calender.png");
const profile = require("./../assets/User.png");
const plus = require("./../assets/Plus.png");

const { width: screenWidth } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.screen}>
          <Header navigation={navigation} />
          <Banner />
        </View>
        <View style={{ marginHorizontal: "3%" }}>
          <Label>Your Ayurvedic Body Type</Label>
          <View style={{ flexDirection: "row" }}>
            {data.map((item, index) => (
              <Card data={item} index={index} key={index} navigation={navigation} />
            ))}
          </View>
        </View>
        <View style={{ marginHorizontal: "3%" }}>
          <Label>Yoga Poses</Label>
        </View>
        <View style={{ paddingTop: 150 }}>
          <Slider />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
const BottomButton = ({ image, style, imageStyle }) => (
  <>
    <View
      style={[
        {
          flex: 1,
          alignSelf: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <Image
        source={image}
        style={[
          {
            height: image === plus ? 40 : 20,
            width: image === plus ? 40 : 20,
          },
          imageStyle,
        ]}
      />
    </View>
    {image === home && (
      <View
        style={{
          width: "10%",
          position: "absolute",
          height: 2,
          backgroundColor: "#8860a2",
          bottom: 0,
          left: 25,
        }}
      />
    )}
  </>
);

const Card = ({ data, index, navigation }) => {
  const handleCardPress = () => {
    switch (index) {
      case 0:
        navigation.navigate("Vaata");
        break;
      case 1:
        navigation.navigate("Pitta");
        break;
      case 2:
        navigation.navigate("Kapha");
        break;
      // Add more cases as needed
      default:
        break;
    }
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View
        style={{
          height: 180,
          padding: 10,
          alignSelf: "center",
          backgroundColor: data.color,
          justifyContent: "space-between",
          marginHorizontal: 8,
          borderRadius: 10,
          shadowColor: "lightgrey",
          shadowOffset: { width: -5, height: 5 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
        }}
      >
        <Image source={data.image} style={{ height: 25, width: 25 }} />
        <View style={{ alignSelf: "center", margin: 5 }}>
          <Progress.Circle
            size={50}
            progress={data.status / 100}
            showsText
            unfilledColor="#ededed"
            borderColor="#ededed"
            color={data.darkColor}
            direction="clockwise"
            fill="white"
            strokeCap="round"
            thickness={5}
            style={{
              shadowColor: "grey",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 1,
            }}
            textStyle={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              fontWeight: "bold",
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 10, fontFamily: "Poppins-Light" }}>
            {"All the Tri-Dosha"}
          </Text>
          <Text style={{ fontSize: 10, fontFamily: "Poppins-Light" }}>
            {"must be balanced"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Poppins-Regular" }}>{data.name}</Text>
          <View
            style={{
              backgroundColor: data.lightColor,
              padding: 2,
              borderRadius: 10,
            }}
          >
            <Image
              source={next}
              style={{
                height: 12,
                width: 12,
                resizeMode: "contain",
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Header = ({ navigation }) => (
  <View style={styles.header}>
    <ImageContainer image={headerImage} />
    <HeaderTitle />
  </View>
);
const Banner = () => (
  <>
    <ImageBackground style={styles.banner} source={banner}>
      <View style={styles.bannerContainer}>
        <View style={styles.rowLabel}>
          <View style={styles.fireContainer}>
            <Image
              source={fire}
              resizeMode="contain"
              style={styles.fireImage}
            />
          </View>
          <Text style={styles.offer}>Hello!</Text>
        </View>
        <OfferText>Welcome to</OfferText>
        <OfferText>FitRaho App</OfferText>
      </View>
    </ImageBackground>
    <Image source={model} style={styles.model} resizeMode="contain" />
  </>
);

const OfferText = ({ children }) => (
  <Text style={styles.offerText}>{children}</Text>
);

const ImageContainer = ({ image, height = "100%", width = "100%" }) => (
  <View style={styles.imageContainer}>
    <Image source={image} style={[{ height, width }]} />
  </View>
);
const HeaderTitle = () => (
  <View style={styles.title}>
    <Text style={styles.bigTitle}>Hello, User</Text>
    <Text style={styles.smallTitle}>Mar 3, 2023</Text>
  </View>
);

const Label = ({ children }) => <Text style={styles.label}>{children}</Text>;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
  },
  bigTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  smallTitle: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    opacity: 0.6,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  fireImage: {
    height: 15,
    width: 15,
    alignSelf: "center",
    margin: 5,
  },
  banner: {
    marginTop: 20,
    padding: 30,
    resizeMode: "contain",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
  bannerContainer: { flex: 1 },
  label: { fontFamily: "Poppins-Medium", fontSize: 20, marginVertical: 10 },
  model: {
    position: "absolute",
    right: 0,
    bottom: -20,
    zIndex: 10,
    height: "75%",
    width: "50%",
    transform: [{ rotateY: "180deg" }],
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: { margin: "3%" },
  offer: { color: "white", fontFamily: "Poppins-Regular", fontSize: 10 },
  offerText: { color: "white", fontSize: 16, fontFamily: "Poppins-Regular" },

  rowLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  fireContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const data = [
  {
    name: "Vaata (वात)",
    status: 0,
    image: Vaata_icon,
    lightColor: "#b5f7fc",
    color: "#98f4fb",
    darkColor: "#36e9f7",
  },
  {
    name: "Pitta (पित्त)",
    status: 0,
    image: Pitta_icon,
    lightColor: "#fcb5a1",
    color: "#fba68d",
    darkColor: "#f84512",
  },
  {
    name: "Kapha (कफ)",
    status: 0,
    image: Kapha_icon,
    lightColor: "#b2fb6a",
    color: "#90f929",
    darkColor: "#63c105",
  },
];
