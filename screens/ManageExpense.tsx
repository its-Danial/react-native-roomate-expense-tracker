import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useLayoutEffect } from "react";
import { View } from "react-native";
import colors from "tailwindcss/colors";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { useAppDispatch } from "../hooks/redux-hook";
import { RootStackParamList } from "../types";
import { addExpense, updateExpense, removeExpense } from "../store/expenses-slice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

type ManageExpenseProps = NativeStackScreenProps<RootStackParamList, "ManageExpense">;

const ManageExpense: FC<ManageExpenseProps> = (props) => {
  const editExpenseId = props.route.params?.expenseId;
  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    props.navigation.setOptions({ title: isEditing ? "Edit Expense" : "Add Expense" });
  }, [isEditing, props.navigation]);

  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    dispatch(removeExpense(editExpenseId as string));
    props.navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      dispatch(updateExpense({ id: editExpenseId, data: { amount: 9999, description: "UPDATING", date: new Date() } }));
    } else {
      dispatch(addExpense({ description: "ADDING", amount: 1, date: new Date() }));
    }
    props.navigation.goBack();
  };

  const cancelHandler = () => {
    props.navigation.goBack();
  };

  return (
    <View className="flex-1 p-6 bg-gray-100">
      <ExpenseForm />
      <View className="flex-row items-center justify-between">
        <Button style="min-w-[120] " mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style="min-w-[120]" onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View className="mt-4 pt-2 items-center border-t-gray-300 border-t-2">
          <IconButton iconName={"trash"} color={colors.red[500]} size={30} onPress={deleteHandler} />
        </View>
      )}
    </View>
  );
};
export default ManageExpense;
