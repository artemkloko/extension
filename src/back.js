console.log("back.js started");


// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' );
}

var clicked = function ()
{
    var myEl = document.getElementById('text');

    chrome.tabs.getCurrent(function(tab){
        chrome.tabs.sendMessage(tab.id, {text: myEl.value}, doStuffWithDom);
    });
};

var loaded = function ()
{
    console.log(window.location);
    var myEl = document.getElementById('send');
    if ( myEl !== null )
    {
        myEl.addEventListener('click', clicked, false);
    }
};

document.addEventListener('DOMContentLoaded', loaded, false);
