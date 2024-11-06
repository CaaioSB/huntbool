# Next.js Boilerplate

Este repositório é um boilerplate projetado para facilitar o início do desenvolvimento de landing pages usando Next.js, React e TailwindCSS. O objetivo deste boilerplate é fornecer uma base sólida e configurada com as melhores práticas, permitindo que você se concentre no desenvolvimento de sua aplicação sem se preocupar com a configuração inicial.

## Tecnologias e Ferramentas

### Next.js

- **Next.js** (versão 14.2.6): O framework React utilizado para criar aplicações web. Ele oferece funcionalidades como renderização híbrida, roteamento baseado em páginas, e suporte a APIs.

### TailwindCSS

- **TailwindCSS** (versão 3.4.1): Uma biblioteca de utilitários CSS que permite criar rapidamente layouts personalizados diretamente nos arquivos de HTML e JSX, sem sair do seu código.

- **Tailwind Variants** (versão 0.2.1): Uma extensão para TailwindCSS que facilita a criação de componentes altamente configuráveis e reutilizáveis.

### TypeScript

- **TypeScript** (versão 5): Um superconjunto de JavaScript que adiciona tipagem estática ao código, ajudando a detectar erros mais cedo no processo de desenvolvimento.

### Biome.js

- **Biome.js**: Substitui o ESLint como ferramenta de linting, focada em fornecer uma análise e formatação de código rápida e eficiente, compatível com TypeScript e JavaScript. Além de linting, o Biome também formata o código de acordo com as regras definidas, eliminando a necessidade de integrar com Prettier.

- **Scripts Biome.js**:
  - `biome:check`: Executa o linting no código.
  - `biome:fix`: Executa o linting e corrige automaticamente problemas de código quando possível.

### Commitizen e CZ-Emoji

- **Commitizen** e **CZ-Emoji**: Ferramentas para padronizar mensagens de commit usando emojis. Ao usar o comando `yarn commit`, o Commitizen guiará você pelo processo de criação de uma mensagem de commit estruturada e com emojis, tornando o histórico de commits mais legível e consistente.

## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila o projeto para produção.
- `start`: Inicia o servidor de produção.
- `biome:check`: Executa o Biome.js para verificar problemas no código.
- `biome:fix`: Executa o Biome.js e corrige problemas de estilo automaticamente.
- `commit`: Inicia o processo de commit guiado pelo Commitizen.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
