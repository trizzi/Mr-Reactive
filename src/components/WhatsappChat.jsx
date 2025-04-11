import { useEffect, useState } from 'react';
import WaBg from '../assets/background-whatsapp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppChat = () => {
	const [showWidget, setShowWidget] = useState(false);
	const [showChat, setShowChat] = useState(false);
	const [currentTime, setCurrentTime] = useState('');
	const [showMessage, setShowMessage] = useState(false);
	const [dotIndex, setDotIndex] = useState(0);

	// Show widget after 3s
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowWidget(true);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	// Set time on mount and every minute
	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const time = now.toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			});
			setCurrentTime(time);
		};

		updateTime();
		const interval = setInterval(updateTime, 60000);
		return () => clearInterval(interval);
	}, []);

	// Message delay and dot animation
	useEffect(() => {
		if (showChat) {
			const messageTimer = setTimeout(() => setShowMessage(true), 3000);
			return () => clearTimeout(messageTimer);
		} else {
			setShowMessage(false); // reset message if chat closed
		}
	}, [showChat]);

	// Typing dots animation
	useEffect(() => {
		if (!showMessage && showChat) {
			const dotInterval = setInterval(() => {
				setDotIndex((prev) => (prev + 1) % 3);
			}, 500);
			return () => clearInterval(dotInterval);
		}
	}, [showMessage, showChat]);

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
						<div className='text-xs text-center py-1'>{currentTime}</div>
						<div className='px-4 py-3 text-sm'>
							{showMessage ? (
								<div className='rounded-lg bg-[#f0f0f0] p-3 w-fit max-w-[85%]'>
									Hi there! 👋 <br /> We are online and ready to help!
								</div>
							) : (
								<div className='rounded-lg bg-[#f0f0f0] p-3 w-fit max-w-[85%] flex items-center gap-1'>
									{[0, 1, 2].map((i) => (
										<span
											key={i}
											className={`w-2 h-2 rounded-full ${
												dotIndex === i ? 'bg-gray-500' : 'bg-gray-300'
											} transition-all duration-300`}
										/>
									))}
								</div>
							)}
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
