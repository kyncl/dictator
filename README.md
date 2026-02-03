# dictator
Eslint configuration that [dictates](https://www.youtube.com/watch?v=MG_npaLydKg), how you should write your js/ts code.

# Rules
## Types
| Type             | Format |
| ---------------- | ---------- |
| Variables        | camelCase  |
| Global constants | UPPER_CASE |
| Functions        | camelCase  |
| Components       | PascalCase |
| Interfaces       | PascalCase |
| Type aliases     | PascalCase |
| Classes          | PascalCase |
## Eqeq
Eslint will warn on == (it is highly recommended to use === instead)

## No enum rule
Generally it is not wise to use enums in typescript, because the compiler can do some really big shenanigans. Instead use string unions.

# Requirements
- "@eslint/js": "^9.39.2",
- "eslint": "^9.39.2",
- "eslint-plugin-filenames-simple": "^0.9.0",
- "eslint-plugin-react": "^7.37.5",
- "eslint-plugin-react-hooks": "^7.0.1",
- "typescript-eslint": "^8.52.0"
- or you can install by 
```bash
bun install @eslint/js eslint eslint-plugin-filenames-simple eslint-plugin-react eslint-plugin-react-hooks typescript-eslint
```

# Install
To implement just copy the `eslint.config.js` lmao
To install dependencies:
```bash
bun install
```
To run:
```bash
bun run src/index.ts
```

# Next.js version
If you want dictator specific for Next.js checkout `nextjs/eslint.config.js`
