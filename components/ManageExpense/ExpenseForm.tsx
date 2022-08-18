import React, { FC, useState } from "react";
import { View, Text } from "react-native";
import { Expense } from "../../types";
import Button from "../UI/Button";
import DatePicker from "./DatePicker";

import Input from "./Input";

type ExpenseFormProps = {
  buttonLabel: string;
  defaultValue: undefined | Expense;
  onCancel: () => void;
  onSubmit: (expenseData: Expense) => void;
};

const ExpenseForm: FC<ExpenseFormProps> = (props) => {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: props.defaultValue ? props.defaultValue.amount.toString() : "",
      isValid: true,
    },
    description: {
      value: props.defaultValue ? props.defaultValue.description : "",
      isValid: true,
    },
    date: {
      value: props.defaultValue ? props.defaultValue.date : new Date(),
      isValid: true,
    },
  });

  const inputChangeHandler = (identifier: string, inputValue: string | Date) => {
    setInputValues((pervValues) => {
      return { ...pervValues, [identifier]: { value: inputValue, isValid: true } };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: inputValues.date.value,
      description: inputValues.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !descriptionIsValid) {
      setInputValues((pervValues) => {
        return {
          amount: {
            value: pervValues.amount.value,
            isValid: amountIsValid,
          },
          description: {
            value: pervValues.description.value,
            isValid: descriptionIsValid,
          },
          date: {
            value: pervValues.date.value,
            isValid: true,
          },
        };
      });
      return;
    }

    props.onSubmit(expenseData);
  };

  const inputsAreInvalid = !inputValues.amount.isValid || !inputValues.description.isValid;

  return (
    <View className="">
      <View className="flex flex-row items-center justify-between">
        <View className="basis-[46%]">
          <Input
            label="Amount"
            isValid={!inputValues.amount.isValid}
            inputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"),
              value: inputValues.amount.value,
              placeholder: "¥",
              style: { fontSize: 18 },
            }}
          />
        </View>
        <View className="basis-[52%]">
          <DatePicker onConfirm={inputChangeHandler} date={inputValues.date.value} />
        </View>
      </View>
      <Input
        label="Description"
        isValid={!inputValues.description.isValid}
        inputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description.value,
          style: { fontSize: 17 },
        }}
      />
      {inputsAreInvalid && <Text className="text-base text-red-400 text-center">Invalid input</Text>}
      <View className="flex-row items-center justify-between">
        <Button style="min-w-[120] " mode="flat" onPress={props.onCancel}>
          Cancel
        </Button>
        <Button style="min-w-[120]" onPress={submitHandler}>
          {props.buttonLabel}
        </Button>
      </View>
    </View>
  );
};
export default ExpenseForm;
