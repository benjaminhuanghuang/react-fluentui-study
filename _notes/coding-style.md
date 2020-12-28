## Fluentui Coding Style
- https://github.com/microsoft/fluentui/wiki/Coding-Style


## Coding Standard
Tools: VS Code + Prettier + TSLint

prettier config
```
  "prettier.requireConfig": true
```
Prettier and TSLint are run as pre-commit hook


## Comments for type information
Use JSDoc comments for function, interfaces, enums, and classes. Be sure to include comments describing the item's functionality.

In TS files, DO NOT include annotations in your doc comments which TS could infer from the context. These include:


## Naming convention
Avoid including the words Core, Utility, Common, or Helper in names

camelCase when naming objects, functions, and instances.
```
  const thisIsMyObject = {};
  function thisIsMyFunction() {}
```

PascalCase for classes / components / interfaces
```
  const MyComponent = props => <div>{props.name}</div>;

  interface ISampleInterface {
    name: string;
  }
```

DO NOT use  prefixing `I` for interfaces


Use prefixed underscores to identify private consts, methods, and functions
```
  const _privateConst = 1;

  class Foo {
    private _member = 1;
  }

  function _privateFunction() {
    // ...
  }
```





