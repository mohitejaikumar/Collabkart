import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismaClient/db"

type Data = {
    message?: boolean;
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(200).json({ message: false });
    }


    switch (req.method) {
        case 'GET':

            let influencer;
            try {
                influencer = await prisma.influencers.findUnique({
                    where: {
                        email: session?.user?.email,
                    }
                })
            }
            catch (error) {
                console.log(error);
                return res.status(200).json({
                    message: false
                });
                
            }

            if (influencer != null) {
                return res.status(200).json({
                    message: true
                });
            }

            return res.status(200).json({
                message: false
            });

        default:
            res.status(405);
            break;
    }
}