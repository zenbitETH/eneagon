export default function Part2 () {
    return (
        <div className='formSection'>
            <div>	    
                <div className="formProgress">	
                    <div className="flex ">
                        <div className="flex-1">
                            <div className="progressCircles bg-cyber-100 dark:bg-solar-100">✓</div>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-cyber-100 dark:bg-solar-100"></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="progressCircles bg-gray-300"/>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-gray-300" ></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="progressCircles bg-gray-300"/>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-gray-300"></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="progressCircles bg-gray-300"/>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-gray-300"></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="progressCircles bg-gray-300"/>
                        </div>  
                    </div>
                </div>
                <div className="grid mx-5 pl-2 grid-cols-5 text-center text-sm ">
                    <div className="barPhase">
                        New project
                    </div>

                    <div className="barPhase underline underline-offset-4">
                        URLs
                    </div>

                    <div className="">
                        Stage 01
                    </div>

                    <div className="">
                        Stage 02
                    </div>			

                    <div className="">
                        Stage 03
                    </div>			
                </div>
            </div>
            <div className="row-span-4 grid grid-rows-5 w-4/5 mx-auto gap-16">
                <div className=''>
                    <div className='formLabel'>Web/Demo</div>
                    <input type='url' placeholder='Paste your project URL' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-cyber-100'></input>
                </div>
                <div className=''>
                    <div className='formLabel'>Github repo url</div>
                    <input type='url' placeholder='Paste the repository URL for the project' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-cyber-100'></input>
                </div>
                <div className=''>
                    <div className='formLabel'>Main contract address</div>
                    <input type='url' placeholder='Paste the deployed contract address' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-cyber-100'></input>
                </div>
                <div className=''>
                    <div className='formLabel'>Type of contract</div>
                    <select className='pl-5 text-black w-full rounded-dd px-6 py-3 border-cyber-100'>
                        <option selected>Please select</option>
                        <option>ERC20 token</option>
                        <option>ERC721 NFT</option>
                        <option>ERC1155 NFT</option>
                        <option>Governance</option>
                        <option>Custom</option>
                    </select>

                </div>
                <div className=''>
                    <div className='formLabel'>Deployment network</div>
                    <select className='pl-5 text-black w-full rounded-dd px-6 py-3 border-cyber-100'>
                        <option selected>Please select</option>
                        <option>Ethereum Mainnet</option>
                        <option>Optimism</option>
                        <option>Polygon</option>
                        <option>Other</option>
                    </select>
                </div>
              
                </div>
    

            {/*<div className='text-right w-4/5 my-auto pt-14 mx-auto'>
                <div className='px-10 py-3 hover bg-cyber-100 w-fit ml-auto rounded-gen cursor-pointer text-white'>
                    Continue
                </div>
            </div>*/}
        </div>
    )
}