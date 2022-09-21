import zen from "../../assets/zenbit.png"
import Image from "next/image"
import Link from "next/link"
import donado from "../../assets/donatedW.svg"
import badge from '../../assets/BadgesW.svg'

export default function Project () {
    return (
        <div className="projects">
        <div className="projectGrid">
          <div className="projectView">
            <div className="col-span-6 grid-cols-6 grid items-center">
              <div className="col-span-2 ml-5"><Image src={zen} height={250} width={250}/></div>
              <div className="grid col-span-4">
                <div className="font-bold text-left text-color1-500 text-2xl px-5 ">
                  Project Name <span className="mt-1 text-black text-base ml-3">ERC 1155</span>
                  <div className="italic text-black text-base font-normal my-2">Type of project</div>
                </div>
                <div className="px-5 text-left mr-5">
                  
                  <div className="">🌱 <span className="italic">Stage 1</span></div>
                </div>
              </div>
            </div>
            <div className="projectInfo">
              
              <div className="col-span-12 mx-5  mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

              </div>
              
              <div className="text-xl col-span-12 grid grid-cols-2 bg-color1-500 rounded-b-gen text-white">
                <div className="grid grid-cols-2 p-1 items-center">
                  <Image src={badge} height={23} width={18}/>
                  <div className="text-left">00</div>
                </div>
                <div className="grid grid-cols-4 p-1 items-center ">
                  <Image src={donado} height={23} width={18}/>
                  <div className="text-left col-span-3">000.00 USD</div>
                </div>
              </div>
            </div>
          </div>
                     
        </div>
      </div>
    )
}