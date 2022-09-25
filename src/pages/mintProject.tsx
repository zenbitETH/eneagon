import Part1 from "@/components/Form/Part1"
import Part2 from "@/components/Form/Part2"
import Part3 from "@/components/Form/Part3"
import Part4 from "@/components/Form/Part4"
import Part5 from "@/components/Form/Part5"

export default function mintProject() {
    return (
        <div className='newProjectCard'>
            <Part1/>
            <Part2/>
            <Part3/>
            <Part4/>
            <Part5/>    
        </div>
    )
}