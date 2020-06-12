import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = (props) => {
  const [colors, setColors] = useState([]);

  const onAddColor = () => setColors([...colors, randomRGB()]);

  return (
    <View>
      <Button title={"Add a Color"} onPress={onAddColor} />
      {
        colors.map((c, idx) => {
          return <View key={idx} style={{height: 100, width: 100, backgroundColor: c}}/>;
        })
      }
    </View>
  )
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;
