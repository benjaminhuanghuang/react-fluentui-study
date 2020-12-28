## Run test
To run the tests for one package, cd to that package and then run yarn test.


## Debugging
Set breakpoints in the test file (*.test.ts or *.test.tsx)

Open the Run (debugger) pane in the sidebar and choose the configuration you want: 
usually "Debug current open test" to run only the current open test, or "Debug test" to run all tests for the package the current file is in

Start debugging



## snapshot testing
For snapshot testing, we use react-test-renderer and Jest APIs.

react-test-renderer is a library that can create a pure object from a react component and convert it to json snapshot!

```
  import * as React from 'react';
  import { CommandBar } from './CommandBar';
  import * as renderer from 'react-test-renderer';

  describe('CommandBar', () => {
    it('renders commands correctly', () => {
      expect(renderer.create(
        <CommandBar
          items={ [
            { key: '1', name: 'name 1' },
            { key: '2', name: 'name 2' }
          ] }
        />
      ).toJSON()).toMatchSnapshot();
    });
  });
```

Visual regression testing uses Storybook to document various UI states of components.

