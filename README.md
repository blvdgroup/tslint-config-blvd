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
