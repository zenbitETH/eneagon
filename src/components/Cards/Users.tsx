import Image from "next/image"
import discord from "../../assets/discord.svg"
import insta from "../../assets/instagram.svg"
import lens from "../../assets/lens.svg"
import ln from "../../assets/linkedin.svg"
import tw from "../../assets/twitter.svg"
import github from "../../assets/github.svg"
import npm from "../../assets/npm.svg"


export default function Users() {
    return (
      <div className="usersCard">
        <div className="usersGrid">
          <div className="userSource">
            <h2 className="userTittle">Community</h2>
            <div className="userTotal">10 K</div>
            <div className="userWebs">
                <div className="userBt p-[7px] hover:bg-hover-100">
                  <Image src={discord} width={30} height={30} />
                </div>
                <div className="userBt p-[4px] hover:bg-hover-500">
                  <Image src={lens} width={30} height={30} />
                </div>
                <div className="userBt p-[5px] hover:bg-hover-200">
                  <Image src={tw} width={30} height={30} />
                </div>
                <div className="userBt p-[3px] hover:bg-hover-300">
                  <Image src={ln} width={30} height={30} />
                </div>
                <div className="userBt p-[7px] hover:bg-hover-400">
                  <Image src={insta} width={30} height={30} />
                </div>
            </div>
          </div>
              
          <div className="userSource border-y-2">
            <h2 className="userTittle">Off-Chain Users</h2>
            <div className="userTotal">1 K</div>
            <div className="userOffchain ">
                <div className="userBt mr-4 p-[5px] hover:bg-hover-600">
                  <Image src={github} width={30} height={30} />
                </div>
                <div className="userBt ml-4 p-[3px] hover:bg-hover-700">
                  <Image src={npm} width={30} height={30} />
                </div>
            </div>
          </div>

          <div className="userSource text-sm">
            <h2 className="userTittle">on-Chain Users</h2>
            <div className="userTotal">999</div>
            <div className="userOnchain">
                <div className="webBt hover:bg-purple-300">DAO</div>
                <div className="webBt hover:bg-blue-300">721</div>
                <div className="webBt hover:bg-blue-300">1155</div>
                <div className="webBt hover:bg-green-300">lens</div>  
            </div>
          </div>
        </div>  
      </div>
    )
}