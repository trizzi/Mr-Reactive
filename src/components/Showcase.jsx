import React from 'react';
import HomeOwner from '../assets/form-icon-1.png';
import Landlord from '../assets//form-icon-2.png';

const Showcase = () => {
	return (
		<div className='bg-[#f6f6f8]flex flex-col justify-center md:container md:mx-auto items-center  py-12'>
			<div className='text-4xl font-bold text-[#000a70] text-center mt-[90px] mb-[10px]'>
				"I am a:"
			</div>
			<p className='text-[#696688] mx-6 pb-4 text-center font-semibold'>
				All plans include unlimited repairs with no limit on the value of each
				repair.
			</p>

			{/* Card Container */}
			<div className='flex justify-center gap-4 md:gap-8'>
				{/* Landlord Card */}
				<div className='group relative w-40 h-40 bg-[#E9F4FF] text-[#000a70]  text-lg font-semibold rounded-full flex items-center justify-center flex-col hover:scale-105 hover:bg-blue-900 hover:text-white transition-all duration-500 border-0 mb-8 mr-4'>
					<div className='w-20 h-20 flex items-center justify-center'>
						<img
							src={HomeOwner}
							alt='Home Owner'
						/>
					</div>
					<span className='text-[#000a70] font-semibold mt-2 text-center hover:text-white'>
						Home Owner
					</span>
				</div>

				{/* Home Owner Card */}
				<div className='group relative w-40 h-40 bg-[#E9F4FF] text-[#000a70] text-lg font-semibold rounded-full flex items-center justify-center flex-col hover:scale-105 hover:bg-blue-900  transition-all duration-500 border-0 mb-8 mr-4'>
					<div className='w-20 h-20 flex items-center justify-center'>
						<img
							src={Landlord}
							alt='Landlord'
						/>
					</div>
					<span className='text-[#000a70] font-semibold mt-2 text-center hover:text-white'>
						Landlord
					</span>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
