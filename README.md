# Sobre o projeto
 O projeto foi desenvolvido para um processo seletivo. Consistem em uma aplicação web que consume a Api do trello. Para consumir a Api, criei um formulário para que o usuário entre com os dados que deseja para criar um quadro e posteriormente um card. No quadro ele pode colocar o nome, e as tags que deseja. Já no cartão ele pode escolher também o nome, a descrição e em qual lista que deseja colocar.

 # Como rodar o código 

    Depois de fazer o git clone, você precisará fazer os segintes passos:

    1. Abra o terminal e vá até o caminho do projeto que você clonou
    2. digite o comando: npm install **-g create-react-app**
    3. digite o comando: npm start

    Depois desses comandos irá abrir uma janela no seu navegador padrão com a aplicação.

# E agora, como fazer seu card ? Simples, só seguir os passos

 ## Primeiro é necessario você pegar a sua key e o seu token para acessar o seu trelo, segue os passos:
   
1. Faça login do seu trelo

2. acesse: **https://trello.com/app-key** e copie a key

3. Aperte do link **Token** e copie o token

## Agora é só acessar a pasta do projeto e fazer os seguintes passos

1. Vá na pasta **src** e no arquivo **api.js**
2. Mude as constantes **token** e **key** para as que você pegou nos passos acima.

