'use-client'

import { user } from '../../store/atoms/user';
import { Card, CircularProgress } from '@mui/material';
import { useRecoilValue } from 'recoil';
import axios, { AxiosError } from 'axios';
import { InfluencerFormParams, InfluencerFormSchema } from '../../zod/form';
import { useForm } from 'react-hook-form';
import ContentType from '../form-input-components/influencer-components/ContentType';
import { contentType } from '../form-initial-inputs/contentType';
import { influencerType } from '../form-initial-inputs/influencerType';
import NumberOfPosts from '../form-input-components/influencer-components/NumberOfPosts';
import { numberOfPosts } from '../form-initial-inputs/numberOfPosts';
import PlatformLink from '../form-input-components/influencer-components/PlatformLink';
import { zodResolver } from '@hookform/resolvers/zod';
import Name from 'level-up/form-input-components/influencer-components/Name';
import Email from 'level-up/form-input-components/influencer-components/Email';
import AudienceAge from 'level-up/form-input-components/influencer-components/AudienceAge';
import InfluencerType from '../form-input-components/influencer-components/InfluencerType';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { GetServerSideProps } from 'next';
import useSWR from 'swr';
import Loading from './components/Loading';


enum formInputType {
  string,
  number,
}


export default function InfluencerRegistrationPage() {

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR("/api/meInfluencer", fetcher);
  
  // useform hook
  const method = useForm<InfluencerFormParams>({

    resolver: zodResolver(InfluencerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contentType: [],
      influencerType: [],
      posts: "",
      platformLink: [],
      
    }
  });
   

  const User = useRecoilValue(user);

  async function onSubmit(data: InfluencerFormParams) {



    // // backend call to save all details 

    try {

      const res = await axios.post("/api/influencerRegistrationForm", data);

      if (res.data.messageType === "zodError") {

        let zodError = res.data.message;
        Object.keys(zodError).forEach((key) => {


          if (key === "email") {
            method.setError("email", zodError[key]);
          }
          if (key === "name") {
            method.setError("name", zodError[key]);
          }
          if (key === "contentType") {
            method.setError("contentType", zodError[key]);
          }
          if (key === "influencerType") {
            method.setError("influencerType", zodError[key]);
          }
          if (key === "audienceAge") {
            method.setError("audienceAge", zodError[key]);
          }
          if (key === "posts") {
            method.setError("posts", zodError[key]);
          }
          if (key === "platformLink") {
            method.setError("platformLink", zodError[key]);
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

  if(isLoading){
    return (
      <Loading></Loading>
    )
  }

  if (data.message) {
    return (
      <>
        <div className='success-container'> 
          <Card className='success-content'>
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
              <Name
                name={"name"}
                label={"Name"}
                inputType={formInputType.string}
                control={method.control}
              />

              <Email
                name={"email"}
                label={"Bussiness E-mail"}
                inputType={formInputType.string}
                control={method.control}
              />
              <ContentType
                name={"contentType"}
                label={"Content-Type"}
                options={contentType}
                control={method.control}
              />
              <InfluencerType
                name={"influencerType"}
                label={"Influencer-Type"}
                options={influencerType}
                control={method.control}
              />

              <AudienceAge
                name={"audienceAge"}
                label={"Audience-Age"}
                inputType={formInputType.number}
                control={method.control}
              />
              <NumberOfPosts
                name={"posts"}
                label={"Weekly Number of Posts"}
                options={numberOfPosts}
                control={method.control}
              />
              <PlatformLink
                name={"platformLink"}
                label={"Any Platform Link"}
                control={method.control}
              />

              <center>
                {!method.formState.isSubmitting ?
                  <button className='form-button' >Submit</button>
                  : <CircularProgress color="primary" variant="indeterminate" />
                }
              </center>
            </form>
       
        </Card>


      </div>
    </>

  )

}


// InfluencerRegistrationPage.auth = true;

