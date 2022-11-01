<h1 align="center">
  <img alt="Logo" src="https://www.itau.com.br/media/dam/m/44c875ea1f4b31e2/webimage-logo_cmsless_varejo.png" width="60px">
</h1>

<h3 align="center">
  Calculadora de empréstimos - ITAÚ
</h3>

<p align="center">
  <a href="#about">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#started">Configurando o ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#use">Uso</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#test">Teste</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#experience">Jornada</a>
</p>

<div id="about"></div>

## 💇🏻‍♂️ Sobre o desafio

    O desafio proposto pede uma lógicade calculadora de empréstimo que, receba três informações, sendo elas:
    1. CNPJ
    2. Valor do empréstimo
    3. Quantidade de parcelas para pagamento do empréstimo

    Com essas informações, deve ser aplicado o cálculo de 3% de juros ao mês e, retornar ao usuário as seguintes informações:

    1. Valor total do empréstimo
    2. Valor de cada parcela

    Ponto extra:
    1. Realizar busca de CNPJ para checar se o mesmo possui ou não crédito pré-aprovado no sistema.

<div id="technologies"></div>

## 🚀 Tecnologias

### Tecnologias usadas para criar o projeto:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [ReactJS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [VITE](https://vitejs.dev/)

<div id="started"></div>

## 💻 Configurando o ambiente

### Você irá precisar:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/MarcelyKatharine/calc-emprestimos-itau.git && cd calc-emprestimos-itau
```

**Siga os comandos abaixo e instale todas as dependências**

```bash
# Instalando as dependências
$ yarn

# Quando terminar, digite:
$ yarn dev

# Pronto! Agora você pode acessar o projeto no seu browser. Acessando: http://localhost:5173/
```

<div id="use"></div>

## 👨🏻‍💻 Uso

Ao acessar a página do projeto temos:

1. Cabeçalho:

- O logo do Itaú é um link que nos leva a página inicial do banco na internet;
- Título de descrição da funcionalidade da página;
- Botão de perfil que leva a página do meu LinkedIn;
- Botão de mensagem que leva ao repositório do projeto no GitHub.

2. Corpo:

- A primeira etapa pede que informe o CNPJ para que, seja realizada a verificação se o mesmo possui ou não crédito pré-aprovado no sistema. Dando assim um feedback visual ao final do preenchimento. Caso o CNPJ possua crédito, o botão de 'PRÓXIMO' será habilitado para seguir com a segunda etapa. Caso não seja um CNPJ aprovado, fica disponível somente o botão de 'LIMPAR' para refazer o preenchimento;

- A segunda etapa consiste em informar o valor (R$) do empréstimo desejado. Ao preencher o valor o botão de 'PRÓXIMO' fica disponível para avançar para a terceira etapa. Nesta etapa ainda existe o botão de 'VOLTAR' para a etapa anterior;

- A terceira etapa é o momento de colocar o número de parcelas desejadas para o pagamento. Ao ser preenchido o botão de 'CALCULAR' fica disponível para realizar o cálculo dos valores informados. Tendo também o botão para 'VOLTAR' a etapa anterior;

- Após os valores preenchidos e ter clicado em calcular a ultima etapa será ativada, sendo ela, a do resultado informando o valor solicitado, o número e valor de cada parcela e o valor total com todos os encargos. Dando também a opção de dois botões nos quais você poderá escolher entre 'SOLICITAR EMPRÉSTIMO' que leva a página de empréstimos empresarial do banco ou 'REPETIR OPERAÇÃO' no qual limpa os dados informados e começa todas as etapas do início.

3. Rodapé:

- Logo do Itaú Empresas;
- Informação sobre a autora do projeto.

<div id="test"></div>

## 👨🏻‍💻 Teste

Para checar o CNPJ inválido, informe um desses abaixo:

- 11111111111111
- 22222222222222
- 33333333333333

Qualquer outro CNPJ será considerado apto para o crédito pré-aprovado.

<div id="experience"></div>

## 👨🏻‍💻 Jornada do desafio

O processo de criação do projeto foi:

1. Fiz um croqui em uma folha de papel para definir o design e como gostaria de montar o layout da página. Usei como base a página oficial do banco Itaú para que ficasse bem fiel ao padrão existente;

2. Defini a tecnologia utilizada;

3. Iniciei a estruturação base do projeto;

4. Criei os elementos que estão em tela (header, body, footer) e fiz a estilização;

5. Inseri a lógica de cálculo que foi um dos maiores desafios, colocar 3% de juros a cada mês e a lógica utilizada foi:

- Criar uma repetição que, faça esse cálculo a cada mês e, que a cada nova parcela seja alterado o valor original por conta do juros que foi adicionado no mês anterior.
  Assim, compreendi que com o loop For do JavaScript seria possível executar. Pois nesse loop, consigo declarar a quantidade de parcelas e assim, executar o cálculo desejado.

```bash
const calcular = () => {
    let VALOR = VALOR_DIGITADO;

    for (let i = 0; i < MESES; i++) {
      let JUROS = (VALOR * 0.03)
      VALOR = VALOR + JUROS;
    }
    const VALOR_TOTAL = VALOR
  }

  # Declarei uma variável com nome de VALOR que recebe o valor digitado pelo usuário no input;
  # Com o valor e quantidade de meses recebidos, implementei a lógica acima que a cada mês é atualizada um novo valor de juros, representado pela variável JUROS.
  # Assim também atualizando o valor total até não cumprir mais a condição do looping e no final retornar e gravar o valor com todos os encargos de todos os meses na constante VALOR TOTAL.
