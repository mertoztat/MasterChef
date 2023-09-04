import { Text, FlatList, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RecipeCard from "./RecipeCard";

export default function Recipes({ recipes }) {
  return (
    <View className="mx-4 space-y-4">
      <Text
        className="font-semibold text-neutral-600"
        style={{ fontSize: hp(2.1) }}
      >
        Recipes
      </Text>
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={recipes.meals}
        renderItem={({ item, index }) => (
          <RecipeCard item={item} index={index} />
        )}
        // keyExtractor={(item) => item.meals.idMeal.toString()}
        numColumns={2}
      />
    </View>
  );
}
