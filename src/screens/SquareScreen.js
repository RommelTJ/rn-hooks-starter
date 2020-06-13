import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const onIncrease = (color) => {
    if (color === "Red") setRed(red + 1);
    if (color === "Green") setGreen(green + 1);
    if (color === "Blue") setBlue(blue + 1);
  }

  const onDecrease = (color) => {
    if (color === "Red") setRed(red - 1);
    if (color === "Green") setGreen(green - 1);
    if (color === "Blue") setBlue(blue - 1);
  }

  return (
    <View>
      <ColorCounter color={"Red"} onIncrease={() => onIncrease("Red")} onDecrease={() => onDecrease("Red")} />
      <ColorCounter color={"Green"} onIncrease={() => onIncrease("Green")} onDecrease={() => onDecrease("Green")} />
      <ColorCounter color={"Blue"} onIncrease={() => onIncrease("Blue")} onDecrease={() => onDecrease("Blue")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
