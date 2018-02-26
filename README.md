# tslint-config-blvd

> A TSLint config that conforms to the blvd TypeScript styleguide.

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

We've also included a separate config for React. In your `tsconfig.json` file, extend `tslint-config-blvd/react` alongside `tslint-config-blvd`.

```json
{
  "extends": ["tslint-config-blvd", "tslint-config-blvd/react"]
}
```
