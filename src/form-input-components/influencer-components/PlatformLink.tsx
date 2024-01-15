'use-client'
import { TextField } from "@mui/material";
import { Controller, useFormContext, useWatch } from "react-hook-form";



export default function PlatformLink({
    name,
    label,
    control,
}) {

    // const form = useFormContext();
    
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
                    
                    id={"outlined-required"}
                    helperText={error ? error.message : null}
                    size={"medium"}
                    error={!!error}
                    value={value}
                    onChange={event => {
                        onChange(event.target.value.trim().split(","));
                    }}
                    fullWidth={true}
                    label={label}
                    margin={"normal"}
                />
            )}
        >

        </Controller>
    )

}