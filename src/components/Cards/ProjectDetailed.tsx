import zen from "../../assets/eneagon.svg"
import Image from "next/image"
import stars from '../../assets/star.svg'
import forks from '../../assets/fork.svg'
import Link from "next/link"
import member from '../../assets/memberBlank.svg'
import Webi from '@/components/SVG/web'
import Giti from  '@/components/SVG/Repo'
import {useState, useEffect} from 'react'
import { getProject, getAllLanguages, getAllContributors, getRepository  }  from '../../APIHandler'


export default function projectDetail() {
  const [projectData, setProjectData] = useState({name:"", contractType:"", type:"", description:"", logo_url:""});
  const [githubData, setGithubData] = useState({watchers:"", forks: ""});
  const [lang, setLanguages] = useState([]);
  const [contributors, setCont] = useState([]);

  const colors = ["bg-red", "bg-blue", "bg-purple", "bg-cyan", "bg-amber", "bg-indigo", "bg-lime", "bg-fuchsia", "bg-amber2", "bg-pink", "bg-green"]

  const setAllFields = async () => {
    const project = await getProject();
   
    setProjectData(project[0]) // Only setting to the first project for now
    const url = {url: project[0].github_url}

    const languages = await getAllLanguages(url)
    const contributors = await getAllContributors(url)
    const repository = await getRepository(url)

    setLanguages(languages)
    setCont(contributors)
    setGithubData(repository.data)
  }
  useEffect(() => {
    setAllFields()
  }, [])


    return (
      <div className="projectDetail">
        <div className="col-span-6 grid-cols-6 grid relative row-span-2">
          <div className="absolute right-5 top-0 cursor-pointer text-4xl">🌱</div>
          <div className="col-span-2">{projectData.logo_url !== "" ? <Image src={projectData.logo_url} height={229} width={229}/>: <Image src={zen} height={229} width={229}/>}</div>
          <div className="grid col-span-4 grid-cols-12 pl-5 gap-5">
            
            <div className="col-span-12 text-left">
              <div className="projectName">{projectData.name}</div>
              <div className="italic text-base font-normal ">{projectData.type}</div>

            </div>
            <div className="grid gap-5 text-sm col-span-12 grid-cols-5 items-center">
              {lang.map((item, index) => (
                <div key={index} className="flex space-x-2">
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
                  <div className="text-left">{(githubData.watchers).toString().padStart(2, "0")}</div>
                </div>
                <div className="grid grid-cols-2 items-center ">
                  <Image src={forks} height={23} width={18}/>
                  <div className="text-left">{(githubData.forks).toString().padStart(2, "0")}</div>
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
              {contributors.map((items, index) => (
                <a key={index} href={items.url}>
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