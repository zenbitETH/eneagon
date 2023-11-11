import Link from 'next/link'

export default function Header() {
    return (  
      <div className="fixed top-0 left-0 w-full bg-op/80 backdrop-blur-md text-center text-white rounded-b-3xl  py-3  cursor-pointer">
        <Link href='https://round3.optimism.io/projects/0x904fafc79d5a1e200399edc47fbe95e69530075f8a699866ff7ccbd3f5567cb7'>
          <h1 className='w-full h-full '>
            <span className='font-bold text-2xl animate-pulse'> OP Retro PGF round 3 is live! </span> <br/>
            <span>  If you are a Badgeholder, please consider voting for us here!</span>
            
          </h1>
        </Link>
      </div>
    )
}