import React from "react";
import { View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter title={"Red"} />
      <ColorCounter title={"Green"} />
      <ColorCounter title={"Blue"} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
