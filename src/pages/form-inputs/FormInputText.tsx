import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";



export function FormInputText({
    name,
    control,
    label,

}){

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
                    onChange={onChange}
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