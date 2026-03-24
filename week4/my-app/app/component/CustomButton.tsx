import { TouchableOpacity, Text } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
};

export const CustomButton = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
}: CustomButtonProps) => {
  const variantClass =
    variant === "primary"
      ? "bg-blue-600"
      : variant === "secondary"
      ? "bg-gray-500"
      : "bg-red-600";

  const sizeClass =
    size === "small"
      ? "px-3 py-2"
      : size === "large"
      ? "px-6 py-4"
      : "px-5 py-3";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`${variantClass} ${sizeClass} rounded-lg items-center`}
    >
      <Text className="text-white font-bold text-base">{title}</Text>
    </TouchableOpacity>
  );
};