const fs = require('fs');
const postcss = require('postcss');
const csso = require('postcss-csso');
const remove = require('postcss-remove-rules');

const source = 'dist/index.css';
const cssFile = fs.readFileSync(source, 'utf8');
const sizes = Object.keys(require('./src/config/breakpoints.json'));

const removeBlockGrids = (rules, size) => Object.assign({}, rules, {
  [`.${size}-up-1`]: '*',
  [`.${size}-up-1 > .column`]: '*',
  [`.${size}-up-1 > .column:nth-of-type(1n)`]: '*',
  [`.${size}-up-1 > .column:nth-of-type(1n+1)`]: '*',
  [`.${size}-up-1 > .column:last-child`]: '*'
});

const withoutBlockGrid = postcss()
  .use(remove({
    rulesToRemove: sizes.reduce(removeBlockGrids, {
      '.column-block': '*',
      '.column-block > :last-child': '*'
    })
  }))
  .use(csso)
  .process(cssFile);

fs.writeFileSync(source, withoutBlockGrid.css);
