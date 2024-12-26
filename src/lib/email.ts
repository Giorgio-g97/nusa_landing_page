"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import {Resend} from "resend";
import { GithubAccessTokenEmail } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(emailFormData: z.infer<typeof formSchema>) {
  
  try {
    const { data } = await resend.emails.send({
      from: 'NUSA Creazioni <onboarding@resend.dev>',
      to: [emailFormData.email],
      subject: `Ciao ${emailFormData.userName}!`,
      react: GithubAccessTokenEmail({ userName: emailFormData.userName, email: emailFormData.email, message: emailFormData.message
      }),
    });
    console.log("Form inviato: ", emailFormData);
    console.log("Dati: ", data)



  } catch (error) {
    throw error;
  }
  };
