import { View, Text, Pressable, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { truncateString } from "../helpers/truncateString";

export default function RecipeCard({ item, index }) {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(20)}
    >
      <Pressable
        key={index}
        className="w-full justify-center mb-4 space-y-1 px-1 "
      >
        <View className="w-full  flex justify-center flex-row overflow-hidden">
          <Image
            source={{ uri: item.image }}
            className={`flex-1 h-[250px] rounded-[30px] ${
              index % 2 === 0 ? "" : "mt-4"
            }`}
          />
        </View>
        <Text className="font-semibold ml-2 text-neutral-600">
          {truncateString(item.name, 20)}
        </Text>
      </Pressable>
    </Animated.View>
  );
}
