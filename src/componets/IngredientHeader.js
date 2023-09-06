import { View, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function IngredientHeader({ recipe, recipeDetail }) {
  return (
    <View className="mx-4 pt-5">
      <Text
        style={{ fontSize: hp(3), fontFamily: "Poppins_600SemiBold" }}
        className="flex-1 text-amber-400"
      >
        {recipe?.strMeal}
      </Text>

      {recipeDetail.map((item, i) => (
        <Text
          key={i}
          style={{ fontSize: hp(1.9), fontFamily: "Poppins_400Regular" }}
          className="flex-1 text-neutral-600/60 mt-3"
        >
          {item?.strInstructions}
        </Text>
      ))}
    </View>
  );
}
