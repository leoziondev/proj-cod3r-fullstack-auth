import React, { ReactNode, useState } from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, Path } from 'react-hook-form'
import { z, ZodSchema } from 'zod';

export interface CustomInputProps <T extends ZodSchema>{
    id: string;
    control: Control<z.infer<T>>;
    nameControl: keyof z.infer<T>;
    labelName: string;
    placeholder: string;
    type?: string;
    showMessage?: boolean;
    icon: NonNullable<ReactNode>;
    className?: string;
}

const CustomInput = <T extends ZodSchema>(props: CustomInputProps<T>) => {
    const { id, control, nameControl, labelName, 
        placeholder, type = 'text', 
        showMessage = true, icon, className = ''
    } = props

    const [isFocus, setIsFocus] = useState<boolean>(false)

    return (
    <FormField
        control={control}
        name={nameControl as Path<z.infer<T>>}
        render={({ field }) => {
            const {onBlur, ...fieldProps} = field
            return (
            <div className="form-item">
                <FormLabel className="form-label">
                    {labelName}
                </FormLabel>
                <div className="flex flex-col items-center w-full relative">
                    <FormControl>
                        <Input
                            id={id}
                            placeholder={placeholder}
                            type={type}
                            className="input-class"
                            onClick={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            {...fieldProps}
                        />             
                    </FormControl>
                    
                    <div className={`absolute text-zinc-600 top-[10px] right-2 ${isFocus && 'text-zinc-300'}`}>
                        {icon}
                    </div>
                    
                </div>
                { showMessage && <FormMessage className={`form-message ${className}`} /> }
            </div>
        )}}
    />
    )
}

export default CustomInput
