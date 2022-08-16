import { FC } from "react";
import { View, Text } from "react-native";
import { Expense } from "../../types";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

type ExpensesOutputProps = {
  expenses: Expense[];
  expensesPeriod: string;
  fallBackText: string;
};

const ExpensesOutput: FC<ExpensesOutputProps> = (props) => {
  let content = (
    <View className="flex-1 items-center justify-center">
      <Text className="text-sm text-blue-600  text-center">{props.fallBackText}</Text>
    </View>
  );

  if (props.expenses.length > 0) {
    content = <ExpensesList expenses={props.expenses} />;
  }

  return (
    <View className="p-4 pt-6 pb-0 bg-gray-100 flex-1">
      <ExpensesSummary expenses={props.expenses} periodName={props.expensesPeriod} />
      {content}
    </View>
  );
};
export default ExpensesOutput;
