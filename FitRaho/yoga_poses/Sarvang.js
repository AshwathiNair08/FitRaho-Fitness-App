import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking} from 'react-native';

// Define the image using require('path_to_image')
const sarvang_steps = require('../assets/sarvangasana.jpg');
const sarvang_pic = require('../assets/sarvangasana-benefits.jpg');

const openYoutubeTutorial = () => {
  // Change the link to your desired YouTube tutorial
  Linking.openURL('https://www.youtube.com/watch?v=g3wvIPXZ-Qo');
};

const handleStart = () => {
  // Add functionality for the "Start" button 
  console.log('Start button pressed!');
};

const sarvang = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sar-vang-Asana</Text>
      <Image
        source={sarvang_pic} // Use the defined constant variable
        style={styles.image}
      />
      <Text style={styles.title}>Sar-vang-Aasan</Text>
      <Text style={styles.step}>Step 1: Lie flat on your back on a comfortable surface.</Text>
      <Text style={styles.step}>Step 2: Lift your legs and hips off the ground, bringing your legs over your head while supporting your lower back with your hands.</Text>
      <Text style={styles.step}>Step 3: Straighten your legs upwards and align them directly above your shoulders. Ensure your weight is balanced on your shoulders and upper arms, not on your neck or head.</Text>
      <Text style={styles.step}>Step 4: Hold the posture, keeping your legs firm and your spine straight. Breathe deeply and maintain the position for as long as comfortable.</Text>

      
      <TouchableOpacity style={[styles.button, styles.redButton]} onPress={openYoutubeTutorial}>
        <Text style={styles.buttonText}>Watch Tutorial</Text>
      </TouchableOpacity>
      
      <Text style={styles.heading}>Benefits</Text>
      <Text style={styles.description}>Improving blood circulation and digestion.</Text>

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

export default sarvang;