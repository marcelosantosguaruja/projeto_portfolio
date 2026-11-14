# Portfólio Criativo — Marcelo Félix dos Santos

**Aluno:** Marcelo Félix dos Santos  
**Curso:** Desenvolvimento de Sistemas — ETEC  
**Atividade:** Agenda 15 — Portfólio com Bootstrap

## Descrição
Portfólio pessoal responsivo com apresentação profissional, formação, habilidades, seis projetos e contato.

## Tecnologias
HTML5, CSS3, JavaScript e Bootstrap 5.3.3.

## Links de publicação
- **Repositório:** substitua pelo endereço do repositório deste portfólio.
- **Site publicado:** substitua pelo endereço do GitHub Pages deste portfólio.

## Funcionamento
O menu leva às seções da página. Na área de projetos, os filtros Todos, Web e Python exibem os cards correspondentes. Os seis cards abrem seus projetos em outra aba: três sites no GitHub Pages e três arquivos Python no GitHub. O formulário prepara um e-mail no aplicativo do visitante após configurar `EMAIL_DESTINO` no arquivo `script.js`.

## Recursos novos
- **Filtro dinâmico de projetos:** botões com `data-filter` e cards com `data-category`, controlados por JavaScript.
- **Animação de entrada:** uso da API `IntersectionObserver` para revelar elementos quando entram na tela.
- **Alternância de tema:** classe `light-theme` no `body` e preferência armazenada no `localStorage` quando disponível.
- **Cards clicáveis e efeitos hover:** links envolvendo cada card e transições CSS.

## Implementação
O HTML organiza as seções com grid e componentes do Bootstrap. O CSS personaliza cores, animações e responsividade. O JavaScript controla filtros, tema, efeitos, menu móvel e formulário. O site é estático e compatível com GitHub Pages.

## Publicação no GitHub Pages
1. Envie `index.html`, `style.css`, `script.js`, `README.md` e a pasta `assets` para a raiz do repositório.
2. Em **Settings > Pages**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Salve e aguarde a publicação.
4. Atualize os dois links da seção **Links de publicação**.

## Logotipo
Coloque seu logotipo PNG transparente em `assets/logo.png`.
