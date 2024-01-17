import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { SignInSchema } from "../../../zod/form";
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


    switch (req.method) {
        case 'POST':
            // zod validation
        
            const parsedFormInput = SignInSchema.safeParse(req.body);

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

            res.status(200).json({
                messageType: "ok",
                message: "Correct format of credentials"
            });

            break;
        default:
            res.status(405).json({ message: "wrong method called" });
            break;
    }

}
