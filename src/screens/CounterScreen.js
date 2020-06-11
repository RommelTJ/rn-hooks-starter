import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CounterScreen = () => {
  // TODO: Fix this
  let counter = 0;

  return (
    <View>
      <Button title={"Increase"} onPress={() => { counter++; }} />
      <Button title={"Decrease"} onPress={() => { counter--; }} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
