import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import zenbitLogo from '../../public/images/zenbitLogo.png'

const Home: FC = () => {
	return (
        <div className='h-full'>
			<div className='h-screen grid my-auto text-center items-center'>
				<div className='max-w-2xl mx-auto'>
					<div className='pb-3'><Image src={zenbitLogo} height={1920} width={1920} alt='Zenbit:Public Goods for Cities' /></div>
					<div className='flex gap-5 justify-center'>
						<Link className='' href="https://github.com/zenbitETH" >
							<button className='homeBT'>
								Code Repos
							</button>
						</Link>
					</div>
				</div>
			</div>	
		</div>	
	)
}

export default Home
