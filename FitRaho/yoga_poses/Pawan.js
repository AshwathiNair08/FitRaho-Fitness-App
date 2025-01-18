import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking} from 'react-native';

// Define the image using require('path_to_image')
const pawan_steps = require('../assets/pawanmuktaasana.png');
const pawan_pic = require('../assets/pawanmukta-benefits.jpg');

const openYoutubeTutorial = () => {
  // Change the link to your desired YouTube tutorial
  Linking.openURL('https://www.youtube.com/watch?v=UNQfuFaQWNo&pp=ygUOcGF3YW5tdWt0YXNhbmE%3D');
};

const handleStart = () => {
  // Add functionality for the "Start" button
  console.log('Start button pressed!');
};

const Pawan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pawan-Mukt-Aasan</Text>
      <Image
        source={pawan_pic} // Use the defined constant variable
        style={styles.image}
      />
      <Text style={styles.title}>Pawan-Mukt-Aasan</Text>
      <Text style={styles.step}>Step 1: Lay down on your back on some flat area</Text>
      <Text style={styles.step}>Step 2: Fold your knees and slowly bring them up and clasp your shins with your hands</Text>
      <Text style={styles.step}>Step 3: Slowly bring your head up as if trying to touch your chin to the knees. Hold for 15 seconds</Text>
      
      <TouchableOpacity style={[styles.button, styles.redButton]} onPress={openYoutubeTutorial}>
        <Text style={styles.buttonText}>Watch Tutorial</Text>
      </TouchableOpacity>
      
      <Text style={styles.heading}>Benefits</Text>
      <Text style={styles.description}>helps relieve Abdominal Gas and helps in digestion. A must for thse suffering from Acidity.</Text>

      <TouchableOpacity style={[styles.button, styles.greenButton]} onPress={handleStart}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>

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
    backgroundColor: '#fff', // Set your desired background color
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
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  redButton: {
    backgroundColor: 'red',
  },
  greenButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Pawan;