# React Component Generator

Simple, template-based React component generator for VS Code.

Based on the generate-react-component extension by [@joshjg](https://github.com/joshjg/vscode-generate-react-component).
His extension stopped working on February 2019 because of a VSCode update, and since it hasn't been fixed by the time this version was released (June 17th, 2019), I took the liberty to create this extension by applying [@nonjene's pull request](https://github.com/joshjg/vscode-generate-react-component/pull/6) to fix it and updated the component code to the current syntax.

## Usage
* Right click any directory in the explorer panel
* Select Component or Class Component
* Input name and choose options
* Submit

## What's the deal with these files?

The default templates are opinionated, admittedly. They adhere to the best practices promoted in [this video by Scott Bowler](https://www.youtube.com/watch?v=TQ4wW63eoIY).
* With **Component** you can generate a stateless component by typing `n` when asked if you want to use Hooks/State. If you type `y`, it will generate a component **with Hooks setup**.
* With **Class Component** you will generate a stateful component. For now, typing `y` or `n` will just insert or not a state property.
* Styling components here are done by using [styled-components](https://www.styled-components.com/). Import declaration is commented by default so your app doesn't break on first render, but the setup is already there.
* `package.json` simply passes the component through so you can `import SomeComponent from '/components/SomeComponent'`

However, this package does not force these principles. You can easily customize the templates to match your own tech stack.

## Extension Settings

The component templates are completely customizable. You can add additional boolean options to the generator panel from the package's settings. One option is included by default: `Hooks/State` determines whether to insert Hooks/State declarations in your component.

This extension contributes the following settings:

* `react-component-generator.conditionals`: Array of strings which will toggle certain portions of your templates.
* `react-component-generator.componentTemplatePath`: Absolute path to custom **component** template directory. If left blank, defaults to built-in template.
* `react-component-generator.classComponentTemplatePath`: Absolute path to custom **classComponent** template directory. If left blank, defaults to built-in template.

### Syntax

Template syntax is very simple:

* Any occurrence of `__ComponentName__` in a filename or a file's content will be replaced with the user's text input.
* Any text surrounded by `/* IF condition */` and `/* ENDIF */`, where `condition` is the name of an option (defined in the package settings) will be removed unless `condition` is enabled (or invalid)
* Any text surrounded by `/* IF !condition */` and `/* ENDIF */` will be removed unless `condition` is disabled (or invalid)
* Any remaining `/* IF */` or `/* ENDIF */` comments will be removed, but the text between them will be untouched
