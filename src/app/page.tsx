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
import {
  Card,
  Center,
  Input,
  Text,
  VStack,
  createListCollection,
} from "@chakra-ui/react";

const level = createListCollection({
  items: [
    { label: "junior", value: "junior" },
    { label: "pleno", value: "pleno" },
    { label: "sênior", value: "sênior" },
  ],
});

const workingMode = createListCollection({
  items: [
    { label: "remoto", value: "remoto" },
    { label: "presencial", value: "presencial" },
    { label: "hibrido", value: "hibrido" },
  ],
});

export default function Page() {
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

          <VStack mt="10" gap="5">
            <Field label="qual posição você deseja?">
              <Input />
            </Field>

            <Field label="áreas/tecnologias que você tem domínio">
              <Input />
            </Field>

            <SelectRoot collection={level}>
              <SelectLabel>qual é o seu nível de experiência?</SelectLabel>
              <SelectTrigger>
                <SelectValueText />
              </SelectTrigger>
              <SelectContent>
                {level.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>

            <SelectRoot collection={workingMode}>
              <SelectLabel>como deseja trabalhar?</SelectLabel>
              <SelectTrigger>
                <SelectValueText />
              </SelectTrigger>
              <SelectContent>
                {workingMode.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>

            <Field label="o que você quer evitar?">
              <Input />
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
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button w="full">copiar busca</Button>
        </Card.Footer>
      </Card.Root>
    </Center>
  );
}
