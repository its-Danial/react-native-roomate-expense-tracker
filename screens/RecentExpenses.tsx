import React, { FC } from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useAppSelector } from "../hooks/redux-hook";

type RecentExpensesProps = {};

const RecentExpenses: FC<RecentExpensesProps> = (props) => {
  const expenses = useAppSelector((state) => state.expenses.expenses);

  return <ExpensesOutput expenses={expenses} expensesPeriod="Last 7 Days" />;
};
export default RecentExpenses;
