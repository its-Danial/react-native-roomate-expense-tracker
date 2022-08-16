import { NativeWindStyleSheet } from "nativewind";
import { FC } from "react";
import { View, Text, Pressable } from "react-native";
import colors from "tailwindcss/colors";
import { getFormattedDate } from "../../utils/formatDate";

type ExpenseItemProps = {
  id: string;
  description: string;
  date: Date;
  amount: number;
};

const ExpenseItem: FC<ExpenseItemProps> = (props) => {
  const expensePressHandler = () => {
    console.log("hello1");
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      className="flex-1 flex-row p-3 my-2 mx-[2px] bg-gray-50 rounded-xl shadow-list justify-between hover:bg-blue-50
          active:bg-blue-50 active:opacity-70"
    >
      <View>
        <Text className="font-bold text-base mb-1">{props.description}</Text>
        <Text className="text-xs">{getFormattedDate(props.date)}</Text>
      </View>
      <View className="px-3 py-1 min-w-[80px] bg-blue-100/50 justify-center items-center rounded-lg">
        <Text className="font-bold text-blue-600">¥{props.amount.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
};
export default ExpenseItem;

NativeWindStyleSheet.create({
  styles: {
    "shadow-list": {
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.17,
      shadowRadius: 2.54,
      elevation: 3,
    },
    pressed: {
      backgroundColor: "red",
    },
  },
});
