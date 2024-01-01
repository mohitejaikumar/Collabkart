'use-client'

import { user } from '../../store/atoms/user';
import { Card, CircularProgress } from '@mui/material';
import { useRecoilValue } from 'recoil';
import axios, { AxiosError } from 'axios';
import { FormParams, FormSchema } from '../../zod/form';
import { FormProvider, useForm } from 'react-hook-form';
import Name from '../form-input-components/Name';
import ContentType from '../form-input-components/ContentType';
import { contentType } from '../form-initial-inputs/contentType';
import InfluencerType from '../form-input-components/InfluencerType';
import { influencerType } from '../form-initial-inputs/influencerType';
import NumberOfPosts from '../form-input-components/NumberOfPosts';
import { numberOfPosts } from '../form-initial-inputs/numberOfPosts';
import PlatformLink from '../form-input-components/PlatformLink';
import { zodResolver } from '@hookform/resolvers/zod';
import AudienceAge from '../form-input-components/AudienceAge';
import Email from '../form-input-components/Email';


enum formInputType {
  string,
  number,
}


export default function RegistrationPage() {


  // useform hook
  const method = useForm<FormParams>({

    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      contentType: [],
      influencerType: [],
      audienceAge: 5,
      posts: "",
      platformLink: []
    }
  });


  const User = useRecoilValue(user);

  async function Submitfunc(data: FormParams) {



    // // backend call to save all details 

    try {

      const res = await axios.post("/api/registrationForm", data);

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


  return (

    <>

      <div className='registration-user'>
        Hello {User}!
      </div>
      <div className='registration-form'>

        <Card className='registration-card'>
          <FormProvider {...method}>
            <form>
              <Name
                name={"name"}
                label={"Name"}
                inputType={formInputType.string}

              />

              <Email
                name={"email"}
                label={"Bussiness E-mail"}
                inputType={formInputType.string}
              />
              <ContentType
                name={"contentType"}
                label={"Content-Type"}
                options={contentType}
              />
              <InfluencerType
                name={"influencerType"}
                label={"Influencer-Type"}
                options={influencerType}
              />

              <AudienceAge
                name={"audienceAge"}
                label={"Audience-Age"}
                inputType={formInputType.number}
              />
              <NumberOfPosts
                name={"posts"}
                label={"Weekly Number of Posts"}
                options={numberOfPosts}
              />
              <PlatformLink
                name={"platformLink"}
                label={"Any Platform Link"}
              />

              <center>
                {!method.formState.isSubmitting ?
                  <button className='form-button' onClick={(method.handleSubmit(Submitfunc))}>Submit</button>
                  : <CircularProgress color="primary" variant="indeterminate" />
                }
              </center>
            </form>
          </FormProvider>
        </Card>


      </div>
    </>

  )

}

RegistrationPage.auth = true;

