import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";
import { validateHeaderValue } from "http";
import { useState } from "react";
import { Controller } from "react-hook-form";


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

export function FormInputDropdownWithoutDescription({
    name,
    control,
    label,
    options
}) {
       
    console.log("hi from without description")
    const [inputValue, setInputValue] = useState<string[]>([]);
    function generateSingleOptions() {
        return (
            options.map((option) => {
                return (
                    <MenuItem key={option} value={option}>
                        <Checkbox checked={inputValue.indexOf(option) > -1}/>
                        <ListItemText primary={option} style={{display:"flex",flexWrap:"wrap"}}/>
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
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        fullWidth={true}
                        multiple
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
                        MenuProps={MenuProps}
                      

                    >
                        {generateSingleOptions()}
                    </Select>
                )}
            />
        </FormControl>
    )

}