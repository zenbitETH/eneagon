import Link from 'next/link'
import Image from 'next/image'
import SB from '../assets/sbadge.svg'
import SH from '../assets/BadgesP.svg'
import WDC from '../assets/wcn.svg'
import Detail from '@/components/Cards/ProjectDetailed'
import Stage1 from '@/components/Stages/Stage1'
import Stage2 from '@/components/Stages/Stage2'
import Stage3 from '@/components/Stages/Stage3'


export default function projectDetail() {
    return (
    <div className='projectCard '>
      <div className='projectMain'>
        <Detail/>
      </div>
      <div className='projectHolders'>
        <div className='dataGrid'>
          <div className='grid'>
            <div className='font-bold text-lg '>Donations</div>
            <div className='text-center'>
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-color1-500 font-bold ">
                    $00,000 <span className='font-normal'>(% 00.00)</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-semibold inline-block text-gray-500">
                    $00,000
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-3 mb-2 text-xs flex items-center bg-gray-300 rounded-gen ">
                <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center h-1.5 ml-1 mr-1 rounded-full text-white justify-center bg-color1-500"></div>
              </div>
              <div className='grid grid-cols-2'>
                <div className="text-left">
                  <span className="text-sm inline-block text-color1-500">
                    Your share
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm inline-block text-gray-500">
                    Total
                  </span>
                </div>
              </div>
            </div>
          </div> 
          <div className='grid grid-cols-3 text-xl items-center gap-5'>
            <div className='font-bold text-lg col-span-3'>Soulbound badges minted</div>
            <div className='text-center'>
              🌱 <span className='italic'>4</span>
            </div>
            <div className='text-center'>
              🪴 <span className='italic'>0</span>
            </div>
            <div className='text-center'>
              🌳 <span className='italic'>0</span>
            </div>
          </div> 
          <div className='grid grid-cols-2 text-xl items-center gap-5'>
            <div className='font-bold text-lg col-span-2'>Unique stakeholders / humans</div>
            <div className="grid grid-cols-2 p-1 items-center">
              <Image src={SH} height={32} width={32}/>
              <div className="text-left">04</div>
            </div>
            <div className="grid grid-cols-2 p-1 items-center">
              <Image src={WDC} height={32} width={32}/>
              <div className="text-left">01</div>
            </div>
          </div> 
          
        </div>  
        <div className='projectFetch'>
          <div className='grid grid-cols-6'>
            <div className='font-bold text-lg col-span-4'>Soulbounded Badge</div>
            <div className='text-right col-span-2 text-xl'>3.25🍋</div>
          </div> 
          <div className='text-center row-span-3 grid grid-cols-6 items-center'>
            <div>
              ←
            </div>
            <div className='col-span-4'>
              <Image src={SB} height={150} width={150}/>
            </div>
            <div>
              →
            </div>
          </div>
          <div className='text-center'>
            <div>Stage 01 🌱</div>
            <Link href="/"><div className='text-color1-500 italic cursor-pointer font-bold underline underline-offset-4 '>Rewards</div></Link>
          </div>
          <div className='projectBT'>Mint 🌱 SB Badge </div>
        </div>  
      </div>
      <div className='projectStages'>
        <Stage1/>
        <Stage2/>
        <Stage3/>
      </div>
    </div>
    )
}