import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

function Bodymeasurements( {navigation} ) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [hipSize, setHipSize] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [bmi, setBMI] = useState(null);
  const [hipToWaistRatio, setHipToWaistRatio] = useState(null);

  const handleNext = () => {
    calculateBMI();
    calculateHipToWaistRatio();
    navigation.navigate("Organs")
  };

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100; // Convert height from cm to meters
    if (weightKg && heightM) {
      const bmiValue = weightKg / (heightM * heightM);
      setBMI(bmiValue.toFixed(2));
    }
  };

  const calculateHipToWaistRatio = () => {
    const hip = parseFloat(hipSize);
    const waist = parseFloat(waistSize);
    if (hip && waist) {
      const ratio = hip / waist;
      setHipToWaistRatio(ratio.toFixed(2));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: COLORS.black }}>
             Body Measurements
          </Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>This will only take a few minutes! ⏳</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Weight (kg)</Text>
          <TextInput
            placeholder='Enter your weight'
            keyboardType='numeric'
            value={weight}
            onChangeText={setWeight}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Height (cm)</Text>
          <TextInput
            placeholder='Enter your height'
            keyboardType='numeric'
            value={height}
            onChangeText={setHeight}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Hip Size (cm)</Text>
          <TextInput
            placeholder='Enter your hip size'
            keyboardType='numeric'
            value={hipSize}
            onChangeText={setHipSize}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Waist Size (cm)</Text>
          <TextInput
            placeholder='Enter your waist size'
            keyboardType='numeric'
            value={waistSize}
            onChangeText={setWaistSize}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.black,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            borderRadius: 8,
            marginTop: 16,
          }}
          onPress={handleNext}
        >
          <Text style={{ color: COLORS.white, fontSize: 20 }}>Next 🏂</Text>
        </TouchableOpacity>

        {bmi !== null && (
          <Text style={{ fontSize: 16, marginTop: 16 }}>BMI: {bmi}</Text>
        )}

        {hipToWaistRatio !== null && (
          <Text style={{ fontSize: 16, marginTop: 8 }}>Hip-to-Waist Ratio: {hipToWaistRatio}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Bodymeasurements;
