import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_NUMBER } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80, "Nome muito longo"),
  phone: z
    .string()
    .trim()
    .min(10, "Informe telefone com DDD")
    .max(20, "Telefone inválido"),
  company: z.string().trim().max(80, "Empresa muito longa").optional().or(z.literal("")),
  projectType: z.string().trim().min(3, "Descreva o tipo de projeto").max(80, "Campo muito longo"),
  desiredProduct: z.string().trim().min(3, "Informe o produto desejado").max(140, "Campo muito longo"),
  details: z.string().trim().max(400, "Detalhe em até 400 caracteres").optional().or(z.literal("")),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const defaultValues: QuoteFormValues = {
  name: "",
  phone: "",
  company: "",
  projectType: "",
  desiredProduct: "",
  details: "",
};

export function buildWhatsAppQuoteUrl(values: QuoteFormValues) {
  const message = [
    "Olá, quero solicitar um orçamento com a Eletrocobre.",
    `Nome: ${values.name}`,
    `Telefone: ${values.phone}`,
    values.company ? `Empresa: ${values.company}` : null,
    `Tipo de projeto: ${values.projectType}`,
    `Produto desejado: ${values.desiredProduct}`,
    values.details ? `Detalhes: ${values.details}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function QuoteForm({
  className,
  title = "Solicitar orçamento",
  compact = false,
}: {
  className?: string;
  title?: string;
  compact?: boolean;
}) {
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues,
    mode: "onBlur",
  });

  const currentUrl = useMemo(() => buildWhatsAppQuoteUrl(form.getValues()), [form]);

  const onSubmit = (values: QuoteFormValues) => {
    const url = buildWhatsAppQuoteUrl(values);
    setSubmittedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={cn("premium-card p-6 md:p-8", className)}>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Atendimento consultivo</p>
        <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          Preencha os dados principais do projeto e direcionamos você para um atendimento rápido pelo WhatsApp.
        </p>
      </div>

      <Form {...form}>
        <form className="mt-6 grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className={cn("grid gap-4", compact ? "md:grid-cols-2" : "md:grid-cols-2")}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input inputMode="tel" placeholder="(11) 99999-9999" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Opcional" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de projeto</FormLabel>
                  <FormControl>
                    <Input placeholder="Obra, indústria, solar, revenda..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="desiredProduct"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Produto desejado</FormLabel>
                <FormControl>
                  <Input placeholder="Ex.: cabo flexível 2,5 mm², cabo solar 6 mm²" {...field} />
                </FormControl>
                <FormDescription>Se preferir, descreva a aplicação e nós ajudamos a indicar a melhor opção.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Detalhes do pedido</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-28 resize-none"
                    placeholder="Prazo, bitola, volume, cidade de entrega ou qualquer detalhe útil"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-3 border-t border-border/70 pt-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-6 text-muted-foreground">
              Atendimento para todo o Brasil, com orçamento sob medida e suporte técnico-comercial.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" className="min-w-48">Solicitar orçamento</Button>
              <Button type="button" variant="outline" asChild>
                <a href={submittedUrl ?? currentUrl} rel="noreferrer" target="_blank">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}
