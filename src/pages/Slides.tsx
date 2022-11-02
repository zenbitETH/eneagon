import Image from 'next/image';
import Link from 'next/link';
import GH from '../assets/github.svg'
import PS from '../assets/poap.svg'
import LN from '../assets/linkedin.svg'
import TW from '../assets/twitter.svg'
import LS from '../assets/lens.svg'
import W3C from '../assets/web3cities.png'
import Tags from '../assets/w3tags.png'

export default function Slides() {
    return (        
        
        <div>
			{/*<Dashboard/>*/}
			<div className='h-fit grid md:grid-cols-2 text-center items-center'>
				<div>
					<div className='2xl:text-8xl md:text-5xl text-3xl text-right text-white'>
						Public Goods for Web3 Cities
					</div>
					<div className='pt-5 ml-auto grid grid-cols-5 items-center max-w-2xl text-center'>
						<Link href="https://github.com/zenbitETH" ><div className='cursor-pointer m-auto rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={GH} height={225} width={225}/></div></Link>
						<Link href="https://app.poap.xyz/scan/zenbit.eth" ><div className='cursor-pointer m-auto rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={PS} height={225} width={225}/></div></Link>
						<Link href="https://www.linkedin.com/company/zenbit-eth/" ><div className='cursor-pointer m-auto rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={LN} height={225} width={225}/></div></Link>
						<Link href="https://twitter.com/zenbitMX"><div className='cursor-pointer m-auto p-2 rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={TW} height={225} width={225}/></div></Link>
						<Link href="https://www.lensfrens.xyz/zenbit.lens"><div className='cursor-pointer m-auto p-2 rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={LS} height={225} width={225}/></div></Link>
					</div>
				</div>
				<div className='relative'>
					<div className='absolute top-0 left-0 right-0 p-20 z-0'><Image src={W3C} height={1920} width={1920} /></div>
					<div className='opacity-0 cursor-pointer hover:opacity-100 transition ease-in-out'><Image src={Tags} height={1920} width={1920} className=" "/></div>
					
				</div>
			</div>			
		</div>	
    )
}