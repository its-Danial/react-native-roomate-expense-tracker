import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../types";

type ManageExpenseProps = NativeStackScreenProps<RootStackParamList, "ManageExpense">;

const ManageExpense: FC<ManageExpenseProps & { id: string }> = (props) => {
  const editExpenseId = props.route.params?.expenseId;

  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    props.navigation.setOptions({ title: isEditing ? "Edit Expense" : "Add Expense" });
  }, [isEditing, props.navigation]);

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
};
export default ManageExpense;
