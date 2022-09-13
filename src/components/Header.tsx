import ConnectWallet from '@/components/ConnectWallet'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="header">
          <div className="wrap">
          <a href="/" className="">
              <span className="">zenbit.eth</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" className=""><ConnectWallet /></button>
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