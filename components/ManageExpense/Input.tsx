import { FC } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

type InputProps = {
  label: string;
  inputConfig?: TextInputProps;
};

const Input: FC<InputProps> = (props) => {
  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput {...props.inputConfig} />
    </View>
  );
};
export default Input;
