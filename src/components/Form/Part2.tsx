export default function Part2 () {
    return (
        <div className='formSection'>
            <div>	    
                <div className="formProgress">	
                    <div className="flex ">
                        <div className="flex-1">
                            <div className="progressCircles bg-color1-500">✓</div>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-color1-500"></div>
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
                    <div className="font-bold text-color1-500">
                        New project
                    </div>

                    <div className="font-bold underline underline-offset-4 text-color1-500">
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
                    <input type='url' placeholder='Paste your project URL' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500'></input>
                </div>
                <div className=''>
                    <div className='formLabel'>Github repo url</div>
                    <input type='url' placeholder='Paste the repository URL for the project' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500'></input>
                </div>
                <div className=''>
                    <div className='formLabel'>Main contract address</div>
                    <input type='url' placeholder='Paste the deployed contract address' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500'></input>
                </div>
                <div className=''>
                    <div className='formLabel'>Type of contract</div>
                    <input type='url' placeholder='Choose the type of contract' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic'></input>
                </div>
                <div className=''>
                    <div className='formLabel'>Deployment network</div>
                    <input type='url' placeholder='Choose where your contracts were deployed' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500'></input>
                </div>
              
                </div>
    

            {/*<div className='text-right w-4/5 my-auto pt-14 mx-auto'>
                <div className='px-10 py-3 hover bg-color1-500 w-fit ml-auto rounded-gen cursor-pointer text-white'>
                    Continue
                </div>
            </div>*/}
        </div>
    )
}