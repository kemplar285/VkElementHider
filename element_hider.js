console.log("Element hider extension working");
const debug = false;
const classes = ['div.feed_friends_recomm', 'div._ads_block_data_w']
const interval = 500;
function hideElementsByClass(classes) {
    var queryString = "";
    for (var i = 0; i < classes.length; i++) {
        if (i != classes.length - 1) {
            queryString += classes[i] + ", "
        } else {
            queryString += classes[i]
        }
    }
    var elements = document.querySelectorAll(queryString);

    Array.from(elements).forEach((element) => {
        element.style.cssText = 'display: none !important';
        if (debug) {
            console.log(element.className + " hidden")
        }
    })

}

var intervalId = window.setInterval(function () {
    hideElementsByClass(classes);
}, interval);