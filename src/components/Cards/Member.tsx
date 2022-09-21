import Image from "next/image"
import blank from "../../assets/memberBlank.svg"

export default function Members() {
    return (
      
      <div className="teamMembers">
          <div className="">
          <h1 className="tabMembers ">Collaborators</h1>
          <div className="memberGrid">
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
    )
}