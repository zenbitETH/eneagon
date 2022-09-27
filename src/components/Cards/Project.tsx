import { useMemo } from "react";
import zen from "../../assets/eneagon.svg"
import Image from "next/image"
import donado from "../../assets/donated.svg"
import badge from '../../assets/Badges.svg'
import Link from "next/link"


export default function Project () {
  const gitUrl = useMemo(
    () => ({
      url: "https://github.com/m1guelpf/dapp-starter"
    }), []
  );


  const getRepo = async () => {
    const repoResponse = await fetch("../../api/repository", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gitUrl)
    });

    const repoData = await repoResponse.json();
    const {name, forks, description, watchers: stars, subscribers_count: watchers} = repoData.data;
  
  }

  
  return (
    <div className="projectView">
      <div className="col-span-6 grid-cols-6 grid items-center relative">
      <div className="absolute right-5 top-0 cursor-pointer text-4xl">🌱</div>
        <div className="col-span-2 ml-5"><Image src={zen} height={229} width={229}/></div>
        <div className="grid col-span-4 grid-cols-12 grid">
          <div className="col-span-12 text-left pl-5">
            <div className="projectName">Eneagon</div>
            <div className="italic text-base font-normal ">DAO tooling 
              <span className="pl-1">ERC721</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projectInfo">
        <div className="col-span-12 mx-5  mb-2">
        Eneagon is a public template for a dashboard that lets mint public goods projects as NFTs, helps to coordinate development milestones, and matches developers' and stakeholders' objectives with governance for retroactive public good funding.
        </div>
        <div className="projectFooter">
          <div className="grid grid-cols-2 p-1 items-center">
            <Image src={badge} height={23} width={18}/>
            <div className="text-left">00</div>
          </div>
          <div className="grid grid-cols-4 p-1 items-center ">
            <Image src={donado} height={23} width={18}/>
            <div className="text-left col-span-3">$000,00</div>
            {/* <button onClick={getRepo}>API</button> */}
          </div>
          <Link href="/projectDetail">
            <div className="text-color1-500 dark:text-color2-500 cursor-pointer hover:animate-pulse text-right pr-5">Show more </div>
          </Link>
        </div>
      </div>
    </div>
  )
}