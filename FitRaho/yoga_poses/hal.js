import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking} from 'react-native';

// Define the image using require('path_to_image')
const shirsha_pic = require('../assets/halasana.jpg');

const openYoutubeTutorial = () => {
  // Change the link to your desired YouTube tutorial
  Linking.openURL('https://www.youtube.com/watch?v=your_youtube_video_id');
};

const handleStart = () => {
  // Add functionality for the "Start" button
  console.log('Start button pressed!');
};

const Shirsha = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hal-Aasan</Text>
      <Image
        source={shirsha_pic} // Use the defined constant variable
        style={styles.image}
      />
      <Text style={styles.title}>Hal-Aasan</Text>
      <Text style={styles.step}>Step 1: Lie on your back, inhale, and lift your legs up.</Text>
      <Text style={styles.step}>Step 2: Exhale, lower your legs over your head, supporting your lower back with your hands.</Text>
      <Text style={styles.step}>Step 3: Hold the pose briefly, then slowly release and return to lying flat on your back.</Text>
      
      <TouchableOpacity style={[styles.button, styles.redButton]} onPress={openYoutubeTutorial}>
        <Text style={styles.buttonText}>Watch Tutorial</Text>
      </TouchableOpacity>
      
      <Text style={styles.heading}>Benefits</Text>
      <Text style={styles.description}>It helps stretch the spine, shoulders, and hamstrings while improving digestion and calming the nervous system.</Text>


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

export default Shirsha;