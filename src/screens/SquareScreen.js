import React from "react";
import { View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color={"Red"} onIncrease={() => {}} onDecrease={() => {}} />
      <ColorCounter color={"Green"} onIncrease={() => {}} onDecrease={() => {}} />
      <ColorCounter color={"Blue"} onIncrease={() => {}} onDecrease={() => {}} />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${"red"}, ${"green"}, ${"blue"})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
