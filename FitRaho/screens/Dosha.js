import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';

const questions = [
  "1.How often do you experience dry skin or constipation?",
  "2.Are you prone to irritability or anger?",
  "3.Do you have a tendency to gain weight easily or experience sinus congestion?",
  "4.Do you have a fast metabolism or strong appetite?",
  "5.Do you tend to overheat easily or have strong body odor?",
  "6.Are you prone to feelings of heaviness or lethargy?",
  "7.Do you experience joint pain or stiffness?",
  "8.Do you have a sharp memory and quick wit?",
  "9.Do you have sensitive digestion or acid reflux?",
  "10.Do you often feel cold or have poor circulation?"
];

const dosha = ({ navigation }) => {
    const [doshaPercentages, setDoshaPercentages] = useState({ vata: 0, pitta: 0, kapha: 0 });

  const handleAnswer = (value) => {
    const selectedDosha = ['vata', 'pitta', 'kapha'][value - 1];
    setDoshaPercentages(prevState => ({
      ...prevState,
      [selectedDosha]: prevState[selectedDosha] + 1
    }));
  };

  const handleCalculate = () => {
    navigation.navigate("home", { doshaPercentages });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{question}</Text>
          <View style={styles.buttonContainer}>
            {['Rarely', 'Sometimes', 'Often'].map((title, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={styles.button}
                onPress={() => handleAnswer(buttonIndex + 1)}
              >
                <Text style={styles.buttonText}>{title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'black' }]}
        onPress={handleCalculate}
      >
        <Text style={[styles.buttonText, { color: '#fff' }]}>Calculate Dosha Percentage</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  questionContainer: {
    marginBottom: 20,
    backgroundColor: '#f8f9fa', // Background color for question container
    padding: 20,
    borderRadius: 10,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 100,
    elevation: 3,
    marginHorizontal:2,
  },
  buttonText: {
    color: 'purple',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

  

export default dosha;
