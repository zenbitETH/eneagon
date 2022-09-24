import zen from "../../assets/zenbit.png"
import Image from "next/image"
import stars from '../../assets/star.svg'
import forks from '../../assets/fork.svg'
import down from '../../assets/download.svg'
import Link from "next/link"
import member from '../../assets/memberBlank.svg'
import Webi from '@/components/SVG/web'
import Giti from  '@/components/SVG/Repo'

export default function projectDetail () {
    return (
      <div className="projectDetail">
        <div className="col-span-6 grid-cols-6 grid relative row-span-2 relative">
          <div className="absolute right-5 top-0 cursor-pointer text-4xl">🌱</div>
          <div className="col-span-2"><Image src={zen} height={229} width={229}/></div>
          <div className="grid col-span-4 grid-cols-12 grid pl-5 gap-5">
            
            <div className="col-span-12 text-left">
              <div className="projectName">Project Name</div>
              <div className="italic text-base font-normal ">Type of project • <span>ERC 1155</span></div>
              
            </div>
            <div className="grid gap-5 text-sm col-span-12 grid-cols-5 items-center">
                <div className="flex space-x-2">
                  <div className="bg-red-500 rounded-full p-1 my-auto"></div>
                  <div>Language</div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-color1-500 rounded-full p-1 my-auto"></div>
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
                            
            <div className="projectDes">
              <div className="col-span-12  mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="grid grid-cols-4 col-span-12 mr-20. mt-2 ">
                <div className="grid grid-cols-2  items-center">
                  <Image src={stars} height={23} width={18}/>
                  <div className="text-left">00</div>
                </div>
                <div className="grid grid-cols-2 items-center ">
                  <Image src={forks} height={23} width={18}/>
                  <div className="text-left">00</div>
                </div>

                <Link href="/" >
                  <div className="cursor-pointer ml-auto text-right"><Webi/></div>
                </Link>
                <Link href="/" >
                  <div className="cursor-pointer ml-auto text-right"><Giti/></div>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
        <div className="grid gap-5 col-span-6 text-left font-bold row-span-1">
          <div className="border-y-2 grid grid-rows-6 p-5">
            <div className="row-span-2 text-color1-500 font-bold dark:text-color2-500">Team</div>
            <div className="row-span-4 grid items-center grid-cols-9">
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
              <Image src={member} height={30} width={30}/>
              <div className="text-2xl font-bold grid text-left  text-color1-500 dark:text-color2-500">+</div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 col-span-6  text-left  row-span-2">
          <div className="rounded-gen grid grid-rows-6 p-5">
            <div className="row-span-1 text-color1-500 dark:text-color2-500 font-bold"><span>8 </span> Collectors / Token Holders</div>
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