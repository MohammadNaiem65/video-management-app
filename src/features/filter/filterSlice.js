import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
	tags: [],
	search: '',
};

// create filter slice
const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		addTag: (state, action) => {
			state.tags.push(action.payload);
		},
		removeTag: (state, action) => {
			const index = state.tags.indexOf(action.payload);

			if (index !== -1) {
				state.tags.splice(index, 1);
			}
		},
		searchWithKeyword: (state, action) => {
			state.search = action.payload;
		},
	},
});

export default filterSlice.reducer;
export const { addTag, removeTag, searchWithKeyword } = filterSlice.actions;
