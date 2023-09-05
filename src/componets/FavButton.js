import { View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StarIcon } from "react-native-heroicons/solid";

export default function FavButton() {
  return (
    <View>
      <TouchableOpacity className="p-2 rounded-full mr-2 bg-white">
        <StarIcon size={hp(3.5)} strokeWidth={2} color="#fbbf24" />
      </TouchableOpacity>
    </View>
  );
}
