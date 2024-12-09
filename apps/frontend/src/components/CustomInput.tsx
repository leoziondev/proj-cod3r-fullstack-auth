import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, Path } from 'react-hook-form'
import { z, ZodSchema } from 'zod';

export interface CustomInputProps <T extends ZodSchema>{
    control: Control<z.infer<T>>
    nameControl: keyof z.infer<T>;
    labelName: string;
    placeholder: string;
    type?: string;
    showMessage?: boolean;
}

const CustomInput = <T extends ZodSchema>(props: CustomInputProps<T>) => {
    const { control, nameControl, labelName, placeholder, type = 'text', showMessage = true } = props


    return (
    <FormField
        control={control}
        name={nameControl as Path<z.infer<T>>}
        render={({ field }) => (
            <div className="form-item">
                <FormLabel className="form-label">
                    {labelName}
                </FormLabel>
                <div className="flex flex-col w-full">
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            type={type}
                            className="input-class"
                            {...field}
                        />              
                    </FormControl>
                </div>
                { showMessage && <FormMessage className="form-message" /> }
            </div>
      )}
    />
    )
}

export default CustomInput
