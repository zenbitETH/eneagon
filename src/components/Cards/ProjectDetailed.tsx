import zen from "../../assets/zenbit.png"
import Image from "next/image"
import repo from '../../assets/Repo.svg'
import web from '../../assets/web.svg'
import stars from '../../assets/star.svg'
import forks from '../../assets/fork.svg'
import down from '../../assets/download.svg'
import donado from "../../assets/donatedW.svg"
import badge from '../../assets/BadgesW.svg'
import Link from "next/link"
import member from '../../assets/memberW.svg'

export default function projectDetail () {
    return (
      <div className="projectDetail">
        <div className="col-span-6 grid-cols-6 grid relative row-span-2">
          <div className="col-span-2"><Image src={zen} height={250} width={250}/></div>
          <div className="grid col-span-4 grid-cols-12 grid pl-5">
            
            <div className="col-span-8 text-left">
              <div className="projectName">Project Name</div>
              <div className="italic text-base font-normal ">Type of project</div>
              <div className="grid grid-cols-3 mr-20. mt-2 ">
                <div className="grid grid-cols-2  items-center">
                  <Image src={stars} height={23} width={18}/>
                  <div className="text-left">00</div>
                </div>
                <div className="grid grid-cols-2 items-center ">
                  <Image src={forks} height={23} width={18}/>
                  <div className="text-left">00</div>
                </div>
                <div className="grid grid-cols-2 items-center ">
                  <Image src={down} height={23} width={18}/>
                  <div className="text-left">00</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 font-bold">
              <div className="mt-1 text-base">ERC 1155</div>
              <div className=" ">🌱 <span className="italic ">Stage 1</span>
              <div className="grid grid-cols-2 items-center text-center pt-2 px-7">
                <div className="cursor-pointer">
                  <Image src={web} height={25} width={25}/>
                </div>
                <div className="cursor-pointer">
                  <Image src={repo} height={25} width={25}/>
                </div>
              </div>
            </div>            
            </div>                   
            <div className="projectDes">
              <div className="col-span-12  mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="grid gap-5 text-sm col-span-12 grid-cols-5 items-center">
                <div className="flex space-x-2">
                  <div className="bg-red-500 rounded-full p-1 my-auto"></div>
                  <div>Language</div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-green-500 rounded-full p-1 my-auto"></div>
                  <div>Language</div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-blue-500 rounded-full p-1 my-auto"></div>
                  <div>Language</div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-yellow-500 rounded-full p-1 my-auto"></div>
                  <div>Language</div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-purple-500 rounded-full p-1 my-auto"></div>
                  <div>Language</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="grid gap-5 col-span-6 text-left text-white font-bold row-span-1">
          <div className="bg-color1-500 rounded-gen grid grid-rows-6 p-5">
            <div className="row-span-2">Team</div>
            <div className="row-span-4 grid items-center grid-cols-9">
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
            </div>
          </div>
        </div>
        <div className="grid gap-5 col-span-6  text-left text-white font-bold row-span-2">
          <div className="bg-color2-500 rounded-gen grid grid-rows-6 p-5">
            <div className="row-span-1"><span>8 </span> Collectors / Token Holders</div>
            <div className="row-span-5 grid items-center grid-cols-4">
              <div><Image src={member} height={30} width={30}/><span className="ml-5">address.eth</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">0x1234...abcd</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">address.eth</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">0x1234...abcd</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">address.eth</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">0x1234...abcd</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">address.eth</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">0x1234...abcd</span></div>
            </div>
          </div>

        </div>
      </div>
    )
}