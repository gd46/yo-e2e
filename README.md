## E2E-Cli

Prototype of a yo generator for scaffolding an automation framework based on protractor and cucumber

## Note

This project is a work in progress.

## Prerequisites

The generated project has dependencies that require **Node 4.x.x and NPM 3.x.x**.

## Contributing

Coming Soon...

## Table of Content

Coming Soon...

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Coming Soon...

## Usage

Coming Soon...

### Generating an automation framework

```bash
yo e2e
cd test
```

### What gets done for you?

Coming Soon...

### Available generators

More Coming Soon...

You can find all possible blueprints in the table below:

Scaffold 		| Usage
--- 		 		| ----
Page Object | yo e2e page-object

### What do I get when I generate a page object?

Coming Soon...

### Linting and formatting code

Coming Soon...

## Development hints for making changes to yo e2e

### Working with master

```bash
git clone git@github.com:gd46/yo-e2e.git
cd yo-e2e
npm link
```

`npm link` is very similar to `npm install -g` except that instead of downloading the package
from the repo, the just cloned `yo-e2e/` folder becomes the global package.
Any changes to the files in the `yo-e2e/` folder will immediately affect the global `yo-e2e` package,
allowing you to quickly test any changes you make to the cli project.

Open a different tab or window, Now you can use `yo-e2e` via the command line:

```bash
yo e2e
cd test
```

Please read the official [npm-link documentation](https://www.npmjs.org/doc/cli/npm-link.html)
and the [npm-link cheatsheet](http://browsenpm.org/help#linkinganynpmpackagelocally) for more information.


## License

MIT