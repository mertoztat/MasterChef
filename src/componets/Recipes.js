import { Text, FlatList, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";

export default function Recipes({ categories, filteredRecipes }) {
  return (
    <View className="mx-4 space-y-4">
      <Text
        className=" text-violet-500"
        style={{ fontSize: hp(2.1), fontFamily: "Poppins_600SemiBold" }}
      >
        Recipes
      </Text>
      {filteredRecipes?.length === 0 || categories?.length === 0 ? (
        <Loading size="large" className="mt-20" />
      ) : (
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          data={filteredRecipes}
          renderItem={({ item, index }) => (
            <RecipeCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.idMeal.toString()}
          numColumns={2}
        />
      )}
    </View>
  );
}
