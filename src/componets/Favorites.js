import { View, Text, Pressable, Image } from "react-native";
import RemoveFav from "./RemoveFav";

export default function Favorites({ item, index }) {
  return (
    <View>
      <Pressable key={index} className="w-full mb-8 X  ">
        <View className="w-full  flex justify-center flex-row">
          <Image
            style={{
              height: 300,
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
            }}
            source={{ uri: item?.strMealThumb }}
            className="flex-1  bg-white"
          />
        </View>
        <View className="absolute right-2 top-3 flex-row">
          <RemoveFav item={item} />
        </View>
        <View className="bg-violet-500">
          <Text
            style={{ fontFamily: "Poppins_500Medium" }}
            className=" text-white text-center my-2 text-lg"
          >
            {item?.strMeal}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
