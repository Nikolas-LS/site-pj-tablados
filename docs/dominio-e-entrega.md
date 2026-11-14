# Domínio, Hospedagem e Entrega PJ Tablados

Guia para registrar o domínio, publicar a landing page da PJ Tablados e entregar tudo ao cliente, com registro, DNS e hospedagem concentrados na Cloudflare, em plano gratuito que permite uso comercial. Pode ser colado na pasta `docs` do projeto, junto dos outros documentos, para o Claude Code consultar.

## 1. Decisão

- **Tudo na Cloudflare:** registro do domínio, DNS e hospedagem no Cloudflare Pages, plano gratuito. Permite uso comercial, tem banda ilimitada para conteúdo estático, domínio próprio e certificado HTTPS grátis, e cobra o domínio a preço de custo.
- **Alternativa:** Netlify, plano gratuito, que também permite projetos comerciais, mas pausa os sites quando os créditos mensais acabam.
- **Evitar:** Vercel no plano Hobby, que é só para uso não comercial. O plano Pro é pago por usuário que faz deploy. GitHub Pages também não serve, porque os termos não permitem uso para negócio online.
- **Domínio:** a Cloudflare não registra .com.br. O domínio será .com, .net ou similar, comprado direto no painel dela.

Os termos e limites dos planos gratuitos mudam com o tempo. Conferir a página de termos da Cloudflare antes de publicar.

## 2. Contas e quem é dono de quê

Tudo o que é da empresa fica no nome da empresa, com o e-mail dela. Você trabalha como colaborador, sem ser o dono. Assim, se algo mudar entre vocês, o cliente não fica refém.

| Serviço | Titular | Seu papel |
|---|---|---|
| Cloudflare (domínio, DNS, hospedagem) | Cliente, com e-mail da empresa | Membro convidado com permissão para publicar |
| GitHub (repositório do código) | Cliente, conta ou organização | Colaborador com permissão de escrita |
| Formulário (Web3Forms ou Formspree) | Cliente, com e-mail da empresa | Quem configura, sem ser o titular |
| E-mail profissional, se houver | Cliente | Apoio na configuração |

**Fluxo recomendado:**

1. O cliente cria as contas com o e-mail da empresa, ou você cria junto com ele, com ele presente.
2. O cliente te convida como colaborador no GitHub e como membro na Cloudflare.
3. Você desenvolve direto no repositório do cliente, para o código já nascer no lugar certo e a Cloudflare conectar nele.
4. Se preferir começar no seu GitHub, ao final transferir o repositório para a conta do cliente.
5. Ativar a verificação em duas etapas nas contas, de preferência no celular do dono da empresa.

Nunca peça nem guarde a senha do cliente. O convite como colaborador resolve, e o acesso pode ser retirado a qualquer momento.

## 3. Escolher e registrar o domínio

**Opções de extensão:**

- `.com.br`: não é vendido pela Cloudflare, só pelo Registro.br, e exige CNPJ. Se o cliente fizer questão dele, registrar lá e manter apenas o DNS na Cloudflare (caminho B da seção 6).
- `.com`: registrado direto no painel da Cloudflare, a opção adotada neste projeto. É internacional, não exige documento brasileiro e costuma custar um pouco mais que o .com.br.
- `.br` e outras extensões: conferir se a Cloudflare as vende e o preço atual no painel.

**Dicas de nome:**

- Preferir algo curto e fácil de falar por telefone, como pjtablados.com.
- Evitar hífens e números.
- Verificar se o mesmo nome está livre no Instagram e no WhatsApp Business.

**Quem deve registrar:** o cliente, na conta dele da Cloudflare, com o e-mail da empresa, para o dono do negócio ter o controle.

**Valores:** conferir o preço atual no painel da Cloudflare. Domínios custam por ano, e a renovação automática deve ficar ativa, com um cartão válido cadastrado e um lembrete na agenda para não perder o domínio.

