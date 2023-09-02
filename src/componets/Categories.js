import { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { getAllCategories } from "../services/api";

export default function Categories({ activeCategory, setActiveCategory }) {
  const [categories, setCategories] = useState([]);

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

  console.log("CATEGOREISSSS : ", categories);

  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, i) => (
          <>
            <TouchableOpacity
              key={i}
              className="flex items-center space-y-1"
              onPress={() => setActiveCategory(category.strCategory)}
            >
              <View
                className={
                  activeCategory === category.strCategory
                    ? "rounded-full p-[6px] bg-amber-400"
                    : "rounded-full p-[6px]"
                }
              >
                <Image
                  source={{ uri: category.strCategoryThumb }}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                />
              </View>
              <View>
                <Text
                  className="text-neutral-600"
                  style={{ fontSize: hp(1.7) }}
                >
                  {category.strCategory}
                </Text>
              </View>
            </TouchableOpacity>
          </>
        ))}
      </ScrollView>
    </Animated.View>
  );
}
