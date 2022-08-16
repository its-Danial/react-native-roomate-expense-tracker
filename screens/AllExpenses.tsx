import { FC } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useAppSelector } from "../hooks/redux-hook";

type AllExpensesProps = {};

const AllExpenses: FC<AllExpensesProps> = (props) => {
  const expenses = useAppSelector((state) => state.expenses.expenses);

  return <ExpensesOutput fallBackText="No expenses found!" expenses={expenses} expensesPeriod="Total" />;
};
export default AllExpenses;
