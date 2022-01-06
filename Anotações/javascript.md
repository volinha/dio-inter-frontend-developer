Características:

- Alto nível
- Interpretada estruturada
- Tipagem dinâmica fraca:
-- A declaração dos tipos dos dados acontece de forma dinâmica.
- Multiparadigma

Para que serve:

- Criação de scripts dinâmicos

Usabilidade:

- // Comentar linha
- /* Comentar várias linhas */
- console.log() para retornar os dados no console para debug
- nodejs para execução dos códigos
- .preventDefault() para evitar o comportamento padrão de elementos

Legibilidade/Boas práticas:

- Criar constantes com letras MAIÚSCULAS
- Externar os scripts da página (carregar o script ao final do body)

Frameworks e Bibliotecas (principais):

- VueJS
- Angular
- React
- jQuery

- Escopo:

global: decalarada fora de qualquer bloco, visível em todo o código
local: declarada dentro de um bloco, pode estar visível ou não

- Declaração de Variáveis

var: escopo global e local, pode ter valor alterado 
let: escopo local de bloco, pode ter valor alterado

var e let se não declarar valor retorna null;

const: escopo local de bloco, somente leitura e precisa de valor inicial

Regras de variáveis:

- Iniciar com letras, underscore _ ou cifrão $; Não com número;
- Não utilizar espaços (camelCase ou snake_case)
- Não utilizar palavras reservadas;
- Declarar variáveis no topo do bloco de código;

Atribuições:

- = é sinal de atribuição, não comparação
- == para comparação (somente valor)
- === comparação identica (tipo e valor)

Operadores aritméticos:

+ adição
- subtração
* multiplicação
/ divisão real
% divisão inteira
** potenciação

Comparativos:

> maior que
< menor que
>= maior igual a
<= menor igual a
!= diferente (valor)
!== diferente (tipo e valor)

Lógicos:

&& - "e" - considera que os todos tenham o mesmo valor verdadeiro (booleano)
|| - "ou" - considera se um deles é verdadeiro
! - "não" - inverte o valor (true -> false ou false -> true)

Vetores

São um tipo de lista, ou matriz de variáveis onde cada variável possui um índice, podendo os valores serem de vários tipos.

Manipulação:

- forEach() -> itera um array;
- push() -> adiciona item ao final do array;
- pop() -> remove item do final do array;
- shift() -> remove item do início do array;
- unshift() -> adiciona item no inicio do array;
- indexOf() -> retorna o índice de um valor;
- splice() -> remove ou substiitui um item pelo índice;
- slice() -> retorna uma parte de um array existente;

Função:

# Definição:

function nome(parametros){
    // instruções
}

- Variáveis criadas na função só são acessadas pela função
- Return para a execução da função

## Função Anônima

Armazenada em uma variável

const soma = function (a,b) {
    return a + b;
}

## Função Autoinvocável (IIFE)

Uma função anônima entre parênteses, seguida por outro par de parênteses que representa sua chamada.

(
    function() {
        let name = "Digital Innovation One"
        return name;
    }
)();

## Callbacks

Uma função passada de argumento para outra.

const calc = function(operacao, numero1, numero2) {
    return operacao(numero1, numero2);
}

const soma = function(numero1, numero2) {
    return numero1 + numero2;
}

const subtracao = function(numero1, numero2) {
    return numero1 - numero2;
}

const resultadoSoma = calc(soma, 1, 2);
const resultadoSub = calc(sub, 1, 2);

console.log(resultadoSoma + " " + resultadoSub); // -> 3 -1

## Arguments

Array com todos os parâmetros passados quando a função foi invocada.

Pode ser criada uma função para mostrar os argumentos:

function showArgs() {
    return arguments;
}

