import { AxiosError } from "axios";
import React, { FC, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hook";
import { setFetchedExpenses } from "../store/expenses-slice";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";

type RecentExpensesProps = {};

const RecentExpenses: FC<RecentExpensesProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<undefined | string>();

  const allExpenses = useAppSelector((state) => state.expenses.expenses);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getExpenses = async () => {
      setIsLoading(true);
      try {
        const expenses = await fetchExpenses();
        dispatch(setFetchedExpenses(expenses));
        setIsError(undefined);
      } catch (error) {
        const err = error as AxiosError;
        setIsError(err.message);
      }
      setIsLoading(false);
    };

    getExpenses();
  }, []);

  const recentExpense = allExpenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (isError && !isLoading) {
    return <ErrorOverlay errorMessage={isError} />;
  }

  return (
    <ExpensesOutput
      fallBackText="No expense found for the last 7 days."
      expenses={recentExpense}
      expensesPeriod="Last 7 Days"
    />
  );
};
export default RecentExpenses;
