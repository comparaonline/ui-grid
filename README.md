@comparaonline/ui-grid
======================

* Row and Column components based on [react-foundation](https://github.com/digiaonline/react-foundation) project
* Breakpoints json file included has screen breakpoints sizes

## Installation

```
$ npm install --save @comparaonline/ui-grid
```

## Usage

This package relies on the existence of the stylesheet located at `dist/index.css`, please import it accordly to your project needs.

### Row

```js
import { Row } from '@comparaonline/ui-grid'
```

The known props for `Row` are:

| name   | description     | default value |
|:-------|:----------------|:----------------
| collapse  | Removes the columns gutter  | `false` |
| expanded    | Sets width to 100% | `false` |
| collapseOn[breakpoint] | Removes the gutters on the given breakpoint | `undefined` |
| uncollapseOn[breakpoint] | Overrides `collapseOn` rules inherited from smaller sizes| `undefined` |
| equalHeightColumns | Sets all the columns height to the max column height (requires flex support)| |


### Column

```js
import { Column } from '@comparaonline/ui-grid'
```

The known props for `Column` are:

| name   | description     | default value   |
|:-------|:----------------|:----------------|
| `small`, `medium`, `large`, `xlarge`, `xxlarge` | Sets the column size per breakpoint | `small=12`|
|offsetOn[breakpoint]| Moves block to right according to offset, |`undefined` |
|pushOn[breakpoint]| Right shift column | `undefined` |
|pullOn[breakpoint]| Left shift column | `undefined` |
|centerOn[breakpoint]| Centers the column on the given breakpoint |`undefined`|
|uncenterOn[Breakpoint]| Overrides `centerOn` rules inherited from smaller sizes | `undefined` |

Example:

```jsx
<Row>
  <Column
    small={2}
    large={4}
    pushOnSmall={2}
    pullOnLarge={2}
  >
    Content
  </Column>
  <Column
    small={2}
    offsetOnLarge={4}
    centeredOnSmall
    uncenteredOnLarge
  >
    Content
  </Column>
</Row>
```

#### Visibility props

| name   | description     | default value   |
|:-------|:----------------|:----------------|
| showOn[breakpoint]| Shows itself from the given breakpoint an higher| `undefined`|
| hideOn[breakpoint]| Hides itself from the given breakpoint an higher| `undefined`

### Breakpoints

The breakpoints values are exported as a literal object with the following properties:

| name   | size   |
|:-------|:-------|
| small  | 0px    |
| medium | 768px  |
| large  | 1024px |
| xlarge | 1170px |

To access to this values, simply import them:

```js
import { breakpoints } from '@comparaonline/ui-grid'
```

### Other settings

Other relevant values are exposed using the `settings` object.

```js
import { settings } from '@comparaonline/ui-grid'
```

The current output is:

```js
{
  gutters: {
    default: "20px"
  }
}
```
