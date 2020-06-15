import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black"
  },
  textStyle: {
    borderWidth: 10,
    borderColor: "red",
    margin: 20
    // marginVertical: 20,
    // marginHorizontal: 20
  }
});

export default BoxScreen;
