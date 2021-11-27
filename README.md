# front-self-service
```
Um projeto para se aprofundar VueJs 3 juntamente com Vuex 4. Bora aprender?
```
[![N|Solid](https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=150&version=1513627136&width=150)](https://nodesource.com/products/nsolid)

## O que são diretivas no Vue?
```
São blocos reutilizáveis ​​de código ou lógica que os desenvolvedores podem usar em um modelo HTML.
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


### Compiles and hot-reloads for development
```
yarn serve
```
