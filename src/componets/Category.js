import { Poppins_500Medium } from "@expo-google-fonts/poppins";
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
            ? "rounded-full p-[6px] bg-violet-500"
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
        <Text
          className="text-violet-500 tracking-tight"
          style={{ fontSize: hp(1.7), fontFamily: "Poppins_500Medium" }}
        >
          {item.strCategory}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
