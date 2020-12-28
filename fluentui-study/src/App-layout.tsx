/*
https://github.com/microsoft/fluentui/wiki/How-to-apply-theme-to-Fluent-UI-React-components

Starting in @fluentui/react@8, use new component called ThemeProvider

*/
import React from "react";

import { loadTheme, createTheme, ITheme } from "@fluentui/react";
import { DefaultButton, PrimaryButton, initializeIcons } from "@fluentui/react";

import "./App.css";

initializeIcons();

const appTheme: ITheme = createTheme({
  palette: {
    themePrimary: "red",
  },
});

loadTheme(appTheme);

function App() {
  return (
    <div className="App">
      <DefaultButton iconProps={{ iconName: "Filter" }}>Default</DefaultButton>
      <PrimaryButton iconProps={{ iconName: "Folder" }}> PrimaryButton</PrimaryButton>
    </div>
  );
}

export default App;
