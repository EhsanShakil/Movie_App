import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/colors";
import { SheetProvider, SheetManager } from "react-native-actions-sheet";
import "../sheets.js";

const Search = ({
  search,
  setSearch,
  onSearch,
  //   year,
  //   setYear,
  onYearSearch,
}) => {
  return (
    <SheetProvider>
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => setSearch(text)}
          placeholder="Search"
          value={search}
          style={styles.input}
        />
        <TouchableOpacity style={styles.margin} onPress={onSearch}>
          <Feather name="search" size={30} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.margin}
          onPress={() =>
            SheetManager.show("search-sheet", {
              payload: {
                onYearSearch: onYearSearch,
              },
            })
          }
        >
          <Ionicons name="shuffle" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>
    </SheetProvider>
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
    borderRadius: 20,
    width: "75%",
    height: 45,
    paddingLeft: 10,
    elevation: 5,
    backgroundColor: colors.white,
  },
  margin: {
    marginLeft: 5,
  },
});
