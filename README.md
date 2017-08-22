# ui-grid

* Row and Column components based on [react-foundation](https://github.com/digiaonline/react-foundation) project
* Breakpoints json file included has screen breakpoints sizes

## Installation
```
$ npm install --save @comparaonline/ui-grid
````

#### Row props:

* **collapsed** : remove colummn gutter
* **expanded** : use 100% width
* **upOn[Breakpoint]** : equally-sized column
* **collapseOn[Breakpoint]** : remove gutter
* **uncollapseOn[Breakpoint]** : override collapseOn rules inherited from smaller sizes
* **equalHeightColumns** : column height is equal to max column height

```jsx
<Row
  expanded
  collapsed
  upOnSmall={1}
  upOnLarge={4}
  collapseOnSmall
  uncollapseOnLarge
  >
  <Column>Content</Column>
  <Column>Content</Column>
</Row>
```

#### Column props:

* **small|medium|large|xlarge|xxlarge** : set column size
* **offsetOn[Breakpoint]** : move block to right according to offset
* **pushOn[Breakpoint]** : right shift column
* **pullOn[Breakpoint]** : left shift column
* **centerOn[Breakpoint]** : center column
* **uncenterOn[Breakpoint]** : override centerOn rules inherited from smaller sizes

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

#### Visibility props:

* **showOn[Breakpoint]** : show for breakpoint and upper breakpoints
* **hideOn[Breakpoint]** : hide for breakpoint and upper breakpoints

#### Breakpoints:
* **small** : 0
* **medium** : 768px
* **large** : 1024px
* **xlarge** : 1170px
