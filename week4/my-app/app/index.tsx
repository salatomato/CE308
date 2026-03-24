import "./global.css";
import { ScrollView } from "react-native";
import { useState } from "react";
import { ProductForm } from "./component/ProductForm";

type Item = {
  id: string;
  ProductName: string;
  price: number;
  pcs: number;
  variant?: "primary" | "secondary" | "danger";
};

export default function Index() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", ProductName: "ชื่อสินค้า:Banana", price: 2000, pcs: 10, variant: "primary" },
    { id: "2", ProductName: "ชื่อสินค้า:Mango", price: 2000, pcs: 10, variant: "secondary" },
    { id: "3", ProductName: "ชื่อสินค้า:Apple", price: 2000, pcs: 10, variant: "danger" },
  ]);

  const handleAddItem = (name: string, price: number, pcs: number) => {
    setItems([
      ...items,
      {
        id: Date.now().toString(),
        ProductName: `ชื่อสินค้า:${name}`,
        price,
        pcs,
        variant: "primary",
      },
    ]);
  };

  return (
    <ScrollView className="flex-1 bg-blue-100 p-4">
      <ProductForm onSubmit={handleAddItem} />
      {/* <ItemList items={items} /> */}
    </ScrollView>
  );
}