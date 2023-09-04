import { View, Text, Pressable, Image } from "react-native";
import { truncateString } from "../helpers/truncateString";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function RecipeCard({ item, index }) {
  return (
    <View>
      <Pressable
        key={index}
        className="w-full justify-center mb-4 space-y-1 px-1 "
      >
        <View className="w-full  flex justify-center flex-row overflow-hidden">
          <Image
            style={{ height: hp(20) }}
            source={{ uri: item?.strMealThumb }}
            className={`flex-1 rounded-2xl ${index % 2 === 0 ? "" : "mt-4"}`}
          />
        </View>
        <Text className="font-semibold ml-2 text-neutral-600">
          {truncateString(item?.strMeal, 20)}
        </Text>
      </Pressable>
    </View>
  );
}
