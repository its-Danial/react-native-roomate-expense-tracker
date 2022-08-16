import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store/store";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Expense } from "../types";

const initialState: { expenses: Expense[] } = {
  expenses: [
    { id: "e1", description: "A new shoe", amount: 59.99, date: new Date("2021-12-09") },
    { id: "e2", description: "A new book", amount: 69.99, date: new Date("2021-12-19") },
    { id: "e3", description: "A new cup", amount: 79.99, date: new Date("2021-12-29") },
    { id: "e4", description: "A new shirt", amount: 89.99, date: new Date("2021-12-20") },
    { id: "e5", description: "A new shoe", amount: 59.99, date: new Date("2021-12-09") },
    { id: "e6", description: "A new book", amount: 69.99, date: new Date("2021-12-19") },
    { id: "e7", description: "A new cup", amount: 79.99, date: new Date("2021-12-29") },
    { id: "e8", description: "A new shirt", amount: 89.99, date: new Date() },
  ],
};

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      const newExpense = { id: uuidv4(), ...action.payload };
      state.expenses.unshift(newExpense);
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
    },
    updateExpense: (state, action: PayloadAction<{ id: string; data: Expense }>) => {
      const updatableExpenseIndex = state.expenses.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state.expenses[updatableExpenseIndex];
      const updateItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state.expenses];
      updatedExpenses[updatableExpenseIndex] = updateItem;
      state.expenses = updatedExpenses;
    },
  },
});

export const { addExpense, removeExpense, updateExpense } = expenseSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectExpense = (state: RootState) => state.expenses.expenses;

export default expenseSlice.reducer;
