import Link from 'next/link'

export default function mintProject() {
    return (
    <div className='newProjectCard'>
        <div className='newProject '>
            <h1 className='text-left tabMembers w-full'>New project</h1>
            <div>
                <div className='text-center'>
                    <div>Upload logo</div>
                    <input type="file" id="formFile" className='p-5'/>
                    <div className='text-left w-2/3 mx-auto font-bold'>Title</div>
                    <input type='text' className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></input>
                </div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Type of project</div>
                    <select className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'>
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
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Description</div>
                    <textarea className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></textarea>
                </div>
            </div>
        </div>
        
        <div className='newProject '>
            <h1 className='text-left tabMembers w-full'>Project URLs</h1>
            <div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Web/Demo</div>
                    <input type='url' className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></input>
                </div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Github repo url</div>
                    <input type='url' className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></input>
                </div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>NPMjs url</div>
                    <input type='url' className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></input>
                </div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Main Contract Address</div>
                    <input type='text' className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></input>
                </div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Seconday Contract Address</div>
                    <input type='text' className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></input>
                </div>
            </div>
        </div>
        <div className='newProject '>
            <h1 className='text-left tabMembers w-full'>Stages</h1>
            <div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Stage 1 Description</div>
                    <textarea className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></textarea>
                </div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Github Issues for stage 1</div>
                    <input type='url' className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></input>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Stage 2 Description</div>
                    <textarea className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></textarea>
                </div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Github Issues for stage 2</div>
                    <input type='url' className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></input>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Stage 3 Description</div>
                    <textarea className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></textarea>
                </div>
                <div className='text-center mb-5'>
                    <div className='text-left w-2/3 mx-auto font-bold'>Github Issues for stage 3</div>
                    <input type='url' className='pl-5 text-black w-2/3 mx-auto rounded-bl-gen rounded-tr-gen'></input>
                </div>
            </div>
            <div className='rounded-gen cursor-pointer hover:bg-color1-500 bg-color2-500 py-2 px-5'>mint Project NFT</div>
        </div>
    </div>
    )
}