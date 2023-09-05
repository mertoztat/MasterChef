import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StarIcon } from "react-native-heroicons/outline";

export default function FavButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsFavorite(!isFavorite)}
        className="p-2 rounded-full mr-2 bg-white"
      >
        <StarIcon
          size={hp(3.5)}
          strokeWidth={2}
          color="#fbbf24"
          fill={isFavorite ? "#fbbf24" : "#ffffff"}
        />
      </TouchableOpacity>
    </View>
  );
}
