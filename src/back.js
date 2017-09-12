console.log( "back.js started from", window.location.href );


// A function to use as callback
function doStuffWithDom( domContent )
{
    console.log( 'I received the following DOM content:\n' );
}

var sendMessage = function ( value, callback )
{
    chrome.tabs.getCurrent( function ( tab )
    {
        chrome.tabs.sendMessage( tab.id, value, callback );
    } );
};

var loaded = function ()
{
    // console.log(window.location);

    // set click
    var myEl = document.getElementById( 'send' );
    if ( myEl !== null )
    {
        myEl.addEventListener( 'click', function ()
        {
            sendMessage(
            {
                encrypt: document.getElementById( 'text' ).value
            } );
        }, false );
    }

    // try to decrypt message
    var search = window.location.search;
    var searchParts = search.replace( /^\?/, '' ).split( '&' );
    var params = searchParts.reduce( function ( acc, searchPart )
    {
        var split = searchPart.split( '=' );
        acc[ split[ 0 ] ] = split[ 1 ];
        return acc;
    },
    {} );

    if ( typeof params.message === 'string' )
    {
        sendMessage(
        {
            decrypt: params.message
        }, function ( decrypted )
        {
            document.getElementsByTagName( 'body' )[ 0 ].innerHTML = decrypted;
        } );
    }
};

document.addEventListener( 'DOMContentLoaded', loaded, false );