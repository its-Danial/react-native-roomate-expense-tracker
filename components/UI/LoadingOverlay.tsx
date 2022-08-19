import { FC } from "react";
import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

type LoadingOverlayProps = {};

const LoadingOverlay: FC<LoadingOverlayProps> = (props) => {
  return (
    <View className="flex-1 p-6 justify-center items-center bg-gray-100">
      <ActivityIndicator size="large" color={colors.blue[500]} />
    </View>
  );
};
export default LoadingOverlay;
