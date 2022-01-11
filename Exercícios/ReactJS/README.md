# ReactJS

## História e Conceitos

> "Uma biblioteca JavaScript para criar interfaces de usuário.
> -- <cite>ReactJS</cite>

- Criado em 2011 por Jordan Walke no Facebook;
- Baseado no XHP, um framework para criação de HTML no PHP;
- Utilizado no mural de notícias do site por causa de seu crescimento constante e falta de escalabilidade.

Timeline:

- 2012: Utilizado no Instagram;
- 2013: Anúncio para liberação OpenSource na JSConf US;
- 2015: React Native;
- 2015: UWP (Universal Windows Platform);

**Atenção**: React **NÃO** é um framework e sim uma biblioteca.

É uma linguagem **declarativa**. Que só se preocupa com o que é exibido na interface.

## JSX
É uma linguagem de marcação criada para poder ter a estrutura HTML com o poder do JavaScript.
Não é obrigatório, é uma Sintax Sugar para o React.CreateElement.

O browser não interpreta o JSX, é necessário um transpilador para que a aplicação entenda o código.

### Exemplo

```jsx
    function thisIsAJSX() {
        return (
            <div>
                Hello WWWorld!
            </div>
        )
    }

    const App = () => {
        return(
            <div className="App">
                {thisIsAJSX()}
            </div>
        )
    }
```

## Renderização

Os elementos são renderizados através do ReactDOM, que é um DOM virtual onde controla o seu próprio DOM, sempre quando tiver alteração ele aplica somente neste nó e não atualizando todo oo DOM.

## Componentes e Props

Componentes são as aplicações criadas individualmente no código e as props são os parâmetros que são passados para os componentes.

Pode ser uma função ou classe.

## Estado e Ciclo de Vida

Os componentes do ReactJS tem cada um um ciclo de vida que pode ser monitorado e manipulado durante as três principais fases: Mount(montagem), Update(atualização) e Unmount(desmontagem).

## Webpack

### O que é?
Um **module bundler** (empacotador de emódulos para aplicações JS) para gerar o bundler que será usado no HTML em ES5.

## Arquitetura Flux

Action -> Dispatcher -> Store -> View

- Action: como um telégrafo, formatando a mensagem a ser enviada;
- Dispatcher: como um telefonista, sabe todos os callbacks para diferentes _stores_.
- Store: é como um gerente controlador. Guarda a informação (estados) e todas as alterações tem que ser feitas estritamente por ele.
- View: é como um gerente intermediário (middleware) que recebe as notificações da store e passa os dados ara as visões abaixo dela.

### Implementações conhecidas

- Redux (mais popular)
- Reflux
- Mobx
- Vuex (baseado em Redux e Elm)
- NgRx/store (baseado em Redux e RxJS)