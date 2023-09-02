import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { categoryData } from "../constants/dummyFoods";

export default function Categories({ activeCategory, setActiveCategory }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((category, i) => (
          <>
            <TouchableOpacity
              key={i}
              className="flex items-center space-y-1"
              onPress={() => setActiveCategory(category.name)}
            >
              <View
                className={
                  activeCategory === category.name
                    ? "rounded-full p-[6px] bg-amber-400"
                    : "rounded-full p-[6px]"
                }
              >
                <Image
                  source={{ uri: category.image }}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                />
              </View>
              <View>
                <Text
                  className="text-neutral-600"
                  style={{ fontSize: hp(1.7) }}
                >
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          </>
        ))}
      </ScrollView>
    </Animated.View>
  );
}
