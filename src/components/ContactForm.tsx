"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
// ZOD VALIDATION
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/schemas";
import { POST } from "@/lib/email";

//Lucide Icons
import { Check, ChevronsUpDown } from "lucide-react";

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

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

// Toaster
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ContactForm = () => {
  // 1. Form Schema.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      category: "",
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

  // Categories
  const categories = [
    { label: "Matrimonio", value: "Matrimonio" },
    { label: "Battesimo", value: "Battesimo" },
    { label: "Altri eventi", value: "Altri eventi" },
  ] as const;

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
              <div>
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Scegli una categoria</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="default"
                              role="combobox"
                              className={cn(
                                "w-[200px] justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? categories.find(
                                    (c) => c.value === field.value
                                  )?.label
                                : "Selezione categoria"}
                              <ChevronsUpDown className="opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput
                              placeholder="Cerca..."
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>
                                Nessuna categoria trovata.
                              </CommandEmpty>
                              <CommandGroup>
                                {categories.map((c) => (
                                  <CommandItem
                                    className="text-primary"
                                    value={c.label}
                                    key={c.value}
                                    onSelect={() => {
                                      form.setValue("category", c.value);
                                    }}
                                  >
                                    {c.label}
                                    <Check
                                      className={cn(
                                        "ml-auto",
                                        c.value === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
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
