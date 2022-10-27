import ConnectWallet from '@/components/ConnectWallet'
import Image from 'next/image'

import Zen from "../assets/zenbitW.png"

export default function Header() {
    return (
        <div className="header">
          <div className="wrap">
          <a href="/" className="">
            <Image src={Zen} height={50} width={200}/>
          </a>
          <div className="flex md:order-2">
            <div className="border-backgrounds-400 border-white border rounded-but py-1 px-10 hover:cursor-pointer dark:hover:bg-solar-100 hover:bg-lunar-100 text-backgrounds-400 text-white hover:border-lunar-100">
              <ConnectWallet/>
            </div>
            <button data-collapse-toggle="navbar-cta" type="button" className="menuBT" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          </div>
        </div>
    )
}