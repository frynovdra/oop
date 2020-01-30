const crypto = require('crypto');
const hash = crypto.createHash('sha256');

class Hash {
    static md5(str){
        const hash = crypto.createHash('md5').update(str).digest('base64')
        console.log(hash);
    }
    static sha1(str){
        const hash = crypto.createHash('sha1').update(str).digest('base64')
        console.log(hash);
    }
}

Hash.md5('secret');
Hash.sha1('secret');