<p align="center">
<img src="logo-begeta.png">
</p>


<p align="center">
<a href="https://npmjs.com/package/begeta"><img src="https://img.shields.io/npm/v/begeta.svg?style=flat" alt="NPM version"></a>
<a href="https://npmjs.com/package/begeta"><img src="https://img.shields.io/npm/dm/begeta.svg?style=flat" alt="NPM downloads"></a>
<a href="https://travis-ci.org/Sellsuki/begeta"><img src="https://travis-ci.org/Sellsuki/begeta.svg?branch=master" alt="CircleCI"></a>
</p>
# Begeta

## How to use
```sh
npm install --save begeta
```
```js
import 'begeta/css/begeta.min.css'
```
#### OR
```html
<link rel="stylesheet" type="text/css" href="//unpkg.com/begeta/css/begeta.min.css">
```

## Guide
- [Github Repository](https://github.com/Sellsuki/begeta)
- [SCSS guide](http://sass-lang.com/guide)
- [Standard guide](http://design.sellsuki.com/atomic/flexdirection/)
- [Mobile first guide](https://zellwk.com/blog/how-to-write-mobile-first-css/)

## Syncing a fork to sellsuki/begeta
### Command line step
 ```sh
# Add remote upstream from main repository
git remote add upstream https://github.com/Sellsuki/begeta.git
git fetch upstream

# Check out your fork's local `master` branch. and merge
git checkout master
git merge upstream/master
```
 
## How to contribute
1. Fork this repository (https://help.github.com/articles/fork-a-repo/)
2. npm install || yarn
3. npm run build || yarn build
4. pull request
