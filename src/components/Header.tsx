import Link from 'next/link'
import Image from 'next/image'
import retroPGF3 from '../../public/images/retroPGF3.svg'

export default function Header() {
    return (  
      <div className="fixed top-0 left-0 w-full bg-white text-op hover:bg-gradient-to-r hover:from-white hover:via-op/50 hover:to-op hover:text-white rounded-b-3xl text-center py-3 cursor-pointer">
        <Link href='https://round3.optimism.io/projects/0x904fafc79d5a1e200399edc47fbe95e69530075f8a699866ff7ccbd3f5567cb7'>
          <div className='grid grid-cols-6 items-center max-w-md xl:max-w-lg mx-auto '>
            <Image src={retroPGF3} alt='retroPGF3' height={50} width={50} className=''/>
            <div className='w-full h-full col-span-5'>
              <span className='font-bold text-2xl animate-pulse'> OP RetroPGF 3 is live! </span> <br/>
              <span className='text-xs xl:text-sm'>  If you are a Badgeholder, please consider voting for us here!</span>
            </div>
          </div>
        </Link>
      </div>
    )
}