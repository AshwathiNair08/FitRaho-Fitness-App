import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text } from 'react-native';

// Define the image using require('path_to_image')
const Vaata_Pic = require('../assets/Vaata Dosha.png');

const Vaata = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={Vaata_Pic} // Use the defined constant variable
        style={styles.image}
      />
      <Text style={styles.title}>Vaata Imbalance</Text>
      <Text style={styles.step}>Vaata Imbalance means Excess of Vaata trait in the body.</Text>
      <Text style={styles.step}>Vaata is the element made of mixing air and space elements.</Text>
      <Text style={styles.step}>A body with excess of Vaata is characteristically identified as having dry skin and a thin body</Text>
      <Text style={styles.step}>The Vaata Element also makes the person have trouble sleeping. Those with high levels of Vaata barely get any sleep.</Text>
      <Text style={styles.heading}>What happens if Vaata is in excess?</Text>
      <Text style={styles.step}>The person becomes nervous, anxious, restless and more likely to forget things.</Text>
      <Text style={styles.step}>The person is more prone to headaches, constipation, insomnia, premature aging, anxiety disorders.</Text>
      <Text style={styles.heading}>How to balance Vaata?</Text>
      <Text style={styles.description}>Be near water bodies (it calms anxiety and relaxes people), drink lukewarm Nimbu-paani in the morning, get a routine which helps you manage things better while giving you free time & practice pranayama</Text>
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
    backgroundColor: '#b5f7fc', // Set your desired background color
  },
  image: {
    width: 200, 
    height: 200,
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

export default Vaata;