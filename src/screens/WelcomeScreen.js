import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/core";

export default function WelcomeScreen() {
  const innerCircle = useSharedValue(0);
  const outerCircle = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    innerCircle.value = 0;
    outerCircle.value = 0;
    // inner circle animation
    setTimeout(
      () => (innerCircle.value = withSpring(innerCircle.value + hp(5))),
      100
    );

    // outer circle animation
    setTimeout(
      () => (outerCircle.value = withSpring(outerCircle.value + hp(5.5))),
      300
    );

    // navigate to home screen
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: outerCircle }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: innerCircle }}
        >
          <Image
            style={{ width: hp(20), height: hp(20) }}
            source={require("../../assets/images/welcome.png")}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2">
        <Text
          style={{ fontSize: hp(7) }}
          className="font-bold text-white tracking-widest text-6xl"
        >
          Cook Book
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="font-medium text-white tracking-widest text-lg"
        >
          Enjoy your recipes
        </Text>
      </View>
    </View>
  );
}
