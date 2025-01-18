import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text } from 'react-native';

// Define the image using require('path_to_image')
const Pitta_Pic = require('../assets/Pitta Dosha.png');

const Pitta = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={Pitta_Pic} // Use the defined constant variable
        style={styles.image}
      />
      <Text style={styles.title}>Pitta Imbalance</Text>
      <Text style={styles.step}>Pitta Imbalance means Excess of Pitta trait in the body.</Text>
      <Text style={styles.step}>Pitta is the element made of mixing fire and water elements.</Text>
      <Text style={styles.step}>A body with excess of Pitta is characteristically identified as freckled & oily skin, short temper, and an intolerance for hot weather.</Text>
      <Text style={styles.step}>The Pitta Element also makes the body agile & they sweat a lot in the summers.</Text>
      <Text style={styles.heading}>What happens if Pitta is in excess?</Text>
      <Text style={styles.step}>The person becomes short tempered and critical of others.</Text>
      <Text style={styles.step}>The person is more prone to ulcers, fevers, acne, acidity.</Text>
      <Text style={styles.heading}>How to balance Pitta?</Text>
      <Text style={styles.description}>Pitta element is balanced by: Keeping some free time everyday, not skipping meals, spending more time in Nature, playing more challenging sports.</Text>
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
    backgroundColor: '#fec56c', // Set your desired background color
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

export default Pitta;