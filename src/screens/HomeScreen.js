import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BookmarkIcon } from "react-native-heroicons/solid";
import { getAllCategories, getRecipes } from "../services/api";
import Categories from "../componets/Categories";
import Recipes from "../componets/Recipes";
import SearchBar from "../componets/SearchBar";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCategories();
        setCategories(result.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const result = await getRecipes(activeCategory);
        setRecipes(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, [activeCategory]);

  const filteredRecipes = recipes?.meals?.filter((recipe) =>
    recipe.strMeal.toLowerCase().includes(query)
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="space-y-6 pt-14">
        <View className="mx-4 flex-row-reverse justify-between items-center mb-2">
          <View className="bg-violet-500 p-2 rounded-full ">
            <Image
              style={{ height: hp(7.5), width: hp(7.5) }}
              source={require("../../assets/images/chef.png")}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
            <BookmarkIcon size={hp(3)} color="#a78bfa" />
          </TouchableOpacity>
        </View>

        <View className="mx-4  mb-3">
          <View>
            <Text
              style={{ fontSize: hp(3.4), fontFamily: "Poppins_500Medium" }}
              className="text-neutral-600"
            >
              Become the{" "}
              <Text
                style={{ fontSize: hp(3.6), fontFamily: "Poppins_600SemiBold" }}
                className="text-violet-500"
              >
                masterchef
              </Text>{" "}
              in
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.4), fontFamily: "Poppins_500Medium" }}
            className="text-neutral-600"
          >
            your own{" "}
            <Text
              style={{ fontSize: hp(3.6), fontFamily: "Poppins_600SemiBold" }}
              className="text-amber-400"
            >
              kitchen
            </Text>
          </Text>
        </View>

        <SearchBar setQuery={setQuery} query={query} />

        <View>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </View>

        <View>
          <Recipes filteredRecipes={filteredRecipes} categories={categories} />
        </View>
      </View>
    </ScrollView>
  );
}
