# BEM (BLOCK,ELEMENT,MODIFIER) CSS Architecture

## General Suggestions for Organizing CSS

<!-- Follow your team 
Use comments to create headers (dividers) labels 
 Sort properties alphabetically  or in another way ABCSS
Larger projects  follow a naming convention methodology (Block  Element Modifier : BEM ) -->


- Follow Team Conventions: Stick to the naming and structuring standards agreed upon by your team.
- Use Comments: Add comments as headers or dividers to group related styles.
- Sort Properties: Choose a consistent property order, such as alphabetical sorting or grouping by functionality (e.g., ABCSS).
- Larger Projects: Adopt a methodology like *BEM* to ensure your code remains manageable.








<!-- html elements variables reset then classes   -->

## BEM naming Convention Methodology 
**Blocks**: (also known as components) contain the starting styles that we want so is the important semantic element in our Code.

```html
<div class="header">
    <!-- The block represents a meaningful standalone element -->
</div>

```

> Blocks should be independent and reusable across the project, while allowing for modifications through the specific modifiers applied to them.



**Element__:** it is what inside the block and what depends upon the block. **They are designed in a specific way just for the block and do not make sense outside it.** .

 <!-- then they would become depnedent on that block ) "not standalone meaning - semantically tied to the block " -->

__ two underscore doesn't  display(represent) the structure so we not gonna go like 
```html

<button class="header__nav__btn"></button>

<!-- that is not the case -->

```

*Important Note:* Avoid chaining elements unnecessarily Instead, focus on the primary block and its direct elements  'blockName__whatEverTheActualElementIs'. 


```html

<button class="header__btn"></button>
```







**Modifiers--:** are used to make incremental style changes to a block or element. Two dashes (--) indicate a modifier. Importantly modifiers do not replace the original class they are added alongside the existing class in our code to apply additional styles.


<!-- usually button style using throughout our site not just in some sections  -->


an element is gonna  have the two underscores 
and the block is just gonna be the class defined  
this all help on organization




## Resources 
[CSS Wizardy](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

[Get BEM](https://getbem.com/introduction/)


