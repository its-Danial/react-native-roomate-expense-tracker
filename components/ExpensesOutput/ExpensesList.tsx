import { FC } from "react";
import { FlatList } from "react-native";
import { Expense } from "../../types";
import ExpenseItem from "./ExpenseItem";

type ExpensesListProps = {
  expenses: Expense[];
};

const ExpensesList: FC<ExpensesListProps> = (props) => {
  const renderExpenseItems = ({ item }: { item: Expense }) => {
    return <ExpenseItem {...item} />;
  };
  return (
    <FlatList
      className="mt-2"
      data={props.expenses}
      renderItem={renderExpenseItems}
      keyExtractor={({ id }) => id as string}
    />
  );
};
export default ExpensesList;
