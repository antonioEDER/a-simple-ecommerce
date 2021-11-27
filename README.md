# front-self-service
```
Um projeto para estudar as alterações do VueJs 3 e Vuex 4. Estou empolgado!
```

## O que são diretivas no Vue?
```
São blocos reutilizáveis ​​de código ou lógica que os desenvolvedores podem usar em um modelo HTML.
-> v-text | <span v-text="msg" />
-> v-html | <div v-html="'<h1>Hello World</h1>'" />
-> v-show | <div v-show="true" />
-> v-if   | <div v-if ="true" />
-> v-else | <div v-else />
-> v-else-if | <div v-else-if />
-> v-for | <div v-for="(item, index) in items" key="gerarUmaChave()">
-> v-on ou @
****
<!-- method handler -->
<button v-on:click="doThis"></button>
<!-- inline statement -->
<button v-on:click="doThat('hello', $event)"></button>
<!-- shorthand -->
<button @click="doThis"></button>
<!-- stop propagation -->
<button @click.stop="doThis"></button>
<!-- prevent default -->
<button @click.prevent="doThis"></button>
<!-- prevent default without expression -->
<form @submit.prevent></form>
<!-- chain modifiers -->
<button @click.stop.prevent="doThis"></button>
<!-- key modifier using keyAlias -->
<input @keyup.enter="onEnter" />
<!-- the click event will be triggered at most once -->
<button v-on:click.once="doThis"></button>
<!-- object syntax -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
