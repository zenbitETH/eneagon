import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from "octokit"

// Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order.
const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_OCTOKIT
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const {url} = req.body
    const [,,,owner, repo] = url.split("/");
    const result = await octokit.request("GET /repos/{owner}/{repo}/contributors", {
        owner:owner,
        repo:repo
    })
    const contributors = result.data.map(x => ({name:x.login, url:x.html_url, avatar:x.avatar_url}))
    res.status(200).json( contributors )
}

export default handler