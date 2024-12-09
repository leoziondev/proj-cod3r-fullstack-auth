import { z } from 'zod';

export const userSchema = z.object({
    nome: z
      .string()
      .min(1, {message: "Campo nome é obrigatório"})
      .min(10, { message: "O nome deve ter no mínimo 10 caracteres" })
      .max(150, {message: "Limite máximo de caracteres é 100"}),
    apelido: z
      .string()
      .min(2, { message: "O apelido deve ter no mínimo 2 caracteres" })
      .max(50, { message: "Limite máximo de caracteres é 50"})
      .optional(),
    email: z
      .string()
      .email({ message: "Formato de email inválido" })
      .min(5, { message: "O email deve ter no mínimo 5 caracteres" })
      .max(50, { message: "O email deve ter no máximo 50 caracteres" }),
    senha: z
      .string()
      .min(1, {message: "Campo senha é obrigatório"})
      .min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
      .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula" }) 
      .regex(/[\W_]/, { message: "A senha deve conter pelo menos um caractere especial" }) 
      .max(20, { message: "A senha deve ter no máximo 20 caracteres" }),
      
    telefone: z
      .string()
      .min(1, {message: "Campo telefone é obrigatório"})
      .regex(/^(\+[0-9]{1,2}\s?)?(\(?\d{2}\)?\s?)([89]\d{4}|[0-7]\d{3})[\s\-]?\d{4}$/, { message: "Formato de telefone inválido" }),
    imagem: z
      .string()
      .url({ message: "Imagem deve ser uma URL válida" })
      .optional(),
    perfis: z
      .array(z.object({id: z.string(), nome: z.string()}))
      .optional()
      .refine((data) => data === undefined || data.length > 0, {
        message: "O campo perfis não pode estar vazio",
      })
});