import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import GoogleLogo from '../assets/google_logo.svg';
import Googleg from '../assets/google-g.png';
import OwnerReply from './OwnerReply';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Verified from '../assets/verified-badge.png';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
// 	faChevronLeft,
// 	faChevronRight,
// } from '@fortawesome/free-solid-svg-icons';

const reviews = [
	{
		name: 'John Smith',
		date: '1 month ago',
		rating: 4,
		comment: 'Great support and very reliable. Would recommend.',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'Lisa Ray',
		date: '1 month ago',
		rating: 5,
		comment: 'Professional and prompt, very happy with the service.',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'Mark Green',
		date: '1 month ago',
		rating: 5,
		comment: 'Quick response and excellent customer service!',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'Sarah Lee',
		date: '1 month ago',
		rating: 5,
		comment: 'Very reliable and prompt service, highly recommended!',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'Tom Brown',
		date: '1 month ago',
		rating: 5,
		comment: 'Always satisfied with their work, fast and efficient!',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'John Smith',
		date: '1 month ago',
		rating: 4,
		comment: 'Great support and very reliable. Would recommend.',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'Emily White',
		date: '1 month ago',
		rating: 4,
		comment: 'Good experience overall, very responsive to queries.',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'James Clark',
		date: '1 month ago',
		rating: 5,
		comment: 'Excellent service, friendly staff, highly recommended.',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'Olivia Green',
		date: '1 month ago',
		rating: 4,
		comment: 'Satisfactory work, will definitely use again!',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'Jane Doe',
		date: '1 month ago',
		rating: 5,
		comment: 'Excellent service! Quick, professional, and friendly.',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'Sarah Lee',
		date: '1 month ago',
		rating: 5,
		comment: 'Very reliable and prompt service, highly recommended!',
		image: 'https://via.placeholder.com/40',
	},
	{
		name: 'George Hall',
		date: '1 month ago',
		rating: 5,
		comment: 'Professional and courteous, great experience.',
		image: 'https://via.placeholder.com/40',
	},
];

const Reviews = () => {
	const [selectedReview, setSelectedReview] = useState(null);

	useEffect(() => {
		if (selectedReview) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [selectedReview]);

	return (
		<section className='py-12 px-4 md:px-6'>
			<div className='max-w-6xl mx-auto relative'>
				<h2 className='text-3xl font-bold text-center mb-10'>
					What Our Customers Say
				</h2>

				<div className='flex flex-col bg-[#f6f6f8] rounded-inherit md:flex-row justify-between items-center mb-8 p-8'>
					<div className='flex flex-col items-center'>
						<div className='flex'>
							<img
								src={GoogleLogo}
								alt='google-logo'
								className='w-18'
							/>
							<p className='font-bold pl-2'>Reviews</p>
						</div>
						<div className='flex gap-1'>
							<span className='font-bold'>5.0</span>
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className='text-yellow-400 w-5 h-5 fill-yellow-400'
								/>
							))}
						</div>
					</div>

					<button className='bg-[#197BFF] text-white px-4 py-2 rounded-full hover:bg-blue-700 transition'>
						Review us on Google
					</button>
				</div>

				<div className='relative'>
					<Swiper
						modules={[Autoplay, Pagination, Navigation]}
						spaceBetween={30}
						slidesPerView={1}
						loop={true}
						autoplay={{ delay: 5000 }}
						pagination={{
							clickable: true,
							el: '.custom-pagination-wrapper',
							bulletClass: 'custom-pagination',
						}}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
						breakpoints={{
							640: { slidesPerView: 2 },
							1024: { slidesPerView: 4 },
						}}>
						{reviews.slice(0, 6).map((review, index) => (
							<SwiperSlide key={index}>
								<div className='bg-[#f6f6f8] rounded-xl p-4 shadow-sm hover:shadow-md transition h-full flex flex-col'>
									<div className='flex items-center gap-4 mb-3'>
										<div
											className='relative w-10 h-10 rounded-full flex items-center justify-center text-white font-bold'
											style={{
												backgroundColor: `#${Math.floor(
													Math.random() * 16777215,
												).toString(16)}`,
											}}>
											{review.name[0].toUpperCase()}
											<img
												src={Googleg}
												alt='google'
												className='absolute top-5 left-7 w-6 h-6 border-2 border-white rounded-full'
											/>
										</div>
										<div>
											<div className='flex items-center gap-2'>
												<p className='font-semibold text-gray-800 hover:underline transition'>
													{review.name}
												</p>
												<img
													src={Verified}
													alt='verified'
													className='w-5 h-5'
												/>
											</div>
											<p className='text-xs text-gray-500'>{review.date}</p>
										</div>
									</div>

									<div className='flex mb-2'>
										{[...Array(review.rating)].map((_, i) => (
											<Star
												key={i}
												className='text-yellow-400 w-4 h-4 fill-yellow-400'
											/>
										))}
										{[...Array(5 - review.rating)].map((_, i) => (
											<Star
												key={i}
												className='text-gray-300 w-4 h-4'
											/>
										))}
									</div>

									<p className='text-sm text-gray-700'>
										{review.comment.split(' ').length > 6 ? (
											<>
												{review.comment.split(' ').slice(0, 6).join(' ')}...
												<button
													onClick={() => setSelectedReview(review)}
													className='text-blue-600 ml-2 underline text-xs'>
													Read more
												</button>
											</>
										) : (
											review.comment
										)}
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className='custom-pagination-wrapper flex justify-center mt-6'></div>

					<button className='swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 text-white rounded-full p-2 shadow hover:bg-gray-300'>
						<ChevronLeft className='w-2 h-2 text-white' />
						{/* <FontAwesomeIcon
							icon={faChevronLeft}
							className='w-2 h-2 text-white'
						/> */}
					</button>
					<button className='swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 text-white rounded-full p-2 shadow hover:bg-gray-300'>
						<ChevronRight className='w-2 h-2 text-white' />
						{/* <FontAwesomeIcon
							icon={faChevronRight}
							className='w-2 h-2 text-white'
						/> */}
					</button>
				</div>
				{/* Modal */}
				{selectedReview && (
					<div className='fixed inset-0 bg-black/20 backdrop-opacity-50 flex items-center justify-center z-50'>
						<div className='bg-white rounded-xl max-w-md w-full p-6 relative'>
							<button
								className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
								onClick={() => setSelectedReview(null)}>
								✕
							</button>
							<div className='flex items-center gap-4 mb-3'>
								<div
									className='relative w-10 h-10 rounded-full flex items-center justify-center text-white font-bold'
									style={{
										backgroundColor: `#${Math.floor(
											Math.random() * 16777215,
										).toString(16)}`,
									}}>
									{selectedReview.name[0].toUpperCase()}
									<img
										src={Googleg}
										alt='google'
										className='absolute top-5 left-7 w-6 h-6 border-2 border-white rounded-full'
									/>
								</div>
								<div>
									<p className='font-semibold text-gray-800'>
										{selectedReview.name}
									</p>
									<p className='text-xs text-gray-500'>{selectedReview.date}</p>
								</div>
							</div>

							<div className='flex mb-2'>
								{[...Array(selectedReview.rating)].map((_, i) => (
									<Star
										key={i}
										className='text-yellow-400 w-4 h-4 fill-yellow-400'
									/>
								))}
								{[...Array(5 - selectedReview.rating)].map((_, i) => (
									<Star
										key={i}
										className='text-gray-300 w-4 h-4'
									/>
								))}
							</div>
							<p className='text-sm text-gray-700 mb-4'>
								{selectedReview.comment}
							</p>
							<OwnerReply />
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Reviews;
