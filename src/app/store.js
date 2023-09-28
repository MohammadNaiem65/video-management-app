import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice';

const store = configureStore({
	reducer: {
		videos: videosReducer,
	},
});

export default store;
