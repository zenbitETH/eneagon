

export default function Users() {
    return (
      <div className="usersCard">
        <h1 className="mb-2">Users</h1>
        <div className="usersGrid">
          <div className="userSource">
            <h2>Community</h2>
            <div className="userTotal">10,000</div>
            <div className="userWebs">
                <div className="webBt hover:bg-purple-300">dis</div>
                <div className="webBt hover:bg-blue-300">tw</div>
                <div className="webBt hover:bg-blue-300">ln</div>
                <div className="webBt hover:bg-pink-300">IG</div>
                <div className="webBt hover:bg-green-300">lens</div>  
            </div>
          </div>
              
          <div className="userSource">
            <h2>Off-Chain Users</h2>
            <div className="userTotal">1,000</div>
            <div className="userOffchain">
                <div className="webBt hover:bg-purple-300">dis</div>
                <div className="webBt hover:bg-blue-300">tw</div>
            </div>
          </div>

          <div className="userSource text-sm">
            <h2>on-Chain Users</h2>
            <div className="userTotal">100</div>
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