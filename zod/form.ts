import {z} from 'zod'


export const FormSchema=z.object({
    name:z.string().trim().min(3,{message:"Name must be atleast of 3 characters"}),
    email:z.string().trim().email({message:"Invalid email address"}),
    contentType: z.array(z.string()).min(1,{message:"You have to select atleast one option"}),
    influencerType: z.array(z.string()).min(1,{message:"You have to select atleast one option"}),
    audienceAge: z.number().min(5,{message:"minimum age must be 5 years"}),
    posts: z.string().min(1,{message:"You have not selected any option"}),
    platformLink: z.array(z.string()),

})

export type FormParams = z.infer<typeof FormSchema>;