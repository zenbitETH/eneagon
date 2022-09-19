import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from "octokit"

// Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_OCTOKIT
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await octokit.request("GET /repos/{owner}/{repo}/languages", {
        owner: "zenbitETH",
        repo: "Bright-Forest"
    })

    res.status(200).json( result )
}

export default handler
