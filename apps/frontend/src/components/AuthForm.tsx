"use client";

import React, { useState } from "react";
import Logo from "@/components/ui/logo";
import { Usuario } from "@repo/core";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userSchema } from "@/validations/UsuarioSchema";
import CustomInput from "./CustomInput";
import {
  MdDriveFileRenameOutline,
  MdOutlineEmail,
  MdOutlinePassword,
} from "react-icons/md";
import { FaGoogle, FaPhoneSquareAlt, FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { LuLoaderCircle, LuUserRoundPen } from "react-icons/lu";

export interface AuthFormProps {
  type: string;
}

const pickSchema = userSchema.pick({
  nome: true,
  email: true,
  senha: true,
  repetirSenha: true,
  telefone: true,
});

const formSchema = pickSchema.refine(
  (data) => data.senha === data.repetirSenha,
  {
    message: "As senhas não coincidem",
    path: ["repetirSenha"],
  }
);

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState<Partial<Usuario> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 1. Definição do Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      repetirSenha: "",
      telefone: "",
    },
  });

  // 2. Definição do handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // executar algo
    // ✅ type safe e validação
    setIsLoading(true);
    //Sequencia de ações
    console.log(values);
    setIsLoading(false);
  }

  return (
    <section className="auth-form">
      <div
        className={`bg-zinc-900 rounded-md px-10 py-8 ${type === "sign-in" ? "h-[700px]" : "max-h-screen"}`}
      >
        <header
          className={`
                    ${
                      type === "sign-in" ? "flex flex-col" : "flex-center gap-4"
                    }
                `}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <Logo />
            <h1
              className={`text-sm lg:text-base mt-5 flex-1
                        font-semibold text-white ${type === "sign-in" && "mb-10"}`}
            >
              {user
                ? "link acount"
                : type === "sign-in"
                  ? "Entre com a sua conta"
                  : "Efetue seu cadastro"}
            </h1>
          </div>
        </header>
        {user ? (
          <div className="flex flex-col gap-4">
            {/*Saida para usuario autenticado*/}
          </div>
        ) : (
          <>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={`
                                ${
                                  type === "sign-in"
                                    ? "space-y-3 h-[300px] relative"
                                    : "space-y-0 h-[530px] relative"
                                }
                            `}
              >
                {type === "sign-up" ? (
                  <>
                    <CustomInput
                      id={"1"}
                      control={form.control}
                      nameControl={"nome"}
                      labelName={"Nome"}
                      placeholder={"Digite seu nome"}
                      icon={<LuUserRoundPen />}
                    />
                    <CustomInput
                      id={"2"}
                      control={form.control}
                      nameControl={"email"}
                      labelName={"Email"}
                      placeholder={"Digite o seu email"}
                      icon={<MdDriveFileRenameOutline />}
                    />
                    <CustomInput
                      id={"3"}
                      control={form.control}
                      nameControl={"senha"}
                      labelName={"Senha"}
                      type={"password"}
                      placeholder={"Digite a sua senha"}
                      icon={<MdOutlinePassword />}
                    />
                    <CustomInput
                      id={"4"}
                      control={form.control}
                      nameControl={"repetirSenha"}
                      labelName={"Repetir Senha"}
                      type={"password"}
                      placeholder={"Repita a sua senha"}
                      icon={<MdOutlinePassword />}
                    />
                    <CustomInput
                      id={"5"}
                      control={form.control}
                      nameControl={"telefone"}
                      labelName={"Telefone"}
                      placeholder={"( )      -     "}
                      icon={<FaPhoneSquareAlt />}
                    />
                  </>
                ) : (
                  <>
                    <CustomInput
                      id={"1"}
                      control={form.control}
                      nameControl={"email"}
                      labelName={"E-mail"}
                      placeholder={"Digite seu e-mail"}
                      icon={<MdOutlineEmail />}
                    />
                    <CustomInput
                      id={"2"}
                      control={form.control}
                      nameControl={"senha"}
                      labelName={"Senha"}
                      placeholder={"Digite sua senha"}
                      type="password"
                      showMessage={false}
                      icon={<FaRegEye />}
                    />
                    <p className="w-full text-end mt-0 absolute text-zinc-700 bottom-[100px]">
                      Esqueceu a Senha?
                    </p>
                  </>
                )}
                <div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="form-btn"
                  >
                    {isLoading ? (
                      <>
                        <LuLoaderCircle className="animate-spin" /> &nbsp;{" "}
                        {/*non-breaking space*/}
                        Loading...
                      </>
                    ) : type === "sign-in" ? (
                      "Autenticar"
                    ) : (
                      "Cadastrar"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
            <div className="flex w-full items-center mt-4">
              <div className="bg-zinc-700 rounded-lg h-[1px] flex-1 mr-3"></div>
              <div className="text-zinc-700 text-16">ou</div>
              <div className="bg-zinc-700 rounded-lg h-[1px] flex-1 ml-3"></div>
            </div>
            <div id="containerGoogle" className="flex-center w-full mt-4">
              <div className="flex-center bg-red-500 rounded-full h-12 w-12">
                <FaGoogle />
              </div>
            </div>
            <footer className="flex flex-col justify-center items-center mt-4 w-full ">
              <div className="flex items-center gap-1 text-16">
                <p>
                  {type === "sign-in"
                    ? "Ainda não possui a sua conta?"
                    : "Já possui uma conta?"}
                </p>
                <p className="text-green-600">
                  {type === "sign-in" ? (
                    <>
                      Cadastra-se
                      <Link href={"/sign-up"} className="ml-1">
                        <u>aqui.</u>
                      </Link>
                    </>
                  ) : (
                    <>
                      Autentica-se
                      <Link href={"/sign-in"} className="ml-1">
                        <u>aqui.</u>
                      </Link>
                    </>
                  )}
                </p>
              </div>
              <div className="text-sm text-zinc-500">
                <p>ou faça login pelo Google clicando no G acima.</p>
              </div>
            </footer>
          </>
        )}
      </div>
    </section>
  );
};

export default AuthForm;
