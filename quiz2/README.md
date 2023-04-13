# 스타일 설정(eslint, prettier)

`yarn add --dev prettier eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y`

```json
//최상단 경로의 .eslint.cjs
module.exports = {
    plugins: ['import', 'prettier', 'react', 'react-hooks', 'jsx-a11y'], // 설치한 추가적인 규칙 설정
    extends: ['airbnb', 'prettier'],
    env: {
        browser: true, // 실행 환경에 대해서 등록
        node: true,
        es2021: true,
    },
    rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
    parserOptions: { 'ecmaVersion': 2020 },
}
```

```json
//ctrl+shift+p -> workspace setting ->
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

```json
//최상단 경로의 .prettierrc
{
    "trailingComma": "all",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true,
    "printWidth": 150
}
```

#
