import Image from "next/image"
import Link from "next/link"
import Fund from "../SVG/fund"

export default function Stage1 () {
    return (
    <div className='stagesCard relative'>
    <div className="absolute right-5 top-3 cursor-pointer text-3xl">🌱</div>
      <div className='font-extrabold text-lg'>Stage 1:<span>Stage Name</span></div>
      <div className="row-span-2">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-backgrounds-700 font-bold ">
              05 / 35 tasks
            </span>
          </div>
          <div className="text-right">
            <span className="font-semibold inline-block text-backgrounds-700">
              75%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-3 mb-4 text-xs flex items-center bg-gray-300 rounded-gen ">
          <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center h-1.5 ml-1 mr-1 rounded-full text-white justify-center bg-backgrounds-700"></div>
        </div>
      </div>
        
      <div className='row-span-2 text-sm font leading-none text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam. </div>
      <div className='grid grid-cols-2'>
      <div className="grid grid-cols-4 p-1 items-center ">
          <Fund/>
          <div className="stageFunded">$01,000 </div>
        </div>
        <Link href='/donate'>
          <div className='projectBT'>
            Donate now
          </div>
        </Link>
      </div>
    </div>
    )
}