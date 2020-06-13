import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const onIncrease = (color) => {
    if (color === "Red") setRed(red + COLOR_INCREMENT);
    if (color === "Green") setGreen(green + COLOR_INCREMENT);
    if (color === "Blue") setBlue(blue + COLOR_INCREMENT);
  }

  const onDecrease = (color) => {
    if (color === "Red") setRed(red - COLOR_INCREMENT);
    if (color === "Green") setGreen(green - COLOR_INCREMENT);
    if (color === "Blue") setBlue(blue - COLOR_INCREMENT);
  }

  return (
    <View>
      <ColorCounter color={"Red"} onIncrease={() => onIncrease("Red")} onDecrease={() => onDecrease("Red")} />
      <ColorCounter color={"Green"} onIncrease={() => onIncrease("Green")} onDecrease={() => onDecrease("Green")} />
      <ColorCounter color={"Blue"} onIncrease={() => onIncrease("Blue")} onDecrease={() => onDecrease("Blue")} />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
