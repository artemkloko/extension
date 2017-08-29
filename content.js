

var interval = setInterval( function ()
{

}, 1000 );

var thisPerson = keys.alex;

var textInputC;
var textInput;

var passphrase = 'super long and hard to guess secret';

var url = chrome.runtime.getURL('back.html');

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation);
    if (!mutation.addedNodes) return

    for (var i = 0; i < mutation.addedNodes.length; i++) {
        // do things to your newly added nodes here
        var node = mutation.addedNodes[i];


        if ( typeof textInputC === 'undefined' )
        {
            var sibling = document.querySelector( 'div[class~="_kmc"]' );
            if ( sibling !== null )
            {
                textInputC = true;
                console.log('created back.html iframe');
                var parent = sibling.parentNode;
                textInput = document.createElement( 'iframe' );
                textInput.src = url;
                textInput.setAttribute( 'width', '300px' );
                textInput.setAttribute( 'height', '50px' );
                parent.insertBefore( textInput, sibling );
            }
        }

        if ( /class=("|')_aok("|')/.test( node.innerHTML ) )
        {
            // console.log(node.innerHTML);
            var regexp = /-----BEGIN PGP MESSAGE-----[^-]*-----END PGP MESSAGE-----/g;
            var matches = node.innerHTML.match( regexp );
            if ( matches !== null )
            {
                matches.forEach( function ( match )
                {
                    var encrypted = match;
                    // encrypted = match.replace( /\s+Id: \d+\n\n/, '\n\n' );

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
                            node.innerHTML = node.innerHTML.replace( match, decrypted );
                        });
                    }
                    catch ( e )
                    {
                        console.log( e );
                    }
                } );
            }
        }
    }
  })
})



observer.observe( document.body, {
    childList: true
  , subtree: true
  , attributes: false
  , characterData: false
} );

// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

    console.log( 'trying to encrypt', msg);

    var privKeyObj = openpgp.key.readArmored(thisPerson.privkey).keys[0];
    privKeyObj.decrypt(passphrase);

    options = {
        data: msg.text,                             // input as String (or Uint8Array)
        publicKeys: openpgp.key.readArmored(keys.alice.pubkey).keys,  // for encryption
        privateKeys: privKeyObj // for signing (optional)
    };

    openpgp.encrypt(options).then(function(ciphertext) {
        encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
        // console.log( encrypted );
        console.log(  );
        // var el = document.querySelector('div[contenteditable="true"] span[data-text="true"]');
        var el = document.querySelector('div[contenteditable="true"]');
        el.addEventListener('input', function (e)
            {
                console.log(e);
            });
        // el.innerHTML = encrypted;


// var keyboardEvent = document.createEvent("KeyboardEvent");
// var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


// keyboardEvent[initMethod](
//                    "keydown", // event type : keydown, keyup, keypress
//                     true, // bubbles
//                     true, // cancelable
//                     window, // viewArg: should be window
//                     false, // ctrlKeyArg
//                     false, // altKeyArg
//                     false, // shiftKeyArg
//                     false, // metaKeyArg
//                      // keyCodeArg : unsigned long the virtual key code, else 0
//                     0, "e".charCodeAt(0) // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
// );
// document.dispatchEvent(keyboardEvent);

        // var allElements = document.querySelectorAll( 'a' );
        // for (var i = 0; i < allElements.length; i++) {
        //     if ( allElements[i].innerHTML === 'Send' ) {
        //         allElements[i].click();
        //     }
        // }
    });

    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});







// -----BEGIN PGP MESSAGE-----
// Version: OpenPGP.js v2.5.8
// Id: 1

// wcFMAxGzxRT8efRHAQ/9Gev3cNtEXfATdj42I6vW3JX0jbzUG7MCR/nuXSS9
// s0btKJ8pMMrWETl8mU/NWV12xbF0TYKSNZkyb53bwX8of7GdFSn3D3g8Ni28
// jWI2iwPDhp947L0CazOV43m7dL85Am8e/xBX1+dZOU/SYAC02v5oPq7svWHM
// tlyxDVUGSyY+8Y5tH2wW36l7rEWulRxacThPo5/LW9ViBSfkiJtlhJmVG4pR
// VsnQMkEcV6dQRGwj49YyF6X2xqP8mksCap5B4iWQvTTn6AGQmHg6A9ylckFv
// nGajgjajJzr7O8OZxonU+wXTu72NqrRB9qcXUiQVPUbjBRJrCDUMZt/4i2gd
// izEfwv2/Y7838hMk0DMLsgQwmtX0qMAeaDJUsg85qf3XrjoTj5qx0VSxxDnp
// QvAGLxa+nfVdR0Ux5IlqcTf1XugEQTWrkuu8WcbwAVa+l4IdwZTKV5AnemKe
// Y40vFY9g2ZOighsd+M1/WmVaLsyPCQt2E7LMdUVeUsvi0rEF+kmRuaFL5qR7
// Jo4Jg0LdLYZL6k0dwJCDJB5G+aYG0tKobm5pWil4p1JSoIuslz5RVwpJ7IJL
// 4mu7NRL3+J2VpkbaAszUkeLXjf8qZ+1ZAkYr+YkAbwTsypJTYOJnniPeSBWP
// +jbPy/2s1SJJLvQnWCvz59bsMoR81cZ5l4mwLFw6mRfSwbMByjACWWY1NmOE
// jkMr2id7uhdIQqDY4AiDo+7gNFmQEy8RfYdAbuLcyU4VbmjFV/gALxkUjnkq
// 5Xbg00VkjAtrOVk86JLBdHEFZhFCTIHTi6AoJJbUkGsZeHD/xKzRyiJdzu2y
// u3GkoouwuTFmDqtVu3BVv8C5D7TvyDxlu9YTt8gAaAmb9S81ud9mJjikIFM+
// WTGnKE9gjJT0cCil55KyYwrk2qKghRtl+CuxDFOPefaLj0DFU4DFz5tJ2VeL
// lGZNPWmAr0EvI/3QWPVaZfm+jwIScT8XI9p1MSwsP3oQ4ZHnl03dzQ5tBByU
// gv+9rpdC56+QwN2PywlqDX3mtzR5837bklHKLQbz4er9LlgVFuVc+YdIO3od
// 7nEcET2gZtBmLa156ylUy4E5dIfYS7YEhDexDc1Mw8WxHDmUeyLPs4pjafnY
// fNw83wNyj3AGMGn1Nngqen0PdHVg3NkXJW5VNwcdun781nGiZh11o1L85hiN
// 8LsjErNuVb0c84o3q5XYwPXumGGxOF+pcCZ2+6SyOtKHiumyT6o8axm4z9Hl
// 5t7ZGJSiVXS9xjNpEgQUuEPPxLk7qL3RBC0qG0xR8RgvZcr6G8ix5kl4pSFj
// c5FLP1Nld2/excdmAXbkiUcSWmGdDOH30NfarQi+u1ETwUYIpLzurKZwt+pr
// ueet1fwSpIgCxB7svvrEfTZ+c4I4DnTp9vAu+SCwEGyi47ThTwapoKKTvFGH
// WCo3U2gxMIsDNFYa4SZlfWXAgpSYKbrWrRE6OdWirtwTdfVIuCA6wvri5Mtl
// J9u876K5/+pUM42+IAdmcDlG0v7ibnyt676nmeR6Z6s=
// =03sY
// -----END PGP MESSAGE-----
