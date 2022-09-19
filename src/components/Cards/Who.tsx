import Member from "../Cards/Member"
import Stakeholder from "../Cards/Stakeholder"

export default function Who () {
    return (
      <div className="teamCard mt-16 xl:mt-0">
        <Member/>
        <Stakeholder/>
      </div>
    )
}