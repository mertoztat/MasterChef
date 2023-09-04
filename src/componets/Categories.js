import { ScrollView } from "react-native";
import Category from "./Category";

export default function Categories({
  activeCategory,
  setActiveCategory,
  categories,
}) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{ paddingHorizontal: 15 }}
      horizontal={true}
    >
      {categories.map((item) => (
        <Category
          key={item.idCategory}
          item={item}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          snapToAlignment="start"
          snapToInterval={350}
        />
      ))}
    </ScrollView>
  );
}
