# md-date-range-picker

A simple Angular Date range picker with material theme

## ussage/code example 

[![NPM](https://nodei.co/npm/md-date-range-picker.png)](https://npmjs.org/package/md-date-range-picker)

- install using npm packages
- `npm install md-date-range-picker`
- install using bower
- `bower install md-date-range-picker`

## Live Demo and Examples

- https://ipiz.herokuapp.com/md-date-range-picker-demo/index.html

example:
html directive
```html
<body ng-app="demo.app" ng-cloak>
  <div ng-controller="ctrl">
    <md-date-range ng-model="pickerModel"></md-date-range>
  </div>
</body>
```
js adding dependencies
```javascript
angular.module('demo.app', ['ngMaterial', 'ngMaterialDateRangePicker'])
```

## dev tools

- Clone Repo
- `npm install`
- `npm start` for dev serve
- `npm run build` for build
- `npm run dist` for dist serve

## TODO:
- Optimize code
- Create unit tests
- Standardize build script
