import Link from 'next/link'
import Leader from '@/components/Leader'




export default function stakeholders() {
    return (
        <div className='card0 w-4/6 px-5 overflow-auto'>
            <div className='leaderboard'>
                <div className='grid grid-rows-2 '>
                    <div className='text-2xl font-extrabold underline underline-offset-4 text-center'>Leaderboard</div>
                    <div className=' grid grid-cols-12'>
                        <div className='col-span-1'></div>
                        <div className='leaderCol col-span-3'>Stakeholder</div>
                        <div className='leaderCol col-span-1'>Projects</div>
                        <div className='leaderCol col-span-2'>Donated</div>
                        <div className='leaderCol col-span-3'>Soulbounded Badges</div>
                        <div className='leaderCol col-span-2'>Rewards</div>
                    </div>
                </div>
                <Leader/>
            </div>
        </div>
    )
}