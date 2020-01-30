const crypto = require('crypto');
const _hash = crypto.createHash('sha256');

class Hash{
    static md5(str){
        const _hash = crypto.createHash('md5').update(str).digest('hex');
        console.log(_hash);
    }
    static sha1(str){
        const _hash = crypto.createHash('sha1').update(str).digest('base64');
        console.log(_hash);
    }
}

Hash.md5('secret');