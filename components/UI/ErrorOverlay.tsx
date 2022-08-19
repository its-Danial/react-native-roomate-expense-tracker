import { FC } from "react";
import { View, Text } from "react-native";

type ErrorOverlayProps = {
  errorMessage: string;
};

const ErrorOverlay: FC<ErrorOverlayProps> = (props) => {
  return (
    <View className="flex-1 items-center justify-center p-6 bg-gray-100">
      <Text className="mb-2 text-center text-lg font-semibold text-blue-600">An error occurred</Text>
      <Text className="text-center text-base text-blue-500">{props.errorMessage}</Text>
    </View>
  );
};
export default ErrorOverlay;
