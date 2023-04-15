import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { Rating, AirbnbRating } from "react-native-ratings";

const Description = ({ route }) => {
  const { url, title, year } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.contentWidth}>
        <Image source={{ uri: url }} style={styles.image} />
        <View style={styles.contentAlignment}>
          <Text style={styles.yearText}>Year: {year}</Text>
          <Text style={styles.yearText}>
            Director: {`${title.slice(0, 25)}...`}
          </Text>
        </View>
        <View>
          <Text style={styles.plot}>Plot</Text>
        </View>
      </View>
      <AirbnbRating
        count={5}
        reviews={["Terrible", "Bad", "Good", "Amazing", "Unbelievable"]}
        defaultRating={2}
        size={20}
        reviewColor="black"
      />
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: colors.white },
  contentWidth: {
    marginVertical: 10,
    width: "95%",
  },
  image: { height: 550, resizeMode: "cover" },
  contentAlignment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yearText: {
    fontSize: 14,
    color: colors.gray,
  },
  plot: {
    fontSize: 18,
  },
});
