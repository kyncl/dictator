# dictator
Eslint configuration that `dictates`, how you should write your js/ts code.

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
| Enums            | PascalCase |
| Enum members     | PascalCase/UPPER_CASE |
## Eqeq
Eslint will warn on == (it is highly recommended to use === instead)

# Requirements
- "@eslint/js": "^9.39.2",
- "eslint": "^9.39.2",
- "eslint-plugin-filenames-simple": "^0.9.0",
- "eslint-plugin-react": "^7.37.5",
- "eslint-plugin-react-hooks": "^7.0.1",
- "typescript-eslint": "^8.52.0"

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

This project was created using `bun init` in bun v1.3.5. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
