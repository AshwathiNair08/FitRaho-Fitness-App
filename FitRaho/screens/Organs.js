import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Button from '../components/Button';

const organsList = [
  'Brain',
  'Heart',
  'Lungs',
  'Liver',
  'Kidneys',
  'Stomach',
  'Intestines',
  'Pancreas',
  'Spleen',
  'Gallbladder',
  'Bladder',
  'Skin',
  'Muscles',
  'Bones',
  'Eyes',
  'Ears',
  'Nose',
  'Mouth',
  'Throat',
  'Teeth',
];

const Organs = ( { navigation } ) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrgans, setSelectedOrgans] = useState([]);
  const toggleOrganSelection = (organ) => {
    if (selectedOrgans.includes(organ)) {
      setSelectedOrgans(selectedOrgans.filter((item) => item !== organ));
    } else {
      setSelectedOrgans([...selectedOrgans, organ]);
    }
  };
  const handleNext = () => {
    // Handle submission logic here
    navigation.navigate("Dosha"); // Replace "NextScreen" with your actual screen name
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grey }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: COLORS.black }}>
            Select organs with problems 🩺
          </Text>
          <TextInput
            style={{
              backgroundColor: COLORS.white,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8,
              marginBottom: 12,
            }}
            placeholder="Search organs..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        <ScrollView>
          {organsList
            .filter((organ) => organ.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((organ, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
                onPress={() => toggleOrganSelection(organ)}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 1,
                    marginRight: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: selectedOrgans.includes(organ) ? COLORS.primary : COLORS.white,
                    borderColor: COLORS.primary,
                  }}
                >
                  {selectedOrgans.includes(organ) && (
                    <Text style={{ color: COLORS.secondary }}>✓</Text>
                  )}
                </View>
                <Text style={{ fontSize: 16, color: COLORS.black }}>{organ}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
        <Button
          title="Just one step to go!"
          onPress={handleNext}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />
        

      </View>
    </SafeAreaView>
  );
};

export default Organs;