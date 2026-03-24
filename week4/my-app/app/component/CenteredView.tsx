import { View } from "react-native";

type CenteredViewProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  center?: boolean;
};

export const CenteredView = ({
  children,
  backgroundColor = "bg-gray-900",
  center = true,
}: CenteredViewProps) => {
  return (
    <View className={`flex-1 ${center ? "justify-center items-center" : ""} ${backgroundColor}`}>
      {children}
    </View>
  );
};
