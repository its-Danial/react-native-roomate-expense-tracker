import { FC } from "react";
import { Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

type ExpensesOutputProps = {
  expenses?: any;
  expensesPeriod: string;
};

const DUMMY_EXPENSES = [
  { id: "e1", description: "A new shoe", amount: 59.99, date: new Date("2021-12-09") },
  { id: "e2", description: "A new book", amount: 69.99, date: new Date("2021-12-19") },
  { id: "e3", description: "A new cup", amount: 79.99, date: new Date("2021-12-29") },
  { id: "e3", description: "A new shirt", amount: 89.99, date: new Date("2021-12-20") },
];

const ExpensesOutput: FC<ExpensesOutputProps> = (props) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={props.expensesPeriod} />
      <ExpensesList />
    </View>
  );
};
export default ExpensesOutput;
