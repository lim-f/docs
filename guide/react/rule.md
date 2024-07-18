<!--
 * @Author: chenzhongsheng
 * @Date: 2024-07-17 17:24:30
 * @Description: Coding something
-->
# Rules

## Enable rules

react-lim will not enable compilation for all react files by default.

When using `.lim.tsx` or `.lim.jsx` as the file suffix, lim compilation will be enabled

When using only `.tsx` or `.jsx`, you need to add `'use lim'` or `// use lim` in the file header to enable lim compilation

```jsx
'use lim'

// some code...
```

```jsx
// use lim

// some code...
```

## React Hooks

react-lim can be used freely in combination with React Hooke, and React Hooke has a higher priority than react-lim compilation.

## API

react-lim compilation can be run in the browser environment, and the usage is as follows

```js
import { transformReact } from 'react-lim';
console.log(transformReact(`// some react code`));
```

Or you can import it through CDN

```html
<script src='https://cdn.jsdelivr.net/npm/react-lim'></script>
<script>
console.log(ReactLim.transformReact(`// some react code`));
</script>
```
