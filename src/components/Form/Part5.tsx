export default function Part5(prop) {
    
    async function getFormData() {
        const formData = {
            logo:"",
            projectName: prop.projectName.current.value,
            projectType: prop.projectType.current.value,
            projectDescription: prop.projectDescription.current.value,
            demoUrl: prop.demoUrl.current.value,
            gitUrl: prop.gitUrl.current.value,
            contractAddress:prop.contractAddress.current.value,
            contractType: prop.contractType.current.value,
            networkName: prop.networkName.current.value,
            stageOne: prop.stageOne.current.value,
            descriptionOne: prop.descriptionOne.current.value,
            urlOne: prop.urlOne.current.value,
            stageTwo: prop.stageTwo.current.value,
            descriptionTwo: prop.descriptionTwo.current.value,
            urlTwo: prop.urlTwo.current.value,
            stageThree: prop.stageThree.current.value,
            descriptionThree:prop.descriptionThree.current.value,
            urlThree: prop.urlThree.current.value
        }

    }
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
                            <div className="progressCircles bg-cyber-100 dark:bg-solar-100">✓</div>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-cyber-100 dark:bg-solar-100" ></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="progressCircles bg-cyber-100 dark:bg-solar-100">✓</div>
                        </div>
                        <div className="progressBar">
                            <div className="barContainer">
                                <div className="barBar bg-cyber-100 dark:bg-solar-100"></div>
                            </div>
                        </div>
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
                    <input ref={prop.stageThree} type='url' placeholder='Set a name for the Stage 1' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500'></input>                    
                </div>
                
            </div>
            <div className='row-span-2 w-4/5 mx-auto'>
                <div className='formLabel'>Description</div>

                <textarea ref={prop.descriptionThree} placeholder='Describe your project' className='p-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500 h-full'></textarea>

            </div>
            <div className='pt-14  w-4/5 mx-auto '>
                <div className=''>
                    <div className='formLabel'>Github milestone URL</div>
                    <input ref={prop.urlThree} type='url' placeholder='Use a Github milestone to track this stage' className='pl-5 text-black w-full mx-auto rounded-dd placeholder:italic border-color1-500'></input>                    
                </div>
                
            </div>
            
            <div className='text-right w-4/5 my-auto mx-auto'>
                <div className='projectBT w-1/4 ml-auto'>
                    Mint project NFT
                </div>
                {/* <button onClick={getFormData}>Click here</button> */}
            </div>
        </div>
    )
}