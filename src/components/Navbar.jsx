import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo-color.png';
import Menu from '../assets/menu-btn.svg';
import MenuClose from '../assets/menu-close.svg';

const Navbar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

	const mainLinks = [
		{ name: 'Emergencies', hasSubmenu: true },
		{ name: 'Boiler Cover' },
		{ name: 'Home Cover' },
		{ name: 'Landlord Cover' },
		{ name: 'About' },
		{ name: 'Contact' },
	];

	const emergencySubLinks = [
		'Boiler Repairs',
		'Plumbing Repairs',
		'Boiler Services',
	];

	return (
		<>
			{/* Navbar */}
			<nav className='w-full bg-white shadow-md px-4 py-3 top-0 z-50'>
				<div className='max-w-7xl mx-auto flex items-center justify-between lg:justify-around'>
					{/* Phone icon (mobile) */}
					<div className='lg:hidden'>
						{/* <Phone className='text-blue-600' /> */}
						<FontAwesomeIcon
							icon={faPhone}
							className='text-blue-600 '
						/>
					</div>

					{/* Logo */}
					<div>
						<Link to='#'>
							<img
								className='w-44 p-2'
								src={Logo}
								alt='Logo'
							/>
						</Link>
					</div>

					{/* Desktop nav items */}
					<ul className='hidden lg:flex gap-6 text-gray-500 font-medium relative'>
						{mainLinks.map((item) => (
							<li
								key={item.name}
								className='relative group cursor-pointer'>
								<div className='flex items-center gap-1 hover:text-blue-600'>
									{item.name}
									{item.hasSubmenu}
								</div>

								{item.hasSubmenu && (
									<ul className='absolute top-8 left-0 bg-white shadow-md rounded-lg py-2 px-4 hidden group-hover:block'>
										{emergencySubLinks.map((sub) => (
											<li
												key={sub}
												className='py-1 hover:text-blue-600 whitespace-nowrap'>
												{sub}
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>

					{/* Right buttons + hamburger */}
					<div className='flex items-center gap-4'>
						<div className='hidden lg:block px-4 py-2 rounded-xl text-blue-500 font-bold'>
							Login
						</div>
						<button className='hidden lg:block px-4 py-2 bg-[#1f8ceb] text-white uppercase rounded-full text-sm hover:bg-blue-700'>
							Get a quote
						</button>
						<button
							className='lg:hidden'
							onClick={() => setSidebarOpen(true)}>
							<img
								src={Menu}
								alt='Menu'
								className='w-6 h-6'
							/>
						</button>
					</div>
				</div>
			</nav>

			{/* Sidebar (mobile) */}
			{sidebarOpen && (
				<div className='fixed top-0 left-0 w-full h-full bg-black/70 backdrop-opacity-50 z-50'>
					<div className='fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-xl p-6 flex flex-col'>
						<div className='flex items-center justify-between mb-6'>
							<div>
								<Link
									to='#'
									className='pl-2'>
									<img
										className='w-44 p-2'
										src={Logo}
										alt='Logo'
									/>
								</Link>
							</div>
							<button onClick={() => setSidebarOpen(false)}>
								<img
									src={MenuClose}
									alt='Menu-Close'
									className='w-6 h-6'
								/>
							</button>
						</div>

						<ul className='flex flex-col gap-4 text-blue-400  font-medium'>
							{mainLinks.map((item) => (
								<li
									key={item.name}
									className='border-b-2 border-gray-100 py-2'>
									{item.hasSubmenu ? (
										<div>
											<div
												onClick={() =>
													setMobileDropdownOpen(!mobileDropdownOpen)
												}
												className='flex items-center justify-between cursor-pointer hover:text-blue-600'>
												{item.name}
											</div>
											{mobileDropdownOpen && (
												<ul className='ml-4 mt-2 space-y-2 text-sm'>
													{emergencySubLinks.map((sub) => (
														<li
															key={sub}
															className='hover:text-blue-600 '>
															{sub}
														</li>
													))}
												</ul>
											)}
										</div>
									) : (
										<span className='hover:text-blue-600 cursor-pointer'>
											{item.name}
										</span>
									)}
								</li>
							))}
						</ul>
						<div className='mt-8 flex flex-col gap-3'>
							<button className='w-full px-4 py-2 bg-white border-2 border-[#1f8ceb] text-blue-600 rounded-full text-sm hover:bg-blue-50'>
								Login
							</button>

							<button className='w-full px-4 py-2 bg-[#1f8ceb] text-white rounded-full text-sm hover:bg-blue-700'>
								GET A QUOTE
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
