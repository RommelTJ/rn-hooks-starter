import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOne} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwo} />
      </View>
      <View style={styles.viewThree} />
    </View>
  );
}

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOne: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  viewTwoParent: {
    height: 100,
    justifyContent: "flex-end"
  },
  viewTwo: {
    height: 50,
    width: 50,
    backgroundColor: "green"
  },
  viewThree: {
    height: 50,
    width: 50,
    backgroundColor: "purple"
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: "red"
  },
  textStyle2: {
    borderWidth: 3,
    borderColor: "red",
    ...StyleSheet.absoluteFillObject
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: "red"
  }
});

export default BoxScreen;
