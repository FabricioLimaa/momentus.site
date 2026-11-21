# Diretrizes & Informações Oficiais do Projeto Momentus (Web Landing Page)

## Informações Oficiais do Projeto & Marca (Institucional)

Em todas as páginas, componentes, formulários de contato, rodapés e metadados, utilize estritamente as informações oficiais:

- **Nome do App:** Momentus
- **Desenvolvido por:** Fabricio Lima
- **E-mail Oficial:** contato@momentus.app.br
- **Site Oficial:** https://www.momentus.app.br/
- **Acesso Web (App):** https://app.momentus.app.br/
- **Domínios Oficiais:**
  - Principal / Landing: `www.momentus.app.br` / `momentus.app.br`
  - Aplicação Web / SPA: `app.momentus.app.br`

## Arquitetura Multi-Repositório & Hospedagem (Vercel & DNS)

O ecossistema web do Momentus é estruturado em **2 repositórios independentes na Vercel**:

1. **Repositório 1: Site de Apresentação (Este Repositório `momentus.site`)**
   - **Domínios no projeto Vercel:** `momentus.app.br` e `www.momentus.app.br`
   - **Objetivo:** Vitrine de apresentação, conversão, marketing e links institucionais.
   - **Integração:** Botão de login / "Acessar App" direciona para `https://app.momentus.app.br/`.
   - **Contato:** Exibe `contato@momentus.app.br`.

2. **Repositório 2: App Web / SPA (`Momentus-ext`)**
   - **Domínio no projeto Vercel:** `app.momentus.app.br` (exclusivo para a aplicação Expo Web/React Native).
   - **Objetivo:** Aplicação completa em React Native / Expo Web, rotas autenticadas, dados sincronizados com Firebase e modo offline.
   - **Integração:** Rodapés, termos e créditos referenciam o site institucional `https://www.momentus.app.br/`.

3. **Infraestrutura de DNS & E-mail:**
   - **Provedor de Domínio:** Registro.br (delegado para servidores Vercel: `ns1.vercel-dns.com` e `ns2.vercel-dns.com`).
   - **E-mails Profissionais:** Zoho Mail (registros MX, TXT/SPF e DMARC configurados diretamente na zona DNS global da conta Vercel).
   - **Autenticação:** Firebase Auth possui `momentus.app.br` e `app.momentus.app.br` na lista de Authorized Domains.

