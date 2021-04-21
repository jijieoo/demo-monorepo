# DEMO MONOREPO

## init

### git init

```shell
git init
```

### yarn init

```shell
yarn init
```

change package.json

```json
{
    // others..
    "private": true,
    "workspaces": [
        "packages/*"
    ],
    // others...
}
```

### lerna init

```shell
# install
yarn add lerna -D

# init
yarn lerna init
```

lerna.json

```json
{
    "packages": [
        "packages/*"
    ],
    "version": "independent",
    "npmClient": "yarn",
    "useWorkspaces": true
}
```

### husky init

```shell
# husky v6
npx husky-init && yarn
```

### commitlint init

```shell
yarn add @commitlint/cli @commitlint/config-conventional -D -W
```

commitlint.config.js

```js
module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ]
};

```

add husky commit-msg

```shell
yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
```

### test

do a test

## packages
