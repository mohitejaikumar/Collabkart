// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'
import { FormSchema } from '../../../zod/form'
import { ZodError} from "zod"
import  {PrismaClient}  from '@prisma/client'

const prisma = new PrismaClient();

type Data = {
  message: string|ZodError
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "unauthorised User" });
  }


  switch (req.method) {
    case 'POST':
      // zod validation
      const parsedFormInput = FormSchema.safeParse(req.body);
      if(!parsedFormInput.success){
        return  res.status(411).json({message:parsedFormInput.error})
      }

      // connect to db
      const user = await prisma.user.create({
        data: {
          name: parsedFormInput.data.name,
          email: parsedFormInput.data.email,
          insta_username: session?.user?.name!,
          Details: {
            create: [
              {
                contentType: parsedFormInput.data.contentType,
                audienceType: parsedFormInput.data.audienceType,
                audienceAge: parsedFormInput.data.audienceAge,
                posts: parsedFormInput.data.posts,
                platformLink: parsedFormInput.data.platformLink
              }
            ],
          }
        }
      })
      
       res.status(200).json({ message: "Form filled successfully" });
      break;
    default:
      res.status(401).json({ message: "wrong method called" });
      break;
  }

}
