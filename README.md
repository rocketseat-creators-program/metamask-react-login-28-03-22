<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Metamask + React: Conectando site com metamask

O obejetivo dessa aula é criar um botão de connect para conectar o seu site com a [Metamask](https://metamask.io/) do usuário. Esse botão pode funcionar como uma espécie de login e após conectado exibe a wallet ID do usuário.

MetaMask é uma extensão ou plugin para navegadores da web que permite aos usuários interagir facilmente com os dApps do [blockchain Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/). Isso é possível, pois MetaMask atua como uma ponte entre [dApps](https://www.techtudo.com.br/noticias/2018/08/o-que-sao-dapps-apps-descentralizados-podem-revolucionar-a-internet.ghtml) e navegadores web, facilitando seu uso e aproveitamento. Ela é bem conhecida e muita utilizada como carteira digital de crypto moedas.

A MetaMask é pioneira nessa área e permite interações do usuário na [Web3](https://guiadobitcoin.com.br/glossario/web3/). Atualmente, está disponível como uma extensão do navegador e como um aplicativo móvel em dispositivos Android e iOS. Porém nessa aula vamos usar apenas a versão desktop, que é uma [extensão para o Google Chrome](https://docs.metamask.io/guide/getting-started.html).

Usarems a [API da Metamask](https://docs.metamask.io/guide/getting-started.html) que facilita a comunicação com a [Ethereum Provider API](https://docs.metamask.io/guide/ethereum-provider.html) usando javascript. Essa API permite que os sites solicitem contas Ethereum dos usuários, leiam dados de [blockchains](https://exame.com/future-of-money/como-funciona-a-tecnologia-blockchain/) aos quais o usuário está conectado e sugira que o usuário assine mensagens e transações.

Links Úteis:
- [Extensão para o Chrome da Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
- [Passo-a-passo para criar uma carteira Metamask](https://portaldobitcoin.uol.com.br/o-passo-a-passo-para-criar-e-usar-uma-carteira-metamask/)

---
## **Boilerplate Utilizado**

### **Fabulous Dashboard App**

Dashboard simples com funções básicas criado como ambiente de testes.

Stack: [React](https://reactjs.org/docs/getting-started.html) | [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) | [Styled-components](https://styled-components.com/docs/basics)

Libraries: [FontAwesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) | [ESLint](https://eslint.org/docs/user-guide/command-line-interface) | [Axios](https://github.com/axios/axios)

Repositório para clone/fork: [metamask-app](https://github.com/rafaelperozin/metamask-app)

---
## **Roteiro da Aula**

  1. Criar o botão "Connect", para conectar com a Metamask;
  2. Detectar a Metamask no browser do usuário;
  3. Trocar a rede (Network);
  4. Connectar o site com a Metamask;
  5. Pegar o ID da carteira da Metamask do usuário;
  6. Mostrar o ID ao invés do botão de conectar quando conectado;

---
## Expert
| [<img src="https://avatars.githubusercontent.com/u/35148593" width="75px;"/>](https://github.com/anabneri) |
| :--------------------------------------------------------------------------------------------------------: |
|                             [Rafael Perozin](https://github.com/rafaelperozin)                             |

*“Sou senior frontend developer na [BrandAlley](www.brandalley.co.uk), uma loja virtual com super descontos em marcas de roupas famosas que tem mais de 30 milhões de acesso diários. Sou um dos responsáveis por reconstruindo todo o front da loja com React, React Native e Typescript. Para quem quiser me conhecer melhor pode me adicionar no [LinkedIn](https://linkedin.com/in/rafaelperozin), seguir meu canal no [Instagram](https://www.instagram.com/rafaelperozin) onde eu mostro um pouco do meu dia a dia aqui na Inglaterra e seguir o meu canal no [Youtube](https://www.youtube.com/c/rafaelperozin) onde eu falo sobre softskills e como é trabalhar fora.”*

## Conecte-se com o Rafael:
- Youtube: [Rafael Perozin](https://www.youtube.com/c/rafaelperozin)
- Linkedin: [Rafael Perozin](https://linkedin.com/in/rafaelperozin)
- Instagram: [@RafaelPerozin](https://www.instagram.com/rafaelperozin)
- Twitter: [@RafaelPerozin](https://www.twitter.com/rafaelperozin)
