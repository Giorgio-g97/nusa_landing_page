"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from "resend";
import GithubAccessTokenEmail from "../../emails/email-template";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(emailFormData: z.infer<typeof formSchema>) {
  try {
    const { data } = await resend.emails.send({
      from: "NUSA Creazioni <onboarding@resend.dev>",
      to: [emailFormData.email],
      subject: `Ciao ${emailFormData.userName}!`,
      react: GithubAccessTokenEmail({
        userName: emailFormData.userName,
        email: emailFormData.email,
        message: emailFormData.message,
      }),
    });

    return { status: "fulfilled", data };
  } catch (error) {
    throw error;
  }
}
