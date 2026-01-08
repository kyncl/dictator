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

To install dependencies:
```bash
bun install
```
To implement:
just copy the `eslint.config.js` lmao
To run:
```bash
bun run src/index.ts
```

This project was created using `bun init` in bun v1.3.5. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
