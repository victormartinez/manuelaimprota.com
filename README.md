# manuelaimprota.com

Site da **Manuela Improta — Saúde mental para mulheres** (CRP 03/30689).
Landing page única em pt-BR: psicoterapia online para mulheres e acompanhamento perinatal.

## Stack

- [Gatsby 5](https://www.gatsbyjs.com/) + React 18
- CSS global com tokens da marca (`src/styles/global.css`) — sem CSS-in-JS
- `gatsby-plugin-image` para otimização das fotos (hero, sobre, carrossel)
- Fontes variable locais (Fraunces, DM Sans, Albert Sans) em `static/fonts/`
- Google Tag Manager (`GTM-N3V7MRMZ`) injetado em `gatsby-ssr.js`

A fonte da verdade da marca (cores, tipografia, tom de voz, manual) vive em
`~/Workspace/Personal/manuelaimprota/brand/`.

## Estrutura

`src/pages/index.js` monta as seções na ordem:

TopBar → Hero → PraVoce → Sobre → Atendimento (carrossel) → Abordagem →
Confianca → Faq → Guias → CtaFinal → Rodape

Cada seção é um componente em `src/components/`. Links de WhatsApp e Instagram
ficam centralizados em `src/components/whatsapp.js`.

## Comandos

```shell
npm run develop   # dev server em localhost:8000
npm run build     # build de produção em public/
npm run serve     # serve o build local
npm run format    # prettier
```

## Deploy

O site é hospedado no [Netlify](https://www.netlify.com/), que faz o build e
publica a cada push em `main`:

```shell
git push origin main
```

A publicação leva alguns minutos. Build, branch e domínio são configurados no
painel do Netlify (não há `netlify.toml` no repositório).
