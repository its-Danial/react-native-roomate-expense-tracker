import { FC } from "react";
import { Text, View } from "react-native";
import { Expense } from "../../types";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

type ExpensesOutputProps = {
  expenses?: Expense[];
  expensesPeriod: string;
};

const DUMMY_EXPENSES = [
  { id: "e1", description: "A new shoe", amount: 59.99, date: new Date("2021-12-09") },
  { id: "e2", description: "A new book", amount: 69.99, date: new Date("2021-12-19") },
  { id: "e3", description: "A new cup", amount: 79.99, date: new Date("2021-12-29") },
  { id: "e4", description: "A new shirt", amount: 89.99, date: new Date("2021-12-20") },
];

const ExpensesOutput: FC<ExpensesOutputProps> = (props) => {
  return (
    <View className="p-6 pb-0 bg-gray-100 flex-1">
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={props.expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
export default ExpensesOutput;
