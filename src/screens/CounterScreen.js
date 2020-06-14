import React, { useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const INITIAL_STATE = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "change_count": return { ...state, count: action.payload };
    default: return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { count } = state;

  const onIncrease = () => dispatch({ type: "change_count", payload: count + 1});
  const onDecrease = () => dispatch({ type: "change_count", payload: count - 1});

  return (
    <View>
      <Button title={"Increase"} onPress={onIncrease} />
      <Button title={"Decrease"} onPress={onDecrease} />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
