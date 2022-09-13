import { FC } from 'react'


import Link from 'next/link'
import Image from 'next/image';
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Header from '@/components/Header'; 
import Dashboard from '@/components/Dashboard';

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen font-k2 bg-gradient-to-br from-bgs-900 via-punk-500 to-solar-500 sm:items-center sm:pt-0">
			<div className="absolute top-6 right-6">
				
			</div>
			<Header/>
			<Dashboard/>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			
			
		</div>
	)
}

export default Home
