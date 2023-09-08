import { View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HeartIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../store/favorites";

export default function RemoveFav({ item }) {
  const dispatch = useDispatch();

  const removeFavoriteClicked = (item) => {
    dispatch(removeFavorite(item.idMeal));
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => removeFavoriteClicked(item)}
        className="p-2 rounded-full mr-2 bg-white"
      >
        <HeartIcon size={hp(3.5)} strokeWidth={2} color="#a78bfa" />
      </TouchableOpacity>
    </View>
  );
}
