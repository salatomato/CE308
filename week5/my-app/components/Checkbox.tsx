import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ใช้ Icon จาก Expo

interface CheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
  error?: string;
  touched?: boolean;
}

export default function Checkbox({ label, checked, onPress, error, touched }: CheckboxProps) {
  const hasError = touched && error;

  return (
    <View className="mb-6">
      <TouchableOpacity 
        onPress={onPress} 
        activeOpacity={0.7}
        className="flex-row items-center"
      >
        {/* ตัวกล่อง Checkbox */}
        <View className={`w-6 h-6 rounded border-2 items-center justify-center ${
          checked ? "bg-blue-600 border-blue-600" : hasError ? "border-red-500" : "border-gray-400"
        }`}>
          {checked && <Ionicons name="checkmark" size={18} color="white" />}
        </View>

        {/* ข้อความ Label */}
        <Text className="ml-3 text-gray-700 text-base flex-1">
          {label}
        </Text>
      </TouchableOpacity>

      {/* แสดง Error เมื่อยังไม่ได้เช็ค */}
      {hasError && (
        <Text className="text-red-500 text-sm mt-1 ml-9">
          {error}
        </Text>
      )}
    </View>
  );
}