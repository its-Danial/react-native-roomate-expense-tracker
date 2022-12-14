import { useNavigation } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

import { getFormattedDate } from "../../utils/date";

type ExpenseItemProps = {
  id?: string;
  description: string;
  date: Date;
  amount: number;
};

const ExpenseItem: FC<ExpenseItemProps> = (props) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", { expenseId: props.id });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      className="flex-1 flex-row p-3 my-[6px] mx-[2px] bg-gray-50 rounded-xl shadow-list justify-between hover:bg-blue-50
          active:bg-blue-50 active:opacity-70"
    >
      <View>
        <Text className="font-bold text-base mb-1 text-gray-600">{props.description}</Text>
        <Text className="text-xs text-gray-400">{getFormattedDate(props.date)}</Text>
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
        height: 0,
      },
      shadowOpacity: 0.17,
      shadowRadius: 1.7,
    },
  },
});
