import Users from "./Cards/Users"

export default function Dashboard() {
    return (
       <div className="card0">
        <div className="c1">
          <Users/>
          <div className="teamStakeholders">
            <div className="cardB1">
              <h2>Developers</h2>
              <div>1. Github members</div>
              <div>2. Repositories contributors</div>
              <div>3. Dev Roles</div>
              <div>4. Code Languages</div>
            </div>

            <div className="cardB2">
              <h2>Stakeholders</h2>
              <div>Pending on contracts logic</div>
            </div>
          </div>
        </div>

        <div className="c2">Projects</div>
       
    
       </div>
    )
}