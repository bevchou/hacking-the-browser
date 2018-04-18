## Reverse Engineering a Bookmarklet

I decided to reverse engineer a simple bookmarklet that turns the whole page into a button. It's made by Jesse Ruderman and it's called [buttonify](https://www.squarefree.com/bookmarklets/testbrowsers.html).

I started by copying the link address, which looked like this.

```
javascript:x=document.body; t="button"; x.innerHTML="<"+t+">" + x.innerHTML + "</"+t+">"; void(0);
```

And then I cleaned it up using [this URL decoder](https://meyerweb.com/eric/tools/dencoder/), which yielded this. I don't think that it worked quite right, since it got rid of all the + signs.
```
javascript:x=document.body; t="button"; x.innerHTML="<" t ">"   x.innerHTML   "</" t ">"; void(0);
```

Finally, I tried to use [JSNice](http://jsnice.org/), on the original code but that didn't really do much either. The code is short enough for me to see what it happening myself.

```
x = document.body;
t = "button";
x.innerHTML = "<" + t + ">" + x.innerHTML + "</" + t + ">";
void(0);
```

A quick analysis - Jesse Ruderman is selecting the entire document body's innerHTML. This is essentially adding "<button>" before all the content, and also adding "</button>" after all the content. Finally the code returns nothing since the function is not returning a specific value. That's how he makes the whole page a button. 
