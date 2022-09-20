import Users from "./Cards/Users"
import Who from "./Cards/Who"
import Projects from "./Cards/Projects"

export default function Dashboard() {
    return (
       <div className="card0">
        <Users/>
        <Projects/>
        <Who/>    
       </div>
    )
}