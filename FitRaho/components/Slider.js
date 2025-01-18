import { View, Text, FlatList, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');

const dhanur_pic = require('../assets/dhanuraasana.jpg'); 
const pawan_pic = require('../assets/pawanmukta-benefits.jpg');
const shirsha_pic = require('../assets/shirshaasana.jpg');
const sarvang_pic = require('../assets/sarvangasana.jpg');
const matsya_pic = require('../assets/matsyasana.jpg');

export default function Slider() {
  const navigation = useNavigation(); // Corrected function call

  const [data, setData] = useState([
    { id: 1, source: dhanur_pic, page: 'Dhanur' }, // Corrected navigation path
    { id: 2, source: pawan_pic, page: 'Pawan' }, // Corrected navigation path
    { id: 3, source: shirsha_pic, page: 'Shirsha' }, // Corrected navigation path
    { id: 4, source: sarvang_pic, page: 'Sarvang' }, // Corrected navigation path
    { id: 5, source: matsya_pic, page: 'matsya' }, // Corrected navigation path
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = (page) => {
    navigation.navigate(page);
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          height: height / 4 + 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  paddingHorizontal: '1%',
                  width: width - 10,
                  height: height / 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableWithoutFeedback
                  onPress={() => handlePress(item.page)}>
                  <Image
                    source={item.source}
                    style={{ width: '100%', height: '100%', borderRadius: 10 }}
                  />
                </TouchableWithoutFeedback>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => {
          return 
        })}
      </View>
    </View>
  );
}