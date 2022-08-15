import { FC } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

type AllExpensesProps = {};

const AllExpenses: FC<AllExpensesProps> = (props) => {
  return <ExpensesOutput expensesPeriod="Total" />;
};
export default AllExpenses;
