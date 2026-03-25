import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioButtonProps {
  label: string;
  options: RadioOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  error?: string;
  touched?: boolean;
}

export default function RadioButton({
  label,
  options,
  selectedValue,
  onSelect,
  error,
  touched,
}: RadioButtonProps) {
  const hasError = touched && error;

  return (
    <View className="w-full mb-6">
      <Text className="text-gray-700 font-semibold mb-3 text-base">{label}</Text>
      
      {/* ส่วนแสดงตัวเลือกแบบแนวนอน (Horizontal) */}
      <View className="flex-row justify-between">
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            onPress={() => onSelect(option.value)}
            className="flex-row items-center mr-4"
            activeOpacity={0.7}
          >
            {/* วงกลม Radio */}
            <View className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
              selectedValue === option.value ? "border-blue-600" : hasError ? "border-red-500" : "border-gray-400"
            }`}>
              {selectedValue === option.value && (
                <View className="w-3 h-3 rounded-full bg-blue-600" />
              )}
            </View>
            <Text className="ml-2 text-gray-700 text-base">{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* แสดงข้อความ Error */}
      {hasError && (
        <Text className="text-red-500 text-sm mt-2">{error}</Text>
      )}
    </View>
  );
}