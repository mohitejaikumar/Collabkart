import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/primaClient/db"

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

    // console.log(session);
    switch (req.method) {
        case 'GET':
            let brand;
            try {
                brand = await prisma.brands.findUnique({
                    where: {
                        email: session?.user?.Email,
                    }
                })
            }
            catch (error) {
                console.log(error);
                return res.status(200).json({
                    message: false
                });
            }

            if (brand != null) {
                return res.status(200).json({
                    message: true
                });
            }

            return res.status(200).json({
                message: false
            });

        default:
            res.status(401);
            break;
    }
    res.status(200).json({ message: true });
}