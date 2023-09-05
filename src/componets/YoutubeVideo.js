import { View, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import YouTubeIframe from "react-native-youtube-iframe";

export default function YoutubeVideo({ recipeDetail }) {
  const link = recipeDetail?.map((item) => item.strYoutube);

  const youtubeID = link?.join("").split(`https://www.youtube.com/watch?v=`)[1];
  return (
    <View>
      {link?.length > 0 && (
        <View>
          <Text
            style={{ fontSize: hp(2.5) }}
            className="m-4 font-bold flex-1 text-neutral-700"
          >
            Recipe Video
          </Text>
          <View>
            <YouTubeIframe videoId={youtubeID} height={hp(30)} />
          </View>
        </View>
      )}
    </View>
  );
}
