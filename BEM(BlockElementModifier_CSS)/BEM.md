## Suggestions to organize your css

https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
https://getbem.com/introduction/

-- Follow your team 

-- Use comments to create headers (dividers) labels 

-- Sort properties alphabetically  or in another way ABCSS

-- Larger projects  follow a naming convention methodology (Block  Element Modifier : BEM )


<!-- html elements variables reset then classes   -->


blocks as knows as  components : contain starting styles that we want (is the important semantic element)

but then we can modified them with each class that we apply 



Element : it is what inside the block and what depends upon the block __ (things designing a specific way just for the block . then they would become depnedent on that block ) "not standalone meaning - semantically tied to the block "

__ two underscore doesn't  display(represent) the structure so you not gonna go like 
```html

<button class="header__nav__btn"></button>
```
that is not the case you only want to start out  with the major component the block name . blockName__whatEverTheActualElementIs

```html

<button class="header__btn"></button>
```







Modifiers is about incremental style changes  on block 
two dashes indicate that this is gonna be modifier 
so we don't replace what we previously had (the class) we add this  in adiiton in our code 



<!-- usually button style using throughout our site not just in some sections  -->


an element is gonna  have the two underscores 
and the block is just gonna be the class defined  
this all help on organization