import Image from 'next/image';
import Link from 'next/link';
import GH from '../../public/images/github.png'
import PS from '../../public/images/poap.png'
import LN from '../assets/linkedin.svg'
import TW from '../assets/twitter.svg'
import LS from '../assets/lens.svg'
import W3C from '../assets/web3cities.png'
import Tags from '../assets/w3tags.png'
import Web from '../../public/images/web.png'
import Global from '../../public/images/ethglobal.png'

import PunkCities from '../../public/images/PunkCities.png'
import CiudadesDAO from '../../public/images/CiudadesDAO.png'
import Deco from '../../public/images/Deco.png'
import Eneagon from '../../public/images/Eneagon.png'
import Sparkz from "../../public/images/Sparkz.png"
import Voyage from "../../public/images/voyage.png"

export default function Slides() {
    return (        
        
        <div className='h-full'>
			{/*<Dashboard/>*/}
			<div className='md:h-screen grid md:grid-cols-2 text-center items-center'>
				<div className='pt-20 md:pt-0'>
					<div className='2xl:text-8xl md:text-5xl text-3xl md:text-right text-white font-bold'>
						Public Goods for Web3 Cities
					</div>
					<div className='gap-5 p-5 ml-auto grid grid-cols-5 items-center max-w-2xl text-center'>
						<Link href="https://github.com/zenbitETH" ><div className='cursor-pointer m-auto rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={GH} height={225} width={225}/></div></Link>
						<Link href="https://app.poap.xyz/scan/zenbit.eth" ><div className='cursor-pointer m-auto rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={PS} height={225} width={225}/></div></Link>
						<Link href="https://www.linkedin.com/company/zenbit-eth/" ><div className='cursor-pointer m-auto rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={LN} height={225} width={225}/></div></Link>
						<Link href="https://twitter.com/zenbitMX"><div className='cursor-pointer m-auto p-2 rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={TW} height={225} width={225}/></div></Link>
						<Link href="https://www.lensfrens.xyz/zenbit.lens"><div className='cursor-pointer m-auto p-2 rounded-full w-20 h-20 hover:bg-lunar-100 dark:hover:bg-solar-100'><Image src={LS} height={225} width={225}/></div></Link>
					</div>
				</div>
				<div className='relative -mt-52 md:mt-0'>
					<div className='absolute top-0 left-0 right-0 md:p-20'><Image src={W3C} height={1920} width={1920} /></div>
					<div className='opacity-0 cursor-pointer hover:opacity-100 transition ease-in-out'><Image src={Tags} height={1920} width={1920} className=" "/></div>
				</div>
			</div>	

			<div className='text-center md:h-screen'>
				<div className='col-span-full text-5xl pb-5'>Web3 Cities</div>
				<div className='grid md:grid-cols-2 xl:grid-cols-4 2xl:mx-52  gap-16 px-5 '>
				
				<div className='web3BG'>
					<div className='homeBT'> Gamified Citizenship</div>
				
					<Link href="www.punkcities.surge.sh" >
						<div className='relative cursor-pointer'>
							<Image src={PunkCities} height={500} width={500}/>
						</div>
					</Link>
						
					

					<div className=''>	
						<div className='grid grid-cols-3 mx-auto items-center'>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={Web}/></div>
							</Link> 
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={GH}/></div>
							</Link>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33}  src={Global}/></div>
							</Link>
						</div>
						<div className='homeDS'> Collaborative web3 to mint public places as NFTs and create value from cities metadata.</div>
					</div>
				</div>
				<div className='web3BG'>
						<div className='homeBT'> Decentralized Commerce </div>
					<Link href="www.punkcities.surge.sh"><Image src={Deco} height={500} width={500}/></Link>
					<div className=''>
					<div className='grid grid-cols-3 mx-auto items-center'>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={Web}/></div>
							</Link> 
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={GH}/></div>
							</Link>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33}  src={Global}/></div>
							</Link>
						</div>
						<div className='homeDS'> Decentralized commerce to mint small business, products and services as nfts with game-fi innteractions.</div>
					</div>
				</div>
				<div className='web3BG'>
						<div className='homeBT'> Net Zero Mobility</div>
					<Link href="www.punkcities.surge.sh"><Image src={Sparkz} height={500} width={500}/></Link>
					<div className=''>
					<div className='grid grid-cols-3 mx-auto items-center'>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={Web}/></div>
							</Link> 
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={GH}/></div>
							</Link>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33}  src={Global}/></div>
							</Link>
						</div>
						<div className='homeDS'> Net positive mobility game to track burned calories and gasoline saved on bicycle rides with zk proofs.</div>
					</div>
				</div>
				<div className='web3BG'>
						<div className='homeBT'> Regenerative Tourism</div>
					<Link href="www.punkcities.surge.sh"><Image src={Voyage} height={500} width={500}/></Link>
					<div className=''>
					<div className='grid grid-cols-3 mx-auto items-center'>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={Web}/></div>
							</Link> 
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={GH}/></div>
							</Link>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33}  src={Global}/></div>
							</Link>
						</div>
						<div className='homeDS'>Mint your travels as Voyage NFTs and get rewards for publishing content on lens.</div>
						
					</div>
				</div>
				</div>
			</div>
			<div className='text-center  mx-auto mt-20 md:mt-0 md:h-screen'>
				<div className='col-span-full text-5xl pb-5'>Web3 Public Goods</div>
				<div className='grid md:grid-cols-2 max-w-3xl mx-auto  gap-16 px-5 '>
				<div className='web3BG'>
						<div className='homeBT'> Urban Governance</div>
					<Link href="www.punkcities.surge.sh"><Image src={CiudadesDAO} height={500} width={500}/></Link>
					<div className=''>	
					<div className='grid grid-cols-3 mx-auto items-center'>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={Web}/></div>
							</Link> 
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={GH}/></div>
							</Link>
							<Link href="www.github.com/zenbitETH">
								<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33}  src={Global}/></div>
							</Link>
						</div>
						<div className='homeDS'>DAO template for Latin American cities and urban organizations.</div>
					</div>
				</div>
				<div className='web3BG'>
						<div className='homeBT'> Retroactive Funding</div>
					<Link href="www.punkcities.surge.sh"><Image src={Eneagon} height={500} width={500}/></Link>
					<div className=''>
					<div className='grid grid-cols-3 mx-auto items-center'>
						<Link href="www.github.com/zenbitETH">
							<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={Web}/></div>
						</Link> 
						<Link href="www.github.com/zenbitETH">
							<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33} src={GH}/></div>
						</Link>
						<Link href="www.github.com/zenbitETH">
							<div className='hover:bg-solar-900 rounded-full cursor-pointer h-8 w-fit m-auto'><Image height={33} width={33}  src={Global}/></div>
						</Link>
					</div>
					<div className='homeDS'> Public template to match developers and stakeholders using Retroactive public goods funding</div>
						
					</div>
				</div>
				
				</div>
			</div>
		</div>	
    )
}