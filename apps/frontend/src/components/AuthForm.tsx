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
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';


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
            <div className='bg-zinc-900 rounded-md px-10 py-8 h-[600px]'>
                <header className="flex flex-col">
                    <Logo />
                    <div className="flex flex-col items-center">
                        <h1 className="text-sm lg:text-2xl
                        font-semibold text-white mb-10">
                            {user
                                ? 'link acount'
                                : type === 'sign-in'
                                    ? 'Entre com a sua conta'
                                    : 'Sign Up'
                            }
                        </h1>
                    </div>
                </header>
                {user ? (
                    <div className="flex flex-col gap-4">
                        {/*Saida para usuario autenticado*/}
                    </div>
                ):(
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-[270px] relative">
                                <CustomInput
                                    id={'1'} 
                                    control= {form.control}
                                    nameControl={'email'} 
                                    labelName={'E-mail'} 
                                    placeholder={'Digite seu e-mail'}
                                    icon={<MdOutlineEmail />}
                                />
                                <CustomInput
                                    id={'2'}
                                    control= {form.control}
                                    nameControl={'senha'} 
                                    labelName={'Senha'} 
                                    placeholder={'Digite sua senha'}
                                    type="password"
                                    showMessage={false}
                                    icon={<FaRegEye />}
                                />
                                <p className='w-full text-end mt-0 absolute text-zinc-700 bottom-[80px]'>Esqueceu a Senha?</p>
                                <Button type="submit" className='w-full bg-green-500 brightness-125 absolute bottom-0'
                                >
                                    Submit
                                </Button>
                            </form>
                        </Form>


                    </>
                )}
            </div>
        </section>
    )
}

export default AuthForm
