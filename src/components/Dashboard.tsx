

export default function Dashboard() {
    return (
       <div className="card0">

        <div className="c1">
          <div className="usersCard">
            <h1>Users</h1>
            <div className="usersGrid">
              
              <div className="userSource">
                <h2>Community (sum of)</h2>
                <div>• Discord</div>
                <div>+ Twitter</div>
                <div>+ Telegram</div>
                <div>+ LinkedIn</div>
                <div>+ Lens</div>
              </div>
              
              <div className="userSource">
                <h2>Off-Chain Users</h2>
                <div>• Github</div>
                <div>• NPMjs</div>
              </div>

              <div className="userSource text-sm">
                <h2>on-Chain Users</h2>
                <div>• Ethereum address</div>
                <div>1. Validated Users (CiudadesDAO)</div>
                <div>2. ERC20 Token holders (VOTO)</div>
                <div>3. ERC721 Token holders (DECO, Voyage)</div>
                <div>4. ERC1155 Token holders (Punk Cities, Bright Forest)</div>
              </div>

            </div>  
          </div>
          <div className="teamStakeholders">
            <div className="cardB1">Developers</div>
            <div className="cardB2">Stakeholders</div>
          </div>
        </div>

        <div className="c2">Projects</div>
       
    
       </div>
    )
}