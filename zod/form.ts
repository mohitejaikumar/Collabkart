import {z} from 'zod'


export const InfluencerFormSchema=z.object({
    name:z.string().trim().min(3,{message:"Name must be atleast of 3 characters"}),
    email:z.string().trim().email({message:"Invalid email address"}),
    contentType: z.array(z.string()).min(1,{message:"You have to select atleast one option"}),
    influencerType: z.array(z.string()).min(1,{message:"You have to select atleast one option"}),
    audienceAge: z.number().min(5,{message:"minimum age must be 5 years"}),
    posts: z.string().min(1,{message:"You have not selected any option"}),
    platformLink: z.array(z.string()),

})

export type InfluencerFormParams = z.infer<typeof InfluencerFormSchema>;

export const BrandFormSchema = z.object({
    companyName : z.string().trim().min(2,{message:"Company Name must be atleast of 2 characters"}),
    email:z.string().trim().email({message:"Invalid email address"}),
    productDescription : z.string().trim().min(5,{message:"product Description must be atleast of 5 characters"}),
    productDescriptionFile : z.string(),
    targetAudienceDescription : z.string(),
    influencerType : z.array(z.string()).min(1,{message:"You have to select atleast one option"}),
    no_Of_Posts_or_PromotionVideos: z.number().min(1,{message:"Must be atleast 1 post or promotion video"}),
    campaignGoal: z.string().min(1,{message:"Please tell us what is goal of your campaign"}),
    campaignBudget: z.number()
})

export type BrandFormParams = z.infer<typeof BrandFormSchema>;