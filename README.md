# Môre Checkout

## Requisitos principais:
​
Abaixo listamos todas as tarefas/funcionalidades para a construção do nosso app.
Vale lembrar que não é obrigatório finalizar todas as tarefas listadas aqui. Nesta etapa do processo, o mais importante é entregar o melhor trabalho possível dentro do prazo que a gente combinou 5 dias corridos. A lista é um guia para comportamentos e telas a serem desenvolvidas.

## Design
O design completo do app está disponível no Figma.
Você está livre para utilizar o modo inspector.

https://www.figma.com/file/hjOYa954L5lJ9wdhaaLdZh/Teste-React-Native---Palermo

## Tasks:

### Splash screen

### Home
Listagem de produtos:

- Deve apresentar a lista de produtos e categorias consumidas através da API indicada nos pré-requisitos;
- Se atentar para o carrossel horizontal para o filtro e novidades;
- Os produtos no carrossel de novidades devem ser os primeiros cinco produtos retornados pela API;
- Apenas pode ter um filtro marcado a cada solicitação.
Adicionar item ao carrinho:

- Pode ser adicionado mais de um item para o carrinho;
- Quando existir itens no carrinho deve ser exibida uma interface no rodapé da tela permitindo ir para o carrinho (frame do Figma 02.01- ITEM_ON_CART);
- A quantidade de produtos no carrinho deve ser apresentada através de um badge no ícone do carrinho na Navigation Bar.
Persistência de estado:

- O estado do carrinho deve ser persistido entre sessões, até a finalização do checkout.

### Carrinho
Listagem de itens adicionados ao carrinho:

- Deve apresentar os itens adicionados ao carrinho;
- Deve ser possível adicionar ou remover os itens do carrinho;
- Deve apresentar o valor total do carrinho.
Modal remoção de itens

- Ao remover um item com apenas uma unidade, deve ser apresentado um modal perguntando sobre a remoção do item do carrinho (frame do Figma 03.01 - CART).
Carrinho vazio

- Deve ser apresentado uma interface amigável caso o carrinho não possua itens adicionados (frame do Figma 03.02 - CART_EMPTY).

### Confirmação
Ao pressionar o botão "FINALIZAR COMPRA" o usuário deve ser levado para a tela de confirmação e ter seu carrinho zerado (frame do Figma 04 - CONFIRMATION).

### Extras
Aplicar Dark Mode de acordo com a preferência do Sistema Operacional. Seguir o exemplo apresentado no frame do Figma 02 - HOME_DARK.
​
## Api para busca dos produtos:
​
https://fakestoreapi.com
​

# Rodando o projeto
1. Clone o repositório do projeto `git clone https://github.com/lifercode/more-checkout`
2. Inicie o projeto `yarn && yarn start`
3. Abra o navegador e acesse [http://localhost:19002](http://localhost:19002/)
6. Clique em `Run on Android device/emulator` ou `Run on iOS simulator`
7. Você também pode baixar o [Expo Go](https://expo.dev/client) no seu device e escanear o QRCode no link anterior
​
​