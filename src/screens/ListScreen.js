import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {

  const friends = [
    {name: "friend1", age: 20},
    {name: "friend2", age: 21},
    {name: "friend3", age: 22},
    {name: "friend4", age: 23},
    {name: "friend5", age: 24},
    {name: "friend6", age: 25},
    {name: "friend7", age: 26},
    {name: "friend8", age: 27},
    {name: "friend9", age: 29},
  ]

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
