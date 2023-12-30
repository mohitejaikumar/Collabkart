'use-client'

import { user } from '../../store/atoms/user';
import { Card, CircularProgress, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios, { AxiosError } from 'axios';
import { FormParams } from '../../zod/form';
import { useForm } from 'react-hook-form';
import FormInputText from './form-input-components/FormInputText';
import FormInputDropdownWithoutDescription from './form-input-components/MultiselectWithoutDescription';
import { contentType } from '../form-initial-inputs/contentType';
import FormInputDropdownWithDescription from './form-input-components/MultiselectWithDescription';
import { influencerType } from '../form-initial-inputs/influencerType';
import FormInputDropdownSingleSelect from './form-input-components/SingleSelect';
import { numberOfPosts } from '../form-initial-inputs/numberOfPosts';
import FormInputTextArray from './form-input-components/FormInputTextArray';
import { ZodError } from 'zod';


enum formInputType {
  string,
  number,
}

export default function RegistrationPage() {


  // useform hook
  const {
    handleSubmit,
    control,
    setError,
    formState: { isSubmitting }

  } = useForm<FormParams>({
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

          setError(key, { message: zodError[key] });
        })
      }
      if(res.data.messageType==="ok"){
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
          <FormInputText
            name={"name"}
            control={control}
            label={"Name"}
            inputType={formInputType.string}

          />

          <FormInputText
            name={"email"}
            control={control}
            label={"Bussiness E-mail"}
            inputType={formInputType.string}
          />
          <FormInputDropdownWithoutDescription
            name={"contentType"}
            control={control}
            label={"Content-Type"}
            options={contentType}
          />
          <FormInputDropdownWithDescription
            name={"influencerType"}
            control={control}
            label={"Influencer-Type"}
            options={influencerType}
          />

          <FormInputText
            name={"audienceAge"}
            control={control}
            label={"Audience-Age"}
            inputType={formInputType.number}
          />
          <FormInputDropdownSingleSelect
            name={"posts"}
            control={control}
            label={"Weekly Number of Posts"}
            options={numberOfPosts}
          />
          <FormInputTextArray
            name={"platformLink"}
            control={control}
            label={"Any Platform Link"}
          />

          <center>
            {!isSubmitting ? 
            <button className='form-button' onClick={(handleSubmit(Submitfunc))}>Submit</button>
            :<CircularProgress color="primary" variant="indeterminate" />
            }
          </center>
        </Card>


      </div>
    </>

  )

}

RegistrationPage.auth = true;

