import zen from "../../assets/zenbit.png"
import Image from "next/image"
import donado from "../../assets/donated.svg"
import badge from '../../assets/Badges.svg'

export default function Project () {
    return (
        <div className="projects">
        <div className="projectGrid">
          <div className="projectNew">+ New project</div>
          <div className="projectView">
            <div className="col-span-2">
              <Image src={zen} width={150} height={150}/>
            </div>
            <div className="text-left bg-glass-700 rounded-gen p-5 col-span-4 grid grid-cols-6">
              <div className="font-bold text-2xl col-span-4">
                Project Name
                <div className="italic text-base font-normal">Type of project</div>
              </div>
              <div className="col-span-2">Stage</div>
              
              <div className="col-span-6 grid grid-cols-4">
              <div className="grid grid-cols-2 p-1 items-center">
                  <Image src={badge} height={18} width={13}/>
                  <div>00</div>
                </div>
                <div className="grid grid-cols-2 p-1 items-center ">
                  <Image src={donado} height={18} width={13}/>
                  <div>00</div>
                </div>
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
          <div className="projectView">
            <div className="col-span-2">
              <Image src={zen} width={150} height={150}/>
            </div>
            <div className="text-left bg-glass-700 rounded-gen p-5 col-span-4 grid grid-cols-6">
              <div className="font-bold text-2xl col-span-4">
                Project Name
                <div className="italic text-base font-normal">Type of project</div>
              </div>
              <div className="col-span-2">Stage</div>
              
              <div className="col-span-6 grid grid-cols-4">
              <div className="grid grid-cols-2 p-1 items-center">
                  <Image src={badge} height={18} width={13}/>
                  <div>00</div>
                </div>
                <div className="grid grid-cols-2 p-1 items-center ">
                  <Image src={donado} height={18} width={13}/>
                  <div>00</div>
                </div>
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