import Image from "next/image"
import Link from "next/link"
import Project from "./Cards/Project"
import proPlus from "../assets/projectPlus.svg"

export default function Projects () {
    return (
        <div className="projects">
        <div className="projectGrid">
          
          <Project/>
        
          <Link href="/mintProject">
            <div className="addProject">
              <span>Add Project <span><Image src={proPlus} height={50} width={50}/></span></span>
            </div>
          </Link>
        </div>
      </div>
    )
}