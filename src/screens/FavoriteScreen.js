import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import BackButton from "../componets/BackButton";
import Favorites from "../componets/Favorites.js";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function FavoriteScreen() {
  const favorites = useSelector((state) => state.favorites.favoriteList);

  return (
    <View
      className={`flex-1 h-40 ${
        favorites.length === 0 ? "bg-violet-400" : "bg-white"
      }`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style="light" />
      <View className=" bg-violet-500 h-48 rounded-b-[50px] pt-20">
        <Text
          className=" text-amber-400 text-center"
          style={{ fontSize: hp(4), fontFamily: "Poppins_600SemiBold" }}
        >
          FAVORITES
        </Text>
      </View>
      {favorites.length === 0 ? (
        <View className="flex-1 items-center mt-40">
          <View className="absolute mt-12">
            <BackButton />
          </View>
          <Text
            className="text-amber-400"
            style={{ fontSize: hp(2.6), fontFamily: "Poppins_600SemiBold" }}
          >
            Favorite Recipes Not Founded
          </Text>
        </View>
      ) : (
        <View className="mt-12 rounded-t-3xl h-full">
          <FlatList
            data={favorites}
            renderItem={({ item, index }) => (
              <Favorites item={item} index={index} />
            )}
          />
        </View>
      )}
    </View>
  );
}
