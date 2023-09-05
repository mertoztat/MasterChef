import { View, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function MealHeader({ recipe, recipeDetail }) {
  return (
    <View className="mx-4 pt-5">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-bold flex-1 text-neutral-700"
      >
        {recipe?.strMeal}
      </Text>

      {recipeDetail.map((item, i) => (
        <Text
          key={i}
          style={{ fontSize: hp(1.9) }}
          className="font-bold flex-1 text-neutral-500 mt-3"
        >
          {item?.strInstructions}
        </Text>
      ))}
    </View>
  );
}
