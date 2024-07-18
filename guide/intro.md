<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-08 13:17:31
  * @Description: Coding something
-->
# Introduction

## What is Lim?

Lim is the abbreviation of Less is More. It is essentially a compiler that compiles Vue or React code, allowing developers to avoid using Composition API or React Hooks.

Lim statically analyzes the dependencies and changes of variables in the code to find out the variables that the UI depends on and have or may change. These variables are rewritten to the corresponding framework and all their references are modified at the same time.

The following are examples of counters for Vue and React respectively:

<CodeBox name="Vue Counter" :is-vue="true"/>

```vue
<script setup lim>
let count = 0;
</script>
<template>
  <button @click="count++">count is {{ count }}</button>
</template>
```

<CodeBox name="React Counter"/>

```jsx
function App () {
    let count = 1;
    const increase = () => count ++;
    return <button onClick={increase}>
        count is {count}
    </button>;
}
```

## Compatibility

Lim only has compile time, no runtime. And the compiled product is complete Vue or React code, so Lim can be perfectly adapted to the third-party ecological libraries of Vue or React, without having to consider the ecological imperfections brought by using new frameworks.