const prompt = require('prompt-sync')();
    let year = Number(prompt('Enter Annee : '));
        if ((year % 4 === 0 && year % 100 !== 0  )|| year % 400 === 0) {
            console.log('bissextile');

        }
        else {
            console.log('non bessixtile');
        }

