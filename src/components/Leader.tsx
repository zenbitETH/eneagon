import WorldcoinID from '@/components/SVG/worldcoinID'
import Sbadges from '@/components/SVG/SbadgesInv'
import Fund from '@/components/SVG/fund'

export default function Leader () {
    return (
        <div className='row-span-5'>
            <div className='grid grid-cols-12 items-center'>
                <div className='font-bold text-2xl text-center'>1</div>
                <div className='col-span-3 text-left grid grid-cols-5'>
                    <div className='text-left'>
                        <div className='h-10 w-10 bg-backgrounds-600 rounded-full relative'>
                        <div className='absolute bottom-0 -right-1'><WorldcoinID/></div>
                        </div>
                    </div>
                    <div className='col-span-4 text-left'>Address/ENS/lens</div>
                </div>
                <div className='col-span-1'>
                    <div className="grid grid-cols-2 p-1 items-center">
                      <Sbadges/>
                      <div className="text-left italic  text-gray-500 dark:text-backgrounds-500">04</div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className="grid grid-cols-5 text-left p-1 items-center">
                      <div className=''><Fund/></div>
                      <div className="text-left col-span-4 italic text-gray-500 dark:text-backgrounds-500">$00,000</div>
                    <div/>
                    </div>
                </div>
                <div className='col-span-3 grid grid-cols-3'>
                    <div className='text-left'>
                      🌱 <span className='italic'>4</span>
                    </div>
                    <div className='text-left'>
                      🪴 <span className='italic'>0</span>
                    </div>
                    <div className='text-left'>
                      🌳 <span className='italic'>0</span>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='text-left'>
                        🍋 <span className='italic'>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}