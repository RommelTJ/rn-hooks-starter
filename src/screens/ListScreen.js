import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {

  const friends = [
    {name: "friend1", key: "1"},
    {name: "friend2", key: "2"},
    {name: "friend3", key: "3"},
    {name: "friend4", key: "4"},
    {name: "friend5", key: "5"},
    {name: "friend6", key: "6"},
    {name: "friend7", key: "7"},
    {name: "friend8", key: "8"},
    {name: "friend9", key: "9"},
  ]

  return (
    <FlatList
      data={friends}
      renderItem={({item}) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default ListScreen;
