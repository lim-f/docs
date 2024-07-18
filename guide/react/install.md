<!--
 * @Author: chenzhongsheng
 * @Date: 2024-07-17 17:24:26
 * @Description: Coding something
-->
# Installation and Use

[Github](https://github.com/lim-f/react-lim)

react-lim provides corresponding plug-ins for mainstream build tools, but only provides compilation from Lim source code to react source code. The work of compiling react source code to js requires developers to choose and import it by themselves. The purpose of this is to reduce coupling, so that developers can freely choose the compilation plug-in of react. Secondly, it can also facilitate the rapid access of existing projects to react-lim, just introduce an additional plug-in.

react-lim can be used freely in combination with React Hooks.

## Install

```
npm i react-lim
```

## Vite Plugin

```js
import { defineConfig } from 'vite'
import lim from 'react-lim/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [lim(), react()],
})
```

## Rollup Plugin

```ts
import lim from 'react-lim/rollup'
export default {
    plugins: [
        lim(),
        // You need to introduce React-related compilation plug-ins here
    ]
};
```

## Esbuild Plugin

```ts
import lim from 'react-lim/esbuild'
import { build } from 'esbuild';

build({
    plugins: [
        lim(),
        // You need to introduce React-related compilation plug-ins here
    ],
});
```

## Webpack loader

```ts
module.exports = {
    module: {
        rules: [{
            test: /(\.[tj]sx)$/,
            loader: 'react-lim/webpack',
            exclude: /node_modules/
        }]
        // You need to introduce React-related compilation loader here
    }
}
```