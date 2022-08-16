import React, { FC } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useAppSelector } from "../hooks/redux-hook";
import { getDateMinusDays } from "../utils/date";

type RecentExpensesProps = {};

const RecentExpenses: FC<RecentExpensesProps> = (props) => {
  const allExpenses = useAppSelector((state) => state.expenses.expenses);

  const recentExpense = allExpenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      fallBackText="No expense found for the last 7 days."
      expenses={recentExpense}
      expensesPeriod="Last 7 Days"
    />
  );
};
export default RecentExpenses;
