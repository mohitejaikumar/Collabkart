'use-client'
import { Checkbox, FormControl, FormHelperText, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";
import { validateHeaderValue } from "http";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 500,

        },
    },
};

export default function NumberOfPosts({
    name,
    label,
    options,
    control
}) {

    const form = useFormContext();
    const [inputValue, setInputValue] = useState<string>("");
    function generateSingleOptions() {
        return (
            options.map((option) => {
                return (
                    <MenuItem key={option} value={option}>
                        <ListItemText primary={option} />
                    </MenuItem>
                )
            })
        )
    }
    return (
        <FormControl fullWidth margin={"normal"}>
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
                            value={inputValue}
                            error={!!error}
                            onChange={event => {
                                const { target: { value } } = event;
                                setInputValue(value);
                                onChange(event);
                            }}
                            input={<OutlinedInput label={label} />}
                            // renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
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