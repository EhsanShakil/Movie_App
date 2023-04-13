import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../utils/colors";

const Search = ({ search, setSearch, onSearch }) => {
  console.log("search", search);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setSearch(text)}
        placeholder="Search"
        value={search}
        style={styles.input}
      />
      <TouchableOpacity style={styles.marginLeft} onPress={onSearch}>
        <Feather name="search" size={30} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    width: "75%",
    height: 45,
    paddingLeft: 10,
  },
  marginLeft: {
    marginLeft: 10,
  },
});
