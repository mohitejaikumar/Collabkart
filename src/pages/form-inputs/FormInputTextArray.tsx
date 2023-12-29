import { TextField } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";



export function FormInputTextArray({
    name,
    control,
    label,

}) {
    
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