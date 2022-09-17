import Image from "next/image"
import blank from "../../assets/memberBlank.svg"
import badge from "../../assets/badges.svg"
import projects from "../../assets/projects.svg"
import donado from "../../assets/donated.svg"

export default function Members() {
    return (
      <div className="teamCard mt-16 xl:mt-0">
      <div className="teamMembers">
        
        
          <div className="">
          <h1 className="tabMembers ">Members</h1>
          <div className="memberGrid">
            <div className="memberPhoto">
              <Image src={blank} height={50} width={50}/>
            </div>
            <div className="memberData">
              <div className="memberName">Username / @username.xyz</div>
              <div className="memberRole">Role</div>
            </div>
            <div className="memberPhoto">
              <Image src={blank} height={50} width={50}/>
            </div>
            <div className="memberData">
              <div className="memberName">Username / @username.xyz</div>
              <div className="memberRole">Role</div>
            </div>
            <div className="memberPhoto">
              <Image src={blank} height={50} width={50}/>
            </div>
            <div className="memberData">
              <div className="memberName">Username / @username.xyz</div>
              <div className="memberRole">Role</div>
            </div>
            <div className="memberPhoto">
              <Image src={blank} height={50} width={50}/>
            </div>
            <div className="memberData">
              <div className="memberName">Username / @username.xyz</div>
              <div className="memberRole">Role</div>
            </div>
            <div className="memberPhoto">
              <Image src={blank} height={50} width={50}/>
            </div>
            <div className="memberData">
              <div className="memberName">Username / @username.xyz</div>
              <div className="memberRole">Role</div>
            </div>
            <div className="memberPhoto">
              <Image src={blank} height={50} width={50}/>
            </div>
            <div className="memberData">
              <div className="memberName">Username / @username.xyz</div>
              <div className="memberRole">Role</div>
            </div>
          </div>
        </div>
      </div>
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
          <div className="memberGrid">
            <div className="col-span-2 font-bold text-center">2</div>
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
          <div className="memberGrid">
            <div className="col-span-2 font-bold text-center">3</div>
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
          <div className="memberGrid">
            <div className="col-span-2 font-bold text-center">4</div>
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
      
    </div>
    )
}