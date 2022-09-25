export default function Part5() {
    return (
        <div className='formSection'>
            <div>	    
            <div className="formProgress">	
                    <div className="flex ">
                        <div className="flex-1">
                            <div className="progressCircles bg-color1-500 dark:bg-color2-500">✓</div>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-color1-500 dark:bg-color2-500"></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="progressCircles bg-color1-500 dark:bg-color2-500">✓</div>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-color1-500 dark:bg-color2-500" ></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="progressCircles bg-color1-500 dark:bg-color2-500">✓</div>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-color1-500 dark:bg-color2-500"></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="progressCircles bg-color1-500 dark:bg-color2-500">✓</div>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-color1-500 dark:bg-color2-500"></div>
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

                    <div className="barPhase">
                        URLs
                    </div>

                    <div className="barPhase">
                        Stage 01
                    </div>

                    <div className="barPhase">
                        Stage 02
                    </div>			

                    <div className="barPhase underline underline-offset-4">
                        Stage 03
                    </div>			
                </div>
            </div>
            <div className='  w-4/5 mx-auto '>
                <div className=''>
                    <div className='formLabel'>🌳 Stage 03 name</div>
                    <input type='url' placeholder='Set a name for the Stage 1' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500'></input>                    
                </div>
                
            </div>
            <div className='row-span-2 w-4/5 mx-auto'>
                <div className='formLabel'>Description</div>
                <textarea placeholder='Describe your project' className='p-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500 h-full'></textarea>
            </div>
            <div className='pt-14  w-4/5 mx-auto '>
                <div className=''>
                    <div className='formLabel'>Github milestone URL</div>
                    <input type='url' placeholder='Use a Github milestone to track this stage' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500'></input>                    
                </div>
                
            </div>
            
            <div className='text-right w-4/5 my-auto mx-auto'>
                <div className='projectBT w-1/4 ml-auto'>
                    Mint project NFT
                </div>
            </div>
        </div>
    )
}