<!--
 * @Author: chenzhongsheng
 * @Date: 2024-07-17 17:24:30
 * @Description: Coding something
-->
# Rules

## Enable rules

vue-lim will not compile all vue files by default.

When using `.lim.vue` as the file suffix, lim compilation will be enabled

When using only `.vue` as the suffix, you need to add the `lim` attribute to the script tag to enable lim compilation, as shown below

```vue
<script setup lim>
    // ...
</script>
```

**Currently only supports script setup scenarios**

## Composition API

vue-lim can be used freely in combination with Composition API, and Composition API has a higher priority than vue-lim compilation.

## API

vue-lim compilation can be run in a browser environment, and the usage is as follows

```js
import { transformVue } from 'vue-lim';
console.log(transformVue(`// some vue code`));
```

Or you can import it through CDN

```html
<script src='https://cdn.jsdelivr.net/npm/vue-lim'></script>
<script>
console.log(VueLim.transformVue(`// some vue code`));
</script>
```
