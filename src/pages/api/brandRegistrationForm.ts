import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { BrandFormSchema } from "../../../zod/form";
import { PrismaClient } from '../../../prisma/generated/client'
import prisma from "../../../lib/primaClient/db"


type TzodError = {
    [key: string]: string
}

type Data = {
    messageType?: string,
    message: string | TzodError
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(401).json({ message: "unauthorised User" });
    }

    switch (req.method) {
        case 'POST':
            // zod validation
            const parsedFormInput = BrandFormSchema.safeParse(req.body);

            if (!parsedFormInput.success) {

                let zodError: TzodError = {};
                parsedFormInput.error.issues.map((issue) => {
                    zodError = { ...zodError, [issue.path[0]]: issue.message };
                })

                return res.status(200).json({
                    messageType: "zodError",
                    message: zodError
                });
            }

            
            // // connect to db
            await prisma.brands.create({
                data: {
                    email: session?.user?.Email,
                    companyName: parsedFormInput.data.companyName,
                    password: session?.user?.Password,
                      Details: {
                        create: {
                            bussiness_email:parsedFormInput.data.bussiness_email,
                            productDescription: parsedFormInput.data.productDescription,
                            productDescriptionFile: parsedFormInput.data.productDescriptionFile,
                            targetAudienceDescription: parsedFormInput.data.targetAudienceDescription, 
                            influencerType:parsedFormInput.data.influencerType,
                            no_Of_Posts_or_PromotionVideos:parsedFormInput.data.no_Of_Posts_or_PromotionVideos,
                            campaignGoal:parsedFormInput.data.campaignGoal,
                            campaignBudget:parsedFormInput.data.campaignBudget
                        }
                    }

                }
            })

            res.status(200).json({
                messageType: "ok",
                message: "Form filled successfully"
            });

            break;
        default:
            res.status(405).json({ message: "wrong method called" });
            break;
    }

}
