# ZSwap SDK Monorepo

## Prerequisites

- Yarn v3 (If unfamilair consult https://yarnpkg.com/getting-started/install to get started and familiarise yourself)
- Node v14 and above

## Versioning 

```
yarn lerna version patch --no-changelog --no-git-tag-version --no-private   --yes  

yarn lerna version patch  --no-git-tag-version --no-private --yes  

yarn lerna version [patch] --no-changelog --no-git-tag-version --yes
```

### (Canary)
```
yarn lerna version --no-changelog --no-git-tag-version [--preid canary] --yes
```



## Publishing (Canary)

 yarn workspace @zarclays/zswap-core-sdk npm publish

## Core SDK
 yarn workspace @zarclays/zswap-core-sdk npm publish

### Testing

```sh 
yarn workspace @zarclays/zswap-core-sdk test
```

### Build

```sh 
yarn workspace @zarclays/zswap-core-sdk build
```

## Limit Order SDK

### Testing

```sh 
yarn workspace @zarclays/zswap-limit-order-sdk test
```

### Build

```sh 
yarn workspace @zarclays/zswap-limit-order-sdk build
```

## Trident SDK

### Testing

```sh 
yarn workspace @zarclays/zswap-trident-sdk test
```

### Build

```sh 
yarn workspace @zarclays/zswap-trident-sdk build
```

## Tines SDK

### Testing

```sh 
yarn workspace @zarclays/zswap-tines test
```

### Build

```sh 
yarn workspace @zarclays/zswap-tines build
```



### Add Package

```
yarn workspace child-workspace-name add package-name

```

eg

```
 yarn workspace @zarclays/zswap-core-sdk add @wagmi/core viem
```



## Pack ALl Locally
`yarn run pack-all`


## Typical Workflow based on Yarn Changeset
### Step 1: Make changes to your code
### Step 2: Create a changeset
yarn changeset

### Step 3: Commit the changes and the .changeset/*.md file
git commit -am "Add new feature + changeset"

### Step 4: (Release day / CI)
yarn version-packages
git commit -am "Version packages"

### Step 5: Publish
yarn release
