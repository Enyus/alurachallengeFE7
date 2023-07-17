# <img src="./meteora/public/alura_challenge_icon.png" style="height: 24px"> Alura Challenge Front End 7
Repositório para guardar o código do site da Meteora, envolvida no Challenge Front End 7 da <a href="https://www.alura.com.br/">Alura</a> de acordo com <a href="https://www.figma.com/file/IVO00we38ZQzTayF7Viimm/Challenge-Front-end-%7C-Loja-Meteora-(Copy)?type=design&node-id=2386%3A3188&t=NJQNo7dpIo7Ipb0g-1">este wireframe do Figma</a>.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Alura Challenge Front End 7**
| :label: Tecnologias | React, NextJS, TypeScript, TailwindCSS
| :rocket: URL         | https://alurachallenge-fe-7.vercel.app/

<div style="display:flex; justify-content: center; margin-bottom: 10px;">
    <a style="margin: 0 10px" href="#-detalhes-do-projeto">Detalhes</a> | 
    <a style="margin: 0 10px" href="#-para-rodar-o-projeto">Para Rodar</a> | 
    <a style="margin: 0 10px" href="#-links">Links</a> |
    <a style="margin: 0 10px" href="#%EF%B8%8F-problemas-conhecidos">Problemas Conhecidos</a> |
    <a style="margin: 0 10px" href="#-recomendações-code-review">Code Review</a>
</div>

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](./meteora/public/Meteora_Preview.jpg#vitrinedev)

## 🗈 Detalhes do projeto
O objetivo do desafio é criar o front end do site de comércio de roupas Meteora. Escolhi aproveitar a oportunidade para reaprender o NextJs em sua última versão.

<a href="#" style="display:flex; justify-content: end"> ⬆️Topo⬆️</a>

## 📀 Para rodar o projeto
- Clonar o repositório;
- Entrar na pasta __meteora__ com o terminal com o comando ```cd .\meteora\```;
- Rodar o comando ```npm install```;
- Rodar o projeto next com o comando ```npm run dev```;

<a href="#" style="display:flex; justify-content: end"> ⬆️Topo⬆️</a>

## 🔗 Links
- <a href="https://www.figma.com/file/IVO00we38ZQzTayF7Viimm/Challenge-Front-end-%7C-Loja-Meteora-(Copy)?type=design&node-id=2386%3A3188&mode=design&t=S6Ql9fSE4qJuxw4P-1" target="_blank">Figma</a>
- <a href="https://trello.com/b/ezN5ADgZ/alura-challenge-fe-7-semana-1" target="_blank">Trello - Semana 1</a>
- <a href="https://trello.com/b/4nevqD06/alura-challenge-fe-7-semana-2" target="_blank">Trello - Semana 2</a>
- <a href="https://trello.com/b/Skz3kdd1/alura-challenge-fe7-semanas-3-e-4">Trello - Semanas 3 e 4</a>
- <a href="https://alurachallenge-fe-7.vercel.app/">Deploy</a>
- <a href="https://alurachallenge-fe-7-git-semanas3e4-enyus.vercel.app/">Preview da branch semanas3e4</a> 

<a href="#" style="display:flex; justify-content: end"> ⬆️Topo⬆️</a>

## 🛠️ Problemas Conhecidos
- Existe algum espaçamento errado no Carrosel com o Swiper que eu ainda não consegui encontrar onde está. (Não resolvido ao usar ```className: w-full``` no componente ```<Image/>``` no carrossel) (Resolvido ao usar ```className: w-full``` em todos os componentes de ```<section>```) ✅
- O componente CarregarProdutos.tsx está rodando em loop quando o contexto de Pesquisa é alterado. (Resolvido com ```<Suspense>```) ✅
- Falta encontrar um meio de desativar o estado ```ativo``` nos botôes das categorias quando se clica em outra categoria.
    - Consegui retirar as classes usando manipulação do dom com JS puro, mas agora por algum motivo nem sempre quando se clica no botão da categoria, o clique é efetivado.
    - Talvez o problema seja que o app esteja lendo o estado ```ativo``` (um booleano) de cada botão, então tem mais de um botão "ativo" ao mesmo tempo. Tentar alterar o estado em um componente de nível superior e/ou com valor diferente de booleano.

<a href="#" style="display:flex; justify-content: end"> ⬆️Topo⬆️</a>

## 👩‍🏫 Recomendações Code Review
- Colocar um backdrop nas modais; ✅
- Separar o código em mais componentes, especialmente com relação aos tags verbosos do Tailwind;
- Tag ```<p>``` apenas para textos com duas linhas ou mais, caso contrário usar ```<span>```; ✅
- Conferir a semântica usando IA (Chat GPT); ✅ (<a href="">Veja Aqui</a>)
- Usar tag ```<nav>``` no header; ✅
- Conferir performance no ***lighthouse*** do Chrome;
- Nas modais de produtos, alterar os radio buttons para que a cor de fundo não confunda o usuário (accent-color);

<a href="#" style="display:flex; justify-content: end"> ⬆️Topo⬆️</a>