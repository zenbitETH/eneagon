import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from "octokit"

// Get a repository
const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_OCTOKIT
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const {url} = req.body
    const [,,,owner, repo] = url.split("/");
    const result = await octokit.request('GET /repos/{owner}/{repo}', {
        owner:owner,
        repo:repo
    })
    

    res.status(200).json( result )
}

export default handler
