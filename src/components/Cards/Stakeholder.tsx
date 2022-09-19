import Image from "next/image"
import blank from "../../assets/memberBlank.svg"
import badge from "../../assets/badges.svg"
import projects from "../../assets/projects.svg"
import donado from "../../assets/donated.svg"

export default function Stakeholder() {
    return (

      <div className="teamMembers">
        <div className="">
          <h1 className="tabMembers ">Stakeholders</h1>
          <div className="memberGrid">
            <div className="col-span-2 font-bold text-center">1</div>
            <div className="stakeholderPhoto">
              <Image src={blank} height={40} width={40}/>
            </div>
            <div className="stakeholderData">
              <div className="stakeholderName">Address / ENS / Lens</div>
              <div className="stakeholderStats">
                <div className="grid grid-cols-2">
                  <Image src={badge} height={18} width={13}/>
                  <div>00</div>
                </div>
                <div className="grid grid-cols-2">
                  <Image src={projects} height={18} width={13}/>
                  <div>00</div>
                </div>
                <div className="grid grid-cols-2 ">
                  <Image src={donado} height={18} width={13}/>
                  <div>00</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 border-b"/>
          </div>
        </div>
      </div>
    )
}