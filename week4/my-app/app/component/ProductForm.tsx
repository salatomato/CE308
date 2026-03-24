import { View, Alert, Text } from "react-native";
import { useState } from "react";
import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";

export const ProductForm = ({
  onSubmit,
}: {
  onSubmit: (name: string, price: number, pcs: number) => void;
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pcs, setPcs] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !price.trim() || !pcs.trim()) {
      Alert.alert("กรุณากรอกให้ครบ");
      return;
    }
    const p = Number(price);
    const q = Number(pcs);
    if (Number.isNaN(p) || Number.isNaN(q)) {
      Alert.alert("ราคา/จำนวนต้องเป็นตัวเลข");
      return;
    }
    onSubmit(name.trim(), p, q);
    setName("");
    setPrice("");
    setPcs("");
  };

  return (
    <View className="p-4 bg-white rounded-xl mb-4 shadow">
      <Text className="text-xl font-semibold mb-3 text-gray-800">
        กรอกข้อมูลสินค้า
      </Text>
      <CustomInput
        label="ชื่อสินค้า"
        value={name}
        onChangeText={setName}
        placeholder="กรุณากรอกชื่อสินค้า"
        autoCapitalize="words"
      />
      <CustomInput
        label="ราคา"
        value={price}
        onChangeText={setPrice}
        placeholder="กรุณากรอกราคา"
        keyboardType="numeric"
      />
      <CustomInput
        label="จำนวน "
        value={pcs}
        onChangeText={setPcs}
        placeholder="กรุณากรอกจำนวน "
        keyboardType="numeric"
      />
      <CustomButton
        title="ยืนยัน"
        variant="primary"
        size="medium"
        onPress={handleSubmit}
      />
    </View>
  );
};