## 4. Preparar o projeto para o Cloudflare Pages

Como a landing é um site estático, o ideal é gerar os arquivos estáticos com o Nuxt.

1. No projeto, usar o comando de geração estática do Nuxt: `npm run generate`.
2. O resultado fica na pasta `.output/public`.
3. Confirmar que o site funciona abrindo essa pasta com um servidor local ou com `npx nuxi preview`.
4. Garantir que o formulário use Web3Forms ou Formspree e que as chaves estejam em variáveis de ambiente.

Se no futuro o site precisar de rotas de servidor, dá para usar o modo com Workers da Cloudflare, mas para a landing o modo estático é mais simples.

## 5. Publicar no Cloudflare Pages

1. Garantir que o código esteja no repositório do cliente no GitHub, de preferência privado.
2. Entrar na conta da Cloudflare do cliente, onde você já é membro convidado.
3. No painel, ir em Workers e Pages, criar um novo projeto e conectar ao GitHub.
4. Escolher o repositório da PJ Tablados.
5. Configurar o build: comando `npm run generate` e pasta de saída `.output/public`.
6. Adicionar as variáveis de ambiente, como a chave do formulário e o número do WhatsApp.
7. Salvar e aguardar o primeiro deploy. A Cloudflare entrega um endereço provisório de testes.
8. A partir daí, cada envio para a branch principal gera um novo deploy automático.

Nomes de menus e botões no painel da Cloudflare mudam de tempos em tempos, então se algo não estiver igual, procurar pela documentação oficial do Pages.

## 6. Conectar o domínio

Há dois caminhos. O A é o adotado, já que o domínio será registrado na Cloudflare.

**Caminho A: domínio registrado na Cloudflare (adotado)**

1. Depois de registrar, o domínio já aparece na conta com o DNS da Cloudflare, sem trocar servidores de nomes.
2. No projeto do Pages, abrir a aba de domínios personalizados e adicionar o domínio e o `www`.
3. A Cloudflare cria os registros de DNS sozinha e emite o certificado HTTPS automaticamente.
4. Aguardar alguns minutos até o status ficar ativo.

**Caminho B: .com.br no Registro.br com DNS na Cloudflare**

1. Na Cloudflare, adicionar o domínio como um site novo, no plano gratuito.
2. A Cloudflare mostra dois servidores de nomes (nameservers).
3. No Registro.br, trocar os servidores DNS do domínio pelos dois da Cloudflare.
4. Esperar a propagação, que pode levar de minutos a algumas horas.
5. No projeto do Pages, adicionar o domínio e o `www`, como no caminho A.

**Redirecionamento:** escolher uma versão principal, com ou sem `www`, e redirecionar a outra para ela, evitando conteúdo duplicado no Google.

## 7. E-mail profissional

Hospedar o site na Cloudflare não cria e-mails como contato@pjtablados.com. Opções:

- Encaminhamento gratuito de e-mail pela Cloudflare (Email Routing), que reenvia as mensagens para o Gmail da empresa. Serve para receber, mas não para enviar pelo domínio.
- Serviço pago como Google Workspace ou Zoho Mail, que permite enviar e receber pelo domínio. O Zoho tem plano gratuito limitado, conferir os termos atuais.

Se usar e-mail pelo domínio, configurar SPF, DKIM e DMARC no DNS para não cair no spam.

## 8. Depois de publicar

- Testar o site no celular e no computador, com e sem `www`.
- Conferir se o HTTPS está ativo e sem avisos de segurança.
- Testar o formulário e o link do WhatsApp em produção.
- Cadastrar o site no Google Search Console e enviar o sitemap.
- Criar ou atualizar o perfil da empresa no Google Meu Negócio, com o link do site.
- Colocar o link na bio do Instagram e no WhatsApp Business.
- Configurar uma métrica simples de visitas, como Cloudflare Web Analytics, que não usa cookies.

## 9. Checklist rápido de publicação

