import { FC } from "react";
import { View } from "react-native";
import { Expense } from "../../types";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

type ExpensesOutputProps = {
  expenses: Expense[];
  expensesPeriod: string;
};

const ExpensesOutput: FC<ExpensesOutputProps> = (props) => {
  return (
    <View className="p-6 pb-0 bg-gray-100 flex-1">
      <ExpensesSummary expenses={props.expenses} periodName={props.expensesPeriod} />
      <ExpensesList expenses={props.expenses} />
    </View>
  );
};
export default ExpensesOutput;
