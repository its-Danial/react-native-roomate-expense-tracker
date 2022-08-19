import React, { FC, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hook";
import { setFetchedExpenses } from "../store/expenses-slice";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";

type RecentExpensesProps = {};

const RecentExpenses: FC<RecentExpensesProps> = (props) => {
  const allExpenses = useAppSelector((state) => state.expenses.expenses);
  console.log(allExpenses);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      dispatch(setFetchedExpenses(expenses));
    };

    getExpenses();
  }, []);

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
