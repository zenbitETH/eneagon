import Users from "./Cards/Users"
import Who from "./Cards/Who"
import Project from "./Cards/Project"

export default function Dashboard() {
    return (
       <div className="card0">
        <Users/>
        <Project/>
        <Who/>    
       </div>
    )
}