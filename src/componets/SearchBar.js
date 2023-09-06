import { TextInput, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function SearchBar({ query, setQuery }) {
  return (
    <View className="mx-4 flex-row bg-amber-400/80 items-center  rounded-full ">
      <TextInput
        placeholder="Search any recipe"
        placeholderTextColor={"#7c65c2"}
        style={{ fontSize: hp(1.7), fontFamily: "Poppins_600SemiBold" }}
        className="flex-1 text-base pl-3 text-[#7c65c2]"
        onChangeText={(query) => setQuery(query)}
        defaultValue={query}
      />
      <View className="bg-violet-500 rounded-full p-3.5">
        <MagnifyingGlassIcon size={hp(2.5)} color="white" strokeWidth={3} />
      </View>
    </View>
  );
}
