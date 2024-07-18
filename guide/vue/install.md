<!--
 * @Author: chenzhongsheng
 * @Date: 2024-07-17 17:24:26
 * @Description: Coding something
-->
# Installation and Use

[Github](https://github.com/lim-f/vue-lim)

vue-lim provides corresponding plug-ins for mainstream build tools, but only provides compilation from Lim source code to vue source code. The work of compiling vue source code to js requires developers to choose and import it by themselves. The purpose of doing this is to reduce coupling, so that developers can freely choose vue compilation plug-ins. Secondly, it can also facilitate the rapid access of vue-lim to existing projects, and only an additional plug-in needs to be introduced.

vue-lim can be freely combined with Composition API.

## Installation

```
npm i vue-lim
```

## Vite Plugin

```js
import { defineConfig } from 'vite'
import lim from 'vue-lim/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [lim(), vue()],
})
```

## Rollup Plugin

```ts
import lim from 'vue-lim/rollup'
export default {
    plugins: [
        lim(),
        // You need to introduce Vue-related compilation plug-ins here
    ]
};
```

## Esbuild Plugin

```ts
import lim from 'vue-lim/esbuild'
import { build } from 'esbuild';

build({
    plugins: [
        lim(),
        // You need to introduce Vue-related compilation plug-ins here
    ],
});
```

## Webpack loader

```ts
module.exports = {
    module: {
        rules: [{
            test: /(\.vue)$/,
            loader: 'vue-lim/webpack',
            exclude: /node_modules/
        }]
        // You need to introduce Vue-related compilation loader here
    }
}
```