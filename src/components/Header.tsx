import ConnectWallet from '@/components/ConnectWallet'
import Image from 'next/image'
import Link from 'next/link'

import Zen from "../assets/zenbitW.png"

export default function Header() {
    return (
        <div className="header">
          <div className="wrap">
          <Link href="/" className="grid items-center">
            <Image src={Zen} height={30} width={120}/>
          </Link>
          
            <div className="border-backgrounds-400 border-white border rounded-but py-1 px-10 hover:cursor-pointer dark:hover:bg-solar-100 hover:bg-lunar-100 text-backgrounds-400 text-white hover:border-lunar-100">
              <ConnectWallet/>
          </div>
          </div>
        </div>
    )
}