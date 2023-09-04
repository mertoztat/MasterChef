import { View, Text, ActivityIndicator } from "react-native";

export default function Loading(props) {
  return (
    <View className="flex-1 flex justify-center items-center">
      <ActivityIndicator {...props} />
    </View>
  );
}
