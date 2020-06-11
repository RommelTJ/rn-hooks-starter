import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => setCounter(counter+1);
  const onDecrease = () => setCounter(counter-1);

  return (
    <View>
      <Button title={"Increase"} onPress={onIncrease} />
      <Button title={"Decrease"} onPress={onDecrease} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
