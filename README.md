<div align="center">
  <h1>⚙️ prettier-config-hbb</h1>

  <p><strong>prettier-config-hbb is an opinionated configuration</strong> that makes it easy to start your projects.</p>

<!-- prettier-ignore-start -->
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![downloads][downloads-badge]][npmtrends]
<!-- prettier-ignore-end -->
</div>

---

## Motivation

- Easy to start coding, avoid wasting time configuring for every project
- Focus on the project instead of the tooling
- Start the project quickly and easy

## Installation

This module is distributed by NPM and should be installed as one of your project's `devDependencies`:

```sh
$ npm install --save-dev eslint-config-hbb

// or

$ yarn add -D eslint-config-hbb
```

## Usage

Import to your `.prettierrc.js` such as:

```js
module.exports = require('prettier-config-hbb');
```

### Override configurations

```js
const config = require('prettier-config-hbb');

module.exports = {
  ...config,
  semi: false,
};
```

### Script in package.json:

```json
"scripts": {
  "format": "prettier \"src/**/*.+(ts|tsx|js|jsx|json|yml|yaml|md|mdx)\" --write"
},
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Bugs and Sugestions

Report bugs or do suggestions using the [issues](https://github.com/helderburato/prettier-config-hbb/issues).

## LICENSE

[MIT](LICENSE) @ Helder Burato Berto [HBB]

<!-- prettier-ignore-start -->
[version-badge]: https://img.shields.io/npm/v/prettier-config-hbb.svg?style=flat-square
[package]: https://www.npmjs.com/package/prettier-config-hbb
[downloads-badge]: https://img.shields.io/npm/dm/prettier-config-hbb.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/prettier-config-hbb
[license-badge]: https://img.shields.io/npm/l/prettier-config-hbb.svg?style=flat-square
[license]: https://github.com/helderburato/prettier-config-hbb/blob/master/LICENSE
<!-- prettier-ignore-end -->
