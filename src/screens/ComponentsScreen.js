import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Rommel";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subtitleStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subtitleStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
