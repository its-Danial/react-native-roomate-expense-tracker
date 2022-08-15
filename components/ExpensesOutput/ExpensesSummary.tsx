import { FC } from "react";
import { View, Text } from "react-native";

type ExpensesSummaryProps = {
  periodName: string;
  expenses: any;
};

const ExpensesSummary: FC<ExpensesSummaryProps> = (props) => {
  const expensesSum = props.expenses.reduce((sum: any, expense: any) => sum + expense.amount, 0);

  return (
    <View>
      <Text>{props.periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
export default ExpensesSummary;
