import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useLayoutEffect } from "react";
import { View } from "react-native";
import colors from "tailwindcss/colors";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { RootStackParamList } from "../types";

type ManageExpenseProps = NativeStackScreenProps<RootStackParamList, "ManageExpense">;

const ManageExpense: FC<ManageExpenseProps & { id: string }> = (props) => {
  const editExpenseId = props.route.params?.expenseId;

  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    props.navigation.setOptions({ title: isEditing ? "Edit Expense" : "Add Expense" });
  }, [isEditing, props.navigation]);

  const deleteHandler = () => {
    props.navigation.goBack();
  };

  const confirmHandler = () => {
    props.navigation.goBack();
  };

  const cancelHandler = () => {
    props.navigation.goBack();
  };

  return (
    <View className="flex-1 p-6 bg-gray-100">
      <View className="flex-row items-center justify-center">
        <Button style="min-w-[120] mx-8" mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style="min-w-[120] mx-8" onPress={confirmHandler}>
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
