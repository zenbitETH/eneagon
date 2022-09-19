import ConnectWallet from '@/components/ConnectWallet'
import Link from 'next/link'
import Image from "next/image"
import Ene from "../assets/Ene"

export default function Header() {
    return (
        <div className="header">
          <div className="wrap">
          <a href="/" className="">
              <Ene/>
          </a>
          <div className="flex md:order-2">
            <div className="border-backgrounds-400 dark:border-white border rounded-but py-1 px-10 hover:cursor-pointer dark:hover:bg-color2-500 hover:bg-color1-500 text-backgrounds-400 dark:text-white hover:border-color1-500">
              <ConnectWallet />
            </div>
            <button data-collapse-toggle="navbar-cta" type="button" className="menuBT" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="menu" id="navbar-cta">
            <ul className="menuContainer">
              <li>
                <Link href="projects">
                  <a  className="menuItem">Projects</a>
                </Link>
                
              </li>
              <li>
                <Link href="stakeholders">
                  <a  className="menuItem">Members</a>
                </Link>
              </li>
              <li>
                <Link href="stakeholders">
                  <a  className="menuItem">Stakeholders</a>
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
    )
}