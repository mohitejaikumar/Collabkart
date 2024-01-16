import { useForm } from "react-hook-form";
import { BrandFormParams, BrandFormSchema } from "../../zod/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CircularProgress } from "@mui/material";
import { brand_influencerType } from "level-up/form-initial-inputs/brand_influencerType";
import CompanyName from "level-up/form-input-components/brands-components/CompanyName";
import ProductDescription from "level-up/form-input-components/brands-components/ProductDescription";
import TargetAudienceDescription from "level-up/form-input-components/brands-components/TargetAudienceDescription";
import BrandsInfluencerType from "level-up/form-input-components/brands-components/BrandsInfluencerType";
import Posts from "level-up/form-input-components/brands-components/Posts";
import CampaignGoal from "level-up/form-input-components/brands-components/CampaignGoal";
import CampaignBudget from "level-up/form-input-components/brands-components/CampaignBudget";
import axios, { AxiosError } from "axios";
import Email from "level-up/form-input-components/brands-components/Email";
import { useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import ProductDescriptionFile from "level-up/form-input-components/brands-components/ProductDescriptionFile";
import useSWR from "swr";
import Loading from "./components/Loading";
import { useRecoilValue } from "recoil";
import { user } from "../../store/atoms/user";


enum formInputType {
  string,
  number,
}

export default function BrandRegistrationPage() {

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR("/api/mebrand", fetcher);

  const User = useRecoilValue(user);
  const method = useForm<BrandFormParams>({

    resolver: zodResolver(BrandFormSchema),
    defaultValues: {
      companyName: "",
      email: "",
      productDescription: "",
      productDescriptionFile: "",
      targetAudienceDescription: "",
      influencerType: [],
      campaignGoal: "",
      campaignBudget: 0,
      no_Of_Posts_or_PromotionVideos: 0

    }
  });


  async function onSubmit(data: BrandFormParams) {

    console.log("hi from submit function");
    try {

      const res = await axios.post("/api/brandRegistrationForm", data);

      if (res.data.messageType === "zodError") {

        let zodError = res.data.message;
        Object.keys(zodError).forEach((key) => {


          if (key === "email") {
            method.setError("email", zodError[key]);
          }
          if (key === "companyName") {
            method.setError("companyName", zodError[key]);
          }
          if (key === "productDescription") {
            method.setError("productDescription", zodError[key]);
          }
          if (key === "targetAudienceDescription") {
            method.setError("targetAudienceDescription", zodError[key]);
          }
          if (key === "influencerType") {
            method.setError("influencerType", zodError[key]);
          }
          if (key === "no_Of_Posts_or_PromotionVideos") {
            method.setError("no_Of_Posts_or_PromotionVideos", zodError[key]);
          }
          if (key === "campaignGoal") {
            method.setError("campaignGoal", zodError[key]);
          }
          if (key === "campaignBudget") {
            method.setError("campaignBudget", zodError[key]);
          }


        })
      }

      if (res.data.messageType === "ok") {
        alert("form submitted successfully!!");
      }

    }
    catch (err: unknown) {


      if ((err instanceof AxiosError)) {
        alert("Form not submitted Successfully!!");
      }
    }

  }

  if (isLoading) {
    return (
      <Loading></Loading>
    )
  }

  if (data.message) {
    return (
      <>
        <div className="success-container">
          <Card className="success-content">
            Thankyou , You have successfully submitted your form!
          </Card>
        </div>
      </>
    )
  }


  return (

    <>
      <div className='influencer-registration-user'>
        Hello {User}!
      </div>

      <div className='influencer-registration-form'>

        <Card className='influencer-registration-card'>

          <form onSubmit={method.handleSubmit(onSubmit)}>
            <CompanyName
              name={"companyName"}
              label={"Company Name"}
              inputType={formInputType.string}
              control={method.control}

            />
            <Email
              name={"email"}
              label={"E-mail"}
              inputType={formInputType.string}
              control={method.control}

            />

            <ProductDescription
              name={"productDescription"}
              label={"Product Description"}
              inputType={formInputType.string}
              control={method.control}
            />

            <ProductDescriptionFile
              name={"productDescriptionFile"}
              label={"Product Description File"}
              inputType={formInputType.string}
              control={method.control}
            />

            <TargetAudienceDescription
              name={"targetAudienceDescription"}
              label={"Target Audience Description"}
              inputType={formInputType.string}
              control={method.control}
            />
            <BrandsInfluencerType
              name={"influencerType"}
              label={"Influencer-Type"}
              options={brand_influencerType}
              control={method.control}
            />

            <Posts
              name={"no_Of_Posts_or_PromotionVideos"}
              label={"No of posts/promotion videos by influencers?"}
              inputType={formInputType.number}
              control={method.control}
            />
            <CampaignGoal
              name={"campaignGoal"}
              label={"Campaign Goals"}
              inputType={formInputType.string}
              control={method.control}
            />
            <CampaignBudget
              name={"campaignBudget"}
              label={"Campaign budget"}
              inputType={formInputType.number}
              control={method.control}
            />

            <center>
              {!method.formState.isSubmitting ?
                <button className='cta-button'>Submit</button>
                : <CircularProgress color="primary" variant="indeterminate" />
              }
            </center>
          </form>

        </Card>


      </div>
    </>

  )

}
// BrandRegistrationPage.auth = true;


