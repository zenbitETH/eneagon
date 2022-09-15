import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from "octokit"

// Lists repositories for the specified organization.
const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_OCTOKIT
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await octokit.request("GET /orgs/{org}/repos", {
        org: "zenbitETH",
    })

    res.status(200).json( result )
}

export default handler