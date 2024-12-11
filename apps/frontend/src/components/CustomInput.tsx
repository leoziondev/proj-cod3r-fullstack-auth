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
    icon?: NonNullable<ReactNode>;
    className?: string;
}

const CustomInput = <T extends ZodSchema>(props: CustomInputProps<T>) => {
    const { id, control, nameControl, labelName, 
        placeholder, type = 'text', 
        showMessage = true, icon, className = ''
    } = props

    const [showText, setShowText] = useState<boolean>(false)

    return (
    <FormField
        control={control}
        name={nameControl as Path<z.infer<T>>}
        render={({ field }) => {
            return (
            <div className="form-item">
                <FormLabel className="form-label">
                    {labelName}
                </FormLabel>
                    <FormControl>
                        <div className='flex flex-col items-center w-full relative'>
                            {showText ? (
                                <Input
                                    id={id}
                                    placeholder={placeholder}
                                    type={"text"}
                                    className="placeholder:text-red-500 input-class"
                                    {...field}
                                />    
                            ) : (
                                <Input
                                    id={id}
                                    placeholder={placeholder}
                                    type={type}
                                    className="input-class"
                                    {...field}
                                />             
                            )}
                            <div onMouseDown={(e) => e.preventDefault()} 
                            onClick={() => setShowText(!showText)}
                            className={`input-icon`}>
                                {icon}
                            </div>
                        </div>
                    </FormControl>  
                <div id="containerFormMessag" className='min-h-[20px]'>
                    { showMessage && <FormMessage className={`form-message ${className}`} /> }
                </div>
            </div>
        )}}
    />
    )
}

export default CustomInput