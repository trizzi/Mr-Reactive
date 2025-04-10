import { useEffect, useState } from 'react';
import WaBg from '../assets/background-whatsapp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppChat = () => {
	const [showWidget, setShowWidget] = useState(false);
	const [showChat, setShowChat] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowWidget(true);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='fixed bottom-6 right-6 z-50 flex flex-col items-end'>
			{/* Chat Box */}
			{showChat && (
				<div className='w-80 mb-3 rounded-lg shadow-lg border border-gray-300 overflow-hidden'>
					{/* Header */}
					<div className='bg-[#095E54] text-white p-4 flex items-center justify-between'>
						<div className='flex items-center gap-3'>
							<div className='relative'>
								<img
									src='https://i.pravatar.cc/40?img=12'
									alt='Liam Addison'
									className='w-10 h-10 rounded-full'
								/>

								<span className='absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full' />
							</div>
							<div className='text-sm'>
								<div className='font-semibold'>Liam Addison</div>
								<div className='text-xs opacity-80'>
									Typically replies in minutes
								</div>
							</div>
						</div>
						<button
							onClick={() => setShowChat(false)}
							className='text-white text-lg font-bold'>
							×
						</button>
					</div>

					{/* Message */}
					<div
						className='bg-cover bg-center'
						style={{ backgroundImage: `url(${WaBg})` }}>
						<div className=' text-xs text-center py-1'>20:55</div>
						<div className=' px-4 py-3 text-sm'>
							<div className='rounded-lg bg-[#f0f0f0] p-3 w-fit max-w-[85%]'>
								👋 Hi there! We are online and ready to help!
							</div>
						</div>

						{/* Start Chat Button */}
						<div className='px-4 pb-4 flex justify-center'>
							<a
								href='https://wa.me/447123456789'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold'>
								<FontAwesomeIcon
									icon={faWhatsapp}
									className='text-white text-lg'
								/>
								Start Chat
							</a>
						</div>
					</div>
				</div>
			)}

			{/* Floating WhatsApp Icon */}
			{showWidget && (
				<button
					onClick={() => setShowChat((prev) => !prev)}
					className='relative bg-white hover:bg-green-700 text-green-600 p-2 rounded-full shadow-lg transition-all duration-300'>
					<FontAwesomeIcon
						icon={faWhatsapp}
						className='text-green-600 text-xl'
					/>
					<span className='absolute top-0 right-0 w-3 h-3 bg-red-400 border-2 border-white rounded-full' />
				</button>
			)}
		</div>
	);
};

export default WhatsAppChat;
