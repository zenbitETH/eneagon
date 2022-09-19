import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from "octokit"

// Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order.
const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_OCTOKIT
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await octokit.request("GET /repos/{owner}/{repo}/stats/contributors", {
        owner: "zenbiteth",
        repo:"Bright-Forest"
    })

    res.status(200).json( result )
}

export default handler