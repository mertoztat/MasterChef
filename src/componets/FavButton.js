import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StarIcon } from "react-native-heroicons/outline";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favorites";

export default function FavButton({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const addToFav = (recipe) => {
    dispatch(addFavorite(recipe));
  };

  const removeFavoriteClicked = (recipe) => {
    dispatch(removeFavorite(recipe.idMeal));
  };

  const handleFavorite = (recipe) => {
    if (isFavorite) {
      setIsFavorite(false);
      removeFavoriteClicked(recipe);
    } else {
      setIsFavorite(true);
      addToFav(recipe);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => handleFavorite(recipe)}
        className="p-2 rounded-full mr-2 bg-white"
      >
        <StarIcon
          size={hp(3.5)}
          strokeWidth={2}
          color="#a78bfa"
          fill={isFavorite ? "#a78bfa" : "#ffffff"}
        />
      </TouchableOpacity>
    </View>
  );
}
