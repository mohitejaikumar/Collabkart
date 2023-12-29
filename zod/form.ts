import {z} from 'zod'


export const FormSchema=z.object({
    name:z.string().trim().min(3,{message:"Name must be atlest of 3 characters"}),
    email:z.string().trim().email(),
    contentType: z.array(z.string()),
    influencerType: z.array(z.string()),
    audienceAge: z.number(),
    posts: z.string(),
    platformLink: z.array(z.string()),

})

export type FormParams = z.infer<typeof FormSchema>;