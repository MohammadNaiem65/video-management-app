export default function Error({ error }) {
	return (
		<div className='col-span-12'>
			{error ? error : 'Some error happened.'}
		</div>
	);
}
