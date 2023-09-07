import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import BackButton from "../componets/BackButton";
import Favorites from "../componets/Favorites";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function FavoriteScreen() {
  const favorites = useSelector((state) => state.favorites.favoriteList);
  console.log("favorites", favorites);

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style="light" />
      <View className="mx-4 space-y-4">
        <Text
          className=" text-violet-500"
          style={{ fontSize: hp(2.1), fontFamily: "Poppins_600SemiBold" }}
        >
          Recipes
        </Text>
        <BackButton />

        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          data={favorites}
          renderItem={({ item, index }) => (
            <Favorites item={item} index={index} />
          )}
          keyExtractor={(item) => item.idMeal.toString()}
          numColumns={2}
        />
      </View>
    </ScrollView>
  );
}
