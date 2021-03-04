import crypto from 'crypto';

const firstKey = crypto.randomBytes(32).toString('hex');
const secondKey = crypto.randomBytes(32).toString('hex');

console.table({ firstKey, secondKey });
