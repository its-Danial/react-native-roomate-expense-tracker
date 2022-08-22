import { Expense } from "./../types";
import axios from "axios";

const firebaseUrl = "https://react-native-8a464-default-rtdb.firebaseio.com/";

export const storeExpense = async (expenseData: Expense) => {
  const response = await axios.post(firebaseUrl + "expenses.json", expenseData);

  const id = response.data.name;

  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(firebaseUrl + "expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }

  return expenses;
};

export const updateExpense = (id: string, expenseData: Expense) => {
  return axios.put(firebaseUrl + `expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id: string) => {
  return axios.delete(firebaseUrl + `expenses/${id}.json`);
};
