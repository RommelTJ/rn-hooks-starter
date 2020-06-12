import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = (props) => {
  const onIncrease = () => {};
  const onDecrease = () => {};

  return (
    <View>
      <Text>{props.title}</Text>
      <Button title={`Increase ${props.title}`} onPress={onIncrease} />
      <Button title={`Decrease ${props.title}`} onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
