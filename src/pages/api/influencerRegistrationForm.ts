// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'
import { InfluencerFormSchema } from '../../../zod/form'
import prisma from "../../../lib/primaClient/db"
// import { PrismaClient } from '../../../prisma/generated/client'

// const prisma = new PrismaClient();
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
      const parsedFormInput = InfluencerFormSchema.safeParse(req.body);

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

      // connect to db
      await prisma.influencers.create({
        data: {
          name: parsedFormInput.data.name,
          email: session?.user?.email,
          password: session?.user?.password,
          Details: {
            create: {
              bussiness_email: parsedFormInput.data.bussiness_email,
              contentType: parsedFormInput.data.contentType,
              influencerType: parsedFormInput.data.influencerType,
              audienceAge: parsedFormInput.data.audienceAge,
              posts: parsedFormInput.data.posts,
              platformLink: parsedFormInput.data.platformLink
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
