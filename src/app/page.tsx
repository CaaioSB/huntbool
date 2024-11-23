"use client";

import { Button } from "@/components/ui/button";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Field } from "@/components/ui/field";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { ExperienceLevel, WorkMode } from "@/utils/constants";
import { experienceLevel, workMode } from "@/utils/lists";
import { generateSearchQuery } from "@/utils/query";
import { Card, Center, Input, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { z } from "zod";

const HunterFormSchema = z.object({
  positions: z
    .string()
    .min(1)
    .transform((positions) =>
      positions.split(",").map((position) => position.trim())
    ),
  areas: z
    .string()
    .min(1)
    .transform((areas) => areas.split(",").map((area) => area.trim())),
  experience_level: ExperienceLevel.or(z.literal("")),
  work_mode: WorkMode.or(z.literal("")),
  exclude: z
    .string()
    .optional()
    .transform((exclude) =>
      exclude?.split(",").map((toExclude) => toExclude.trim())
    ),
});

type HunterFormInputSchema = z.input<typeof HunterFormSchema>;
type HunterFormOutputSchema = z.output<typeof HunterFormSchema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<HunterFormOutputSchema, HunterFormInputSchema>({
    resolver: zodResolver(HunterFormSchema),
  });
  const [isCopied, setIsCopied] = useState(false);

  const onSubmit = async (data: HunterFormOutputSchema) => {
    const query = generateSearchQuery(data);
    await navigator.clipboard.writeText(query);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  console.log(errors);

  return (
    <Center p="10" w="svw" minH="svh">
      <Card.Root w={{ base: "1/3", lgDown: "full" }} variant="outline">
        <Card.Body>
          <Card.Title
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>🕵️‍♂️ huntbool</Text>
            <ColorModeButton size="2xs" />
          </Card.Title>
          <Card.Description>
            encontre vagas de maneira assertiva
          </Card.Description>

          <form id="hunter-form" onSubmit={handleSubmit(onSubmit)}>
            <VStack mt="10" gap="5">
              <Field
                invalid={!!errors?.positions}
                errorText={errors?.positions?.message}
                label="qual posição você deseja?"
              >
                <Input {...register("positions")} />
              </Field>

              <Field
                invalid={!!errors?.areas}
                errorText={errors?.areas?.message}
                label="áreas/tecnologias que você tem domínio"
              >
                <Input {...register("areas")} />
              </Field>

              <Field
                invalid={!!errors?.experience_level}
                errorText={errors?.experience_level?.message}
              >
                <SelectRoot
                  {...register("experience_level")}
                  collection={experienceLevel}
                >
                  <SelectLabel>qual é o seu nível de experiência?</SelectLabel>
                  <SelectTrigger clearable>
                    <SelectValueText />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevel.items.map((level) => (
                      <SelectItem item={level} key={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Field>

              <Field
                invalid={!!errors?.work_mode}
                errorText={errors?.work_mode?.message}
              >
                <SelectRoot {...register("work_mode")} collection={workMode}>
                  <SelectLabel>como deseja trabalhar?</SelectLabel>
                  <SelectTrigger clearable>
                    <SelectValueText />
                  </SelectTrigger>
                  <SelectContent>
                    {workMode.items.map((mode) => (
                      <SelectItem item={mode} key={mode.value}>
                        {mode.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Field>

              <Field
                invalid={!!errors?.exclude}
                errorText={errors?.exclude?.message}
                label="o que você quer evitar?"
              >
                <Input {...register("exclude")} />
              </Field>

              <Card.Root w="full" size="sm">
                <Card.Body>
                  <Card.Title>👻 vagas fantasmas</Card.Title>
                  <Card.Description>
                    em breve, você poderá ocultar empresas que anunciam diversas
                    vagas, muitas delas inexistentes.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            </VStack>
          </form>
        </Card.Body>

        <Card.Footer justifyContent="flex-end">
          <Button
            loading={isLoading}
            colorPalette={isCopied ? "green" : "accent"}
            type="submit"
            form="hunter-form"
            w="full"
          >
            {isCopied ? <LuCopyCheck /> : <LuCopy />}
            {isCopied ? "copiado" : "copiar busca"}
          </Button>
        </Card.Footer>
      </Card.Root>
    </Center>
  );
}
