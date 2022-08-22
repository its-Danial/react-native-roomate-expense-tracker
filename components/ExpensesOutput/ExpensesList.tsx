import React, { FC, useState } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { useAppDispatch } from "../../hooks/redux-hook";
import { removeExpense } from "../../store/expenses-slice";
import { Expense } from "../../types";
import { deleteExpense } from "../../utils/http";
import DeleteListButton from "./DeleteListButton";
import ExpenseItem from "./ExpenseItem";

type ExpensesListProps = {
  expenses: Expense[];
};

const ExpensesList: FC<ExpensesListProps> = (props) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const dispatch = useAppDispatch();

  const deleteHandler = async (deleteItemId: string) => {
    dispatch(removeExpense(deleteItemId));
    await deleteExpense(deleteItemId);
  };

  const renderExpenseItems = ({ item }: { item: Expense }) => {
    return <ExpenseItem {...item} />;
  };

  const renderDeleteButton = ({ item }: { item: Expense }) => {
    return <DeleteListButton showButton={showDeleteButton} id={item.id} onDelete={deleteHandler} />;
  };

  return (
    <SwipeListView
      className="mt-2"
      data={props.expenses}
      renderItem={renderExpenseItems}
      keyExtractor={({ id }) => id as string}
      renderHiddenItem={renderDeleteButton}
      onRowClose={() => setShowDeleteButton(false)}
      onRowOpen={() => setShowDeleteButton(true)}
      leftOpenValue={75}
      rightOpenValue={-75}
      stopLeftSwipe={20}
    />
  );
};
export default ExpensesList;
