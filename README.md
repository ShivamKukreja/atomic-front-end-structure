# Client Side React Atomic Front End Structure

## Setup and Requirements

### Requirements

- Latest Node LTS - https://nodejs.org/en/download/
- An IDE. VSCode is recommended - https://code.visualstudio.com/download
- Git
- Multiple browsers for testing - Chrome, Safari, Firefox, Edge.

### Setup VSCode

#### Required Extensions/Packages

Browse the extensions tab from the left-side menu (usually the second last option)
and search for the below packages

- `ESLint` to enable IDE enforced linting.
- `Prettier - Code formatter`
- `Prettier ESLint`
- `EditorConfig for VS Code` to enabled enforced editor config.
- `Code Spell Checker` for quality of text.

#### Nice to Have Packages

- `indent-rainbow` nice visual assistance in whitespace.
- `Bracket Pair Colorizer 2` nice visual assistance in bracket/parenthesis.

#### Settings Preferences

- Ctrl-Shift-P and open the settings json file of your workspace
- Paste the below code in the above file

```
{
  "editor.fontSize": 14,
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
  "editor.minimap.enabled": true,
  "editor.showFoldingControls": "always",
  "editor.codeLens": true,
  "workbench.editor.enablePreview": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "workbench.activityBar.visible": true,
  "workbench.statusBar.visible": true,
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.confirmOnExit": true,
  "diffEditor.ignoreTrimWhitespace": true,
  "search.exclude": {
      "**/dest": true,
      "**/dist": true,
      "**/build/**": true,
      "**/bower_components": true,
      "**/node_modules": false,
      "**/log": true,
      "**/logs": true,
      "**/coverage": true,
      "**/.nyc_output": true
  },
  "eslint.alwaysShowStatus": true,
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.disableLanguages": ["js”]
}
```

## Build and Run

- Copy `.env.example` to `.env`
- `npm install`
- `npm run start`
- You can fiddle with the below files to write your component,
  debug and observe the console messages.

  `src/App.js`: Integrated a dummy API call for now as a sample. Response can be observed in the console.

  `src/index.js`

## Learning Path (Specific)

- React: https://reactjs.org/docs/getting-started.html
- Atomic Design: https://bradfrost.com/blog/post/atomic-web-design/
- Material UI: https://reactjs.org/docs/getting-started.html
- Styled-Components: https://styled-components.com/
- React-hook-form: https://react-hook-form.com/
