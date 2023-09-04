import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Category({ item, activeCategory, setActiveCategory }) {
  return (
    <TouchableOpacity
      className="flex items-center space-y-1  "
      onPress={() => setActiveCategory(item.strCategory)}
    >
      <View
        className={
          activeCategory === item.strCategory
            ? "rounded-full p-[6px] bg-amber-400"
            : "rounded-full p-[6px]"
        }
      >
        <Image
          source={{ uri: item.strCategoryThumb }}
          style={{ width: hp(6), height: hp(6) }}
          className="rounded-full"
        />
      </View>
      <View>
        <Text className="text-neutral-600" style={{ fontSize: hp(1.7) }}>
          {item.strCategory}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
