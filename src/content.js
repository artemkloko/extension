

var interval = setInterval( function ()
{

}, 1000 );

var thisPerson = keys.alex;

var textInputC;
var textInput;

var passphrase = 'super long and hard to guess secret';

var inputFormSrcUrl = chrome.runtime.getURL('templates/input-form.html');
var messageSrcUrl = chrome.runtime.getURL('templates/message.html');

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {

    // console.log(mutation);

    if (!mutation.addedNodes) return;

    for (var i = 0; i < mutation.addedNodes.length; i++) {
        // do things to your newly added nodes here
        var node = mutation.addedNodes[i];


        if ( typeof textInputC === 'undefined' )
        {
            var sibling = document.querySelector( 'div[class~="_kmc"]' );
            if ( sibling !== null )
            {
                textInputC = true;
                console.log('created input-form.html iframe');
                var parent = sibling.parentNode;
                textInput = document.createElement( 'iframe' );
                textInput.src = inputFormSrcUrl;
                textInput.setAttribute( 'width', '300px' );
                textInput.setAttribute( 'height', '50px' );
                parent.insertBefore( textInput, sibling );
            }
        }

        if ( /class=("|')_aok("|')/.test( node.innerHTML ) )
        {
            // console.log(node.innerHTML);
            var regexp = />(-----BEGIN PGP MESSAGE-----[^-]*-----END PGP MESSAGE-----)</g;
            var iframe = '<iframe src="' + messageSrcUrl + '?message=$1" width="300px" height="50px"></iframe>';
            node.innerHTML = node.innerHTML.replace( regexp, '>' + iframe + '<' );
        }
    }
  });
});


observer.observe( document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
} );

var encrypt = function ( decrypted, callback )
{
    console.log( 'trying to encrypt', decrypted);

    var privKeyObj = openpgp.key.readArmored(thisPerson.privkey).keys[0];
    privKeyObj.decrypt(passphrase);

    options = {
        data: decrypted,                             // input as String (or Uint8Array)
        publicKeys: openpgp.key.readArmored(keys.alice.pubkey).keys,  // for encryption
        privateKeys: privKeyObj // for signing (optional)
    };

    openpgp.encrypt(options).then(function(ciphertext) {
        encrypted = ciphertext.data; 
        // console.log( encrypted );
        callback( encrypted );
    });
};

var decrypt = function ( encrypted, callback )
{

                     console.log( 'trying to decrypt', encrypted );

                    var privKeyObj = openpgp.key.readArmored(thisPerson.privkey).keys[0];
                    privKeyObj.decrypt(passphrase);

                    var pubkeys = keys.map( function ( person )
                    {
                        return person.privkey;
                    } );

                    try
                    {
                        options = {
                            message: openpgp.message.readArmored(encrypted),     // parse armored message
                            publicKeys: openpgp.key.readArmored(pubkeys).keys,    // for verification (optional)
                            privateKey: privKeyObj // for decryption
                        };

                        openpgp.decrypt(options).then(function(plaintext) {
                            var decrypted = plaintext.data; // 'Hello, World!'
                            console.log( 'decrypted', decrypted );
                            callback( decrypted );
                        });
                    }
                    catch ( e )
                    {
                        console.log( e );
                    }
};

// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) 
{
    if ( typeof msg.encrypt === 'string' )
    {
        encrypt( msg.encrypt, function ( encrypted ) 
        {
            post( encrypted );
        } );
    } 
    else if ( typeof msg.decrypt === 'string' )
    {
        decrypt( msg.decrypt, function ( decrypted ) 
        {
            sendResponse(decrypted);
        } );
    }  
});


var post = function ( text )
{c
    var offsetKey = el.getAttribute( 'data-offset-key' );

    for ( var prop in window.localStorage )
    {
        if ( /^_cs_user:\d+$/.test( prop ) )
        {
            var blocks = [];
            try 
            {
                var value = JSON.parse( window.localStorage[ prop ] );
                blocks = value.__v.encodedBlocks.blocks;
            }
            catch ( e )
            {
                
            }
            for ( var block of blocks )
            {
                if ( offsetKey.indexOf( block.key ) === 0 )
                {
                    console.log( 'found', block.key, block.text );
                    block.text = text;
                    window.localStorage[ prop ] = JSON.stringify( value );
                }
            }
        } 
    }

    // var allElements = document.querySelectorAll( 'a' );
    // for (var i = 0; i < allElements.length; i++) {
    //     if ( allElements[i].innerHTML === 'Send' ) {
    //         allElements[i].click();
    //     }
    // }
};