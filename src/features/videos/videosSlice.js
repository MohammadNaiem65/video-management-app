import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getVideos from './videosAPI';

// initial state
const initialState = {
	videos: [],
	isLoading: true,
	isError: false,
	error: '',
};

// ! Async Thunk - Fetch Videos
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
	const videos = await getVideos();

	return videos;
});

// ! Video slice
const videoSlice = createSlice({
	name: 'videos',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideos.pending, (state) => {
				state.isLoading = true;
				state.error = false;
			})
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.videos = action.payload;
			})
			.addCase(fetchVideos.rejected, (state, action) => {
				state.isLoading = false;
				state.videos = [];
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default videoSlice.reducer;
