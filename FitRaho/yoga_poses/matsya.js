import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking} from 'react-native';

// Define the image using require('path_to_image')
const matsya_pic = require('../assets/matsyasana.jpg');

const openYoutubeTutorial = () => {
  // Change the link to your desired YouTube tutorial
  Linking.openURL('https://www.youtube.com/watch?v=vhFdcezAyL8');
};

const handleStart = () => {
  // Add functionality for the "Start" button
  console.log('Start button pressed!');
};

const matsya = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Matsya-Aasan</Text>
      <Image
        source={matsya_pic} // Use the defined constant variable
        style={styles.image}
      />
      <Text style={styles.title}>Matsya-Aasan</Text>
      <Text style={styles.step}>Step 1: Sit with your legs extended in front of you.</Text>
      <Text style={styles.step}>Step 2: Lower your body back, using your forearms and elbows for support as you lean back.</Text>
      <Text style={styles.step}>Step 3: Lift your chest upwards, arch your back as much as possible.</Text>
      <Text style={styles.step}>Step 4: Drop your head back to touch the floor.</Text>
      <Text style={styles.step}>Step 5: Maintain the pose for several breaths, then lift your head gently, lower your chest and return to the seated position.</Text>
      
      <TouchableOpacity style={[styles.button, styles.redButton]} onPress={openYoutubeTutorial}>
        <Text style={styles.buttonText}>Watch Tutorial</Text>
      </TouchableOpacity>
      
      <Text style={styles.heading}>Benefits</Text>
      <Text style={styles.description}>Matsyasana stretches the chest and neck, relieves tension in the back and shoulders, and improves respiratory function.</Text>


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
    marginTop: 15,
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

export default matsya;