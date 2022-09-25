import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from "octokit"

// List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_OCTOKIT
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    
    if (req.method === "POST") {
        
    } else {
        const result = await octokit.request("GET /orgs/{org}/members", {
        org: "zenbitETH",
        })
        res.status(200).json( result )
    }

}

export default handler