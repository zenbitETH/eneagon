import { useRef } from 'react';
import Part1 from "@/components/Form/Part1"
import Part2 from "@/components/Form/Part2"
import Part3 from "@/components/Form/Part3"
import Part4 from "@/components/Form/Part4"
import Part5 from "@/components/Form/Part5"

export default function mintProject() {
    const nameRef = useRef();
    const typeRef = useRef();
    const descRef = useRef();
    // const logoRef = useRef();

    const demoRef = useRef();
    const repoRef = useRef();
    const contractRef = useRef();
    const tokenRef = useRef();
    const networkRef = useRef();

    const milestoneStageOne = useRef();
    const milestoneDescOne = useRef();
    const milestoneUrlOne = useRef();
    
    const milestoneStageTwo = useRef();
    const milestoneDescTwo = useRef();
    const milestoneUrlTwo = useRef();

    const milestoneStageThree = useRef();
    const milestoneDescThree = useRef();
    const milestoneUrlThree = useRef();

    return (
        <div className='newProjectCard'>
            <Part1 projectName={nameRef} projectType={typeRef} description={descRef} />
            <Part2 demoUrl={demoRef} gitUrl={repoRef} contractAddress={contractRef} contractType={tokenRef} networkName={networkRef} />
            <Part3 stage={milestoneStageOne} description={milestoneDescOne} url={milestoneUrlOne} />
            <Part4 stage={milestoneStageTwo} description={milestoneDescTwo} url={milestoneUrlTwo} />
            
            <Part5 stageThree={milestoneStageThree} descriptionThree={milestoneDescThree} urlThree={milestoneUrlThree} 
                projectName={nameRef} projectType={typeRef} projectDescription={descRef} demoUrl={demoRef} 
                gitUrl={repoRef} contractAddress={contractRef} contractType={tokenRef} networkName={networkRef}
                stageOne={milestoneStageOne} descriptionOne={milestoneDescOne} urlOne={milestoneUrlOne} 
                stageTwo={milestoneStageTwo} descriptionTwo={milestoneDescTwo} urlTwo={milestoneUrlTwo} />   
        </div>
    )
}