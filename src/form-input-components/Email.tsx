'use-client'

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

enum formInputType {
    string,
    number,
}

export default function Email({
    name,
    label,
    inputType
}) {
      

    const form = useFormContext();


    function typeTransform(value:string, typ:formInputType) {
        if (typ === formInputType.string) {
            return String(value);
        }
        if (typ === formInputType.number) {
            return Number(value);
        }
    }
    return (
        <Controller
            name={name}
            control={form.control}
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
                    onChange={(e) => {
                        onChange(typeTransform(e.target.value, inputType));
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