import { z } from "zod";

export const formSchema = z.object({
  userName: z
    .string()
    .min(3, { message: "Inserisci almeno 3 caratteri" })
    .max(50),
  email: z.string().email({ message: "Mail non valida!" }),
  message: z.string().min(5, { message: "Inserisci almeno 5 caratteri" }),
});
