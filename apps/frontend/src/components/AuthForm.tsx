'use client';

import React, { useState } from 'react';
import Logo from './ui/Logo';
import { Usuario } from '@repo/core';
import { string, z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { userSchema } from '@/validations/UsuarioSchema';
import CustomInput from './CustomInput';


export interface AuthFormProps {
    type: string
}


const formSchema = userSchema.pick({
    email: true,
    senha: true,
});


const AuthForm = ({ type }: AuthFormProps ) => {
    
    const [user, setUser] = useState <Partial<Usuario> | null> (null)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            senha:"",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Logo />
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36
                    font-semibold text-white">
                        {user
                            ? 'link acount'
                            : type === 'sign-in'
                                ? 'Sign In'
                                : 'Sign Up'
                        }
                    </h1>
                    <p className="text-16 font-normal
                    text-zinc-200">
                        {user
                            ? 'Alguma coisa'
                            : 'Por favor outra coisa'
                        }
                    </p>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    {/*Saida para usuario autenticado*/}
                </div>
            ):(
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <CustomInput 
                                control= {form.control}
                                nameControl={'email'} 
                                labelName={'E-mail'} 
                                placeholder={'Digite seu e-mail'}
                            />
                            <CustomInput 
                                control= {form.control}
                                nameControl={'senha'} 
                                labelName={'Senha'} 
                                placeholder={'Digite sua senha'}
                                type="password"
                                showMessage={false}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </>
            )}
        
        </section>
    )
}

export default AuthForm
