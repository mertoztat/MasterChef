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
  const centerCircle = useSharedValue(0);
  const outerCircle = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    innerCircle.value = 0;
    centerCircle.value = 0;
    outerCircle.value = 0;
    // inner circle animation
    setTimeout(
      () => (innerCircle.value = withSpring(innerCircle.value + hp(5))),
      100
    );

    // center circle animation
    setTimeout(
      () => (centerCircle.value = withSpring(centerCircle.value + hp(5))),
      300
    );

    // outer circle animation
    setTimeout(
      () => (outerCircle.value = withSpring(outerCircle.value + hp(6))),
      500
    );

    // navigate to home screen
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-violet-900">
      <StatusBar style="light" />
      <Animated.View
        className="bg-violet-600 rounded-full"
        style={{ padding: outerCircle }}
      >
        <Animated.View
          className="bg-violet-500 rounded-full"
          style={{ padding: centerCircle }}
        >
          <Animated.View
            className="bg-amber-400/90 rounded-full"
            style={{ padding: innerCircle }}
          >
            <Image
              style={{ width: hp(20), height: hp(20) }}
              source={require("../../assets/images/chef.png")}
            />
          </Animated.View>
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2">
        <Text
          style={{
            fontSize: hp(6),
            fontFamily: "Poppins_700Bold",
          }}
          className="text-white text-6xl  "
        >
          Master<Text className="text-amber-400">Chef</Text>
        </Text>
        <Text
          style={{ fontSize: hp(2), fontFamily: "Poppins_500Medium" }}
          className="text-amber-400 tracking-widest text-xl"
        >
          I hope you enjoy the recipe!
        </Text>
      </View>
    </View>
  );
}
