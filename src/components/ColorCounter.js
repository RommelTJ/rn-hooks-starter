import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = (props) => {
  const onIncrease = () => {};
  const onDecrease = () => {};

  return (
    <View>
      <Text>{props.color}</Text>
      <Button title={`Increase ${props.color}`} onPress={onIncrease} />
      <Button title={`Decrease ${props.color}`} onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
