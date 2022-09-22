import Link from 'next/link'
import Image from 'next/image'
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
        <div className='projectFetch'>Total Donated</div>  
        <div className='projectFetch'>Stake soulbound Badge</div>  
      </div>
      <div className='projectStages'>
        <Stage1/>
        <Stage2/>
        <Stage3/>
        
      </div>
    </div>
    )
}