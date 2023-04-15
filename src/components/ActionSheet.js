import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { colors } from "../utils/colors";

const ActionSheetComponent = (props) => {
  return (
    <ActionSheet id={props.sheetId}>
      <View style={styles.container}>
        <TextInput
          value={props.payload.year}
          onChangeText={(text) => props.payload.setYear(text)}
          placeholder="Enter year"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.advanceSearch}
          onPress={() => {
            props.payload.onYearSearch(), SheetManager.hide("example-sheet");
          }}
        >
          <Text
            style={{ fontSize: 16, alignSelf: "center", color: colors.white }}
          >
            Advance Search
          </Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default ActionSheetComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 160,
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    borderRadius: 20,
    width: "85%",
    height: 45,
    paddingLeft: 10,
    elevation: 5,
    backgroundColor: colors.white,
  },
  advanceSearch: {
    marginVertical: 15,
    padding: 15,
    width: "75%",
    borderRadius: 20,
    backgroundColor: colors.black,
  },
});
