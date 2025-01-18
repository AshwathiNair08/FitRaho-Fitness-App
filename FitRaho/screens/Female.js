import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Female = ({ navigation }) => {
  const [periodLength, setPeriodLength] = useState('');
  const [periodGap, setPeriodGap] = useState('');
  const [isIrregular, setIsIrregular] = useState(false);
  const [isPregnant, setIsPregnant] = useState(false);
  const [pregnancyMonths, setPregnancyMonths] = useState('');

  const handleNext = () => {
    navigation.navigate('Bodymeasurements');
  };

  const isGapValid = () => {
    const gap = parseInt(periodGap);
    return gap <= 60 && gap >= 12;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkPink }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: 'black' }}>
            Female Health Details 🩸
          </Text>
          <Text style={{ fontSize: 16, color: 'black' }}>Please provide the following details:</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8, color: 'black' }}>Length of Periods (in days)</Text>
          <TextInput
            placeholder='Enter the length of your periods'
            keyboardType='numeric'
            value={periodLength}
            onChangeText={text => setPeriodLength(text)}
            style={styles.input}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8, color: 'black' }}>Gap Between Periods (in days)</Text>
          <TextInput
            placeholder='Enter the gap between your periods'
            keyboardType='numeric'
            value={periodGap}
            onChangeText={text => setPeriodGap(text)}
            style={[styles.input, !isGapValid() && styles.inputError]}
          />
          {!isGapValid() && (
            <Text style={styles.errorMessage}>Gap should be between 12 and 60 days</Text>
          )}
        </View>

        <View style={{ marginBottom: 12 }}>
          <RadioButton
            label="Irregular Periods?"
            selected={isIrregular}
            onSelect={() => setIsIrregular(!isIrregular)}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <RadioButton
            label="Are you Pregnant?"
            selected={isPregnant}
            onSelect={() => setIsPregnant(!isPregnant)}
          />
        </View>

        {isPregnant && (
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8, color: 'black' }}>Pregnancy Months</Text>
            <TextInput
              placeholder='Enter the number of months'
              keyboardType='numeric'
              value={pregnancyMonths}
              onChangeText={text => setPregnancyMonths(text)}
              style={styles.input}
            />
          </View>
        )}

        <Button
          title="Next 🏂"
          onPress={handleNext}
          style={{ marginTop: 18, marginBottom: 4 }}
        />
      </View>
    </SafeAreaView>
  );
};

const RadioButton = ({ label, selected, onSelect }) => {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={onSelect}>
      <Text style={{ fontSize: 16, color: 'black' }}>{label}</Text>
      <View style={[styles.radioIndicator, { backgroundColor: selected ? COLORS.white : COLORS.darkPink }]}>
        {selected && <View style={styles.radioInnerCircle} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: 'black',
  },
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },
});

export default Female;
