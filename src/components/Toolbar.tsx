import Link from 'next/link'
import Image from 'next/image'
import Medal from '../assets/BadgesW.svg'
import Book from '../assets/Repo.svg'
import Member from '../assets/memberW.svg'
import homebt from '../assets/home.svg'
import newPro from '../assets/projectPlus.svg'

export default function Toolbar() {
    return (
        <nav className='-'>
          
        <div className="toolbar text-center">
        <Link href='/'>
            <a className='imageBG'>
              <Image
                src={homebt}
                width={35}
                height={35}
                className="hover:regen-100 cursor-pointer"
              />
            </a>
          </Link>
          <Link href='/'>
            <a className='imageBG'>
              <Image
                src={newPro}
                width={35}
                height={35}
                className="hover:regen-100 cursor-pointer"
              />
            </a>
          </Link>
          <Link href='/members'>
            <a className='imageBG'>
              <Image
                src={Member}
                width={35}
                height={35}
                className="hover:regen-100 cursor-pointer"
              />  
            </a>
          </Link>
          <Link href='/stakeholders'>
            <a className='imageBG'>
            <Image
              src={Medal}
              width={35}
              height={35}
              className="hover:regen-100 cursor-pointer"
            />
            </a>
          </Link>
          <Link href='/'>
            <a className='imageBG'>
              <Image
                src={Book}
                width={35}
                height={35}
                className="hover:regen-100 cursor-pointer"
              />  
            </a>
          </Link>

        </div>
    </nav>
    )
}