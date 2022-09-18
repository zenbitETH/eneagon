import Users from "./Cards/Users"
import Members from "./Cards/Members"


export default function Dashboard() {
    return (
       <div className="card0">
        <Users/>
        <div className="projects">
          <div className="projectGrid">
            <div className="projectHeader">
              <div className="col-span-8">
                <div className="font-bold text-xl">
                  Project Tittle / Stage
                </div>  
                <div className="">
                  type of project / details
                </div>
              </div>
              <div className="col-span-4 text-sm text-right grid gap-1">
                <div>
                  Updated 00 days agos
                </div> 
                <div>
                  last tx 00 minutes ago
                </div>
              </div>
              
            </div>
            <div className="projectDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="projectStats">
                <div className="col-span-12 grid grid-cols-4">
                  <div className="projectText">
                    <div>•</div>
                    <div className="col-span-5">language</div>
                  </div>
                  <div className="projectNum">
                    <div className="text-right">10</div>
                    <div className="text-left">♀</div>
                  </div>
                  <div className="projectNum">
                    <div className="text-right">10</div>
                    <div className="text-left">♀</div>
                  </div>
                  <div className="projectText">
                    <div className="text-center">10</div>
                    <div className="col-span-5">w/dowloads</div>
                  </div>
                  
                </div>
                <div className="col-span-6 text-center grid grid-cols-3">
                  <div>
                    web/demo
                  </div>
                  <div>
                    repo
                  </div>
                  <div>
                    Contract
                  </div>
                </div>
                <div className="col-span-6 text-center grid grid-cols-2">
                  <div>
                    Soulbounded badges
                  </div>
                  <div>
                    Funded
                  </div>
                </div>
            </div>
          </div>
        </div>
        <Members/>    
       </div>
    )
}