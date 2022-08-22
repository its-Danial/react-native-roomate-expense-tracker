import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useLayoutEffect, useState } from "react";
import { View } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hook";
import { addExpense, updateExpense } from "../store/expenses-slice";
import { Expense, RootStackParamList } from "../types";
import { storeExpense, updateExpense as httpUpdate } from "../utils/http";

type ManageExpenseProps = NativeStackScreenProps<RootStackParamList, "ManageExpense">;

const ManageExpense: FC<ManageExpenseProps> = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editExpenseId = props.route.params?.expenseId;
  const isEditing = !!editExpenseId;

  const selectedExpenseData = useAppSelector((state) => state.expenses.expenses).find(
    (expense) => expense.id === editExpenseId
  );

  useLayoutEffect(() => {
    props.navigation.setOptions({ title: isEditing ? "Edit Expense" : "Add Expense" });
  }, [isEditing, props.navigation]);

  const dispatch = useAppDispatch();

  const confirmHandler = async (expenseData: Expense) => {
    setIsSubmitting(true);
    if (isEditing) {
      dispatch(updateExpense({ id: editExpenseId, data: expenseData }));
      await httpUpdate(editExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      dispatch(addExpense({ id: id, ...expenseData }));
    }
    props.navigation.goBack();
  };

  const cancelHandler = () => {
    props.navigation.goBack();
  };

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View className="flex-1 p-6 bg-gray-100">
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValue={selectedExpenseData}
        buttonLabel={isEditing ? "Update" : "Add"}
      />

      {/* {isEditing && (
        <View className="mt-4 pt-2 items-center border-t-gray-300 border-t-2">
          <IconButton iconName={"trash"} color={colors.red[500]} size={30} onPress={deleteHandler} />
        </View>
      )} */}
    </View>
  );
};
export default ManageExpense;
