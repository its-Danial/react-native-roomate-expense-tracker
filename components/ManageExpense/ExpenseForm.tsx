import React, { FC, useState } from "react";
import { View, Text, Button } from "react-native";
import DatePicker from "./DatePicker";

import Input from "./Input";

type ExpenseFormProps = {};

const ExpenseForm: FC<ExpenseFormProps> = (props) => {
  const amountChangeHandler = () => {};

  const dateConfirmHandler = (date: Date) => {
    console.warn("A date has been picked: ", date);
  };

  return (
    <View className="flex-row">
      <Input label="Amount" inputConfig={{ keyboardType: "decimal-pad", onChangeText: amountChangeHandler }} />
      <DatePicker onConfirm={dateConfirmHandler} />
      <Input label="Description" inputConfig={{ multiline: true }} />
    </View>
  );
};
export default ExpenseForm;
