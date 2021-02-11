// decrypts an encrypted mailto string (returns e.g. "mailto:test@gmail.com")
function decryptMailTo (encryptedMailTo) {
    var n = 0,
        i = 0,
        decryptedMailTo = '';

    for (i = 0; i < encryptedMailTo.length; i++) {
        n = encryptedMailTo.charCodeAt(i);

        if (n >= 8364) {
            n = 128;
        }

        decryptedMailTo += String.fromCharCode(n - 1);
    }

    return decryptedMailTo;
}

// just call this once to shut the linter up which doesn't know that it's called directly from the person.html template
decryptMailTo('');