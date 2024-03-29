# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](screenshot.png)

### Links

- Solution URL
- Live Site URL

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- jQuery JS library

### What I learned

-media queries in javascript
-pattern of a regular expresion
-svg coloring
-translateX()

```html
<span></span>
```

```css
.nav-open .nav-logo{
 filter: hue-rotate(90deg) saturate(0%) brightness(.5) invert(1);
}
```
header .nav-text {
 transform: translateX(100%);
}
```

```js
var mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
```
if(window.innerWidth < 686){
        var errsvg = {
            marginTop: '-27px',
            marginLeft: '35%'
        }
        $('#errorsvg').css(errsvg)
    }
```

### Continued development

Working with svgs

### Useful resources

- kevin powell youtube video "Build and deploy a portfolio website [Full Tutorial Course]" helped me on how to do the active navbar.
- coursetro youtube video for making the FAQs with <details> and <summary> tags.

## Author

- Frontend Mentor - [@manaisrael](https://www.frontendmentor.io/profile/manaisrael)
- Linkedin - https://www.linkedin.com/in/betelhem-yemane-manaisrael/
- Telegram - https://t.me/ManaIsrael
- Github - https://github.com/ManaIsrael

## Acknowledgments
Hail Mary.
