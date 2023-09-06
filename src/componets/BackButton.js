import { View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-2 rounded-full ml-2 bg-white"
      >
        <ChevronLeftIcon size={hp(3.5)} strokeWidth={4} color="#a78bfa" />
      </TouchableOpacity>
    </View>
  );
}
