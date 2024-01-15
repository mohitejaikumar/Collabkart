'use-client'
import { Checkbox, FormControl, FormHelperText, InputLabel, ListItem, ListItemText, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import { validateHeaderValue } from "http";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";


const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 10;
const ItemProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 500,

        },
    },
};

export default function BrandsInfluencerType({
    name,
    label,
    options,
    control
}) {
    // const form = useFormContext();
    const [inputValue, setInputValue] = useState<string[]>([]);

    function generateSingleOptions() {
        return (
            options.map((option) => {
                return (
                    <MenuItem key={option.name} value={option.name} style={{ whiteSpace: "unset", paddingTop: "1vw" }}>
                        <Checkbox checked={inputValue.indexOf(option.name) > -1} />
                        <div>
                            <ListItemText primary={option.name} sx={{ fontWeight: "bold" }} />
                            <Typography variant="caption" >Description: {option.description}</Typography>
                        </div>

                    </MenuItem>
                )
            })
        )
    }

    return (
        <FormControl sx={{width:'100%'}} margin={"normal"}>
            <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, value },
                    fieldState: { error }
                }) => (
                    <React.Fragment>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            required
                            fullWidth={true}
                            multiple
                            error={!!error}
                            value={inputValue}
                            onChange={event => {
                                const { target: { value } } = event;
                                setInputValue(
                                    typeof value === 'string' ? value.split(',') : value,
                                );
                                onChange(event);
                            }}
                            input={<OutlinedInput label={label} />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={ItemProps}


                        >
                            {generateSingleOptions()}
                        </Select>
                        {error ? (
                            <FormHelperText error>{error.message}</FormHelperText>
                        ) : null}
                    </React.Fragment>
                )}
            />
        </FormControl>
    )

}