'use-client'

import { Button, Input, InputLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function getbase64(file){
    
    return new Promise((resolve,reject)=>{

           // Read the file as a Data URL
           const reader = new FileReader();
           reader.readAsDataURL(file);
           reader.onloadend = () => {
              
              resolve(reader.result); // Extract base64 data
           };
           reader.onerror = (error) => {
            reject(error);
        };
})}

export default function ProductDescriptionFile({
    name,
    label,
    inputType,
    control
}) {


    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange },
        
                
            }) => (
                <>
                <InputLabel size="normal" style={{margin:"10px 0px"}}>Product Description File (if any)</InputLabel> 
                
                <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={(event) => {
                            
                           async function transformFile(){
                            const file = await getbase64(event.target.files?.[0]);
                            onChange(file);
                           }
                           transformFile();
                        }}
                    />
                </Button>
                </>
            )}
        >

        </Controller>
    )

}