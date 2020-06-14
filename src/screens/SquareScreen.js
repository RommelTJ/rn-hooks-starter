import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const INITIAL_STATE = { red: 0, green: 0, blue: 0};
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":   return { ...state, red: state.red + action.amount };
    case "green": return { ...state, green: state.green + action.amount };
    case "blue":  return { ...state, blue: state.blue + action.amount };
    default:      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log(state);

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
