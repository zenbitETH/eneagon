import Image from 'next/image';
import Logo from '../assets/bigLogo.svg'
import retro0 from '../assets/retro0.svg'
import retro1 from '../assets/retro1.svg'
import retro2 from '../assets/retro2.svg'
import retro3 from '../assets/retro3.svg'
import retro4 from '../assets/retro4.svg'
import retro5 from '../assets/retro5.svg'
import retro6 from '../assets/retro6.svg'
import retro7 from '../assets/retro7.svg'
import retro8 from '../assets/retro8.svg'
import retro9 from '../assets/retro9.svg'


export default function Home() {
    return (        
        
        <div>
			{/*<Dashboard/>*/}
			<div className='h-[80vh] grid grid-cols-2 text-center my-24 w-[130vh] items-center'>
				<div>
					<Image src={Logo} width={600}/>
					<div className='text-white text-3xl text-right italic'>Developed @ ETH Online 2022</div>
				</div>
				<div className='m-16'>
					<div className='text-7xl pb-10'>🌱🪴🌳🍋 </div>
					<div className='text-white text-xl text-justify  pt-5'>
						A Public template to onboard developers and stakeholders into retroactive public goods funding.
					</div>
				</div>
			</div>
			<div className='h-[80vh] grid grid-cols-2 text-center my-24 w-[130vh] items-center'>
				<div>
					<Image src={retro0}/>
				</div>
				<div className=''>
					<Image src={retro1}/>
				</div>
			</div>
			<div className='h-[80vh] grid grid-cols-2 text-center my-24 w-[130vh] items-center'>
				<div>
					<Image src={retro2}/>
				</div>
				<div className=''>
					<Image src={retro3}/>
				</div>
			</div>
			<div className='h-[80vh] grid grid-cols-1 text-center my-24 w-[130vh] items-center'>
				<div>
					<Image src={retro4}/>
				</div>
			</div>
			<div className='h-[80vh] grid grid-cols-1 text-center my-24 w-[130vh] items-center'>
				<div>
					<Image src={retro5}/>
				</div>
			</div>
			<div className='h-[80vh] grid grid-cols-1 text-center my-24 w-[130vh] items-center'>
				<div>
					<Image src={retro6}/>
				</div>
			</div>
			<div className='h-[80vh] grid grid-cols-1 text-center my-24 w-[130vh] items-center'>
				<div>
					<Image src={retro7}/>
				</div>
			</div>
			<div className='h-[80vh] grid grid-cols-1 text-center my-24 w-[130vh] items-center'>
				<div>
					<Image src={retro8}/>
				</div>
			</div>
			<div className='h-[80vh] grid grid-cols-1 text-center my-24 w-[130vh] items-center'>
				<div>
					<Image src={retro9}/>
				</div>
			</div>
		</div>	
    )
}