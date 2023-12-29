'use-client'

import { user } from '../../store/atoms/user';
import { Card, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios, { AxiosError } from 'axios';
import { FormParams } from '../../zod/form';
import { useForm } from 'react-hook-form';
import { FormInputText } from './form-inputs/FormInputText';
import { FormInputDropdownWithoutDescription } from './form-inputs/MultiselectWithoutDescription';
import { contentType } from './form-initial-inputs/contentType';
import { FormInputDropdownWithDescription } from './form-inputs/MultiselectWithDescription';
import { influencerType } from './form-initial-inputs/influencerType';
import { FormInputDropdownSingleSelect } from './form-inputs/SingleSelect';
import { numberOfPosts } from './form-initial-inputs/numberOfPosts';
import { FormInputTextArray } from './form-inputs/FormInputTextArray';


export default function RegistrationPage() {

  console.log("hi from registrationform");

    // useform hook
    const {
      register,
      handleSubmit,
      control,
      setError,
      getValues,
      formState:{errors,isSubmitting}
      
    }=useForm<FormParams>({
      defaultValues:{
        name:"",
        email:"",
        contentType:[],
        influencerType:[],
        audienceAge:0,
        posts:"",
        platformLink:[]
      }
    });

   
    const User = useRecoilValue(user);
    
    async function Submitfunc(data:FormParams) {

        // converting posts into array
        const platformLinkValue=getValues("platformLink");
        
        // // backend call to save all details 
       
        // try {
        //     const res = await axios.post("/api/registrationForm",data);
        //     console.log(res.data);
        // }
        // catch (err: unknown) {
        //     // console.log((err instanceof AxiosError));


        //     console.log(err);
        //     if ((err instanceof AxiosError)) {
        //         //ZodError
        //         if (err.response?.data?.message?.name === 'ZodError') {
        //         }
        //     }
        // }
        

        console.log(data);

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
                      
                    />
                   
                    <FormInputText
                      name={"email"}
                      control={control}
                      label={"Bussiness E-mail"}
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
                        <button className='form-button' onClick={(handleSubmit(Submitfunc))}>Submit</button>
                    </center>
                </Card>


            </div>
        </>

    )

}

RegistrationPage.auth = true;

