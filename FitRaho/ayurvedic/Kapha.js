import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text } from 'react-native';

// Define the image using require('path_to_image')
const Kapha_Pic = require('../assets/Kapha Dosha.png');

const Kapha = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={Kapha_Pic} // Use the defined constant variable
        style={styles.image}
      />
      <Text style={styles.title}>Kapha Imbalance</Text>
      <Text style={styles.step}>Kapha Imbalance means Excess of Kapha trait in the body.</Text>
      <Text style={styles.step}>Kapha is the element made of mixing water and earth elements.</Text>
      <Text style={styles.step}>A body with excess of Kapha is characteristically identified as a body with oily skin & heavy build, calm mind and natural strength</Text>
      <Text style={styles.step}>The Kapha Element also makes hunger & hot weather intolerable. It is also noted that the people with Kapha Element tend to oversleep. </Text>
      <Text style={styles.heading}>What happens if Kapha is in excess?</Text>
      <Text style={styles.step}>The person becomes stubborn and more likely to hold grudges.</Text>
      <Text style={styles.step}>The person is more prone to ulcers, fevers, acne, acidity.</Text>
      <Text style={styles.heading}>How to balance Kapha?</Text>
      <Text style={styles.description}>People with the Kapha element are more prone to respiratory ailments, weight gain, allergies, mucous & congestion related diseases.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c7fc92', // Set your desired background color
  },
  image: {
    width: 200, // Adjust according to your image size
    height: 200, // Adjust according to your image size
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  step: {
    fontSize: 16,
    marginBottom: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default Kapha;