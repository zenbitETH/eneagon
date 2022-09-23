import Link from 'next/link'
import Image from 'next/image'
import SB from '../assets/sbadge.svg'
import SH from '../assets/BadgesP.svg'
import WDC from '../assets/wcn.svg'
import Project from '@/components/Cards/ProjectDetailed'
import Stage1 from '@/components/Stages/Stage1'
import Stage2 from '@/components/Stages/Stage2'
import Stage3 from '@/components/Stages/Stage3'


export default function projectDetail() {
    return (
    <div className='projectCard '>
      <div className='projectMain'>
        <Project/>
      </div>
      <div className='projectHolders'>
        <div className='dataGrid'>
          <div className='grid'>
            <div className='font-extrabold text-lg '>Donations</div>
            <div className='text-center'>
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-backgrounds-900 font-bold ">
                    $00,000
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-semibold inline-block text-color1-500">
                    $00,000
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-3 mb-2 text-xs flex items-center bg-color1-500 rounded-gen ">
                <div style={{ width: "5%" }} className="shadow-none flex flex-col text-center h-1.5 ml-1 mr-1 rounded-full text-white justify-center bg-backgrounds-900"></div>
              </div>
              <div className="text-left">
                  <span className="font-semibold inline-block text-backgrounds-900">
                    05.00%
                  </span>
                </div>
            </div>
          </div> 
          <div className='grid grid-cols-3 text-xl items-center gap-5'>
            <div className='font-extrabold text-lg col-span-3'>Staked Badges</div>
            <div className='text-center'>
              🌱 <span className='italic'>25</span>
            </div>
            <div className='text-center'>
              🪴 <span className='italic'>25</span>
            </div>
            <div className='text-center'>
              🌳 <span className='italic'>25</span>
            </div>
          </div> 
          <div className='grid grid-cols-2 text-xl items-center gap-5'>
            <div className='font-extrabold text-lg col-span-2'>Stakeholders</div>
            <div className="grid grid-cols-2 p-1 items-center">
              <Image src={SH} height={32} width={32}/>
              <div className="text-left">00</div>
            </div>
            <div className="grid grid-cols-2 p-1 items-center">
              <Image src={WDC} height={32} width={32}/>
              <div className="text-left">00</div>
            </div>
          </div> 
          
        </div>  
        <div className='projectFetch'>
          <div className='grid grid-cols-6'>
            <div className='font-extrabold text-lg col-span-4'>Soulbounded Badge</div>
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
            <div>Stage 02 🪴</div>
            <Link href="/"><div className='text-color1-500 italic cursor-pointer font-bold underline underline-offset-4 '>Rewards</div></Link>
          </div>
          <div className='grid grid-cols-2 gap-5 items-center'>
            <div className=''>
              <div className='projectBT'>Stake</div>
            </div>
            <div className=''>
              <div className='projectBT'>Unstake</div>
            </div>
          </div> 
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