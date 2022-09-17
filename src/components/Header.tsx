import ConnectWallet from '@/components/ConnectWallet'
import Link from 'next/link'
import Image from "next/image"
import ene from "../assets/eneagon.svg"

export default function Header() {
    return (
        <div className="header">
          <div className="wrap">
          <a href="/" className="">
              <Image height={50} width={256} src={ene}/>
          </a>
          <div className="flex md:order-2">
            <div className="border-white border rounded-but py-1 px-10 hover:bg-color1-500 text-white hover:border-color1-500"><ConnectWallet /></div>
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
                  <a  className="menuItem">Stakeholders</a>
                </Link>
              </li>
              <li>
                <a href="/" className="menuItem">Docs</a>
              </li>
            </ul>
          </div>
          </div>
        </div>
    )
}