import zen from "../../assets/eneagon.svg"
import Image from "next/image"
import donado from "../../assets/donated.svg"
import badge from '../../assets/Badges.svg'
import Link from "next/link"
import {useEffect, useState} from 'react';


export default function Project () {
  const [projectData, setProjectData] = useState({});


  const getProject = async () => {
    const repoResponse = await fetch("../../api/projects", {
      method: "GET",
    });

    return repoResponse.json();
  } 

  // function 

  useEffect(() => {
    getProject()
      .then(data => 
        {
          setProjectData(data[0])
        }
      ); // only pulling the first project for demo purposes.
  }, [])


  return (
    <div className="projectView">
      <div className="col-span-6 grid-cols-6 grid items-center relative">
      <div className="absolute right-5 top-0 cursor-pointer text-4xl">🌱</div>
        <div className="col-span-2 ml-5"><Image src={zen} height={229} width={229}/></div>
        <div className="grid col-span-4 grid-cols-12 grid">
          <div className="col-span-12 text-left pl-5">
            <div className="projectName">{projectData.name}</div>
            <div className="italic text-base font-normal ">{projectData.type} • 
              <span className="pl-1">{projectData.contractType}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projectInfo">
        <div className="col-span-12 mx-5  mb-2">
          {projectData.description}
        </div>
        <div className="projectFooter">
          <div className="grid grid-cols-2 p-1 items-center">
            <Image src={badge} height={23} width={18}/>
            <div className="text-left">25</div>
          </div>
          <div className="grid grid-cols-4 p-1 items-center ">
            <Image src={donado} height={23} width={18}/>
            <div className="text-left col-span-3">$000,00</div>
          </div>
          <Link href={`/projectDetail`}>
            <div className="text-color1-500 dark:text-color2-500 cursor-pointer hover:animate-pulse text-right pr-5">Show more </div>
          </Link>
        </div>
      </div>
    </div>
    
  )
}