import { NativeWindStyleSheet } from "nativewind";
import { FC } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

type InputProps = {
  label: string;
  inputConfig?: TextInputProps;
};

const Input: FC<InputProps> = (props) => {
  let inputStyle = "bg-gray-200  p-2 border border-gray-400 item-center rounded-md text-base text-gray-600";

  if (props.inputConfig && props.inputConfig.multiline) {
    inputStyle += " multi-line";
  }
  return (
    <View className="my-2">
      <Text className="text-sm font-semibold text-blue-600 mb-1">{props.label}</Text>
      <TextInput className={inputStyle} {...props.inputConfig} />
    </View>
  );
};
export default Input;

NativeWindStyleSheet.create({
  styles: {
    "multi-line": {
      minHeight: 100,
      textAlignVertical: "top",
    },
  },
});
