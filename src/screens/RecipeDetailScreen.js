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
import Loading from "../componets/Loading";
import IngredientHeader from "../componets/IngredientHeader";
import YoutubeVideo from "../componets/YoutubeVideo";

export default function RecipeDetailScreen({ route }) {
  const [recipeDetail, setRecipeDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const recipe = route.params;

  useEffect(() => {
    const recipeDetail = async () => {
      const response = await getRecipesDetail(recipe.idMeal);
      if (!response) {
        setLoading(true);
      } else {
        setRecipeDetail(response?.meals);
        setLoading(false);
      }
    };
    recipeDetail();
  }, [recipe.idMeal]);

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
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
          source={{ uri: recipe.strMealThumb }}
        />
      </View>

      <View className="w-full absolute flex-row justify-between items-center pt-12">
        <BackButton />
        <FavButton recipe={recipe} recipeDetail={recipeDetail} />
      </View>

      {loading ? (
        <Loading size="large" className="mt-16" />
      ) : (
        <View>
          <IngredientHeader recipe={recipe} recipeDetail={recipeDetail} />
          <YoutubeVideo recipeDetail={recipeDetail} />
        </View>
      )}
    </ScrollView>
  );
}
