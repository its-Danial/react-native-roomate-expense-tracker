import React, { FC, useState } from "react";
import { View, TextInputChangeEventData, TextInputTextInputEventData } from "react-native";
import DatePicker from "./DatePicker";

import Input from "./Input";

type ExpenseFormProps = {};

const ExpenseForm: FC<ExpenseFormProps> = (props) => {
  const [inputValues, setInputValues] = useState({
    amount: "A",
    date: new Date(),
    description: "bb",
  });

  const inputChangeHandler = (identifier: string, inputValue: string | Date) => {
    setInputValues((pervValues) => {
      return { ...pervValues, [identifier]: inputValue };
    });
  };

  return (
    <View className="">
      <View className="flex flex-row items-center justify-between">
        <View className="basis-[46%]">
          <Input
            label="Amount"
            inputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"),
              value: inputValues.amount,
              placeholder: "¥",
              style: { fontSize: 18 },
            }}
          />
        </View>
        <View className="basis-[52%]">
          <DatePicker onConfirm={inputChangeHandler} date={inputValues.date} />
        </View>
      </View>
      <Input
        label="Description"
        inputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
          style: { fontSize: 17 },
        }}
      />
    </View>
  );
};
export default ExpenseForm;
