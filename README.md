### Grid components

* index.es.js bundle includes `Row`, `Column` and `breakpoints` definitions
* index.css includes css classes required by Row and Column components
* breakpoint.json file has screen breakpoints sizes
* Row and Column components are based on [react-foundation](https://github.com/digiaonline/react-foundation) project


#### Row props:

* **collapsed** : remove colummn gutter
* **expanded** : use 100% width
* **upOn[Breakpoint]** : equally-sized column
* **collapseOn[Breakpoint]** : remove gutter
* **uncollapseOn[Breakpoint]** : override collapseOn rules inherited from smaller sizes

```
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

```
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
    centerOnSmall
    uncenterOnLarge
  >
    Content
  </Column>
</Row>
```

#### Breakpoints:
* **small** : 0
* **medium** : 200px
* **large** : 1024px
* **xlarge** : 1170px
