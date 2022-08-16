import { FC } from "react";
import { View, Text } from "react-native";
import { Expense } from "../../types";

type ExpensesSummaryProps = {
  periodName: string;
  expenses: Expense[];
};

const ExpensesSummary: FC<ExpensesSummaryProps> = (props) => {
  const expensesSum = props.expenses.reduce((sum: any, expense: any) => sum + expense.amount, 0);

  return (
    <View className=" p-2 px-3 bg-blue-600 rounded-2xl flex-row justify-between items-center">
      <Text className="text-gray-200 text-base font-medium">{props.periodName}</Text>
      <Text className="text-gray-50 text-lg font-bold">¥{expensesSum.toFixed(2)}</Text>
    </View>
  );
};
export default ExpensesSummary;
