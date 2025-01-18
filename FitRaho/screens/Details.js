import { StatusBar } from "expo-status-bar";
import AppIntroSlider from "react-native-app-intro-slider";
import { View, Text, Image, StyleSheet, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { Dropdown } from 'react-native-element-dropdown';


const data1 = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
  { label: 'Other', value: 'Other' },
];

const data2 = [
  { label: 'Jain', value: 'Jain' },
  { label: 'Vegetarian', value: 'Vegetarian' },
  { label: 'Other', value: 'Other' },
];


const Details = ({ navigation }) => {
  const [age, setAge] = React.useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [value1, setValue1] = useState('Female');
  const [isFocus1, setIsFocus1] = useState(false);
  const [value2, setValue2] = useState('Jain');
  const [isFocus2, setIsFocus2] = useState(false);
  console.log(navigator.navigate);
  const handleNext = () => {
    if (value1 === 'Female') {
        navigation.navigate("Female");
    } else {
        navigation.navigate("Bodymeasurements");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.black
          }}>
            Your basic details 🪪
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>This will only take few minutes! ⏳</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Name</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='What do we call you?'
              placeholderTextColor={COLORS.black}
              keyboardType='default'
              style={{
                width: "100%"
              }}
              value={age}
              onChangeText={text => setAge(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Age 👶🏻👩🏻👵🏻
          </Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='How old are you?'
              placeholderTextColor={COLORS.black}
              keyboardType='numeric'
              style={{
                width: "100%"
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Your Gender ⚧
          </Text>

          <View style={drop.container}>
            <Dropdown
              style={[drop.dropdown, isFocus1 && { borderColor: 'blue' }]}
              placeholderStyle={drop.placeholderStyle}
              selectedTextStyle={drop.selectedTextStyle}
              inputSearchStyle={drop.inputSearchStyle}
              iconStyle={drop.iconStyle}
              data={data1}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus1 ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value1}
              onFocus={() => setIsFocus1(true)}
              onBlur={() => setIsFocus1(false)}
              onChange={item => {
                setValue1(item.value);
                setIsFocus1(false);
              }}
            />

          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Food Preferences 🥭
          </Text>

          <View style={drop.container}>
            <Dropdown
              style={[drop.dropdown, isFocus2 && { borderColor: 'blue' }]}
              placeholderStyle={drop.placeholderStyle}
              selectedTextStyle={drop.selectedTextStyle}
              inputSearchStyle={drop.inputSearchStyle}
              iconStyle={drop.iconStyle}
              data={data2}
              search
              maxHeight={250}
              labelField="label"
              valueField="value"
              placeholder={!isFocus2 ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value2}
              onFocus={() => setIsFocus2(true)}
              onBlur={() => setIsFocus2(false)}
              onChange={item => {
                setValue2(item.value);
                setIsFocus2(false);
              }}
            />

          </View>
        </View>
        <Button
          title="Next 🏂"
          onPress={handleNext}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />

      </View>
    </SafeAreaView>
  );
}

const drop = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center',

  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Details;


