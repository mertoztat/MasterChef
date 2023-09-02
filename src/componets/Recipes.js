import { View, Text, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import RecipeCard from "./RecipeCard";

export default function Recipes({ categories }) {
  const mealData = [
    {
      name: "Shakshuka",
      image:
        "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
    },
    {
      name: "Beef Banh Mi Bowls with Sriracha Mayo",
      image:
        "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    },
    {
      name: "Chickpea Fajitas",
      image:
        "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
    },
    {
      name: "Smoky Lentil Chili with Squash",
      image:
        "https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg",
    },
    {
      name: "Braised Beef Chilli",
      image:
        "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
    },
  ];

  return (
    <View className="mx-4 space-y-4">
      <Text
        className="font-semibold text-neutral-600"
        style={{ fontSize: hp(2.1) }}
      >
        Recipes
      </Text>
      <View>
        <FlatList
          data={mealData}
          renderItem={({ item, index }) => (
            <RecipeCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
}
