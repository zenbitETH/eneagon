import zen from "../../assets/zenbit.png"
import Image from "next/image"
import Link from "next/link"
import donado from "../../assets/donated.svg"
import badge from '../../assets/Badges.svg'

export default function Project () {
    return (
        <div className="projects">
        <div className="projectGrid">

          <div className="projectView">
            <div className="col-span-6">
              <Image src={zen} width={150} height={150}/>
            </div>
            <div className="projectInfo">
              <div className="font-bold text-color1-500 text-2xl col-span-8 px-5 ">
                Project Name
                <div className="italic text-black text-base font-normal">Type of project</div>
              </div>
              <div className="col-span-4 text-right mr-5 ">
                <div className="mt-1 text-color1-500 text-lg">ERC 1155</div>
                <div className="">🌱 <span className="italic">Stage 1</span></div>
              </div>
              <div className="col-span-12 mx-5  my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </div>
              
              <div className="col-span-12 grid grid-cols-2 bg-color1-500 rounded-b-gen text-white">
                <div className="grid grid-cols-2 p-1 items-center">
                  <Image src={badge} height={18} width={13}/>
                  <div>00</div>
                </div>
                <div className="grid grid-cols-2 p-1 items-center ">
                  <Image src={donado} height={18} width={13}/>
                  <div>00</div>
                </div>
              </div>
            </div>
          </div>
                     
        </div>
      </div>
    )
}