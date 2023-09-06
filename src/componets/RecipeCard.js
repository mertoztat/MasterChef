import { View, Text, Pressable, Image } from "react-native";
import { truncateString } from "../helpers/truncateString";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import {
  Poppins_300Light_Italic,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

export default function RecipeCard({ item, index }) {
  const navigation = useNavigation();

  const selectMealHandler = () => {
    navigation.navigate("RecipeDetail", { ...item });
  };

  return (
    <View>
      <Pressable
        key={index}
        className="w-full justify-center mb-4 space-y-1 px-1 "
        onPress={selectMealHandler}
      >
        <View className="w-full  flex justify-center flex-row overflow-hidden">
          <Image
            style={{ height: hp(20) }}
            source={{ uri: item?.strMealThumb }}
            className={`flex-1 rounded-2xl ${index % 2 === 0 ? "" : "mt-4"}`}
          />
        </View>
        <Text
          style={{ fontFamily: "Poppins_500Medium" }}
          className="ml-2 text-violet-500"
        >
          {truncateString(item?.strMeal, 20)}
        </Text>
      </Pressable>
    </View>
  );
}
