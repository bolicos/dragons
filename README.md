# REACT WEBSITE **DRAGONS** <img src="https://img.icons8.com/emoji/50/000000/dragon-emoji.png"/>

[![NodeJS with Webpack](https://github.com/bolicos/dragons/workflows/pipeline/badge.svg)](https://github.com/analuciabolico/dragons/actions/workflows/webpack.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/analuciabolico/dragons)
![GitHub package.json version](https://img.shields.io/github/package-json/v/analuciabolico/dragons?style=flat-square)
![GitHub](https://img.shields.io/github/license/analuciabolico/dragons?style=flat-square)

---


## Table of contents:

* [Description](#description)
* [Project Rules](#project-rules)
* [Pre Requirements](#pre-requirements)
* [Instalation](#instalation)

---

## Description
This is the Dragons application website.

---

## Project Rules

[Labels list](https://github.com/analuciabolico/dragons/labels) that used in the PR's names and also in the commit message.

For open a new PR and create a new branch you need create a task on Board(Kanban) and convert to issue, after that follow this steps to give the corect name for your branch.

*Example create BRANCH:*
```bash
git checkout -b CONFIG/#1
```

Where "CONFIG" is the *__label__* and "#1" is the *__issue__*.

*Example create COMMIT:*
```bash
git commit -m "CONFIG -- add package.json and tsconfig.json"
```

Where "CONFIG" is the *__label__* and "--" is the *__separation__* and the remaining is the message itself.

---

## Pre Requirements

In this projejct was used NodeJs LTS(v14.17.04/fermium)

[git](https://git-scm.com)\
[nodeJs Oficial](https://nodejs.org/en/)\
[nodeJs and NPM via NVM](https://github.com/nvm-sh/nvm) - I recommend install vis NPM\
[vscode](https://code.visualstudio.com)

---

## Instalation

I will mention bellow the steps necessary to run the project locally.

First step:
```bash
git clone https://github.com/analuciabolico/dragons.git
```
Second step:
```bash
cd dragons
```

### These next steps can to be executed by two aways:

- With npm only

Third step:
```bash
npm i
```
Fourth step:
```bash
npm start
```

- With yarn

Third step:
```bash
npm install -g yarn
```
Fourth step:
```bash
yarn install
```
Fifth step:
```bash
yarn start
```

### Okay, from that you can access the [link](http://localhost:3000) in your browser and test the application.
