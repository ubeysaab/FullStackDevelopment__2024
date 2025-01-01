# Css Notes 



## CSS Variables 

In CSS we very often fall in situation like this 
```css
#title{
  color:#a3432d
}
.stamp{
  color:#a3432d
}

```

and the old way is to resue the same hexademical values like the example above but with CSS variables we can decalre it as a variable first and then use it 
```css
:root{
  --red:#a3432d;
}


#title{
  color:var(--red)
}
.stamp{
  color:var(--red)
}
```
the benefit of this approach is we can update the value of all elements that use this variable from on where 



### Advantages over LESS&SASS

1. Easier to get started (no transpiling)
2. Have acces to the DOM 
   1. Local Scopes (meaning CSS variables will only work in a certian section of our app)
   2. Change with JavaScript
   3. Ideal for responsiveness
3. Perfect for Theme


### Overridding variables 



CSS variables work in such a way that all children of the element where the variable is declared have access to that variable. Even if the child elements are defined before the variable declaration, they will inherit the variable from the parent.

> Variable overriding is not something we can do with LESS or SASS because they do not interact with the DOM, whereas CSS variables do.

> It is preferred to separate the declaration of variables from their references.

> CSS variables can be redefined at any level in the DOM tree, and the closest definition takes precedence.


### Changing CSS Variables with JavaScript
```js
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var red = rootStyles.getPropertyValue('--red');
console.log('red: ', red);


root.style.setProperty('--red', 'green')

```




### Responsiveness and Variables 

```css
/*Variable declarations*/

:root {
    --red: #ff6f69;
    --beige: #ffeead;
    --yellow: #ffcc5c;
}
.grid {
    --columns: 200px 200px;
}

.grid {
    display: grid;
    grid-template-columns: var(--columns);
    grid-auto-rows: 140px;
    grid-gap: 20px;
    justify-content: center;
}

@media all and (max-width: 450px) {
    .grid {
       --columns: 200px;   
    }
    
    :root {
        --beige: #fffead;
    }
}
```

### Inheritance 
In CSS, we can define one variable based on another, allowing for modular and reusable styles. However, when we reference one variable to create another, **the new variable captures the value of the original at the time of definition, not a live link**. Therefore, if the primary variable is later updated, the dependent variable remains unchanged.

#### Inherited Properties 
In CSS, certain properties are **inheritable by default**, meaning their values are automatically passed from a parent element to its children. These are typically properties related to text and appearance.

**List of Inherited Properties by Default**
1. **Text Properties**:
   - `color`
   - `cursor`
   - `direction` (e.g., `ltr`, `rtl`)
   - `letter-spacing`
   - `line-height`
   - `quotes` (used with `content`)
   - `visibility`
   - `white-space`
   - `word-spacing`

2. **Font Properties**:
   - `font`
   - `font-family`
   - `font-size`
   - `font-style`
   - `font-variant`
   - `font-weight`

---

### **For Non-Inheritable Properties**
You can explicitly force inheritance by using the `inherit` keyword.

**Example:**
```css
div {
    background-color: inherit; /* Forces inheritance of background-color */
}
```

---

### **Quick Summary**
- **Inheritable by Default**: Mainly text and font-related properties.
- **Force Inheritance**: Use the `inherit` keyword for properties that are not inherently inheritable.

**TODO**
- [ ] Projects with Grid layout
- [ ] backface visibility
- [ ] scroll behavior 
- [ ]  svh dvh etc 
- [x]  view transition api
