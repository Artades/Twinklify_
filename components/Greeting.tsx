import React from 'react';
import Button from './Button';
import logo from '../public/images/logo.png'
import Image from 'next/image'
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';

const Greeting = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
    return (
			<div className="w-full   flex flex-col items-center justify-center  ">
				<Image src={logo} className='w-30 h-30 mb-16' alt="Logo" />
				<h2 className="text-3xl text-white">
					Welcome to <b className="text-teal-600">Twinklify</b>
				</h2>
                <p className="text-md text-neutral-400 my-5">Embrace your task managment using this App</p>

				<div className="flex items-center">
					<Button label="Login" onClick={loginModal.onOpen} />
                   <span className='text-md text-teal-500 mx-2'></span>
					<Button label="Register" secondary onClick={registerModal.onOpen} />
				</div>
			</div>
		);
};

export default Greeting;