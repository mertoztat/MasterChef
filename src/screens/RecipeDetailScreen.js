import { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { getRecipesDetail } from "../services/api";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackButton from "../componets/BackButton";
import FavButton from "../componets/FavButton";

export default function RecipeDetailScreen({ route }) {
  let recipe = route.params;

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style="light" />
      <View className="flex-row justify-center">
        <Image
          style={{
            width: wp(100),
            height: hp(50),
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          }}
          source={{ uri: recipe.strMealThumb }}
        />
      </View>

      <View className="w-full absolute flex-row justify-between items-center pt-12">
        <BackButton />
        <FavButton />
      </View>
    </ScrollView>
  );
}
