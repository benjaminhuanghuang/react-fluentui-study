# React Guidelines

https://github.com/microsoft/fluentui/wiki/React-Guidelines


- Favor composition over inheritance

- Prefer function components in new code

- Ref usage

Fluent UI components use React.forwardRef to expose a reference to the component's root DOM element.

- Consuming a component's public API
  - Define an I{ComponentName} interface which only exposes the methods intended to be supported.
  
  - Add a prop componentRef?: IRefObject<IComponentName>

- Setting up the componentRef