```

6. Também consegui inserir uma lógica para checar se o CNPJ informado está apto ou não para solicitar um empréstimo.

- Consiste no uso de uma função chamada 'includes ( )', que percorre uma lista de strings e verifica se existe algum registro igual nessa lista.

```bash
    const LISTA_CNPJ_INVALIDO = ["11111111111111", "22222222222222", "33333333333333"]

    if (LISTA_CNPJ_INVALIDO.includes(CNPJ)) {
      isInvalid(VERDADEIRO);
      return;
    }
    isInvalid(FALSO);

  # Criei uma lista de CNPJs que são considerados sem direito a crédito pré-aprovado, sendo uma const chamada LISTA_CNPJ_INVALIDO.
  # Com CNPJ informado pelo usuário, é realizado o uso da função 'includes()' que checa se o CNPJ existe em nossa lista e unido a um IF seta um estado booleano como VERDADEIRO se existir ou como FALSO se não existir.
```

7. Outra implementação feita foi o controle de etapas dos botões.

- Utilizei um estado para gravar o número da etapa atual e com isso as outras etapas que não estavam ativas teriam seus botões e inputs desabilitados.

```bash
            <button
            disabled={step !== 1}
            onClick={() => setStep(2)}
            >
            PRÓXIMO
            </button>

  # Admitindo que quando a variável step for diferente de 1, este botão estará desabilitado.
  # E ao realizar um click quando o mesmo estiver disponível, ele passa para o step seguinte (2).

  # A mesma regra vale para o INPUT.
```

8. Trabalhei na responsividade do projeto para que tornasse responsivo para os dispositivos móveis.

DIFICULDADES ENCONTRADAS:

Escolhi usar o react como desafio para mim mesma, tive bastante dificuldade com as nomenclaturas que são diferentes do que estou mais acostumada que é HTML / CSS / JAVASCRIPT, mas tive menos dificuldade do que esperava pois os principios são bem similares e isso despertou mais vontade de estudar outros frameworks.

Como fiz um layout prévio e queria deixar o design o mais fiel possível encontrei algumas dificuldades com estilização que busquei ajuda na internet e mesmo assim tive que quebrar a cabeça para resolver e ainda assim, tive que abrir mão de algumas ideias por não ter conseguido desenvolver da maneira que queria, mas espero aprender como fazer futuramente.

##

<h3 align="center">
  Feito por Marcely Katharine

&nbsp;[Veja meu LinkedIn](https://www.linkedin.com/in/marcely-katharine-280a46159/)

</h3>
