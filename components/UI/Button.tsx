import { FC } from "react";
import { View, Text, Pressable } from "react-native";

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  mode?: string;
  style?: string;
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <View className={props.style}>
      <Pressable onPress={props.onPress} className="rounded active:bg-blue-200/80 active:opacity-60">
        <View className={`rounded p-2 ${props.mode === "flat" ? "bg-transparent" : "bg-blue-600"}`}>
          <Text
            className={`text-center text-sm font-semibold ${props.mode === "flat" ? "text-blue-600" : "text-gray-100"}`}
          >
            {props.children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
export default Button;
