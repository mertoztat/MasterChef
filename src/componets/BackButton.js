import { View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

export default function BackButton() {
  return (
    <View>
      <TouchableOpacity className="p-2 rounded-full ml-2 bg-white">
        <ChevronLeftIcon size={hp(3.5)} strokeWidth={4} color="#fbbf24" />
      </TouchableOpacity>
    </View>
  );
}
