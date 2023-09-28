import { Link } from 'react-router-dom';
import lwsLogo from '../../assets/lws.svg';
import Search from './Search';

export default function Navbar() {
	return (
		<nav className='bg-slate-100 shadow-md'>
			<div className='max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3'>
				<Link to='/'>
					<img
						className='h-10'
						src={lwsLogo}
						alt='Learn with Sumit'
					/>
				</Link>
				<Search />
			</div>
		</nav>
	);
}