1. Definir o nome do domínio e quem será o titular.
2. Registrar o domínio na Cloudflare, na conta do cliente.
3. Gerar o site estático com `npm run generate` e testar.
4. Subir o código para o GitHub.
5. Criar o projeto no Cloudflare Pages e fazer o primeiro deploy.
6. Apontar o DNS e adicionar o domínio personalizado.
7. Testar HTTPS, formulário e WhatsApp.
8. Configurar e-mail, Search Console e Google Meu Negócio.

## 10. Checklist de entrega ao cliente

Marcar cada item antes de dar o projeto por entregue.

- [ ] Domínio registrado na conta Cloudflare do cliente, com renovação automática ativa.
- [ ] Site publicado no domínio, com HTTPS funcionando.
- [ ] Repositório na conta ou organização do cliente no GitHub, ou cópia entregue por escrito.
- [ ] Cliente com acesso de administrador à Cloudflare e ao GitHub.
- [ ] Verificação em duas etapas ativada nas contas.
- [ ] Formulário e WhatsApp testados, com as notificações chegando no e-mail e no número do cliente.
- [ ] Variáveis de ambiente e chaves registradas num local seguro do cliente, nunca no código.
- [ ] Search Console e Google Meu Negócio configurados.
- [ ] Cliente recebeu um resumo simples de como pedir alterações de texto e de foto.
- [ ] Combinado de manutenção e suporte definido por escrito.
- [ ] Seu acesso reduzido ou mantido, conforme o combinado.

## 11. Modelo de combinado com o cliente

Texto base para adaptar e enviar por e-mail ou anexar a um contrato simples. Não é aconselhamento jurídico: para valores altos ou dúvidas, vale consultar um advogado.

```markdown
Combinado de entrega do site da PJ Tablados

1. Serviço: desenvolvimento e publicação da landing page da PJ Tablados, conforme a estrutura e a identidade visual combinadas.

2. Contas e domínio: o domínio, a conta da Cloudflare e o repositório no GitHub ficam no nome da PJ Tablados, com o e-mail da empresa. O desenvolvedor atua como colaborador, sem ser titular, e não guarda senhas do cliente.

3. Código: o código-fonte do site é entregue ao cliente no repositório dele. [Definir se o desenvolvedor mantém o direito de reaproveitar componentes genéricos em outros projetos.]

4. Custos de terceiros: o domínio é renovado anualmente, a cargo do cliente, no valor cobrado pela Cloudflare. A hospedagem usa o plano gratuito, sujeito aos termos e limites do provedor. Serviços pagos opcionais, como e-mail profissional, são contratados e pagos pelo cliente.

5. Conteúdo: textos, fotos e depoimentos fornecidos pelo cliente são de responsabilidade dele, que declara ter direito de usá-los.

6. Prazo e pagamento: [definir prazo de entrega, valor e forma de pagamento].

7. Revisões: [definir quantas rodadas de ajuste estão incluídas].

8. Manutenção: [definir se haverá suporte ou manutenção após a entrega, por quanto tempo e a que valor. Alterações fora do combinado são orçadas à parte].

9. Acesso após a entrega: [definir se o desenvolvedor mantém acesso como colaborador para a manutenção ou se o acesso é retirado].

Cidade, data.
Assinatura do cliente e do desenvolvedor.
```

## 12. Atualizações futuras

Qualquer mudança no site é feita no VS Code, enviada para a branch principal do GitHub, e a Cloudflare publica sozinha em poucos minutos. Para testar mudanças antes de publicar, criar uma branch separada: a Cloudflare gera um endereço de pré-visualização para ela.

## 13. Pontos a definir

- Nome final do domínio e extensão (.com, .net ou outra).
- Dados da empresa (CNPJ e e-mail) para as contas.
- Se haverá e-mail profissional e qual serviço usar.
- Quem ficará responsável por renovar o domínio todo ano.
- Valores, prazo e regras de manutenção do combinado.
