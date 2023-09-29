import { useState } from 'react';
import searchImg from '../../assets/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { searchWithKeyword } from '../../features/filter/filterSlice';

export default function Search() {
	// ! Required hooks and variables
	const { search } = useSelector((state) => state.filter);
	const dispatch = useDispatch();
	const [input, setInput] = useState(search);

	const handleSearchKeyword = (e) => {
		e.preventDefault();

		dispatch(searchWithKeyword(input));
	};

	return (
		<div className='border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200'>
			{/* <!-- search --> */}
			<form onSubmit={handleSearchKeyword}>
				<input
					className='outline-none border-none mr-2'
					type='search'
					name='search'
					placeholder='Search'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>
			<img
				className='inline h-4 cursor-pointer'
				src={searchImg}
				alt='Search'
			/>
		</div>
	);
}
