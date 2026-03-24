import { View, Text, TextInput } from "react-native";

type CustomInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "numeric" | "email-address";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

export const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder = "",
  keyboardType = "default",
  autoCapitalize = "none",
}: CustomInputProps) => {
  return (
    <View className="mb-4">
      <Text className="mb-1 text-base font-medium text-gray-700">{label}</Text>
      <TextInput
        className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-base"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};