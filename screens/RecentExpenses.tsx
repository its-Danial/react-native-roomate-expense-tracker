import React, { FC } from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

type RecentExpensesProps = {};

const RecentExpenses: FC<RecentExpensesProps> = (props) => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};
export default RecentExpenses;
