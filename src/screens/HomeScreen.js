import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { getAllCategories, getRecipes } from "../services/api";
import Categories from "../componets/Categories";
import Recipes from "../componets/Recipes";
import SearchBar from "../componets/SearchBar";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

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
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            style={{ height: hp(5), width: hp(5) }}
            source={require("../../assets/images/avatar.png")}
          />
          <BellIcon size={hp(3)} color="gray" />
        </View>

        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            Hello!
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="text-neutral-600 font-semibold"
            >
              Make your own food,
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.8) }}
            className="text-neutral-600 font-semibold"
          >
            stay at <Text className="text-amber-400">home</Text>
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
