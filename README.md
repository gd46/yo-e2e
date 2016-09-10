## E2E-Cli

[![Join the chat at https://gitter.im/doctrine/dbal](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/yo-e2e/Lobby?source=orgpage)

Prototype of a yo generator for scaffolding an automation framework based on protractor and cucumber

## Note

This project is a work in progress.

## Goal of this project

To generate a powerful automation framework that is reusable, and will make it easier to create and execute consistent end-to-end tests

## Prerequisites

The generated project has dependencies that require **Node 4.x.x and NPM 3.x.x**.

## Contributing

[Contributing](CONTRIBUTING.md)

## Table of Content

* [Installation](#installation)
* [Usage](#usage)
* [Generating an automation framework](#generating-an-automation-framework)
* [What gets done for you](#what-gets-done-for-you)
* [Available generators](#available-generators)
* [What do I get when I generate a page object](#what-do-i-get-when-i-generate-a-page-object)
* [Linting and formatting code](#linting-and-formatting-code)
* [Development hints for making changes to yo e2e](#development-hints-for-making-changes-to-yo-e2e)


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

Directory tree

```
	- test
		- includes
			- expected_conditions.js
			- external_globals.js
			- internal_globals.js
			- page_objects.js
		- page_objects
		- support
		 - env.js
		 - hooks.js
	cucumber.conf.js	
```

A test directory and all of the necessary files to start automation are included. A user will be able to generate a test directory and immediately start creating end-to-end tests. A structure and format are defined on how to begin.

### Available generators

More Coming Soon...

You can find all possible blueprints in the table below:

Scaffold 		| Usage
--- 		 		| ----
Page Object | yo e2e page-object

### What do I get when I generate a page object?

You get a default page object shell with the name of the page object you asked for following camelcase format, in the directory you asked for. 

See below example: 

```
'use strict';

function directDeposit() {

	/*
		You should use css selectors as your only selector method
	*/
}

module.exports.directDeposit = directDeposit;
```

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