# tslint-config-blvd

> ✨ A TSLint config that conforms to [the blvd TypeScript styleguide](https://github.com/blvdgroup/guidelines/tree/master/languages/typescript).

## Installation

Install `tslint` and `tslint-config-blvd` using yarn:

```bash
yarn add --dev tslint tslint-config-blvd
```

or, for npm:

```bash
npm install --save-dev tslint tslint-config-blvd
```

## Usage

In your `tsconfig.json` file, extend `tslint-config-blvd`.

```json
{
  "extends": "tslint-config-blvd"
}
```

### React rules

We've also included a separate config for React projects. In your `tsconfig.json` file, extend `tslint-config-blvd/react`.

```json
{
  "extends": ["tslint-config-blvd/react"]
}
```

### Prettier

[Prettier](https://prettier.io/) is an automated code formatter for JavaScript, TypeScript, and other languages.

This TSLint config works alongside Prettier, too. To use it, install Prettier as well as `tslint-config-prettier` to your project.

```bash
yarn add --dev prettier tslint-config-prettier
```

Create a `.prettierrc` file. Then add the following configs. This should make Prettier automatically format your code based
on the blvd guidelines.

```json
{
  "semi": false,
  "tabWidth": 2,
  "printWidth": 140,
  "singleQuote": true,
  "trailingComma": "none"
}
```

Then include `tslint-config-prettier` in your project. **IMPORTANT:** You must add `tslint-config-prettier` last in the `extends` array!

```json
{
  "extends": ["tslint-config-blvd/react", "tslint-config-prettier"]
}
```
