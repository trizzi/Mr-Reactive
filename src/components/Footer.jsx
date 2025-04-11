import React from 'react';
import Logo from '../assets/logo.png';
import {
	faTwitter,
	faFacebook,
	faInstagram,
	faWhatsapp, // Move it to the correct import
} from '@fortawesome/free-brands-svg-icons'; // From the brands package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faEnvelope,
	faClock,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<footer className='bg-[#000a70] text-white py-12 px-6'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{/* Mr Reactive Description */}
				<div>
					<div className='text-xl font-semibold mb-4'>
						<img
							className='w-44 p-2'
							src={Logo}
							alt='Logo'
						/>
					</div>
					<p className='text-sm leading-relaxed text-white'>
						Mr Reactive is a trading name of Mr Reactive Ltd, registered in
						England and Wales. <br />
						Company No. 10847439. VAT No. 273 6725 79. <br />
						Registered office – Legend House, 173 Sunbridge Road, Bradford, BD1
						2HB
					</p>
				</div>

				{/* Services */}
				<div>
					<h2 className='text-xl font-bold mb-4'>Services</h2>
					<ul className='space-y-2 text-sm text-white'>
						<li>Emergencies</li>
						<li>Boiler Cover</li>
						<li>Home Cover</li>
						<li>Landlord Cover</li>
						<li>ECO4 Funding</li>
					</ul>
				</div>

				{/* Company */}
				<div>
					<h2 className='text-xl font-bold mb-4'>Company</h2>
					<ul className='space-y-2 text-sm text-white'>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
						<li>Privacy Policy</li>
						<li>Terms & Conditions</li>
						<li>T&C For Service Plans</li>
						<li>Plan Summary</li>
					</ul>
				</div>

				{/* Get In Touch */}
				<div>
					<h2 className='text-xl font-bold mb-4'>Get In Touch</h2>
					<ul className='space-y-2 text-sm text-white'>
						<li className='flex items-center gap-2'>
							<FontAwesomeIcon
								icon={faEnvelope}
								size={16}
								className='text-white'
							/>
							office@mrreactive.co.uk
						</li>
						<li className='flex items-center gap-2'>
							<FontAwesomeIcon
								icon={faPhone}
								size={16}
								className='text-white'
							/>
							01274 752 852
						</li>
						<li className='flex items-center gap-2'>
							<FontAwesomeIcon
								icon={faWhatsapp} // Use the correct WhatsApp icon
								size={16}
								className='text-white'
							/>
							07786698488
						</li>
						<li className='flex items-center gap-2'>
							<FontAwesomeIcon
								icon={faClock}
								size={16}
								className='text-white'
							/>
							24/7 UK based helpline
						</li>
					</ul>
				</div>
			</div>

			{/* Divider and Bottom */}
			<div className='border-t border-gray-700 mt-12 pt-6'>
				<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm'>
					{/* Left - Copyright */}
					<p>
						&copy; {new Date().getFullYear()} Mr Reactive Ltd. All rights
						reserved.
					</p>

					{/* Right - Social Icons */}
					<div className='flex gap-4'>
						<a
							href='#'
							aria-label='Twitter'
							className='hover:text-white transition'>
							<FontAwesomeIcon
								icon={faTwitter}
								size={20}
								className='text-white'
							/>
						</a>
						<a
							href='#'
							aria-label='Facebook'
							className='hover:text-white transition'>
							<FontAwesomeIcon
								icon={faFacebook}
								size={20}
								className='text-white'
							/>
						</a>
						<a
							href='#'
							aria-label='Instagram'
							className='hover:text-white transition'>
							<FontAwesomeIcon
								icon={faInstagram}
								size={20}
								className='text-white'
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
