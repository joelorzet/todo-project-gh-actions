import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: 'ToDo-App',
	initialState,
	reducers: {
		addToDo: (state, action) => {
			state.push(action.payload);
		},
		reset: () => initialState,
	},
});

export const { addToDo, reset } = todoSlice.actions;

export default todoSlice.reducer;
