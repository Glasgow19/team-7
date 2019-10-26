const fs = require('fs');

const privateKey = fs.readFileSync('./private.key', 'utf8');
const publicKey = fs.readFileSync('./public.key', 'utf8');
const issuer = 'los-pollos-hermanos';
const subject = 'gus fring';
const audience = 'hack-the-burgh';

module.exports = {
    keys: { private: privateKey, public: publicKey },
    saltRounds: 8,
    options: {
        issuer,
        subject,
        audience,
        expiresIn: '12h',
        algorithm: 'RS256',
    },
};
