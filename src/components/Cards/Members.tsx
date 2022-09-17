import Image from "next/image"
import blank from "../../assets/memberBlank.svg"

export default function Members() {
    return (
      <div className="teamCard mt-16 xl:mt-0">
      <div className="teamMembers">
        
        <div className="teamGrid">
          <div className="memberGrid">
          <h1 className="tabMembers ">Members</h1>
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
      <div className="teamStakeholders">
        
        <div className="teamGrid">
        <h1 className="tabStakeholders">Stakeholders</h1>  
        </div>
      </div>
      
    </div>
    )
}