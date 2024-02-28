aria current gonna be page on the page active currently for accessibility 

styling things through the aria current is a good thing instead of using  Active class and it's usually a good idea just because it sort of enforces accesibilty but in this work becasue of the animation  and some limitation on how we have to set things up for it to work up properly we put the class on the li itself 




 after adding the new meta tag we can see how it work be using flag in stable version of chrome  so what we should do is open up 'chrome Canary'   and then go to flags `chrome://flags`  the `search view transition`s  and we will find veiw transition api for navigations  and we wanna switch it to enable is gonna 'all things we have told gonna work on regular chrome but it's gonna loo much better in canary'   
 <!-- canary chrome is gonna be what the hole spec  will look like  -->

 this is bonus animation that's progressive enhancement  

 as soon we do that actually we get  crossfading between instead of jumping   
 basically what the browser does is it takes a screen shot of what it  was  and it takes a show of what it's gonna be  and then  it just does a cross fade  between the two of them 

 > by adding view transition name on individual elemnt we 'are adding in this  sorta new thing 

 > *E*very element that has a view transtion name has to be a unique  element that's only once on the original page and once on new page that we're gonna  to 

 