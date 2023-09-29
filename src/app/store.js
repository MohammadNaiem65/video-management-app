import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import videoReducer from '../features/video/videoSlice';
import tagsReducer from '../features/tags/tagsSlice';
import filterSlice from '../features/filter/filterSlice';

const store = configureStore({
	reducer: {
		videos: videosReducer,
		relatedVideos: relatedVideosReducer,
		video: videoReducer,
		tags: tagsReducer,
		filter: filterSlice,
	},
});

export default store;
