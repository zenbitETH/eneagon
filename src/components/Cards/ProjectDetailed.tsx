import zen from "../../assets/eneagon.svg"
import Image from "next/image"
import stars from '../../assets/star.svg'
import forks from '../../assets/fork.svg'
import Link from "next/link"
import member from '../../assets/memberBlank.svg'
import Webi from '@/components/SVG/web'
import Giti from  '@/components/SVG/Repo'
import {useState, useEffect} from 'react'


export default function projectDetail() {
  const [projectData, setProjectData] = useState({});
  const [githubData, setGithubData] = useState({});
  const [lang, setLanguages] = useState([]);
  const [contributors, setCont] = useState([]);

  const colors = ["bg-red", "bg-blue", "bg-purple", "bg-cyan", "bg-amber", "bg-indigo", "bg-lime", "bg-fuchsia", "bg-amber2", "bg-pink", "bg-green"]
  const getProject = async () => {
    const data = {}
    const projectResponse = await fetch("../../api/projects", {
      method: "GET",
    });

    const project = await projectResponse.json();
    const url = {url: project[0]["github_url"]};

    const languagesResp = await fetch("../api/languages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url)
    });

    const repoResp = await fetch("../../api/repository", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url)
    });

    const collabResp = await fetch("../../api/contributors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url)
    })

    const repository = await repoResp.json()
    const languages = await languagesResp.json()
    const collab = await collabResp.json()

    data["project"] =  project
    data["languages"] = languages
    data["repository"] = repository.data // {name, forks, description, watchers: stars, subscribers_count: watchers}
    data["collab"] = collab
    
    return data 
  }
  
  useEffect(() => {
    getProject()
      .then(data => 
        {
          setProjectData(data["project"][0])
          setLanguages(data["languages"])
          setGithubData(data["repository"])
          setCont(data["collab"])
        }
      ); // only pulling the first project for demo purposes.
  }, [])


    return (
      <div className="projectDetail">
        <div className="col-span-6 grid-cols-6 grid relative row-span-2 relative">
          <div className="absolute right-5 top-0 cursor-pointer text-4xl">🌱</div>
          <div className="col-span-2"><Image src={zen} height={229} width={229}/></div>
          <div className="grid col-span-4 grid-cols-12 grid pl-5 gap-5">
            
            <div className="col-span-12 text-left">
              <div className="projectName">{projectData.name}</div>
              <div className="italic text-base font-normal ">{projectData.type}</div>

            </div>
            <div className="grid gap-5 text-sm col-span-12 grid-cols-5 items-center">
              {lang.map((item, index) => (
                <div className="flex space-x-2">
                    <div className={`${colors[index]} rounded-full p-1 my-auto`}></div>
                    <div>{item}</div>
                </div>
              ))}
            </div>
                            
            <div className="projectDes">
              <div className="col-span-12  mb-2">
                {projectData.description}
              </div>
              <div className="grid grid-cols-4 col-span-12 mr-20. mt-2 ">
                <div className="grid grid-cols-2  items-center">
                  <Image src={stars} height={23} width={18}/>
                  <div className="text-left">0{githubData.watchers}</div>  {/* Add zfill later */}
                </div>
                <div className="grid grid-cols-2 items-center ">
                  <Image src={forks} height={23} width={18}/>
                  <div className="text-left">0{githubData.forks}</div> {/* Add zfill later */}
                </div>

                <Link href="/" >
                  <div className="cursor-pointer ml-auto text-right"><Webi/></div>
                </Link>
                <Link href="/" >
                  <div className="cursor-pointer ml-auto text-right"><Giti/></div>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
        <div className="grid gap-5 col-span-6 text-left font-bold row-span-1">
          <div className="border-y-2 grid grid-rows-6 p-5">
            <div className="row-span-2 text-color1-500 font-bold dark:text-color2-500">Team</div>
            <div className="row-span-4 grid items-center grid-cols-9">
              {contributors.map((items) => (
                <a href={items.url}>
                  <Image className="rounded-full" src={items.avatar} height={30} width={30} />
                </a>
              ))}
              <div className="text-2xl font-bold grid text-left  text-color1-500 dark:text-color2-500">+</div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 col-span-6  text-left  row-span-2">
          <div className="rounded-gen grid grid-rows-6 p-5">
            <div className="row-span-1 grid grid-cols-2 text-color1-500 dark:text-color2-500 font-bold">
              <div><span>32 </span> Collectors / Token Holders</div>
              <div className="text-right font-normal text-gray-500">ERC721 <span>• Ethereum Mainnet</span></div>
            </div>
              
            <div className="row-span-5 grid items-center grid-cols-4">
              <div><Image src={member} height={30} width={30}/><span className="ml-5">pastofre.eth</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">habacuc.eth
</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">ilemi.eth</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">punkcities.eth
1</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">address.eth</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">daphnee.eth</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">0x47C9...572B</span></div>
              <div><Image src={member} height={30} width={30}/><span className="ml-5">0x5536...17E8</span></div>
            </div>
          </div>

        </div>
      </div>
    )
}