# Portfólio Pessoal — João Vitor Batista

Portfólio moderno desenvolvido para apresentar perfil profissional, stacks, projetos e canais de contato com foco em:

- experiência visual premium,
- leitura rápida por recrutadores e clientes,
- personalização simples por arquivo de dados.

O projeto é bilíngue (PT/EN), possui tema claro/escuro, animações, cards com tilt 3D e modal para expandir projetos.

---

## Objetivo do projeto

Este projeto foi criado para servir como vitrine profissional de desenvolvimento Full Stack, destacando:

- identidade pessoal (nome, função, foto),
- principais tecnologias utilizadas,
- projetos com visual forte e informações resumidas,
- acesso rápido a CV, e-mail, LinkedIn e GitHub.

---

## Stack técnica

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **UI/Estilo:** Tailwind CSS v4 + CSS customizado
- **Ícones:** react-icons
- **Animações:** CSS + framer-motion (componentes específicos)

---

## Funcionalidades implementadas

- Layout responsivo com foco em mobile e desktop.
- Tema claro/escuro com persistência em localStorage.
- Idioma PT/EN com troca em tempo real.
- Hero section com foto principal e animações.
- Seção de stacks com ícones.
- Cards de projetos com tilt 3D.
- Modal de expansão ao clicar no projeto.
- Botão de download de CV dinâmico por idioma.
- Seção de contato com atalhos rápidos.

---

## Estrutura principal

```text
src/
	app/
		layout.tsx          # Layout raiz e metadados
		page.tsx            # Página principal do portfólio
		globals.css         # Tema, animações e texturas globais
	components/
		AnimatedProfileImage.tsx
		PageLoader.tsx
		ThemeToggle.tsx
		TiltCard.tsx
	data/
		portfolio.ts        # Fonte de dados central do conteúdo

public/
	profile-photo.jpg
	mini-3d-avatar.png
	cv-joao-vitor-batista-pt.pdf
	cv-joao-vitor-batista-en.pdf
	projects/
```

---

## Como rodar localmente

### Pré-requisitos

- Node.js 18+
- npm

### Passos

```bash
npm install
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

---

## Scripts disponíveis

```bash
npm run dev     # ambiente de desenvolvimento
npm run build   # build de produção
npm run start   # sobe build de produção
npm run lint    # validação com ESLint
```

---

## Personalização de conteúdo

Toda a personalização principal está centralizada em `src/data/portfolio.ts`.

Você pode editar:

- nome e função,
- textos em português e inglês,
- links de contato,
- lista de stacks,
- projetos e imagens,
- caminhos de CV por idioma.

### CV por idioma

No objeto `contact.cv`, configure:

- `pt`: arquivo em português
- `en`: arquivo em inglês

E mantenha os arquivos em `public/`.

---

## Tema e idioma

### Tema

- Controle no topo da página (`ThemeToggle`).
- Persistência em localStorage.
- Estilos de claro/escuro configurados via classes no `html`.

### Idioma

- Botão PT/EN no header.
- Persistência em localStorage (`portfolio-locale`).
- Textos carregados do dicionário em `portfolio.ts`.

---

## Projetos (cards e modal)

- Cada card usa efeito de tilt 3D (`TiltCard`).
- Clique no card abre modal com visual maior.
- Proporção das imagens mantida em **16:10**.

---

## Deploy

Fluxo recomendado:

1. `npm run lint`
2. `npm run build`
3. publicar em Vercel (ou outro provedor compatível com Next.js)

---

## Boas práticas para manutenção

- Centralize novos textos em `portfolio.ts`.
- Evite hardcode de strings diretamente em `page.tsx`.
- Mantenha imagens otimizadas (peso e dimensão adequados).
- Sempre valide com `lint` e `build` antes de publicar.

---

## Próximas melhorias sugeridas

- Página dedicada para cada projeto.
- Integração com analytics.
- SEO avançado (Open Graph completo por idioma).
- Rota internacionalizada (`/pt` e `/en`).

---

## Licença

Projeto de uso pessoal para apresentação profissional.
