import { TextInput, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function SearchBar({ query, setQuery }) {
  return (
    <View className="mx-4 flex-row bg-black/5 items-center p-[4px] rounded-full ">
      <TextInput
        placeholder="Search any recipe"
        placeholderTextColor={"gray"}
        style={{ fontSize: hp(1.7) }}
        className="flex-1 text-base mb-1 pl-3 tracking-wider"
        onChangeText={(query) => setQuery(query)}
        defaultValue={query}
      />
      <View className="bg-white rounded-full p-3">
        <MagnifyingGlassIcon size={hp(2.5)} color="gray" strokeWidth={3} />
      </View>
    </View>
  );
}
