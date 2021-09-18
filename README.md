# d-front

## Overview

This is a template project for front-end development such as websites and landing pages.

You can use below languages:

- pug
- scss
- TypeScript

## Getting started

First, you have to install packages from npm.

```
$ npm install
```

And then, type below command and launch your local server.

```
$ npm run start
```

## Usage

### Release

You can create files for production.

```
$ npm run release
```

### Validation

You can validate TypeScript files and html files in `/app/dist/` directory.

```
$ npm run validate
```

## Testing

You can run jest for the files in `/test/` directory.

```
$ npm run test
```

## Test with coverage report

You can create the report for checking test coverage.

```
$ npm run test:coverage
```

## Notes about directory structure

### static

You can copy files from under `/app/src/static/` to `/app/dist/` directory with keeping the directory structure.

## Enviroment

|         | version  |
| ------- | -------- |
| node.js | v14.17.0 |
| npm     | v6.14.13 |
