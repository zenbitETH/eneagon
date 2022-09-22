import zen from "../../assets/zenbit.png"
import Image from "next/image"
import donado from "../../assets/donatedW.svg"
import badge from '../../assets/BadgesW.svg'
import Link from "next/link"

export default function Project () {
    return (
      <div className="projectView">
        <div className="col-span-6 grid-cols-6 grid items-center relative">
        <Link href="/projectDetail"><div className="absolute right-5 top-0 cursor-pointer hover:text-color1-500 ">+ Details</div></Link>
          <div className="col-span-2 ml-5"><Image src={zen} height={250} width={250}/></div>
          <div className="grid col-span-4 grid-cols-12 grid">
            <div className="col-span-8 text-left pl-5">
              <div className="projectName">Project Name</div>
              <div className="italic text-base font-normal ">Type of project</div>
            </div>
          <div className="col-span-4 font-bold">
            <div className="mt-1 text-base">ERC 1155</div>
            <div className=" ">🌱 <span className="italic ">Stage 1</span></div>
          </div>
          </div>
        </div>
        <div className="projectInfo">
          <div className="col-span-12 mx-5  mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="projectFooter">
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
    )
}