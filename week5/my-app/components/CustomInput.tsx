import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface CustomInputProps extends TextInputProps {
  label: string;
  error: string;
  touched: boolean;
  showCharacterCount?: boolean; // เพิ่ม: เพื่อสั่งเปิด/ปิดตัวเลขมุมขวา
  maxLength?: number;
}

export default function CustomInput({
  label,
  error,
  touched,
  ...props
}: CustomInputProps) {
  const hasError = touched && error;
  
  return (
    <View className="w-full mb-4">
      {/* Label */}
      <Text className=" flex-row justify-between text-gray-700 font-semibold mb-2 text-base">
        {label}
      </Text>
      {props.showCharacterCount && props.maxLength && (
        <Text className="text-gray-400 text-xs">
          {props.value?.length || 0}/{props.maxLength}
        </Text>
      )}

      {/* Input Field*/}
      <TextInput
        className = {`w-full px-4 py-3 rounded-lg border-2 ${hasError ? "border-red-500" : "border-gray-300"} ${props.editable === false ? "bg-gray-100" : "bg-white"} text-base text-gray-800`}
        placeholderTextColor="#9CA3AF"
        multiline={true}
        style={[
          { textAlignVertical: "top", 
            padding: 12
          }, props.style
        ]}
        maxLength={props.maxLength}
        {...props}
      />

      {/* Error Message */}
      {hasError && (
        <Text className="text-red-500 text-sm mt-1">
            {error}
        </Text>
      )}
    </View>
  );
}
