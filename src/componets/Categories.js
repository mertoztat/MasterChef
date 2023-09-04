import { FlatList, ScrollView } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import Category from "./Category";

export default function Categories({
  activeCategory,
  setActiveCategory,
  categories,
}) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <FlatList
          horizontal={true}
          data={categories}
          keyExtractor={(item) => item.idCategory.toString()}
          renderItem={({ item }) => (
            <Category
              item={item}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              snapToAlignment="start"
              snapToInterval={350}
            />
          )}
        />
      </ScrollView>
    </Animated.View>
  );
}
