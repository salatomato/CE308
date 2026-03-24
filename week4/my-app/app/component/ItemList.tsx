import { View, Text, FlatList } from "react-native";
import { CustomButton } from "./CustomButton";

type Item = {
  id: string;
  ProductName: string;
  price: number;
  pcs: number;
  variant?: "primary" | "secondary" | "danger";
};

type ItemListProps = {
  items: Item[];
};

export const ItemList = ({ items }: ItemListProps) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 12 }}
      renderItem={({ item }) => (
        <View className="bg-white p-4 rounded-xl mb-3 shadow">
          <Text className="text-2xl font-bold">{item.ProductName}</Text>
          <Text className="text-gray-600">ราคา: {item.price}</Text>
          <Text className="text-gray-600">จำนวน: {item.pcs}</Text>

          <View className="mt-3">
            <CustomButton
              title="สั่งซื้อ"
              variant={item.variant ?? "primary"}
              size="small"
              onPress={() => alert(item.ProductName)}
            />
          </View>
        </View>
      )}
    />
  );
};