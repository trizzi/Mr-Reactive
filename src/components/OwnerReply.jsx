import React from 'react';

const OwnerReply = () => (
	<div className='flex flex-col mt-4 border-l border-gray-300 pt-4'>
		<div className='flex gap-4 ml-4'>
			<img
				src='https://i.pravatar.cc/40?img=12'
				alt='owner'
				className='w-10 h-10 rounded-full'
			/>
			<div>
				<div className='flex flex-col items-start mb-1'>
					<div className=''>
						<p className='font-semibold text-black hover:underline transition'>
							Mr Reactive {''}{' '}
							<button className='bg-gray-200 text-black p-1 rounded-lg text-xs'>
								OWNER REPLY
							</button>
						</p>
					</div>
					<p className='text-xs text-gray-500'>1 week ago</p>
				</div>
			</div>
		</div>
		<div className='ml-4'>
			<p className='text-sm text-gray-700 mt-4 pt-4'>
				Thank you for your feedback! We're happy to serve you.
			</p>
		</div>
	</div>
);

export default OwnerReply;
