import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { Expense } from "../types";

// Define the initial state using that type
const initialState: { expenses: Expense[] } = {
  expenses: [
    { id: "e1", description: "A new shoe", amount: 59.99, date: new Date("2021-12-09") },
    { id: "e2", description: "A new book", amount: 69.99, date: new Date("2021-12-19") },
    { id: "e3", description: "A new cup", amount: 79.99, date: new Date("2021-12-29") },
    { id: "e4", description: "A new shirt", amount: 89.99, date: new Date("2021-12-20") },
  ],
};

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action: PayloadAction<{ id: string }>) => {},
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectExpense = (state: RootState) => state.expenses.expenses;

export default expenseSlice.reducer;
