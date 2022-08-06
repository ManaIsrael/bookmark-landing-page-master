// var theStyle = {
//     backgroundColor: 'skyblue',
//     color: 'green'
// }
// $('input').css(theStyle)
// $('h1').css('color','yellow')

// var inp = document.getElementById('email')
// var btn = document.getElementById('button')
// var res = inp.value
// var inp = $('email')
// btn.onclick = function() {
//     var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
//     if(res.match(mailformat))
//     {
//         alert("You have entered a valid email address!");
//         return true;
//     }
//     else
//     {
//         alert(res);
//         return false;
//     }

// }


/** the user shall get an error message when entering incorrect email format */
function emailvalid(userinput) {
    var mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (userinput.value.match(mailformat)) {
        $('#errormessage').css('visibility', 'hidden')
        $('#errorsvg').css('visibility', 'hidden')
        $('#email').css('outline', '3px solid green')
        return true
    }
    else {
        // alert(userinput.value)
        $('#email').focus()
        $('#errormessage').css('visibility', 'visible')
        $('#errorsvg').css('visibility', 'visible')
        return false
    }
}
$('#button').click(function(){
    //for media queries
    var errsvgReset = {
        marginLeft: '155px',
        marginTop: '5px'
    }
    $('#errorsvg').css(errsvgReset)
    if(window.innerWidth < 686){
        var errsvg = {
            marginTop: '-27px',
            marginLeft: '35%'
        }
        $('#errorsvg').css(errsvg)
    }
})



/** show the interaction of the features section  */
$('#simple-bookmarking').click(function(){
    $('.two h5').css('background', 'linear-gradient(to right, var(--primary-color-softred) 35%, white 35%)')
    $('.three img').attr('src', './images/illustration-features-tab-1.svg')
    $('.three h2').text('Bookmark in one click')
    $('.three p').text('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
})
$('#speedy-searching').click(function(){
    $('.two h5').css('background', 'linear-gradient(to right, white 35%, var(--primary-color-softred) 35%, var(--primary-color-softred) 75%, white 75%)')
    $('.three img').attr('src', './images/illustration-features-tab-2.svg')
    $('.three h2').text('Intelligent search')
    $('.three p').text('Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.')
})
$('#easy-sharing').click(function(){
    $('.two h5').css('background', 'linear-gradient(to right, white 75%, var(--primary-color-softred) 75%)')
    $('.three img').attr('src', './images/illustration-features-tab-3.svg')
    $('.three h2').text('Share your bookmarks')
    $('.three p').text('Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.')
})



var icons = {
    position: 'fixed',
    zIndex: '1000',
    bottom: '0',
    left: '0',
    width: '100%',
    justifyContent: 'center'
}
var iconsReset = {
    position: 'unset',
    zIndex: 'unset',
    justifyContent: 'space-around',
    width: 'unset'
}


/** adding a class style for active nav */
const navToggle = $('.nav-toggle')
navToggle.click(function(){
    document.body.classList.toggle('nav-open')//.nav-text in the css opens when .nav-open is added and closes when it is removed
    $('.ham').attr('src', './images/icon-close.svg')
    $('#email').css('zIndex', '-1')//the email input need not be shown on the foreground

    $('.rights').css(icons)//making the twitter and facebook icons appear when .nav-text is opened.
    $('i').css('marginRight', '1em')

    if(document.body.classList.contains('nav-open') == false){
        $('.ham').attr('src', './images/icon-hamburger.svg')//back to hamburger icon when .nav-open is removed
        $('#email').css('zIndex', '1')
        $('.rights').css(iconsReset) // resetting to its intitial state
        $('i').css('marginRight', '.2em') // resetting...
    }
    /** navToggle.click(function(){
       $('.ham').attr('src', './images/icon-hamburger.svg')
     })*/
})