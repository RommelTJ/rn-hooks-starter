import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // change === +15, -15
    if (color === "Red") {
      if (red + change > 255 || red + change < 0) return;
      setRed(red + change);
    }
    if (color === "Green") {
      if (green + change > 255 || green + change < 0) return;
      setGreen(green + change);
    }
    if (color === "Blue") {
      if (blue + change > 255 || blue + change < 0) return;
      setBlue(blue + change);
    }
  }

  return (
    <View>
      <ColorCounter
        color={"Red"}
        onIncrease={() => setColor("Red", COLOR_INCREMENT)}
        onDecrease={() => setColor("Red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color={"Green"}
        onIncrease={() => setColor("Green", COLOR_INCREMENT)}
        onDecrease={() => setColor("Green", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color={"Blue"}
        onIncrease={() => setColor("Blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("Blue", -1 * COLOR_INCREMENT)}
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
