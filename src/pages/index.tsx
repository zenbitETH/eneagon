import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import Link from 'next/link'
import Image from 'next/image';
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
				<div className="grid grid-rows">
					<h1 className="text-6xl font-bold dark:text-white">{APP_NAME}</h1>
					<Link href='/'>
                      <a className=''>
                       home
                      </a>
                    </Link>
					<Link href='/page1'>
                      <a className=''>
                       page1
                      </a>
                    </Link>
					
					<Link href='/page2'>
                      <a className=''>
                       page2
                      </a>
                    </Link>
					<Link href='/page3'>
                      <a className=''>
                       page3
                      </a>
                    </Link>
				</div>
			</div>
		</div>
	)
}

export default Home
