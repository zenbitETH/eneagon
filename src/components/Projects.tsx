import Image from "next/image"
import Link from "next/link"
import Project from "./Cards/Project"
import proPlus from "../assets/projectPlus.svg"
import zen from "../assets/zenbit.png"

import donado from "../assets/donated.svg"
import badge from '../assets/Badges.svg'


export default function Projects () {
    return (
        <div className="projects">
        <div className="projectGrid">
          
          <Project/>
          <div className="projectView">
      <div className="col-span-6 grid-cols-6 grid items-center relative">
      <div className="absolute right-5 top-0 cursor-pointer text-4xl">🌱</div>
        <div className="col-span-2 ml-5"><Image src={zen} height={229} width={229}/></div>
        <div className="grid col-span-4 grid-cols-12 grid">
          <div className="col-span-12 text-left pl-5">
            <div className="projectName">DeCo</div>
            <div className="italic text-base font-normal ">Type of project • 
              <span className="pl-1">ERC 1155</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projectInfo">
        <div className="col-span-12 mx-5  mb-2">
        Decentralized Commerce for small business with game-fi interactions on Punk Cities


        </div>
        <div className="projectFooter">
          <div className="grid grid-cols-2 p-1 items-center">
            <Image src={badge} height={23} width={18}/>
            <div className="text-left">12</div>
          </div>
          <div className="grid grid-cols-4 p-1 items-center ">
            <Image src={donado} height={23} width={18}/>
            <div className="text-left col-span-3">$5000,00</div>
            {/* <button onClick={getRepo}>API</button> */}
          </div>
          <Link href="/projectDetail">
            <div className="text-lunar-100 dark:text-solar-100 cursor-pointer hover:animate-pulse text-right pr-5">Show more </div>
          </Link>
        </div>
      </div>
    </div>

        
          <Link href="/mintProject">
            <div className="addProject">
              <span>+ Add Project </span>
            </div>
          </Link>
        </div>
      </div>
    )
}