# BBOX Training

Site institucional da **BBOX Training**, academia de Hyrox em Suzano - SP, liderada por Bruno Carvalho, recordista brasileiro e número 1 do país na categoria.

O projeto foi desenvolvido do zero, sem frameworks, com foco em performance, responsividade e identidade visual alinhada ao universo do Hyrox.

## Acesse o site

https://caikecardoso.github.io/bboxtraining

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox, abordagem mobile-first)
- JavaScript puro (vanilla)
- Fontes Barlow e Barlow Condensed

## Seções do site

- Hero com chamada principal e botões de ação
- Números de destaque (ranking, melhor tempo e pódios)
- Apresentação do atleta Bruno Carvalho
- Galeria da estrutura e dos equipamentos no padrão de prova
- Formatos de treino: aula em grupo, simulado de prova e equipe de competição
- Diferenciais da academia
- Parceria com a nutricionista Nathalye Matos
- Rodapé com navegação, contato, Instagram e localização

## Funcionalidades

- Navbar fixa com efeito de fundo ao rolar a página
- Menu mobile em tela cheia
- Modal de horários de treino com abas
- Animações de entrada ao rolar, via Intersection Observer
- Botão flutuante de WhatsApp
- Suporte a `prefers-reduced-motion` para usuários que preferem menos animação
- Layout responsivo para celular, tablet e desktop

## Estrutura do projeto

```text
bboxtraining/
├── index.html
├── styles.css
├── main.js
└── assets/
    ├── logo.png
    ├── hero.png
    ├── atleta01.png
    ├── bboxtraining_01.png
    ├── equipamentos.png
    ├── esteiras.png
    ├── banheira.png
    ├── sleds.png
    └── familia_bbox.png
```

## Personalização

As cores, fontes e medidas principais ficam nas variáveis do `:root` no início do `styles.css`. Para mudar a identidade visual, basta editar esses valores. As media queries ficam concentradas no final do arquivo.

## Como rodar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/caikecardoso/bboxtraining.git
   ```

2. Abra o arquivo `index.html` no navegador, ou use uma extensão como o Live Server no VS Code.

Não há dependências nem etapa de build.

## Autor

Desenvolvido por [Caike Cardoso](https://github.com/caikecardoso) · cKe Design

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/caike-cardoso-65321493/)