import { FC } from 'react'


import Link from 'next/link'
import Image from 'next/image';
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Header from '../components/header';

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen 

		bg-gradient-to-tl from-purr-500 via-blu-500 to-coral-500
		
		sm:items-center py-4 sm:pt-0">
			
			<div className="absolute top-6 right-6">
				
			</div>
			<Header/>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			
			
		</div>
	)
}

export default Home
