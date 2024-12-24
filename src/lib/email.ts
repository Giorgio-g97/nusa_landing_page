"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import {Resend} from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(emailFormData: z.infer<typeof formSchema>) {
  
  try {
    const { error } = await resend.emails.send({
      from: 'NUSA Creazioni <onboarding@resend.dev>',
      to: [emailFormData.email],
      subject: `Ciao ${emailFormData.userName}!`,
      react: EmailTemplate({ userName: emailFormData.userName, email: emailFormData.email, message: emailFormData.message
      }),
    });
    console.log("Form inviato: ", emailFormData);
  
    if (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
  };
