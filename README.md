<h1 align="center">
  Condo MANAGE
</h1>
<h3 align="center">Projeto de finalização do módulo 3 de Frontend do curso de Desenvolvimento Web Fullstack da Kenzie Academy Brasil.</h3>
<br/>
<p>
O objetivo dessa aplicação é criar um serviço que visa facilitar o trabalho de gestores de condomínios.
</p>  

<br/>

## **Tecnologias e bibliotecas utilizadas no FrontEnd:**
- React.js
- React Hook Form
- Yup
- Axios
- React Router Dom
- Toastify
- Chakra Ui
- Styled-components
- React-icons
  
<br/>


O url base da aplicação é https://condomanage-anavaleska2908.vercel.app/

<br/>

## **Funcionalidades encontradas na aplicação Frontend:**

### Página Inicial:
- Na página inicial, encontramos dois botões.
- No botão "Cadastrar", você será redirecionado para a página de cadastro.
- No botão "Login", você será redirecionado para a página de login.
- Caso o usuário já tenha feito login anteriormente, será automaticamente redirecionado para a página de dashboard.


<br/>

### Página de Cadastro:
- Na página de cadastro, encontramos 12 inputs. Nela, poderá cadastrar um condomínio com seus dados. 
- Entre esses dados, há necessidade de registrar um email e senha que será usado para fazer login.
- Há também uma seta para retornar à página inicial.

<br/>

### Página de Login:
- Na página de login, encontramos 2 inputs, onde deve-se usar o email e senha registrado no cadastro.
- Abaixo do botão de login, pode-se encontrar um link que irá redirecionar para a página de cadastro, caso ainda não tenha registrado nenhum condomínio.
- Há também uma seta para retornar à página inicial.

<br/>

### Página de Dashboard:
- Nela encontramos, uma mensagem de boas-vindas com o nome do usuário logado. Bem como, gráficos em forma de pizza trazendo os dados de ocupação e demandas do condomínio.
- Além disso, há um menu no lado superior direito. Ao clicar, abrirá uma aba com links que irão redirecionar para as demais páginas da aplicação.

#### Aba Lateral:
  Início:
    - Retorna para a dashboard.
  
  Inquilinos:
    - Redireciona para a página de registro, edição e exclusão de inquilinos.
  
  Financeiro:
    - Redireciona para a página de registro, edição e exclusão das finanças do condomínio.
  
  Demandas:
    - Redireciona para a página de registro, edição e exclusão das demandas do condomínio.
  
  Alterações:
    - Redireciona para a página de atualizações das informações do condomínio.
  
  Squad:
    - Redireciona para a página com as informações da equipe.
  
  Sair:
    - Redireciona para a página inicial, apagando da localStorage os dados do usuário e token.
  
<br/>

### Página de Inquilinos:
- Ao clicar no botão "+", abrirá um modal para adição de inquilinos.
- Nesse modal, para cadastrar inquilinos precisará registrar email, senha, dados do mesmo e do imóvel em que mora e o status do imóvel.
- Ao registrar, aparecerá na tela uma lista contendo o nome do responsável pelo imóvel e o número do apartamento. 
- Caso clique em um item dessa lista, um novo modal aparecerá para edição dos dados do usuário e imóvel.

<br/>

### Página de Finanças:
- Ao clicar no botão "+", abrirá um modal para registrar as finanças do condomínio.
- Nesse modal, para cadastrar uma finança, é preciso colocar uma descrição, o valor e a categoria (entrada ou saída de dinheiro).
- Ao registrar, aparecerá na tela uma lista com as finanças cadastradas. 
- Caso clique em um item dessa lista, um novo modal aparecerá para edição dos dados da finança.
- Na tela, é possível filtrar entre entradas, saídas e todas as finanças. Bem como, aparece o valor em caixa e de despesas, sendo atualizado a cada nova finança cadastrada.

<br/>

### Página de Demandas:
- Ao clicar no botão "+", abrirá um modal para registrar a demanda do inquilino.
- Nesse modal, para cadastrar uma demanda, é preciso colocar o nome do dono/responsável, uma descrição e o status da demanda (em andamento ou concluída).
- Ao registrar, aparecerá na tela uma lista com as demandas cadastradas. 
- Caso clique em um item dessa lista, um novo modal aparecerá para edição dos dados da demanda.
- Na tela, é possível filtrar entre concluídas, em andamento e todas as demandas. 

<br/>

### Página de Alterações:
- Nessa página, encontrará os dados do condomínio. Após alterá-los, precisa somente clicar no botão. 

<br/>

### Página Squad:
- Página criada com as redes sociais e cargos assumidos no projeto de cada integrante. 

<br/>

<hr/>

Para rodar o código da aplicação, é necessário:
- yarn (para baixar as estruturas necessárias da aplicação, contida no package.json);
- yarn start (para rodar a aplicação);

