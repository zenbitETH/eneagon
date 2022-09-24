export default function Part1() {
    return (
        <div className='formSection'>
            <div>	    
                <div className="formProgress">	
                    <div className="flex ">
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
                        <div className="progressBar ">
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
                    <div className="font-bold underline underline-offset-4 text-color1-500">
                        New project
                    </div>

                    <div className="">
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
            <div className='row-span-2 grid grid-cols-2 w-4/5 mx-auto '>
                <div className='p-5'>
                    <div className='formLabel'>Logo</div>
                    <div className="flex justify-center items-center w-full">
                    <label className="formFile">
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div> 
                </div>
                <div className='p-5 gap-5 grid'>
                    <div>
                        <div className='formLabel'>Project Name</div>
                        <input type='text' placeholder='Name your project' className='placeholder:italic px-6 py-3 text-black w-full border-color1-500 mx-auto rounded-dd'></input>
                    </div>
                    <div>
                    <div className='formLabel'>Type of project</div>
                    <select className='pl-5 text-black w-full rounded-dd px-6 py-3 border-color1-500'>
                        <option selected>Please select</option>
                        <option>DeFi</option>
                        <option>NFTs</option>
                        <option>Gaming</option>
                        <option>DAO Tooling</option>
                        <option>Layer 2</option>
                        <option>Wallet/Payments</option>
                        <option>Developer Tools</option>
                        <option value="">Data/Analytics</option>
                        <option value="">Audio/Video</option>
                        <option value="">Social Network</option>
                        <option value="">Zero Knoledge</option>
                        <option value="">Metaverse</option>
                        <option value="">Other</option>
                    </select>

                    </div>
                </div>
            </div>
            <div className='row-span-2 w-4/5 mx-auto'>
                <div className='formLabel'>Description</div>
                <textarea placeholder='Describe your project' className='p-5 text-black w-full mx-auto rounded-dd placeholder:italic h-full border-color1-500'></textarea>
            </div>
            {/*<div className='text-right w-4/5 my-auto pt-14 mx-auto'>
                <div className='px-10 py-3 hover bg-color1-500 w-fit ml-auto rounded-gen cursor-pointer text-white'>
                    Continue
                </div>
            </div>*/}
        </div>
    )
}