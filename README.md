![workflow](https://github.com/do-/node-string-is-uuid/actions/workflows/main.yml/badge.svg)
![Jest coverage](./badges/coverage-jest%20coverage.svg)

`string-is-uuid` is a [UUID](https://datatracker.ietf.org/doc/html/rfc9562) validator for node.js.

It offers a single function, `isUuid ()`, that does just the same as the [`version ()`](https://www.npmjs.com/package/uuid/v/11.1.0#uuidversionstr) function from `uuid` package.

# Installation
```sh
npm install string-is-uuid
```
# Usage
```js
const {isUuid} = require ('string-is-uuid')

try {
  const version = isUuid (presumedUUID)
  // console.log (`OK, this really is a UUID, ver. #${version}`)
}
catch (err) {
  // console.log (err)
}

```
# Rationale
There are [plenty](https://www.npmjs.com/search?q=uuid%20validator) of UUID validators available on npm. Still, every one of them the author checked out to date is implemented via [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions), that impose a certain performance overhead. 

For example, as [benchmarks](https://github.com/do-/node-string-is-uuid/blob/db864cad6f895b54f7b515bbe216b53a678e2f98/__tests__/perf.js) show, the aforementioned `version ()`'s latency from `uuid` v.11.1.0 can be reduced by 78%.