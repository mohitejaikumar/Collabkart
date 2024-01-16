'use-client'

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

enum formInputType {
    string,
    number,
}

export default function CampaignBudget({
    name,
    label,
    inputType,
    control
}) {
      

    // const form = useFormContext();
   
    
    function typeTransform(value, typ:formInputType) {
        if (typ === formInputType.string) {
            return value;
        }
        if (typ === formInputType.number) {
            return Number(value);
        }
    }

    
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value, ref },
                fieldState: { error },
                formState,
            }) => (
                <TextField
                    required

                    id="formatted-numberformat-input"
                    type="number"
                    helperText={error ? error.message : null}
                    size={"medium"}
                    error={!!error}
                    onChange={(e) => {
                        onChange(Number(e.target.value));
                    }}
                    value={value}
                    fullWidth={true}
                    label={label}
                    margin={"normal"}
                />
                
            )}
        >

        </Controller>
    )

}