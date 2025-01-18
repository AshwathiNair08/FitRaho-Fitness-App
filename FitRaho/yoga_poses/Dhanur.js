import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking} from 'react-native';

// Define the image using require('path_to_image')
const dhanur_pic = require('../assets/dhanuraasana.jpg');

const openYoutubeTutorial = () => {
  // Change the link to your desired YouTube tutorial
  Linking.openURL('https://www.youtube.com/shorts/mtJec1R_6Qk');
};

const handleStart = () => {
  // Add functionality for the "Start" button
  console.log('Start button pressed!');
};

const Dhanur = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dhanur-Aasan</Text>
      <Image
        source={dhanur_pic} // Use the defined constant variable
        style={styles.image}
      />
      <Text style={styles.title}>Dhanur-Aasan</Text>
      <Text style={styles.step}>Step 1: Lay down on some flat area with your belly on the ground & back facing up</Text>
      <Text style={styles.step}>Step 2: Fold your knees to bring the ankles up</Text>
      <Text style={styles.step}>Step 3: Slowly bring bend your back while holding the position to grab your ankles and stretch your core like a bow.</Text>
      
      <TouchableOpacity style={[styles.button, styles.redButton]} onPress={openYoutubeTutorial}>
        <Text style={styles.buttonText}>Watch Tutorial</Text>
      </TouchableOpacity>
      
      <Text style={styles.heading}>Benefits</Text>
      <Text style={styles.description}>Makes the back flexible, strngthens the back and core muscles, rtelieves menstrual discomfort in women</Text>
      
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

export default Dhanur;