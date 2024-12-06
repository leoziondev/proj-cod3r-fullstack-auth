# `@turbo/eslint-config`

Collection of internal eslint configurations.


/package
    /core //estou criando
        /src
            /data
                -listaDePerfil.ts
                -listaDePermissao.ts
                -listaDeUsuario.ts
            /domain
                /models
                    -Id.ts
                    -index.ts
                    -Perfil.ts
                    -Permissao.ts
                    -Usuario.ts
                index.ts
            /functions
                index.ts
            /shared
                /utils
                    -Id.ts
                    -index.ts
                index.ts
        -package.json
        -tsconfig.json
    /eslint-config
        /node_module
            /***
        -library.js
        -next.js
        -package.json
        -react-internal.js
        -readme.md
    /typescript-config
        -base.json
        -nextjs.json
        -package.json
        -react-library.json
    /ui
        /node_module
            /***
        /src
            -button.tsx
            -card.tsx
            -code.tsx
        /turbo
            /generators
                /templates
                    -component.hbs
                -config.ts
        -.eslintrc.js
        -package.json
        -tsconfig.json
        -tsconfig.lint.json




verificar isso no base.json
    "target": "ES6",                   // Define o padrão de JavaScript gerado
    "module": "ESNext",                 // Usando módulos ES6
    "moduleResolution": "node",         // Resolução de módulos no estilo Node.js
    "esModuleInterop": true,            // Permite importar módulos CommonJS
    "skipLibCheck": true,               // Ignora verificação de bibliotecas
    "forceConsistentCasingInFileNames": true  // Consistência de maiúsculas/minúsculas nos nomes de arquivos


/.turbo
/.vscode
/apps
/node_module
/packages
-.gitignore
-.npmrc
-package.json
-pnpm-lock.yaml
-pnpm-workspace.yaml
-readme.md
-trubo.json



Obrigado por compartilhar a estrutura do seu projeto! Com essas informações, podemos proceder com mais clareza.

Vamos dar uma olhada nas principais pastas e arquivos que você mencionou para garantir que todos os detalhes estejam configurados corretamente antes de avançarmos. 

### Estrutura atual:

1. **`/package/core`** — A pasta que você está criando.
   - Dentro de `src`, você tem subpastas como `data`, `domain`, `functions`, e `shared`, o que indica que está criando um pacote mais modular.
   - O arquivo `package.json` e `tsconfig.json` devem estar presentes, e vamos configurá-los para garantir que os imports e builds funcionem corretamente.
   
2. **`/eslint-config`** — Pasta relacionada ao ESLint.
   - Aparentemente, ela tem um `package.json` e arquivos de configuração de linting, como `library.js`, `next.js`, e outros.
   - Vamos revisar o `package.json` e os arquivos de configuração para garantir que o ESLint esteja configurado corretamente.

3. **`/typescript-config`** — Pasta de configuração TypeScript.
   - Arquivos como `base.json`, `nextjs.json`, e outros são usados para fornecer configurações específicas para os pacotes do projeto.

4. **`/ui`** — Parece ser um pacote relacionado à UI, com arquivos `.tsx` e outros arquivos que configuram componentes de UI.
   - Aqui, a configuração de `tsconfig.json` e o `package.json` com dependências específicas para o UI devem ser verificadas, como você mencionou.

### **Próximos Passos:**

Vamos seguir a ordem para garantir que todos os pacotes e dependências estejam configurados corretamente. O que podemos fazer agora é focar na configuração do `core` e garantir que ele consiga se comunicar corretamente com o restante do monorepo, incluindo as dependências de ESLint e TypeScript.

### Passo 1: **Verificar o `package.json` do `core`**

O arquivo `package.json` na pasta `core` deve ser configurado corretamente. Eu sugiro a seguinte configuração inicial para o seu `core/package.json`:

```json
{
  "name": "@repo/core",
  "version": "1.0.0",
  "private": true,
  "main": "dist/index.js",  // O arquivo principal após a transpilação
  "types": "dist/index.d.ts", // Arquivo de definições TypeScript
  "files": [
    "dist",  // Diretório onde o código compilado será armazenado
    "src"    // Diretório contendo o código-fonte
  ],
  "scripts": {
    "build": "tsc",                  // Comando para compilar o TypeScript
    "dev": "ts-node-dev src/index.ts" // Usado para desenvolvimento ao vivo
  },
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",   // ESLint Configuração compartilhada
    "@repo/typescript-config": "workspace:*", // Configuração do TypeScript
    "@types/node": "^20.11.24",  // Tipos para o Node.js
    "typescript": "^5.5.4",      // Compilador TypeScript
    "ts-node-dev": "^2.0.0",     // Ferramenta para desenvolvimento ao vivo
    "eslint": "^8.57.0"          // ESLint
  },
  "dependencies": {
    // Dependências do pacote core, se necessário
  }
}
```

**Verificação a ser feita:**
- Verifique se o arquivo `package.json` na pasta `core` contém essas configurações. Caso contrário, podemos ajustar conforme necessário.

### Passo 2: **Verificar o `tsconfig.json` do `core`**

O `tsconfig.json` da pasta `core` precisa garantir que a estrutura do seu código-fonte seja compilada corretamente. Aqui está um exemplo básico para isso:

#### Exemplo de `tsconfig.json` para o `core`:

```json
{
  "compilerOptions": {
    "target": "ES6",                   // Define o padrão de JavaScript gerado
    "module": "ESNext",                 // Usando módulos ES6
    "moduleResolution": "node",         // Resolução de módulos no estilo Node.js
    "outDir": "./dist",                 // Diretório de saída para os arquivos compilados
    "rootDir": "./src",                 // Diretório raiz do código-fonte
    "strict": true,                     // Habilitar todas as verificações estritas
    "esModuleInterop": true,            // Permite importar módulos CommonJS
    "skipLibCheck": true,               // Ignora verificação de bibliotecas
    "forceConsistentCasingInFileNames": true  // Consistência de maiúsculas/minúsculas nos nomes de arquivos
  },
  "include": [
    "src/**/*.ts"                       // Inclui todos os arquivos .ts da pasta src
  ]
}
```

**Verificação a ser feita:**
- Verifique se o `tsconfig.json` está configurado dessa forma, ou algo semelhante.
- Caso o arquivo não exista, podemos criar um com essa estrutura.

### Passo 3: **Verificar o `eslint-config`**

Agora, vamos para a pasta `eslint-config`. O arquivo `package.json` nesta pasta precisa estar configurado para garantir que o ESLint seja compartilhado corretamente entre os pacotes.

1. **Verifique o `package.json` da pasta `eslint-config`**:
   - Verifique se o `name` está definido como `@repo/eslint-config`.
   - Confirme se há um arquivo de configuração para o ESLint (`.eslintrc.js`, `eslint.json`, etc.).

2. **Verifique se há regras de ESLint configuradas** para garantir que o código esteja seguindo os padrões definidos.

### Passo 4: **Verificar o `typescript-config`**

O pacote `typescript-config` precisa fornecer configurações globais para o TypeScript. Certifique-se de que os arquivos `.json` dentro dessa pasta estejam corretamente configurados para o seu projeto.

---

**Conclusão:**
Agora, por favor, revise o que temos até aqui nas pastas `core`, `eslint-config`, e `typescript-config`. Após isso, podemos avançar para a próxima etapa de integração entre os pacotes, garantindo que tudo funcione corretamente.

Caso alguma dessas configurações ainda não esteja de acordo ou falte algum arquivo, me avise para que possamos corrigir juntos.