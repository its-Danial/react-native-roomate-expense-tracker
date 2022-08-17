import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Pressable, Text, View } from "react-native";
import colors from "tailwindcss/colors";

type DateButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  date: Date;
};

const DateButton: FC<DateButtonProps> = (props) => {
  return (
    <View className="my-2">
      <Text className="text-sm font-semibold text-blue-600 mb-1">Pick a Date</Text>
      <Pressable
        onPress={props.onPress}
        className="justify-between items-center active:bg-blue-50 active:opacity-60 flex-row pace-x-3 bg-gray-200 p-2 border border-gray-400 rounded-md text-base text-gray-700"
      >
        <Text className={`text-center text-base font-medium text-slate-500`}>{props.date.toDateString()}</Text>
        <Ionicons name="calendar" size={22} color={colors.blue[600]} />
      </Pressable>
    </View>
  );
};
export default DateButton;
