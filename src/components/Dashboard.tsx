import Users from "./Cards/Users"

export default function Dashboard() {
    return (
       <div className="card0">
        <Users/>
        <div className="projects mt-10 xl:mt-0">
          <h1 className="mb-2">Projects</h1>
          <div className="projectGrid">
            
          </div>
        </div>
        
          <div className="teamCard mt-16 xl:mt-0">
            <div className="teamMembers">
              <h1 className="mb-2 ">Members</h1>
              <div className="teamGrid">

              </div>
            </div>
            <div className="teamStakeholders">
              <h1 className="mb-2">Stakeholders</h1>
              <div className="teamGrid">
                
              </div>
            </div>
            
            
              
            
          </div>

       
       
    
       </div>
    )
}