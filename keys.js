
// var options = {
//     userIds: [{ name:'alex', email:'alex@example.com' }], // multiple user IDs
//     // userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
//     numBits: 4096,                                            // RSA key size
//     passphrase: 'super long and hard to guess secret'         // protects the private key
// };

// openpgp.generateKey(options).then(function(key) {
//     var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
//     var pubkey = key.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
//     console.log(privkey);
//     console.log(pubkey);
// });

var keys =
{
    alice :
    {
        privkey : `-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: OpenPGP.js v2.5.8
Comment: https://openpgpjs.org

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
BVdLcQ6STtedcQ==
=Zt2e
-----END PGP PRIVATE KEY BLOCK-----`,
        pubkey : `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v2.5.8
Comment: https://openpgpjs.org

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
=lDxo
-----END PGP PUBLIC KEY BLOCK-----`
    },
    'alex' :
    {
        privkey : `-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: OpenPGP.js v2.5.8
Comment: https://openpgpjs.org

xcaGBFmjaToBEACSI2NOEKPMmWAu8UGxfLdC/E0ZGbxEx/OTYTRaCnpNVVkP
WqBiOlLlREloc0KJDDem29zDbrpNM0mBj8b89N4+Vstg8wFhmIqlDXXy/szW
HHZ2ki6bs9zmorHspdbKIJNaaVLCZuS1Nllc2V0FN56tpqnxE96O5yJxGoVq
VKUkz7S7R1IsRHnwEgvLqpQ9i6XG3f2yeZvj7NYd7X+869tBN2HoVFqaCQbd
xAFtZQePEO7wTzR+il8eFwT4X6vvMnIOJWTElWsYQaCg2oZkn7rGIJWXQrae
RHeyl0P5DKrWt9ZNDYBy3Y7xFE3mRodirIyo+Nhdbo7ilsC4Y+QH2L8sFO/E
7G1oxevefAumQliQWY76W+Lhz6olSP/dSGhkytqTovJqk4/VRxmESPB7TIGZ
zljwWr/wcqPnVeOIqUU4aj7jd4vNZJ/UIB6YXatAHNmevLZIzt9fuZEHEF2N
uD6czLKJOu1SIb+80QRO14c+vTXD6ina5S7EsWAmFYeNUudw5dvnBwlkILF5
WHmk/x55utbq3cDXK/rBg6b2txM8wKh0T6+15VkxVZ0YQMZuwbcY8vCBaKS6
oAFUOXHUoUylxvoJnmq+BIVFUECQBAs8QDwOpb+bzg/C3unVTpJaGOv9rRJF
qORhw7LOn4fu06hCViH2t1/Hdzs0aEipImYsOwARAQAB/gkDCIa/dg03kL7O
YFMcdeO0ukngn1ZY402PYYnOfH/3RQzHKHZVZSy9MuUhIPzjexuNaSR7Oc09
0nEC1oR6mLpdlxMjLPDvdRoKs+6YLN9CKYR1FkLyE3FXxGsy6pxGAQifjFbI
QL9EjInd9FgDSSqSaCz2PHlLXM2wQbAh4Fb3lG+rGFqGMK4h43Yo6llwvHGh
sQQxxnRCYW8zaOkOpgsEdlC/YuKLdiZgpJySN5JHS5D6OGVZR2Q3Ce8fPgQ0
M9thb4ntIRwjpxIzOaVcIsWjw/2YqCbRDwl/TcGGLWw10J/8G2vTi19Lh3+c
Z5SzZeXVfClxeZRb9Vro38Ww5IhHsSExQySuSg9QBsbvDYM1PH05Lch9nK9N
6I8+3UFUGZtvYHLOPrfmHDgKhFa4QIgIR2DtYVy8ZYyYaaWRAvNlhs1OH3W/
FSl2LDXZG7+POR78ijaZp5CXg50MwVm3lWXrCRDQkVdFxPoMnrTEIP+mHKVu
+T+wqs/M3XhhqDNaTZ0kaROEyg3HuvCxYumOn8e9P57yy+iKCgBMdy3U+sr0
yfkj5npuQw4gm3XcqdCT8rD84f+5CIR2C9jzTeUaRkqrOHtwVtealdyjatI8
svriV/0JlYCD/emi40tfH2Xe4BuqVPX0sn8XOz8jxKMDAHSkrVSIdQ7iIzWY
IWOeQkOmIqgVf5uwOK4LwCjHfjwvwY7cYwL+uvE3gNdTDM6hSq29y13Dber7
xYduGKKKpm0hP12GPamYlQm5G8jKULXyGhDqslJOiV2fQ6DxntzsiorciUYs
PFoujU/eAWwpX+a5VbvCIVPHads5UUFD5lu57JcVu5P4CfIiXznvDwXLdnFd
5SzEBOaMygIWN+3LXjTVla+GFcjzdKSdlcpv1hfmV6mGQmBBxDQuWt2wvkbU
Gl/R71llEPfT7E+ngFGJF2rbwy4C+0H7yTCKhDHCvYpBgdvszPjVZRS8hK6l
1gJsFn/Li7j1YlGxfsx7rSMGBrHpOZzPGW3OSbyfyKydC0dH2K17F5th49MQ
KTSDZTKHUZ7hrfblmsyJvj2BUcKdfQfVK0kT45mWrbok/98uAni7wZuHC/oK
L88zMTcScwenuI3PKa3da50dabrWfWuq8mNKT/GsvmCeSL8MpT3qLW2+DEH0
eK0ZIzR4hlcrjGQekru1n0FMNlE80FuU7RbwSMbz2Fp/2mUOl0SFLf6nIixM
5wuKYXrg/JWCI50APhcm2VbrOZDDWrvvFaO0+Xfo36twUtZS+1HqukIkbu6T
LB9TzEgdcYTact8dQ9EEeOjeXuwEsnWCrYzocQe5f6k3XTzXlZEMOUsk+mxj
Vv2AxXlaLfhiCs8edtBU1oKW36gFJVsq7MJuUJlJN1Pah9FDy+TDoB27ZZul
ZmNw6NcTWnMd1tQcululNHlI5MVy3dAzE6gs1wqbjb/wb0fR8wNKlWixVV3R
yI/kuH+D/b0M8TrJCJEogk4G2ytlUl6XUxmCQim33BnYQIOSpUrh3mOmo4oB
FZnl4u394ZKqU5HdO9mCXODV1EPCmTIJbi2LtlR5mCGVqjpJJmDGh/I1kyno
jFr65GXnOCFrJQ6c48C5mcDtBIcrqWyEbQot0uB68vgdpzHm+/2EyA8c1Hra
UmGeGDIc3abTf8LlQgVIwL8CKLZx1rD6kJeNy+sPv/W+4gqURkpWrEwg4nBb
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
gVG67oiPaX3NYPE=
=Aj6X
-----END PGP PRIVATE KEY BLOCK-----`,
        pubkey : `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v2.5.8
Comment: https://openpgpjs.org

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
=crQZ
-----END PGP PUBLIC KEY BLOCK-----`
    }
};