function findMax() {
    let max = -Infinity;

    for(let i = 0, i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(1, 4, 3, 8, 85, 7, 60)) // -> 85

## Arrays

Spread: lidar separadamente com elementos

function soma(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // -> 6

A parte do array se torna um elemento independente.

Rest: combina os elementos em um array.

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho() // -> 0
confereTamanho(1, 2) // -> 2
confereTamanho(3, 4, 5) // -> 3

O elemento antes independente se torna parte de um array.

## Objetos

- Destructuring:

Entre chaves podemos filtrar somente os dados que interessam em um objeto.

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`
}

userId(user)
getFullName(user)

Retorna o dado correspondente a `id` dentro de `user` e os parâmetros firstName e lastName.

## This

Referência de contexto.

``` bash
    const pessoa = {
        firstName: "Vinícius",
        lastName: "Fernandes",
        id: 1,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        },
        getId: function() {
            return this.id;
        }
    }

    pessoa.fullName(); // -> "Vinícius Fernandes"
    pessoa.getId(); // -> 1
```

Ou seja, neste caso, `this` referencia ao objeto `pessoa`.

| Contexto              | Referência                               |
|-----------------------|------------------------------------------|
| Em um objeto (método) | Próprio objeto                           |
| Sozinha               | Objeto global (em navegadores, a window) |
| Função                | Objeto global                            |
| Evento                | Elemento que recebeu o evento            |

## Arrow functions

Representada por `=>`

Os 3 códigos a seguir tem exatamente a mesma saída.

``` bash
    const helloWorld = function(){
        return "Hello World";
    }
```

``` bash
    const helloWorld = () => {
        return "Hello World";
    }
```

``` bash
    const helloWorld = () => return "Hello World";
```

Com uma linha, pode-se dispensar as chaves e o return. Com apenas um parâmetro pode-se dispensar os parênteses.

Arrow function NÃO faz hoisting (chamar a variável antes da função)!

``` bash
    soma(2, 4);

    function soma(a, b) {
        return a + b;
    }

    // -> 6
```

``` bash
    soma(2, 4);

    const soma = (a, b) => a + b;

    // -> Uncaught ReferenceError: Cannot access 'soma' before initialization at <anonymous>:1:1
```

- `this` será sempre o objeto global. Métodos para modificar o valor não funcionarão.
- Não existe o objeto `arguments`
- O construtor (ex: new objeto()) não pode ser utilizado.

## Map

Declaração básica:

```bash
    const meuMap = new Map();
```

Características:

- Uma coleção de arrays no formato [chave, valor];
- Pode ser iterado através de loop for...of

Métodos:

```bash
    const meuMapa = new Map();
    meuMapa.set('banana', 'fruta'); // -> Map(1) {"banana" => "fruta"}

    meuMapa.get(banana);            // -> "fruta"

    meuMapa.delete("banana");       // -> true
    
    meuMapa.get("banana");          // -> undefined
```

### Map vs Objeto

- Maps podem ter chaves de qualquer tipo (objetos sempre tem chaves na forma de strings);
- Maps possuem a propriedade `length`;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo;

## Set

São estruturas que armazenam apenas valores únicos.

Declaração básica:

```bash
    const meuArray = [0, 1, 1, 5, 6, 2, 6, 7, 3];

    const meuSet = new Set(meuArray);

    console.log(meuSet) // -> Set(7) { 0, 1, 5, 6, 2, 7, 3 }
```

Métodos:

```bash
    const meuSet = new Set();

    meuSet.add(1);
    meuSet.add(5);

    meuSet.has(1);                  // -> true
    meuSet.has(3);                  // -> false

    meuSet.delete(1);
```

### Set vs Array:

- Possui valores únicos;
- Em vez da propriedade `length`, o numero de registros é consultado pela propriedade `size`;
- Não possui os métodos `map`, `filter`, `reduce`, etc.

## Debbuging e Error Handling

### ECMAScript Error

Erro em tempo de execução.

####Composto por:

- Mensagem
- Nome
- Linha
- Call Stack

### DOMException

Erros relacionados ao DOM (Document Object Model)

## Tratamento de erros

### Throw

Retorna o erro detalhado, diferente da função `return`.

### Try... catch

Ele verifica algum erro dentro do `try` e o retorna no `catch` e pode ser tratado internamente.

#### Finally

Um trecho que executa após do try catch de qualquer maneira (não é obrigatório).

## Manipulação de objeto de Error

```bash
    new Error(message, fileName, lineNumber)    // todos parametros são opcionais
    const MeuErro = new Error('Mensagem Inválida');
    throw MeuErro;
```

## Assincronicidade

"Que não ocorre ou não se efetiva ao mesmo tempo."

Por padrão, o Javascript roda de maneira síncrona.

### Promises

Objeto de processamento assíncrono.
Basicamente uma promessa de resolução que não mostra o valor, mas que algum tempo depois retorna se foi resolvida ou rejeitada.

- Estrutura básica:

```bash
    const minhaPromise = newPromise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida'));
        }, 2000)
    });
```

As chamadas podem ser encadeadas através de `await`, como no exemplo:

```bash
    async const minhaPromise = newPromise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida'));
        }, 2000)
    });

    await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e acabou')
        .catch((err) => console.log(err.message));

        // Aguarda 2 segundos e depois retorna
        // -> "Resolvida passando pelo then e acabou"
```

###Async/Await

Necessita de palavras-chave para resolver.

Para que se use o `await` é necessário especificar que a função é assíncrona com a palavra-chave `async`.

```bash
    async function resolvePromise(){
        const minhaPromise = new Promise((resolve, reject) => {
            window.setTimtout(() => {
                resolve('Resolvida');
            }, 3000);
        });

        const resolved = await minhaPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora terminou!')
            .catch((err) => console.log(err.message));

            return resolved;
    }
```

## APIs (Application Programming Interface)

Uma API é uma forma de intermediar resultados do back-end com o que é apresentado no front-end, podem ser acessadas através de URLs.

Uma API por exemplo, é o intermediário entre os dados de dentro de um banco de dados e a comunicação/uso destes dados em aplicações Web, mobile ou até outras APIs.

### JSON (JavaScript Object Notation)

Formato mais comum de retorno de dados de uma API, devendo ser esses dados tratados para uso, ou os dados atuais formatados neste para o envio em APIs.

### Fetch

Método para consumir os dados de uma API. O código abaixo retorna uma Promise, por isso é necessário utilizar `async/await`.

Exemplo:

```bash
    fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
```
É necessário sempre converter a resposta para JSON através do `.json()`.

#### Operações em banco (POST, GET, PUT, DELETE, etc...)

- POST

```bash
    fetch('https://endereco-da-api.com/', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => console.log(json))

    // -> Promise
```

- GET

```bash
    fetch('https://endereco-da-api.com/', {
        method: 'GET',
        cache: 'no-cache',
    })
    .then(response => response.json())
    .then(json => console.log(json))

    // -> Promise
```