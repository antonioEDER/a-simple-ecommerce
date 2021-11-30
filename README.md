# front-self-service
```
Um projeto para se aprofundar VueJs 3 juntamente com Vuex 4. Bora aprender?
```
[![N|Solid](https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=150&version=1513627136&width=150)]

### Instalação
```
yarn install
```
```
yarn serve
```

## O que são diretivas no Vue?
```
São blocos reutilizáveis ​​de código ou lógica que os 
desenvolvedores podem usar em um modelo HTML.
```
 * ###### v-text 
 > < div v-text="msg" />
 *  ###### v-html
 > < div v-html="'< h1>Hello World< h1/>'" />
 * ###### v-show
 > < div v-show="true" />
 * ###### v-if
 > < div v-if ="true" />
 * ###### v-else
 > < div v-else />
 * ###### v-else-if
> < div v-else-if />
 * ###### v-for
> < div v-for="(item, index) in items" key="gerarUmaChave() ">
* ###### v-on ou @

> < button v-on:click="doThis "/>
>
> < button v-on:click="doThat('hello', $event) "/>
>
> < button @click="doThis "/>
>
> < button @click.stop="doThis "/>
>
> < button @click.prevent="doThis "/>
>
> < form @submit.prevent/>
>
> < button @click.stop.prevent="doThis "/>
>
> < input @keyup.enter="onEnter" />
>
> < button v-on:click.once="doThis "/>
>
> < button v-on="{ mousedown: doThis, mouseup: doThat } "/>

> < button v-on:click="doThis "/>
>
> < button v-on:click="doThat('hello', $event) "/>
>
> < button @click="doThis "/>
>
> < button @click.stop="doThis "/>
>
> < button @click.prevent="doThis "/>
>
> < form @submit.prevent/>
>
> < button @click.stop.prevent="doThis "/>
>
> < input @keyup.enter="onEnter" />
>
> < button v-on:click.once="doThis "/>
>
> < button v-on="{ mousedown: doThis, mouseup: doThat } "/>

## O que two-way data binding no Vue?
```
Basicamente, two-way data binding, 
é o termo dado a reatividade dos elementos na sua interface. 
Ou seja, o que acontece no DOM (View), reflete no JavaScript(Model), e o que 
acontece no JavaScript(Model), reflete no DOM(View). 
```
>  Exemplo: {{ input }}

## O que Lifecycle hooks no Vue?
```
Lifecycle hooks (Ganchos de ciclo de vida) são uma janela para ver
como a biblioteca que você está usando funciona nos bastidores.
Lifecycle hooks permitem saber quando seu componente é criado, 
adicionado ao DOM, atualizado ou destruído.
```
> beforeCreate() Neste ponto, os eventos e o ciclo de vida foram inicializados.
>
> created() Neste ponto, this.property agora é reativo e propertyComputed será atualizado.
>
> beforeMount() Neste ponto, vm.$el ainda não foi criado.
>
> mounted() Neste ponto, vm.$el foi criado e el foi substituído.
>
> beforeUpdate() Neste ponto, o Virtual DOM ainda não foi renderizado ou corrigido novamente.
>
> updated()  Neste ponto, o Virtual DOM foi renderizado novamente e corrigido.
>
> beforeDestroy()  Nesse ponto, os observadores, os componentes filhos e os ouvintes de eventos ainda não foram desativados.
>
>  destroyed() Nesse ponto, os observadores, os componentes filhos e os ouvintes de eventos foram desativados.

```
