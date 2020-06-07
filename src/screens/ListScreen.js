import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {

  const friends = [
    {name: "friend1"},
    {name: "friend2"},
    {name: "friend3"},
    {name: "friend4"},
    {name: "friend5"},
    {name: "friend6"},
    {name: "friend7"},
    {name: "friend8"},
    {name: "friend9"},
  ]

  return (
    <FlatList
      data={friends}
      renderItem={({item, i}) => {
        return <Text key={i}>{item.name}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default ListScreen;
