# agenda-vue-cli

This template should help get you started developing with Vue 3 in Vite.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).


## Dependencies:

### Mock API Link:
https://668ec466bf9912d4c92fa7b7.mockapi.io/api/contacts

### JSON Server for database loading:
```sh
npm install json-server
```

#### Backend Watcher {filepath: package.json}:
"backend": "json-server --watch database/agenda.json"

#### Json-Server:
[CLI or REST API](https://www.npmjs.com/package/json-server)
```sh
npm npm install json-server
``` 

### Tailwind
See [Tailwind intallation page](https://tailwindcss.com/docs/installation/using-postcss).
```sh
npm npm install -D tailwindcss postcss autoprefixer
``` 

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```


