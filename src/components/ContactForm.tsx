"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
// ZOD VALIDATION
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/schemas";
import { POST } from "@/lib/email";

// COMPONENTS
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Form ShadCN import
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// Toaster
import { toast } from "sonner";

const ContactForm = () => {
  // 1. Form Schema.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      message: "",
    },
  });

  // 2. Submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await POST(values); //Async funct (server action)
    if (res.status === "fulfilled") {
      toast.success("Messaggio inviato correttamente!");
    }
  }

  // Framer-motion
  const contactVariants: Variants = {
    initialContact: { y: 50, opacity: 0 },
    animateContact: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={contactVariants}
      initial="initialContact"
      animate="animateContact"
    >
      <Card className="w-full max-w-md md:max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Contattaci</CardTitle>
          <CardDescription className="text-2xl">
            Compila il form per inviarci un messaggio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-3xl">Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Il tuo nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-3xl">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="La tua mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-3xl">Messaggio</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id="message"
                          placeholder="Il tuo messaggio"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button className="w-full" type="submit">
                Invia messaggio
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
