import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../utils/colors";

const Card = ({ url, title, year, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Description", {
            url,
            url,
            title: title,
            year: year,
          })
        }
      >
        <Image source={{ uri: url }} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <Text style={styles.title}>
        {title.length <= 13 ? title : `${title.slice(0, 14)}...`}
      </Text>

      <Text style={styles.year}>{year}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  year: {
    fontSize: 14,
    color: colors.black,
  },
  title: {
    fontSize: 18,
  },
  image: {
    width: 150,
    height: 250,
  },
});
