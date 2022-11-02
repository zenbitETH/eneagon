import { NextApiRequest, NextApiResponse } from 'next'
import products from "./projects.json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
        
    res.status(200).json( products )
}

export default handler