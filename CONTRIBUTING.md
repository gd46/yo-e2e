# Contributing to yo-e2e

We would love for you to contribute to yo-e2e and help make it even better
than it is today! As a contributor, here are the guidelines we would like you
to follow:

## Check out any [open issues or feature requests](https://github.com/gd46/yo-e2e/issues) and create a [PR](#creating-a-pr) for review

## Question or Problem
If you have questions about how to use yo-e2e, please [StackOverflow](http://stackoverflow.com/questions/tagged/yo-e2e). Please note that yo-e2e is still in early developer preview, and the core team's capacity to answer usage questions is limited. 

## Issues or Bugs
If you find a bug in the source code or a mistake in the documentation, you can help us by [submitting an issue](#submitting-an-issue) to our [GitHub Repository](https://github.com/gd46/yo-e2e). Even better, you can [submit a Pull Request](#creating-a-pr) with a fix.

## Feature Requests
You can request a new feature by [submitting an issue](#submitting-an-issue) to our [GitHub Repository](https://github.com/gd46/yo-e2e). If you would like to implement a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it.  Please consider what kind of change it is:

For a Major Feature, first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.
Small Features can be crafted and directly submitted as a [Pull Request](#creating-a-pr).

## Submission Guidelines

### Submitting An Issue
Before you submit an issue, search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize the effort we can spend fixing issues and adding new features, by not reporting duplicate issues. Providing the following information will increase the chances of your issue being dealt with quickly:

Overview of the Issue - if an error is being thrown a non-minified stack trace helps
Yo-e2e Version - what version of yo-e2e is affected (e.g. 0.1.2)
Motivation for or Use Case - explain what are you trying to do and why the current behavior is a bug for you
Browsers and Operating System - is this a problem with all browsers?
Reproduce the Error - provide a live example (using Plunker, JSFiddle or Runnable) or a unambiguous set of steps
Related Issues - has a similar issue been reported before?
Suggest a Fix - if you can't fix the bug yourself, perhaps you can point to what might be causing the problem (line of code or commit)

### Creating a PR 
* Search [GitHub](https://github.com/gd46/yo-e2e/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```
* Create your patch, be sure to include new or updated tests
* Create a meaningful commit message that describes the work that is covered in the given commit
* Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```   
* In GitHub, send a pull request to `yo-e2e:master`.
* Be sure to read any comments on your PRs and address them

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

All features or bug fixes must be tested by one or more specs (unit-tests).