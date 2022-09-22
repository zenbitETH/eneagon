import Link from 'next/link'
import Image from 'next/image'
import Project from '@/components/Cards/ProjectDetailed'


export default function projectDetail() {
    return (
    <div className='projectCard '>
      <div className='projectMain'>
        <Project/>
      </div>
      <div className='projectHolders'>
        <div className='projectFetch'>Total Donated</div>  
        <div className='projectFetch'>Stake soulbound Badge</div>  
      </div>
      <div className='projectStages'>
        <div className='stageCard'>Stage 1</div>
        <div className='stageCard'>Stage 2</div>
        <div className='stageCard'>Stage 3</div>
      </div>
    </div>
    )
}