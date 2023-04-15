import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { moviesAPI } from "../api/api";
import Card from "../components/Card";
import Search from "../components/Search";
import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";

const Home = ({ navigation }) => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [year, setYear] = useState();
  let [page, setPage] = useState(1);

  useMemo(() => {
    moviesAPI(setData, setTotalCount, search, page, data, year);
  }, [page]);

  const onSearch = () => {
    moviesAPI(setData, setTotalCount, search, page, data, year);
    setPage(1);
  };

  const onYearSearch = (year) => {
    setYear(year);
    moviesAPI(setData, setTotalCount, search, page, data, year);
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <Search
        search={search}
        setSearch={setSearch}
        onSearch={onSearch}
        onYearSearch={onYearSearch}
      />
      <FlatList
        contentContainerStyle={styles.flatListContentCenter}
        scrollEnabled={true}
        data={data}
        keyExtractor={(index, item) => item.toString()}
        ListFooterComponent={() => {
          return (
            totalCount > 10 &&
            totalCount != data?.length && (
              <TouchableOpacity
                onPress={() => {
                  let nextCount = page + 1;
                  setPage(nextCount);
                  moviesAPI(setData, setTotalCount, search, page, data, year);
                }}
                style={styles.flatlistFooterButton}
              >
                <Text style={styles.flatlistFooterButtonText}>Load More</Text>
              </TouchableOpacity>
            )
          );
        }}
        renderItem={(item) => {
          return (
            <View style={styles.flatlistContent}>
              <Card
                url={item.item.Poster}
                title={item.item.Title}
                year={item.item.Year}
                navigation={navigation}
              />
            </View>
          );
        }}
        numColumns={2}
        ListEmptyComponent={() => (
          <View>
            <Text>{data?.Error}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatListContentCenter: {
    alignItems: "center",
  },
  flatlistFooterButton: {
    backgroundColor: colors.black,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  flatlistFooterButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  flatlistContent: {
    marginHorizontal: 10,
    marginBottom: 10,
  },

  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  padded: {
    padding: 16,
  },
});
